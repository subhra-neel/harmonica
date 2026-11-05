# Harmonica Coach

A practice app for 10-hole diatonic and 12-hole chromatic harmonicas. It runs entirely in the browser: nothing is uploaded, and microphone audio stays on the device.

## What it does
- **Learn**: 33 lessons in five levels (Beginner to Master) covering single notes, melodies, chords, progressions, bends and slide technique, with tips for each lesson.
- **Play & wait**: the app shows each note or chord and waits until you play it, with hints.
- **Focus mode** (⛶): full screen practice that shows only the bar being played (plus 1–3 bars ahead), large, and moves along by itself in Play, Play & wait and Perform. Bar ◀ ▶, arrow keys or a swipe flip bars by hand; the screen stays on.
- **Perform**: play along into the microphone after a one-bar count-in. You get a score, stars, pitch, timing and steadiness meters, specific tips, a note-by-note list, and a replay of your attempt.
- **Songs**: turn MIDI files (songs, keyboard, drums) or solo harmonica recordings into tabs. Fix detected notes, loop sections, slow down, and save songs.
- **Free play**: shows which hole, note or chord you are playing and how in tune you are.
- **Import**: MIDI and MusicXML (.mxl/.musicxml, e.g. from MuseScore, with lyrics and chord symbols); chord sheets and text guitar tabs pasted from sites like Ultimate Guitar, or opened as text PDFs; or type your own chord bars.
- Songs stay in the key of the original recording (melodies only move by octaves), with optional backing from the song's other tracks and chord names over the melody.
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

### New in 3.5
- Chord sheets copied from a PDF whose line breaks got lost (chords running into the lyrics) are put back together automatically.
- **Match the key to a recording** (Song settings): pick the song's mp3 and the app moves the tabs to the recording's key. Chord sheets are often written in an easier key or for a guitar capo.
- A chord sheet has no melody. To get the tune, hum, whistle or sing it into a voice recorder and open it with **🎙 Recording of one tune**.

### New in 3.6
- **Full songs (singer with band)**: the recording import now follows the main tune through the whole song (up to 8 minutes) instead of picking out a few clean notes, and finds the song's tempo and beat. Intro and solo parts give the lead instrument's line. A picker lets you say whether the recording is solo or a full song (or let the app decide).
- Solo harmonica, humming or singing still gives the most exact notes.

### New in 3.7
- **Help → Fixing a wrong note**: an animated walk-through of the piano roll (select a note, ♭/♯, Earlier/Later, Delete, Undo, Play from here).
- **Long silences** (under the bars): Keep / Shorten to 1 bar / Remove. Bars where the tune rests are taken out for Play, Play & wait and Perform. When the song's backing band plays along, the original timing is kept so you stay in time with it.
