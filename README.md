# Solfège Melody

A tiny HTML5 music-learning game for kids. Pick a nursery song, press the glowing solfège pad (Do–Ti), and play the melody one note at a time.

## Songs

Good for ages ~6–7:

- London Bridge Is Falling Down
- Twinkle Twinkle Little Star
- Mary Had a Little Lamb
- Hot Cross Buns
- Row, Row, Row Your Boat
- Are You Sleeping
- Jingle Bells
- Itsy Bitsy Spider
- Old MacDonald Had a Farm
- This Old Man

## How to play

1. Choose a song from the menu.
2. The next pad lights up and pulses.
3. Tap or click that pad — the note plays and the next pad lights up.
4. Wrong pad? Nothing advances; try the glowing one again.
5. Finish the sequence to see “Great job!”

Timing is forgiving: the game waits for the correct press.

## Run locally

ES modules need a local server (opening `index.html` as a `file://` URL may not work in every browser).

```bash
# from this folder
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080).

## Project layout

- `index.html` — menu, gameplay, and complete screens
- `css/styles.css` — layout and pad styles
- `js/audio.js` — Web Audio notes (C major: Do–Ti)
- `js/songs.js` — song note sequences
- `js/game.js` — highlight / press / advance logic
- `js/main.js` — screen navigation

## Controls

- Touch or mouse on the on-screen pads (designed for tablets and phones)
