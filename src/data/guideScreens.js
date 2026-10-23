/**
 * What the screen looks like at each "You should see" step.
 * shot is a real capture in src/assets/screenshots. panel is the same
 * labels drawn when we do not have that capture yet.
 */
const phone = (title, rows) => ({ device: 'phone', panel: { title, rows } })
const browser = (title, rows) => ({ device: 'browser', panel: { title, rows } })
const photo = (file) => ({ shot: file })

const row = (kind, text, on) => (on ? { kind, text, on: true } : { kind, text })

export const guideScreens = {
  'Open the website and choose Sign in': browser('Welcome back', [
    row('note', 'Choose how you would like to sign in.'),
    row('button', 'Continue with Google'),
    row('button', 'Continue with Facebook'),
    row('button', 'Continue with GitHub'),
  ]),
  'Land on the map': photo('pha.png'),
  'Sign in on the phone with the same provider': phone('Login', [
    row('button', 'GitHub'),
    row('button', 'Microsoft'),
    row('button', 'Google'),
  ]),
  'Open the map menu on the website': photo('pha.png'),
  'Turn on the layers you need': photo('pha.png'),
  'Drop a pin on the website': browser('Marker Details', [
    row('field', 'Title'),
    row('field', 'Description'),
    row('field', 'Elevation (m)'),
    row('button', 'Save'),
  ]),
  'Drop a pin on the phone': phone('Markers', [
    row('empty', 'No markers to display.'),
    row('button', 'Add Marker'),
  ]),
  'Bring a file in': browser('Import', [
    row('status', 'Imported 12 of 12 marker(s)'),
  ]),
  'Open Offline Maps on the phone': phone('Offline Maps', [
    row('button', 'Add new download'),
    row('empty', 'No offline maps saved on this phone.'),
  ]),
  'Check the counties in view': phone('Counties in view', [
    row('note', 'Check the counties to save. The outline on the map is the download area.'),
    row('field', 'Search counties'),
    row('check', 'County in view', true),
    row('check', 'Another county in view'),
  ]),
  'Choose Low, Medium, or High': phone('Quality', [
    row('radio', 'Low'),
    row('radio', 'Medium', true),
    row('radio', 'High'),
    row('button', 'Download county'),
    row('status', 'Downloading · 64%'),
  ]),
  'Or request the county from the website': browser('New Offline Map Request', [
    row('note', 'Downloaded tiles play back on the mobile app, not in this browser.'),
    row('field', 'Select County'),
    row('radio', 'Low'),
    row('radio', 'Medium', true),
    row('radio', 'High'),
    row('button', 'Create Request'),
  ]),
  'Start tracking on the phone': phone('Routes', [
    row('status', 'Active'),
    row('note', 'Started · Duration · miles'),
    row('button', 'Pause'),
    row('button', 'Stop'),
  ]),
  'Stop and name it': phone('Edit Route', [
    row('field', 'Route Name'),
    row('field', 'Notes (optional)'),
    row('button', 'Save'),
  ]),
  'Open it on the website': browser('Route Details', [
    row('field', 'Route Name'),
    row('button', 'Go to Route'),
    row('note', 'Route Statistics · Distance · Started · Ended'),
  ]),
  'Add the rifle': browser('Rifles', [
    row('empty', 'No rifles yet'),
    row('button', 'Add Your First Rifle'),
  ]),
  'Add a load': browser('Ammo', [
    row('field', 'Name'),
    row('field', 'Weight (grains)'),
    row('field', 'Ballistic Coefficient (BC)'),
    row('button', 'Save'),
  ]),
  'Run the chart at the desk': browser('Shoot Calculator', [
    row('button', 'Get Weather Station'),
    row('button', 'Calculate'),
    row('note', 'Drop · clicks · velocity'),
  ]),
  'Or tap the target on the phone': photo('pha-mobile-ballistics.png'),
  'Turn on Private Parcels': browser('Search private parcels', [
    row('note', 'Coverage today: Colorado, Montana, Wyoming, and Pennington County, South Dakota.'),
    row('radio', 'Owner', true),
    row('radio', 'Address'),
    row('field', 'Owner or address'),
    row('button', 'Search visible map'),
  ]),
  'Search what is on screen': browser('Search private parcels', [
    row('note', 'Owner · address · APN'),
    row('empty', 'No parcels matched.'),
  ]),
  'Open the record': browser('Private parcel', [
    row('note', 'Owner'),
    row('note', 'Acres'),
    row('note', 'Address'),
    row('status', 'Not legal advice.'),
  ]),
  'Search from home': photo('fishsd.png'),
  'Filter the map': photo('fishsd-map.png'),
  'Read Overview and Regulations': browser('Regulations', [
    row('note', 'Boating use rules'),
    row('note', 'Special limits'),
    row('status', 'Verify current regulations with SDGFP before fishing.'),
  ]),
  'Open Stocking': browser('Recent stocking', [
    row('field', 'Time window'),
    row('field', 'County'),
    row('field', 'Species'),
  ]),
  'Open Rankings or Best Fishing Today': browser('Water rankings', [
    row('note', 'Water · Overall · Trophy · Stocking'),
    row('empty', 'No scores available yet.'),
  ]),
  'Send a question': browser('Chat', [
    row('field', 'Ask a question'),
    row('status', 'Querying warehouse…'),
    row('button', 'Send'),
  ]),
  'Turn on the map layers you want': browser('SD HotBite', [
    row('field', 'Lake'),
    row('field', 'Season'),
    row('check', 'Lake outline', true),
    row('status', 'DepthShade stays off unless the lake is Angostura.'),
  ]),
  'Read Apply': photo('sdhunt.png'),
  'Set up the hunt': browser('Hunt setup', [
    row('field', 'Species'),
    row('field', "What you're looking for"),
    row('field', 'Application year'),
    row('button', 'Search units'),
  ]),
  'Filter units': photo('sdhunt-map.png'),
  'Open the tag': browser('Hunt choice', [
    row('status', 'Sign up free to see draw statistics, odds, and success rates.'),
  ]),
  Confirm: browser('Preference points', [
    row('field', 'Point values'),
    row('button', 'Confirm preference points'),
    row('chip', 'Saved'),
  ]),
  'Tap the lake': photo('fishsd-app-map.png'),
  'Open Regulations': photo('fishsd-app-regs.png'),
  'Turn layers on from Help': photo('fishsd-app-settings.png'),
  'Search species': photo('fishsd-app-species.png'),
  'Search lakes': phone('Lakes', [
    row('field', 'Search lakes'),
    row('empty', 'Type at least 2 letters to search lakes.'),
  ]),
  'Follow and record': photo('fishsd-app-map.png'),
  'Keep the line': phone('Routes', [
    row('empty', 'No saved routes.'),
    row('note', 'Save Route · Do you want to keep this route?'),
    row('button', 'Yes'),
  ]),
  'Sign in': browser('Nock Score', [
    row('note', 'Sign in to track scores and join the league.'),
    row('button', 'Sign in with GitHub'),
    row('button', 'Sign in with Google'),
    row('button', 'Sign in with Facebook'),
  ]),
  'Score the targets': browser('Enter scores', [
    row('note', 'Tap each cell to cycle: 5 → 3 → 0'),
    row('button', 'Submit scores'),
    row('chip', 'Pending admin approval'),
  ]),
  'Check in': browser('Event check-in', [
    row('field', 'Check-in code'),
    row('button', 'Check in'),
    row('status', "You're checked in"),
  ]),
  'Open the map': photo('bhmtnlion-mobile.jpg'),
  'Set filters': photo('bhmtnlion.jpg'),
  'Open the snow chart': browser('Tools', [
    row('button', 'Snow Depth Chart'),
    row('note', 'Chart image'),
  ]),
  'Export the mines': browser('Tools', [
    row('button', 'Export for onX'),
    row('status', 'mines.gpx'),
  ]),
  'Open the messenger': photo('loratext.png'),
  'Show the map': browser('Live group locations', [
    row('button', 'Share location'),
    row('button', 'Hide map'),
  ]),
  Connect: photo('diykestrel.png'),
  'If the browser cannot pair': browser('Connect device', [
    row('status', "This browser doesn't support Web Bluetooth."),
    row('button', 'Use my location'),
    row('note', 'Open-Meteo for your location, not the meter.'),
  ]),
  'Choose the hunt': photo('dakotatrophy.png'),
  'Call, text, or write': browser('Contact Us', [
    row('note', 'Ready to book your hunt? Get in touch with us today.'),
    row('field', 'Full Name'),
    row('field', 'Email Address'),
    row('field', 'Message'),
    row('button', 'Submit'),
  ]),
  'Open the camera map': browser('Trail Camera Map View', [
    row('button', 'Import OnX GPX'),
    row('button', 'Refresh Data'),
    row('chip', 'Satellite'),
    row('chip', 'Terrain'),
    row('chip', 'Street'),
  ]),
  Upload: browser('Animal Detection Gallery', [
    row('button', 'Upload Photos'),
    row('chip', 'Queued'),
    row('chip', 'Detecting'),
    row('note', 'Queued for automatic detection.'),
  ]),
}

export function screenFor (title) {
  return guideScreens[title] || null
}
