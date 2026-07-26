# Solfège Melody

A tiny HTML5 music-learning game for kids. Pick a nursery song, press the glowing solfège pad (Do–Ti), and play the melody one note at a time.

**Live site:** [https://nikhilgohil11.github.io/anayas-apps/](https://nikhilgohil11.github.io/anayas-apps/)  
**Play directly:** [https://nikhilgohil11.github.io/anayas-apps/play/](https://nikhilgohil11.github.io/anayas-apps/play/)

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

## Run locally (game only)

```bash
# from this folder
python3 -m http.server 8080
```

Then open [http://localhost:8080/play/](http://localhost:8080/play/).

## Run locally (Jekyll + Cayman theme)

GitHub Pages builds this with Jekyll automatically. Local preview works best with **Ruby 3.2 or 3.3** (the `github-pages` gem is not fully compatible with Ruby 4 yet):

```bash
bundle install
bundle exec jekyll serve
```

Then open [http://127.0.0.1:4000/anayas-apps/](http://127.0.0.1:4000/anayas-apps/).

To try only the game (no theme), serve the folder and open `/play/` as above.
## Publish on GitHub Pages

1. Push this repo to GitHub (`main` branch).
2. Open **Settings → Pages**.
3. Under **Build and deployment**, set Source to **Deploy from a branch**.
4. Choose branch **main** and folder **/ (root)**.
5. Save — GitHub builds with Jekyll (Cayman theme from `_config.yml`).

Site URL: `https://nikhilgohil11.github.io/anayas-apps/`

If the repo is renamed, update `baseurl` in `_config.yml` to match.

## Project layout

- `index.md` — Cayman-themed landing page
- `_config.yml` — Jekyll / GitHub Pages config
- `play/` — the HTML5 game
  - `index.html` — menu, gameplay, and complete screens
  - `css/styles.css` — layout and pad styles
  - `js/` — audio, songs, game logic, and navigation

## Controls

- Touch or mouse on the on-screen pads (designed for tablets and phones)
