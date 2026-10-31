# Harmonica Coach

A practice app for 10-hole diatonic and 12-hole chromatic harmonicas. It runs entirely in the browser: nothing is uploaded, and microphone audio stays on the device.

## What it does
- **Learn**: 33 lessons in five levels (Beginner to Master) covering single notes, melodies, chords, progressions, bends and slide technique, with tips for each lesson.
- **Perform**: play along into the microphone after a one-bar count-in. You get a score, stars, pitch, timing and steadiness meters, specific tips, a note-by-note list, and a replay of your attempt.
- **Songs**: turn MIDI files (songs, keyboard, drums) or solo harmonica recordings into tabs. Fix detected notes, loop sections, slow down, and save songs.
- **Free play**: shows which hole and note you are playing and how in tune you are.
- Tab style as numbers (4 / -4) or arrows (↑4 / ↓4), any harmonica key, time signatures, speed trainer, print and download.

## Put it online with GitHub Pages
1. Create a public repository on GitHub.
2. Upload these files to the root of the repository: index.html, manifest.webmanifest, sw.js, version.json, icon-192.png, icon-512.png, README.md.
3. Settings > Pages > Deploy from a branch > main, / (root) > Save.
4. After a minute it is live at https://YOUR-USERNAME.github.io/REPOSITORY-NAME/

## Install on a tablet or phone
- Android (Chrome): open the link, menu (three dots) > Install app.
- iPad / iPhone (Safari): open the link, Share > Add to Home Screen.

## Releasing an update
Change the version number in three places: `APP_VERSION` in index.html, `VERSION` in sw.js and `"version"` in version.json. Upload the changed files. Installed copies show "New version ... is ready" with an Update button.
