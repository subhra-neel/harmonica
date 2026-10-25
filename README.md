# MIDI to Harmonica Tabs

A single-page app that turns MIDI files (songs, keyboard, drums) or solo harmonica recordings into harmonica tabs for 10-hole diatonic and 12-hole chromatic harmonicas.

Everything runs in the browser. Nothing is uploaded anywhere.

## Put it online with GitHub Pages
1. Create a new public repository on GitHub.
2. Upload all files in this folder to the root of the repository (index.html, manifest.webmanifest, sw.js, icon-192.png, icon-512.png, README.md).
3. Go to Settings > Pages. Under "Build and deployment" choose "Deploy from a branch", pick the main branch and the / (root) folder, then Save.
4. After a minute your app is live at https://YOUR-USERNAME.github.io/REPOSITORY-NAME/

## Install on a tablet
- Android (Chrome): open the link, tap the menu (three dots), then "Install app" or "Add to Home screen".
- iPad (Safari): open the link, tap Share, then "Add to Home Screen".

It also works offline after the first visit.

## Updating
1. Replace index.html, sw.js and version.json in the repository.
2. Change the version number in THREE places: `APP_VERSION` in index.html, `VERSION` in sw.js, and `"version"` in version.json (for example 1.6).
3. Commit. Whenever the app is open or reopened with internet, it compares its own version with version.json and shows "New version 1.6 is ready" with an Update button.
4. The footer of the app shows the current version, with a "Check for updates" link.

## If an installed copy is stuck on an old version
Open the live link in the browser with a made-up ending, for example https://YOUR-USERNAME.github.io/REPOSITORY-NAME/?x=1 . If the footer shows the latest version, the files are fine and only the tablet's old copy is stale: close the installed app completely and open it twice. As a last resort, clear the site's data in the browser settings and reopen.
