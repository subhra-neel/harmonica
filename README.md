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
1. Replace index.html (and sw.js) in the repository.
2. Change the version number in BOTH places: `VERSION` in sw.js and `APP_VERSION` in index.html (for example 1.5).
3. Commit. The next time the app is opened with internet, it shows "New version 1.5 is ready" with an Update button.
4. The footer of the app shows the current version, with a "Check for updates" link.
