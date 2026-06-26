Add-Type -AssemblyName System.Drawing

$inPath = Join-Path $PSScriptRoot '..\src\assets\brand\logo-badge-dark.png'
$outPath = Join-Path $PSScriptRoot '..\src\assets\brand\logo-badge-dark-cut.png'

$src = [System.Drawing.Bitmap]::FromFile((Resolve-Path $inPath).Path)
$w = $src.Width
$h = $src.Height

# Copy into a true 32bpp ARGB bitmap so it actually has an alpha channel
$bmp = New-Object System.Drawing.Bitmap $w, $h, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$gg = [System.Drawing.Graphics]::FromImage($bmp)
$gg.DrawImage($src, 0, 0, $w, $h)
$gg.Dispose()
$src.Dispose()

$rect = New-Object System.Drawing.Rectangle 0, 0, $w, $h
$data = $bmp.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadWrite, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$stride = $data.Stride
$bytes = [byte[]]::new($stride * $h)
[System.Runtime.InteropServices.Marshal]::Copy([IntPtr]$data.Scan0, $bytes, 0, [int]$bytes.Length)

$thresh = 55
$visited = [bool[]]::new($w * $h)
$stack = New-Object System.Collections.Generic.Stack[int]

for ($x = 0; $x -lt $w; $x++) {
    $stack.Push($x)
    $stack.Push((($h - 1) * $w) + $x)
}
for ($y = 0; $y -lt $h; $y++) {
    $stack.Push($y * $w)
    $stack.Push(($y * $w) + ($w - 1))
}

# Seed interior sky points (left/right of the center flower, upper region)
$seedYs = @(0.12, 0.16, 0.20, 0.24, 0.28)
$seedXs = @(0.26, 0.32, 0.38, 0.62, 0.68, 0.74)
foreach ($fy in $seedYs) {
    foreach ($fx in $seedXs) {
        $sx = [int]($w * $fx)
        $sy = [int]($h * $fy)
        $stack.Push(($sy * $w) + $sx)
    }
}

$cleared = 0
while ($stack.Count -gt 0) {
    $p = $stack.Pop()
    if ($visited[$p]) { continue }
    $visited[$p] = $true

    $px = $p % $w
    $py = [int]([math]::Floor($p / $w))
    $idx = ($py * $stride) + ($px * 4)

    if (-not ($bytes[$idx] -lt $thresh -and $bytes[$idx + 1] -lt $thresh -and $bytes[$idx + 2] -lt $thresh)) { continue }

    $bytes[$idx + 3] = 0
    $cleared++

    if ($px -gt 0)      { $stack.Push($p - 1) }
    if ($px -lt $w - 1) { $stack.Push($p + 1) }
    if ($py -gt 0)      { $stack.Push($p - $w) }
    if ($py -lt $h - 1) { $stack.Push($p + $w) }
}

[System.Runtime.InteropServices.Marshal]::Copy($bytes, 0, [IntPtr]$data.Scan0, [int]$bytes.Length)
$bmp.UnlockBits($data)
$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()

Write-Output "Cleared $cleared background pixels. Saved to $outPath"
