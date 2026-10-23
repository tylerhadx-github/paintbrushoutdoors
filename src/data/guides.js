/**
 * Customer how-tos for paintbrushoutdoors.com/{product}/{feature}.
 *
 * Steps follow labels that are on the screens today. If a control does not
 * finish the job, it is listed under hold — not written as a working step.
 */
import { projects } from '@/data/projects'
import { screenshot } from '@/data/screenshots'

export const SITE_URL = 'https://paintbrushoutdoors.com'

const SLUG_BY_PROJECT = {
  fishsd: 'sd-fish',
  'fishsd-app': 'fishsd',
  sdhunt: 'sd-hunt',
  diykestrel: 'kestrel',
  dakotatrophy: 'dakota-trophy',
}

function guide (slug, title, description, where, outcome, steps, keep = []) {
  return { slug, title, description, where, outcome, steps, keep }
}

function step (title, body, see) {
  return see ? { title, body, see } : { title, body }
}

export function seeText (see) {
  if (!see) return ''
  return typeof see === 'string' ? see : see.text || ''
}

export const guideProducts = [
  {
    slug: 'pha',
    projectId: 'pha',
    name: 'Public Hunting Atlas',
    eyebrow: 'Hunting maps',
    promise: 'Plan the country on the website. Leave with the county, the markers, and the rifle on your phone.',
    lede: 'The website is the desk. The phone is what you carry when the bars disappear. Sign in with the same provider on both, then walk the steps below in order.',
    openLabel: 'Open Public Hunting Atlas',
    story: ['sign-in', 'plan-the-map', 'save-a-marker', 'offline-maps', 'record-a-route', 'set-up-a-rifle'],
    hold: [
      'Choosing a hunting unit as the download is in the phone code, and Add new download opens counties. This guide stops at the county.',
      'The website can ask for a county pack. It does not play the downloaded map in the browser.',
      'Folders, photo pins, and sharing a marker with someone else are not in the app.',
    ],
    guides: [
      guide(
        'sign-in',
        'Sign in on the website and the phone',
        'Use the same sign-in on both so markers, routes, and rifles land on one account.',
        ['Website', 'Phone'],
        'You are on the map, and the phone opens to the same account.',
        [
          step(
            'Open the website and choose Sign in',
            'On the Public Hunting Atlas home page, Sign in opens Welcome back. Get started opens Create your account and says the account is free while in beta.',
            'Choose how you would like to sign in, with Continue with Google, Continue with Facebook, or Continue with GitHub.',
          ),
          step(
            'Land on the map',
            'After the provider sends you back, the website opens the map. The direct sign-in page is headed Sign in. A fresh visit there continues with Google unless your session already expired.',
            'The map is open. If the session expired, the page says to sign in again.',
          ),
          step(
            'Sign in on the phone with the same provider',
            'The phone Login screen offers GitHub, Microsoft, and Google. It does not offer Facebook. Pick the provider you used on the website if you want the same markers and rifles.',
            'The phone map opens. A Google failure names Google Sign-In, including when Play Services is missing.',
          ),
          step(
            'Sign out when you are done on a shared device',
            'On the website, Sign out is in the bar on Ballistics and Profile. Profile also has Logout. On the phone, open the menu, then Profile, then Log Out.',
          ),
        ],
        [
          'Microsoft is a phone sign-in. It is not a button on the website.',
          'Facebook is a website sign-in. It is not a button on the phone.',
          'Linking a second provider is on the website under Account Details or Connected Accounts. The phone shows the provider you used and does not add another one.',
        ],
      ),
      guide(
        'plan-the-map',
        'Turn on the country you are hunting',
        'Set the basemap and the land layers on the website before you download anything for the field.',
        ['Website', 'Phone'],
        'The map shows the state, the public land, and the basemap you picked.',
        [
          step(
            'Open the map menu on the website',
            'From the map, open State Layers, Nationwide Layers, and Basemaps. State Layers and Nationwide Layers are switches with a Search field. A state that has hunt units expands into a choice of unit layers.',
            'The map menu lists State Layers, Nationwide Layers, Basemaps, and Offline Maps.',
          ),
          step(
            'Pick a basemap',
            'Basemaps on the website are Satellite, Outdoors, Light, and Streets. Satellite starts selected. On the phone, Layers opens Map Style with Streets, Satellite Street, Satellite, Outdoors, Dark, Light, Navigation Day, and Navigation Night.',
          ),
          step(
            'Turn on the layers you need',
            'Nationwide names include Private Parcels, snow, grazing allotments, forest roads and trails, BLM, wilderness, and others. Private Parcels warns that the layer may be out of date.',
            'The switches you turned on draw on the map.',
          ),
          step(
            'Read the ground before you go',
            'On the website, Map display has 3D Mode, Elevation exaggeration, and Contours. Map Settings has Layer Opacity and Show markers. On the phone, the side controls are North up, Compass mode, and Current location. Compass mode can Lock and open Range so you can drop a yardage marker from your GPS position.',
          ),
        ],
        [
          'The phone has no 3D terrain switch. The website has no compass mode.',
          'Range on the phone needs a GPS position. Without one, it does not drop the yardage marker.',
          'These steps describe the controls. They do not make a boundary, a regulation, or a weather layer a legal authority.',
        ],
      ),
      guide(
        'save-a-marker',
        'Save a marker and bring it back as GPX',
        'Drop a pin on the desk or in the field, then export it when you need the point in another app.',
        ['Website', 'Phone'],
        'The pin is on the map, and you can download or share it as GPX.',
        [
          step(
            'Drop a pin on the website',
            'Press Place. The bar says to click the map to drop a waypoint, and to press Place again to cancel. Click the map. Marker Details opens for the title, description, elevation in meters, color, icon, notes, and tags.',
            'The pin is saved. If you are signed out, the alert says the marker failed and to sign in.',
          ),
          step(
            'Drop a pin on the phone',
            'Open Markers and press Add Marker. With location allowed, the pin uses your GPS position. Otherwise it uses the map center. A long-press on the map also drops a pin and opens Marker Details. Title is required. Elevation is in feet.',
            'The pin appears in the list. An empty list says No markers to display.',
          ),
          step(
            'Bring a file in',
            'On the website, Import or Import GPX/KML takes a .gpx or .kml file. Tracks in the file become routes. On the phone, Markers then Import accepts the same two types.',
            'A snackbar or Import Complete says how many markers came in, and how many were skipped or failed.',
          ),
          step(
            'Send the points back out',
            'On the website, Export or Export GPX downloads pha-markers.gpx. Marker Details then Export saves that one pin. On the phone, the share icon or Select then Share / Export opens the system share sheet with GPX text.',
          ),
        ],
        [
          'Export is GPX. There is no KML export.',
          'Elevation is meters on the website and feet on the phone.',
          'There is no folder for pins.',
        ],
      ),
      guide(
        'offline-maps',
        'Download a hunting map by county',
        'Check the county before you lose service. The phone saves that area so the map is there when you are in the field.',
        ['Phone', 'Website'],
        'The county pack is listed under Downloads on the phone.',
        [
          step(
            'Open Offline Maps on the phone',
            'Open the menu and choose Offline maps. The sheet is titled Offline Maps. Press Add new download.',
            'An empty phone says No offline maps saved on this phone.',
          ),
          step(
            'Check the counties in view',
            'Move the map to where you are hunting. The list is Counties in view. Search if you need to. Check the counties you want. The screen says the outline on the map is the download area.',
            'Selected shows the counties you checked. None selected yet stays up until you check one.',
          ),
          step(
            'Choose Low, Medium, or High',
            'Quality is Low, Medium, or High. Then press Download county, or Download and the number of counties when you checked more than one.',
            'Downloading shows the pack name and a percent. When it finishes, the pack is in the Downloads list with a size in MB.',
          ),
          step(
            'Or request the county from the website',
            'On the map menu, open Offline Maps. The page says packs are for mobile, and that downloaded tiles play on the phone, not in the browser. Press New Offline Map, choose Select County, then Low, Medium, or High. Create Request saves the ask.',
            'The list shows the county and state, the resolution, and a status. Pending requests can be cancelled.',
          ),
        ],
        [
          'The outline is the area the phone saves. It is the county extent, so it can include ground outside the county line.',
          'The map is ready after the download on the phone finishes, while you still have service. Picking the county does not put the tiles on the phone by itself.',
          'Add new download opens counties. It does not open a hunting-unit download.',
          'Show and Delete are on each saved pack. Delete asks you to confirm before it removes the pack from the phone.',
        ],
      ),
      guide(
        'record-a-route',
        'Record a track, then read it at the desk',
        'Start the track on the phone. Open the finished line on the website.',
        ['Phone', 'Website'],
        'The route has a name, a distance, and a line you can open on the website map.',
        [
          step(
            'Start tracking on the phone',
            'Open Routes and press Start tracking. The active track shows Started and Duration, and the length in yards or miles. Pause, Resume, and Stop are on that card. A tip says to long-press the map to add a waypoint.',
            'The track is marked Active. If it cannot start, the phone says Failed to start tracking.',
          ),
          step(
            'Stop and name it',
            'Press Stop. Edit opens Edit Route for the route name and optional notes, then Save. A blank name is refused.',
            'The route leaves the Active state and stays in the list.',
          ),
          step(
            'Open it on the website',
            'Routes on the website come from the phone or from a GPX import. Open Content, then Routes, then the route. Route Details has the name, Go to Route, and Route Statistics when the line is finished: gain, loss, distance, pace, and the start and end.',
            'Go to Route moves the map to the line. An empty desk says No routes found.',
          ),
        ],
        [
          'The website does not start a live GPS track. Recording stays on the phone.',
          'Delete on the phone asks you to tap again before the route is removed.',
        ],
      ),
      guide(
        'set-up-a-rifle',
        'Build a rifle and a drop chart',
        'Save the rifle once. Shoot from the form on either screen. Tap a target on the phone when you are looking at the map.',
        ['Website', 'Phone'],
        'The rifle is the default, it has a load, and Calculate or Send it returns a solution.',
        [
          step(
            'Add the rifle',
            'Open Ballistics. The list is Rifles. Press Add New. The website caption says profiles sync with mobile and that map-tap firing solutions stay on the phone. Required fields include the rifle name, twist rate, scope unit, sight height, and clicks per unit.',
            'An empty list says No rifles yet. After Save, the rifle is on the list with Shoot and Ammo.',
          ),
          step(
            'Add a load',
            'Open Ammo, then Add Custom Ammo or Add New. Name, weight, ballistic coefficient, and muzzle velocity are required, plus the zero range. Save the rifle before you add a custom load on the website.',
            'The load appears on the rifle. Empty ammo says to add the first load.',
          ),
          step(
            'Run the chart at the desk',
            'Press Shoot. Fill the weather fields or use Get Weather Station or Get Handheld Weather. Choose the ammo and press Calculate. Generate Drop Chart opens the table.',
            'The solution is on the page. A missing rifle says Rifle not found.',
          ),
          step(
            'Or tap the target on the phone',
            'On the phone map, the first tap waits, and a second tap inside that wait draws a line. The field card shows distance, elevation, wind, the rifle and load, and Range card. From the Rifles list, Shoot uses Distance and Send it.',
            'The card fills in. If nothing is close, it says no markers are within 2,000 yards.',
          ),
        ],
        [
          'Map-tap solutions are on the phone. The website shoot page is the form and the drop chart.',
          'Share on a rifle copies the loads you check to another account. Show code or Share link on the website. The other person uses Import code and saves their own copy. A rifle with no loads cannot be shared.',
        ],
      ),
      guide(
        'search-parcels',
        'Look up a private parcel in view',
        'Turn the parcel layer on, search the owner or address you can see, and read the record with its limits in the same panel.',
        ['Website', 'Phone'],
        'The panel shows the owner, acres, and address for a parcel in the current map view.',
        [
          step(
            'Turn on Private Parcels',
            'On the website, open Nationwide Layers and switch on Private Parcels. On the phone, open Layers, then Nationwide, and switch on Private Parcels.',
            'Search private parcels appears. The copy names coverage as Colorado, Montana, Wyoming, and Pennington County, South Dakota.',
          ),
          step(
            'Search what is on screen',
            'Choose Owner or Address, type at least two characters, and press Search visible map.',
            'A match shows the owner, or Unknown owner, plus the address, APN, or county. No parcels matched means the view had nothing for that text.',
          ),
          step(
            'Open the record',
            'Click a result, or click the map while the layer is on and Place is off. The panel is titled Private parcel.',
            'Owner, acres, APN, address, mailing address, and county show when the record has them. The panel says overlay lines may not match the record, and that this is not legal advice.',
          ),
        ],
        [
          'Search only covers the map you are looking at, and only the counties named on the panel.',
          'The phone skips parcel identify while it is offline.',
          'The record is not a survey and not permission to enter.',
        ],
      ),
    ],
  },
  {
    slug: 'sd-fish',
    projectId: 'fishsd',
    name: 'SD Fish AI',
    eyebrow: 'South Dakota fishing research',
    promise: 'Find the water, read what is on file, and ask a question with your account.',
    lede: 'Start on the home search, open the water, then use stocking, reports, and chat. A few items in the menu are still empty. Those are called out so you do not plan a trip around them.',
    openLabel: 'Open SD Fish AI',
    story: ['find-a-water', 'read-a-water', 'stocking-and-reports', 'ask-a-question'],
    hold: [
      'Saved research always says nothing is saved. There is no save button on a water or a chat answer yet.',
      'Compare waters lets you pick lakes and then says the comparison table is not wired up yet.',
      'Home cards for Black Hills trout, Missouri River reservoirs, family fishing, and shore access do not apply those filters on the map.',
    ],
    guides: [
      guide(
        'find-a-water',
        'Find a water',
        'Search from home or filter the South Dakota map until the lake you want is selected.',
        ['Website'],
        'The water is selected and Open profile is available.',
        [
          step(
            'Search from home',
            'On Find your water, type a lake, species, region, or keyword, or tap Walleye, Trout, Recently stocked, or Trophy potential. Press Search waters.',
            'The map opens. Walleye and Trout set the species filter when the name matches. Recently stocked and Trophy potential set the map overlay.',
          ),
          step(
            'Filter the map',
            'Map is titled South Dakota waters. Switch Map, Browse, or Table. Set Species, County, Map overlay, and Water. Overlays include overall score, trophy potential, stocking activity, public access, and bite forecast.',
            'Open profile appears once a water is selected. An empty species filter says no waters are linked yet.',
          ),
          step(
            'Or browse the list',
            'Browse all waters has Search waters. Table view is the same catalog in rows.',
          ),
        ],
        [
          'Confirm current regulations with South Dakota Game, Fish and Parks before you fish. The app is a research desk, not the regulation book.',
        ],
      ),
      guide(
        'read-a-water',
        'Read a water profile',
        'Open the lake and walk the tabs that already have data.',
        ['Website'],
        'You can see the overview, the species on file, and any regulations text stored for that water.',
        [
          step(
            'Open the profile',
            'From a selected water, press Open profile. The tabs are Overview, Map, Species, Regulations, Stocking, Surveys, Trophy, and Scores.',
          ),
          step(
            'Read Overview and Regulations',
            'Overview lists recent reports and an access summary when those records exist. Reports are labeled as angler opinions from other publishers, not survey data. Regulations lists boating use rules and special limits when they are on file.',
            'Empty sections say so in plain text, such as no special limits on file. The regulations caption says to verify with SDGFP.',
          ),
          step(
            'Check species, stocking, and trophy',
            'Species, Stocking, Surveys, Trophy, and Scores each stay quiet until that feed has rows. Trophy rows with a location can View on map. The map tab can Show all catches.',
          ),
        ],
        [
          'A missing tab message means that feed has no rows yet. It does not mean the lake has no fish.',
        ],
      ),
      guide(
        'stocking-and-reports',
        'Check stocking, reports, and rankings',
        'Use the research pages when you want a list across lakes, not a single profile.',
        ['Website'],
        'You have a filtered list of stockings, reports, or ranked waters.',
        [
          step(
            'Open Stocking',
            'Recent stocking lets you set a time window, county, and species. Windows run from the last 7 days through the last year.',
            'Matching events list. No stocking events match these filters means the window is empty.',
          ),
          step(
            'Open Fishing reports',
            'Filter by time window, bite label (Hot, Warm, Slow), and source. Unmatched lakes are marked. Read full report at the source leaves the site.',
          ),
          step(
            'Open Rankings or Best Fishing Today',
            'Water rankings show overall, trophy, stocking, survey, and access when scores exist. Best Fishing Today filters by species. A water name opens its profile.',
            'No scores available yet, or no bite windows ranked for today, means that pipeline has nothing to show.',
          ),
        ],
        [
          'Bite and ranking pages only show what has already been calculated. An empty table is an empty table.',
        ],
      ),
      guide(
        'ask-a-question',
        'Ask SD Fish AI',
        'Sign in, then ask about a lake, a stocking, or a comparison you care about.',
        ['Website'],
        'The chat returns an answer from the question you sent.',
        [
          step(
            'Sign in',
            'Chat and the home chat button send you to sign in when you are signed out. The account path says it is continuing with Paintbrush Outdoors account login. The fallback form is Sign in with Google.',
          ),
          step(
            'Send a question',
            'The empty chat offers sample questions about Sioux Falls stockings, Lake Sharpe and Lake Francis Case, urban fisheries, and Missouri River stocking reports. Type your own in Ask a question and press Send.',
            'The page says Querying warehouse while it works.',
          ),
        ],
        [
          'Saved research does not keep the answer. Copy what you need before you leave.',
        ],
      ),
      guide(
        'hotbite',
        'Use SD HotBite on one lake',
        'Pick the lake and the conditions, then read the map shading the page draws for that choice.',
        ['Website'],
        'The HotBite map is showing the lake, season, and search mode you picked.',
        [
          step(
            'Set the lake and the conditions',
            'Open SD HotBite. Choose Lake, Species, Display (Heatmap, Zones, or Both), Season, Time of day, and Search mode (Feeding areas, Structure, or Transition zones).',
          ),
          step(
            'Turn on the map layers you want',
            'Map display can show the lake outline, Navionics contours, the Navionics water edge, and SD DepthShade. DepthShade stays off unless the lake is Angostura.',
            'Any disclaimer returned for that lake shows in a warning on the page.',
          ),
        ],
        [
          'DepthShade is for Angostura only.',
          'Read the warning on the page before you treat the shading as a place to fish.',
        ],
      ),
    ],
  },
  {
    slug: 'sd-hunt',
    projectId: 'sdhunt',
    name: 'SD Hunt AI',
    eyebrow: 'South Dakota draw research',
    promise: 'See what is open, shortlist a unit, and keep your preference points with the account.',
    lede: 'This is the research desk for South Dakota limited draws. You still apply with Game, Fish and Parks. The map shows odds and ranks after you sign in.',
    openLabel: 'Open SD Hunt AI',
    story: ['see-what-is-open', 'explore-a-unit', 'preference-points'],
    hold: [
      'Compare tags lives at its own address and is not in the menu. Use it only if you open that page yourself.',
    ],
    guides: [
      guide(
        'see-what-is-open',
        'See what is open, then start a hunt',
        'Read the application windows, pick a species and a goal, and search units.',
        ['Website'],
        'Search units is available and the map can open for that setup.',
        [
          step(
            'Read Apply',
            'Apply is headed as the South Dakota limited draw. Open windows show the draw, species, round, and how many days are left, plus a readiness chip such as Stats ready or Stats pending. Press Explore draw odds. Leftover tags use Map leftover quota. Later windows use Preview units.',
            'Could not load application windows means the list did not come back. Try the page again.',
          ),
          step(
            'Set up the hunt',
            'Choose Species and What you are looking for. Set Application year from the list. Preference points are optional. Then press Search units. The button stays off until species and the goal are set.',
            'Reset my hunt setup appears after a setup exists. Signed-in hunters also see Update points.',
          ),
        ],
        [
          'Search units does not submit an application. The draw still happens in the official licensing system.',
        ],
      ),
      guide(
        'explore-a-unit',
        'Explore a unit and open its tag',
        'Filter the map, open the unit, and read the draw row for the tag you are considering.',
        ['Website'],
        'The unit profile is open, and a tag row can show its draw history when you are signed in.',
        [
          step(
            'Filter units',
            'The map is titled South Dakota hunt units. Set Species and License type. Map overlay can be Hunt Rank, Shoulder Rank, Trophy Rank, Draw odds, or Leftover quota. Rank and odds overlays ask you to sign in. Draw odds also asks for drawing round, residency, and preference points.',
            'Open profile shows the unit code. An empty list says no units match.',
          ),
          step(
            'Read the unit',
            'The profile can show the application window, square miles, public land, and elevation when those values exist. Harvest survey and draw statistics sit behind Sign up free until you have an account. Closer alternatives needs a home ZIP or city and explains that the drive time is a straight-line estimate.',
          ),
          step(
            'Open the tag',
            'Linked tags include View draw results. The tag page can show a research-only warning, a 0-point resident success chip, and an official tag-fee table. Residency filters are All, Landowner, Resident, and Nonresident.',
            'Signed out, the draw statistics ask you to sign up free.',
          ),
        ],
        [
          'Private parcel search on this map is limited to what is in view. Pennington County is the South Dakota coverage named on the control, and the panel says it is not legal advice.',
          'Drive time uses the unit center, not your trailhead, and it is not turn-by-turn.',
        ],
      ),
      guide(
        'preference-points',
        'Save your preference points',
        'Bring the points from Go Outdoors onto your account so draw odds can use them.',
        ['Website'],
        'The page shows a Saved chip after you confirm the points.',
        [
          step(
            'Open Preference points',
            'Strategy hub has one card, Preference points, and an Open button. The page says points are tracked per draw season, not per species. You need to be signed in.',
          ),
          step(
            'Import or type them',
            'Import from Go Outdoors tells you to open My Preference Points on the official site, save the page as HTML, then use Go Outdoors HTML or Screenshot. You can also fill Point values and optional notes yourself.',
          ),
          step(
            'Confirm',
            'Press Confirm preference points.',
            'A Saved chip shows after the account stores them.',
          ),
        ],
        [
          'The HTML file is the export you save from the official site. This app does not sign in to that site for you.',
        ],
      ),
    ],
  },
  {
    slug: 'fishsd',
    projectId: 'fishsd-app',
    name: 'FishSD',
    eyebrow: 'On the water',
    promise: 'Tap the lake, read the regulations on the phone, and save the route you ran.',
    lede: 'FishSD is the Android app. The steps below are the tabs on the phone: Map, Fish, Routes, Account, and Help.',
    openLabel: 'Get FishSD on Google Play',
    story: ['regulations', 'species-and-lakes', 'routes'],
    hold: [
      'The iOS listing is not available from this site right now.',
      'A saved route has a View button. Opening that route back on the map is not wired up, so treat the list as the record of what you saved.',
    ],
    guides: [
      guide(
        'regulations',
        'Read the regulations for the water you tapped',
        'Tap the lake on the map and open the species rules stored for it.',
        ['Phone'],
        'The side panel shows the lake and the limit lines that are on file.',
        [
          step(
            'Tap the lake',
            'On the Map tab, a short tap queries the water under your finger. A banner names the lake and offers Regulations.',
            'A banner names the lake and offers Regulations.',
          ),
          step(
            'Open Regulations',
            'The panel shows the lake, a Special Regulations chip when a special rule exists, and the date of the data. Each species card can show a daily limit, season closed, no limit, possession limit, and slot. A chip says whether the line is a lake rule, a regional rule, or statewide.',
            'The panel includes the line that regulations can change and that you should verify the current South Dakota GFP rules before fishing.',
          ),
          step(
            'Turn layers on from Help',
            'Help, then Settings, has switches for the water outline, boat ramps, the Navionics overlay, meandered water, and invasive species. Map styles are Liberty, Bright, and Positron.',
            'With the depth overlay on, a note says Navionics is not for navigational use, and you can Turn Off.',
          ),
        ],
        [
          'The depth overlay turns off route tracking and the location display. Help says so.',
          'The regulations text is a snapshot. The official handbook is the rule.',
        ],
      ),
      guide(
        'species-and-lakes',
        'Look up a species or a lake',
        'Use the Fish tab when you know the fish or the lake name and you are not standing on it yet.',
        ['Phone'],
        'You are on the species card or the lake regulation list.',
        [
          step(
            'Search species',
            'Open Fish and leave the toggle on Species. Search species filters the cards. A card with a record shows the angler, weight, date, and category.',
            'The species card shows the record angler, weight, and date when a record image is on file.',
          ),
          step(
            'Search lakes',
            'Switch to Lakes. Type at least two letters. Tap a lake to open the same limit lines as the map, then Back to lakes.',
            'No lakes found means the letters did not match. Fewer than two letters asks you to keep typing.',
          ),
        ],
        [
          'A species with no image is a blank card. Search by name still finds the ones that have a record image.',
        ],
      ),
      guide(
        'routes',
        'Track a route and mark a spot',
        'Record the path on the map, keep it, and drop fish or boat markers while you are out.',
        ['Phone'],
        'The route is in the Routes list, and any markers you dropped are on the map.',
        [
          step(
            'Follow and record',
            'The GPS icon centers the map. The send icon makes the map follow you. The route icon tracks the line. Help explains each icon.',
            'The map can show a route line, the lake name, and Regulations.',
          ),
          step(
            'Keep the line',
            'Turn the route icon off. Save Route asks if you want to keep this route. Yes stores it. Routes then lists the name or the date, the length in miles, and a delete confirmation.',
            'No saved routes is the empty list. Delete Route asks you to confirm.',
          ),
          step(
            'Drop a marker',
            'The green button opens marker types. The labels are icons: a pointer, a fish, a boat, and a pin. Leave pointer mode, then long-press the map to drop that marker. Long-press a marker to remove it.',
          ),
          step(
            'Sign in when you want the account copy',
            'Account, signed out, says to sign in to save spots for the app and the web. Continue with Google or Continue with Facebook. Signed in, Sync now reports Synced or a connection failure.',
          ),
        ],
        [
          'Long-press deletes a marker with no extra confirm.',
          'View on a saved route does not navigate back to the map.',
        ],
      ),
    ],
  },
  {
    slug: 'nockscore',
    projectId: 'nockscore',
    name: 'Nock Score',
    eyebrow: 'Archery scores',
    promise: 'Join the team, enter the night, and send the card in for approval.',
    lede: 'Sign in, get on a team, then enter the twelve targets. Practice is a separate session you start yourself.',
    openLabel: 'Open Nock Score',
    story: ['join', 'enter-scores', 'events', 'practice'],
    hold: [
      'Score from Photo says AI detection is coming soon. Enter the card by hand.',
    ],
    guides: [
      guide(
        'join',
        'Sign in and join a team',
        'The captain creates the team. You open the invite.',
        ['Website'],
        'You are on a team and Enter scores is available.',
        [
          step(
            'Sign in',
            'Login is titled Nock Score. Choose Sign in with GitHub, Sign in with Google, or Sign in with Facebook.',
            'Welcome back offers Enter scores, My teams, Leaderboard, and Analytics.',
          ),
          step(
            'Create or join',
            'League explains that one person creates a team and shares an invite. Join this league offers Create a new team (a team name, then Create team) or Join an existing team. From the dashboard, Join with invite code takes a code or a link, then Join.',
          ),
        ],
        [
          'Creating or requesting a team asks you to log in when you are signed out.',
        ],
      ),
      guide(
        'enter-scores',
        'Enter a league card',
        'Assign the shooters, tap each arrow, and submit the night.',
        ['Website'],
        'The card is pending admin approval, or it is already approved.',
        [
          step(
            'Start the night',
            'Open Enter scores. Pick the league night. For 3D, pick the event and the course, then Enter scores for that choice.',
          ),
          step(
            'Assign shooters',
            'Step 1 of 13 is Shooters. Assign Shooter 1 through Shooter 4. Add unregistered shooter is optional. Press Next.',
          ),
          step(
            'Score the targets',
            'Each target asks for the target type. Tap a cell to cycle 5, then 3, then 0. Next walks the twelve targets. Submit scores opens Score review. Submit scores (validate) sends the card.',
            'The status reads Pending admin approval or Approved.',
          ),
        ],
        [
          'A league night is 12 targets and scores of 5, 3, or 0. You need a team.',
          'Offline, the app says it is showing cached data.',
        ],
      ),
      guide(
        'events',
        'Find an event and check in',
        'Filter the calendar, open the event, and check in with the code or the open join button.',
        ['Website'],
        'The event says you are checked in.',
        [
          step(
            'Find the event',
            'Events has From date, To date, and Type. Open the event for Join event, Check in at event, Enter scores, and Add to calendar.',
          ),
          step(
            'Check in',
            'Open events use Join event. Otherwise type the Check-in code and press Check in.',
            'You’re checked in.',
          ),
        ],
      ),
      guide(
        'practice',
        'Start a practice session',
        'Log a practice that is not a league night.',
        ['Website'],
        'The session is finished and stored.',
        [
          step(
            'Start Training',
            'Open Training and press Start Training. Set Session type, Distance, and Score mode, then Start session.',
          ),
          step(
            'Finish',
            'Log the ends, then press Finish session.',
          ),
        ],
      ),
    ],
  },
  {
    slug: 'bhmtnlion',
    projectId: 'bhmtnlion',
    name: 'Black Hills Mountain Lion',
    eyebrow: 'Scouting map',
    promise: 'Turn on harvest, snow, and roads, then read the Black Hills map.',
    lede: 'No account. Open the map, set the layers, and use the snow chart when you want the picture instead of the overlay.',
    openLabel: 'Open the scouting map',
    story: ['scout-the-map', 'snow-and-export'],
    guides: [
      guide(
        'scout-the-map',
        'Open the map and set the layers',
        'Start from the landing page and turn on only the layers you need.',
        ['Website'],
        'The scouting map is showing the layers you left on.',
        [
          step(
            'Open the map',
            'The landing page is Black Hills Mountain Lion. Press Explore the map, Open the map, or Open the scouting map.',
            'The app title is Black Hills Mountain Lion Scouting Tool.',
          ),
          step(
            'Set filters',
            'Press Filters. Map Filters lists GFP Boundaries, Snow Depth (live), Cached Snow Depth, Road Map with a date, and Mines. Harvest data has Harvest Locations, then Heatmap and Years. Done closes the panel. Reset clears it.',
            'Chips show the filters that are on. Remove a chip to drop that one.',
          ),
        ],
        [
          'Harvest years come from the data on the map. The page does not promise a fixed set of seasons.',
        ],
      ),
      guide(
        'snow-and-export',
        'Read the snow chart and download the mines file',
        'The chart is a picture. The download is a GPX of mine points.',
        ['Website'],
        'The chart is open, or mines.gpx has downloaded.',
        [
          step(
            'Open the snow chart',
            'Under Tools, press Snow Depth Chart.',
            'The chart image is on the page.',
          ),
          step(
            'Export the mines',
            'Press Export for onX. The file is mines.gpx, built from the mine points.',
            'The download is the mine layer, not the harvest locations.',
          ),
        ],
        [
          'The export does not include harvest points.',
        ],
      ),
    ],
  },
  {
    slug: 'loratext',
    projectId: 'loratext',
    name: 'LoRa Text',
    eyebrow: 'Off-grid messages',
    promise: 'Pair the radio, share one key, and send a short message.',
    lede: 'The page in the browser is the messenger. Pairing uses the radio over Bluetooth. Everyone in the group needs the same key.',
    openLabel: 'Open LoRa Text',
    story: ['pair-and-message', 'share-location'],
    hold: [
      'The site names the board, the firmware, and a printed case. It does not include a flash or wiring procedure.',
    ],
    guides: [
      guide(
        'pair-and-message',
        'Pair the radio and send a message',
        'Connect once, set the key, then type.',
        ['Website'],
        'The status says Connected, and the message is in the thread.',
        [
          step(
            'Open the messenger',
            'From the landing page, Launch LoraText or Pair & message. The app shows Works offline and Pair your LoRa radio.',
            'The status pill says Not paired until Bluetooth connects.',
          ),
          step(
            'Pair',
            'Press Pair Bluetooth device and choose the radio in the browser picker. Disconnect is available once it connects. If the radio drops, the page says the device connection was lost.',
          ),
          step(
            'Set one key for the group',
            'Under Pre-shared key, press Generate key, or Scan Key when the field is empty. Share Key shows a QR. The hint says everyone in the group needs the same key.',
          ),
          step(
            'Send',
            'Type in Message. The limit is 180 characters. An empty thread says to pair, set a key, and say hello. A send that is not acknowledged can be retried.',
          ),
        ],
        [
          'The browser has to support Bluetooth, and you have to be in range of the radio you paired.',
        ],
      ),
      guide(
        'share-location',
        'Share your location with the group',
        'The map appears after a radio is paired.',
        ['Website'],
        'Live group locations is on the map.',
        [
          step(
            'Show the map',
            'After the radio is connected, press Show map. Share location sends your position. Hide map closes it.',
            'The heading is Live group locations.',
          ),
          step(
            'Optional switches',
            'You can turn on Background notifications, Send timestamps, or Clear storage. Stop timestamps turns the time stamps off.',
          ),
        ],
        [
          'Location sharing stays off until a device is paired.',
        ],
      ),
    ],
  },
  {
    slug: 'kestrel',
    projectId: 'diykestrel',
    name: 'Kestrel',
    eyebrow: 'Handheld weather',
    promise: 'Connect the meter you built and read temperature, pressure, humidity, and altitude.',
    lede: 'The site explains the build and then connects to a meter named haddix diy kestrel. If Bluetooth is missing, you can show a nearby forecast instead of the device.',
    openLabel: 'Open Kestrel',
    story: ['connect'],
    hold: [
      'The print files, wiring diagram, and firmware buttons do not open a real file yet. Use the bill of materials on the page, and do not follow a blank GitHub link.',
    ],
    guides: [
      guide(
        'connect',
        'Connect the meter',
        'Pair the handheld and read the four live cards.',
        ['Website'],
        'The status says Live and the four readings are coming from the meter.',
        [
          step(
            'Read what you built',
            'The page sections are Readings, How it works, What it measures, Build your own, and Open source. How it works is Printed and sensed, Streamed over BLE, and Read in the app. The bill of materials lists the Arduino board, the board, a battery, a charger, a switch, and a printed case.',
          ),
          step(
            'Connect',
            'Press Connect device. The browser picker is limited to a device named haddix diy kestrel. The status moves through Connecting and Pairing with your Kestrel.',
            'Live means it is streaming over Bluetooth. The cards are Temperature, Pressure, Humidity, and Altitude.',
          ),
          step(
            'If the browser cannot pair',
            'A notice says this browser does not support Web Bluetooth. Use my location then shows a nearest forecast.',
            'The result says it is Open-Meteo for your location, not the meter.',
          ),
        ],
        [
          'The sample temperature in the hero is sample copy. Trust the Live cards after you connect.',
          'There is no disconnect button on the page.',
        ],
      ),
    ],
  },
  {
    slug: 'dakota-trophy',
    projectId: 'dakotatrophy',
    name: 'Dakota Trophy Adventures',
    eyebrow: 'Guided hunts',
    promise: 'Pick the hunt, then call or text to put a deposit on the date.',
    lede: 'The site shows the country and the hunts. A reservation is a deposit with the outfitter, not a checkout button.',
    openLabel: 'Open Dakota Trophy Adventures',
    story: ['book'],
    guides: [
      guide(
        'book',
        'Ask to book a hunt',
        'Choose the hunt, reach Tomilyn, and get a deposit on file.',
        ['Website'],
        'You have sent a message or called, and you know a date is not held until the deposit is on file.',
        [
          step(
            'Choose the hunt',
            'The nav covers Home, Gallery, Hunting, Taxidermy, Location, Reviews, and Trask Ranch. Hunt pages include rifle deer, turkey, antelope, and upland game, and more species have their own pages. Each hunt ends at Book Your Hunt, which opens Contact.',
            'The home page leads with Book Now and Book Your Adventure.',
          ),
          step(
            'Call, text, or write',
            'Contact Us says to get in touch to book. The preferred line is Tomilyn’s cell, for a call or a text. The house phone, email, and the Wasta address are on the same page. The form is Full Name, Email Address, and Message, then Submit.',
            'Submit sends the message. It does not charge a card or hold a date.',
          ),
          step(
            'Put the deposit on file',
            'The booking answer on the site says a deposit is required and that you are not booked until that deposit is on file. Final payment is due on arrival or 30 days prior. Deposits are nonrefundable. The same answer tells you to contact Tomilyn to book.',
          ),
        ],
        [
          'License-draw refunds and rollovers are described in that same booking answer. Read it before you send money.',
        ],
      ),
    ],
  },
  {
    slug: 'traileye',
    projectId: null,
    name: 'TrailEye',
    eyebrow: 'Trail cameras',
    promise: 'Sign in, upload the photos, and see the cameras on the map.',
    lede: 'TrailEye is the gallery for animal detections. You upload photos. The app queues them. The map is where you place the cameras.',
    openLabel: '',
    story: ['upload', 'map'],
    hold: [
      'The older note about scanning a folder is not the button on the gallery. Use Upload Photos.',
      'Plan prices come from billing when you open Storage plans. They are not printed on this guide.',
    ],
    guides: [
      guide(
        'upload',
        'Upload photos and filter the gallery',
        'Add the pictures, then narrow the grid by tag, camera, or time of day.',
        ['Website'],
        'The photos are in the gallery, queued or already detected.',
        [
          step(
            'Sign in',
            'Get started or Sign in offers Continue with Google, Continue with Facebook, or Continue with GitHub. Signed in, the hero becomes Open your gallery. The drawer lists Gallery, Favorites, Map, Tags, Pricing, and Settings.',
          ),
          step(
            'Upload',
            'Animal Detection Gallery has Upload Photos. The dialog says to drag and drop or browse. Types listed are JPG, PNG, GIF, BMP, WEBP, and TIFF, up to 50 MB. Press Upload and the count of photos.',
            'Empty gallery text says the photos are queued for automatic detection. Chips can read Queued, Detecting, or Detection failed.',
          ),
          step(
            'Filter',
            'Search images, filter by tags, filter by camera, and filter by time of day. Refresh Images reloads the grid. Favorites opens the photos you marked.',
          ),
          step(
            'Name a tag',
            'Tag Management has Add Tag and a Tag Name field.',
          ),
        ],
      ),
      guide(
        'map',
        'Put the cameras on the map',
        'Open the map, import a GPX if you have one, and filter by species.',
        ['Website'],
        'The cameras you imported are on the basemap you picked.',
        [
          step(
            'Open the camera map',
            'Trail Camera Map View has Import OnX GPX and Refresh Data. The basemap toggle is Satellite, Terrain, or Street.',
            'The basemap toggle reads Satellite, Terrain, or Street.',
          ),
          step(
            'Find a camera',
            'Search cameras, or filter by species.',
          ),
          step(
            'Change storage when you need it',
            'Storage plans says pricing follows how much gallery storage you need. Buttons read Upgrade, Current plan, Included free, or Manage billing, depending on the plan. A finished checkout says so. A canceled checkout says nothing changed.',
          ),
        ],
        [
          'Import takes a GPX. It does not draw the cameras by itself if you have not imported or placed them.',
        ],
      ),
    ],
  },
]

export const liveOnly = [
  {
    projectId: 'titlex',
    note: 'Shop the store. The catalog and checkout live on the TitleX site.',
  },
  {
    projectId: 'midwestgundealer',
    note: 'The marketplace is the live site. Step-by-step pages stay off this guide until that app is in the workspace to document.',
  },
]

export function projectRecord (projectId) {
  if (!projectId) return null
  return projects.find((item) => item.id === projectId) || null
}

export function productBySlug (slug) {
  return guideProducts.find((item) => item.slug === slug) || null
}

export function guideBySlug (product, slug) {
  if (!product) return null
  return product.guides.find((item) => item.slug === slug) || null
}

export function storyGuides (product) {
  if (!product) return []
  return product.story
    .map((slug) => guideBySlug(product, slug))
    .filter(Boolean)
}

export function extraGuides (product) {
  if (!product) return []
  const inStory = new Set(product.story)
  return product.guides.filter((item) => !inStory.has(item.slug))
}

export function guideNeighbors (product, slug) {
  const story = storyGuides(product)
  const index = story.findIndex((item) => item.slug === slug)
  if (index === -1) return { prev: null, next: null }
  return {
    prev: story[index - 1] || null,
    next: story[index + 1] || null,
  }
}

export function guidePathForProject (projectId) {
  const slug = SLUG_BY_PROJECT[projectId] || projectId
  return productBySlug(slug) ? `/${slug}` : null
}

export function productAccent (product) {
  return projectRecord(product?.projectId)?.accent || '#7c5cff'
}

export function productUrl (product) {
  return projectRecord(product?.projectId)?.links?.live || ''
}

export function productShot (product) {
  const images = projectRecord(product?.projectId)?.images || []
  return screenshot(images[0]) || ''
}
