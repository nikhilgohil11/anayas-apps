/** Add a game by appending an object: id, title, category, src, tags, art, and optional size "lg". */
function cover(id, bg, inner) {
  return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${bg[0]}"/><stop offset="1" stop-color="${bg[1]}"/></linearGradient></defs><rect width="200" height="200" fill="url(#${id})"/>${inner}</svg>`;
}

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "music", label: "Music" },
  { id: "puzzle", label: "Puzzle" },
  { id: "words", label: "Words" },
  { id: "arcade", label: "Arcade" },
  { id: "draw", label: "Draw" },
  { id: "2player", label: "2 Player" },
  { id: "tilt", label: "Tilt" },
];

const GAMES = [
  {
    id: "solfege",
    title: "Solfège Melody",
    category: "music",
    size: "lg",
    src: "play/",
    tags: ["song", "songs", "piano", "do", "re", "mi", "nursery", "melody", "music"],
    art: cover("c-solfege", ["#0c8f7a", "#14685c"], `
      <rect x="18" y="150" width="164" height="16" rx="8" fill="#083f38"/>
      <rect x="24" y="62" width="18" height="96" rx="8" fill="#e85d4c"/>
      <rect x="46" y="48" width="18" height="110" rx="8" fill="#f0a202"/>
      <rect x="68" y="40" width="18" height="118" rx="8" fill="#ffe56a"/>
      <rect x="90" y="52" width="18" height="106" rx="8" fill="#7ed957"/>
      <rect x="112" y="36" width="18" height="122" rx="8" fill="#2ec4b6"/>
      <rect x="134" y="50" width="18" height="108" rx="8" fill="#6c63ff"/>
      <rect x="156" y="58" width="18" height="100" rx="8" fill="#e056c1"/>
      <circle cx="78" cy="34" r="14" fill="#fff7df"/>
      <rect x="90" y="18" width="5" height="28" rx="2" fill="#fff7df"/>
      <path d="M95 18c14 2 18 12 10 18" fill="none" stroke="#fff7df" stroke-width="4" stroke-linecap="round"/>
    `),
  },
  {
    id: "bubbles",
    title: "Bubbles",
    category: "arcade",
    size: "lg",
    src: "games/bubbles/",
    tags: ["pop", "tap", "arcade", "float"],
    art: cover("c-bubbles", ["#8ee7ff", "#2f6bff"], `
      <circle cx="70" cy="78" r="36" fill="#e8fbff" opacity=".95"/>
      <circle cx="58" cy="66" r="10" fill="#fff" opacity=".8"/>
      <circle cx="62" cy="80" r="3" fill="#1d4e89"/><circle cx="78" cy="80" r="3" fill="#1d4e89"/>
      <path d="M64 90c6 6 14 6 20 0" fill="none" stroke="#1d4e89" stroke-width="3" stroke-linecap="round"/>
      <circle cx="132" cy="112" r="28" fill="#d9f6ff"/>
      <circle cx="122" cy="102" r="7" fill="#fff" opacity=".85"/>
      <circle cx="124" cy="112" r="2.4" fill="#1d4e89"/><circle cx="138" cy="112" r="2.4" fill="#1d4e89"/>
      <circle cx="118" cy="150" r="16" fill="#f7feff" opacity=".9"/>
    `),
  },
  {
    id: "memory",
    title: "Memory Match",
    category: "puzzle",
    src: "games/memory/",
    tags: ["match", "pairs", "cards", "puzzle", "memory"],
    art: cover("c-memory", ["#b388ff", "#6c4ad4"], `
      <rect x="34" y="36" width="78" height="112" rx="16" fill="#fff" transform="rotate(-10 73 92)"/>
      <rect x="86" y="42" width="82" height="116" rx="16" fill="#ffe56a"/>
      <path d="M127 78l8 18 20 2-15 13 5 19-18-10-18 10 5-19-15-13 20-2z" fill="#fff"/>
    `),
  },
  {
    id: "simon",
    title: "Simon Pads",
    category: "music",
    src: "games/simon/",
    tags: ["sequence", "repeat", "memory", "music", "pads"],
    art: cover("c-simon", ["#24143a", "#12081f"], `
      <path d="M100 28a72 72 0 0 1 72 72h-46a26 26 0 0 0-26-26z" fill="#ff5d73"/>
      <path d="M172 100a72 72 0 0 1-72 72v-46a26 26 0 0 0 26-26z" fill="#3ecf8e"/>
      <path d="M100 172a72 72 0 0 1-72-72h46a26 26 0 0 0 26 26z" fill="#4d7cff"/>
      <path d="M28 100a72 72 0 0 1 72-72v46a26 26 0 0 0-26 26z" fill="#ffd23f"/>
      <circle cx="100" cy="100" r="18" fill="#1a1024"/>
    `),
  },
  {
    id: "piano",
    title: "Piano",
    category: "music",
    src: "games/piano/",
    tags: ["keyboard", "notes", "do", "re", "mi", "music"],
    art: cover("c-piano", ["#ffe8c2", "#f3c98b"], `
      <rect x="22" y="36" width="156" height="128" rx="14" fill="#2b2118"/>
      <rect x="32" y="48" width="24" height="104" rx="4" fill="#fffaf3"/>
      <rect x="60" y="48" width="24" height="104" rx="4" fill="#fffaf3"/>
      <rect x="88" y="48" width="24" height="104" rx="4" fill="#fffaf3"/>
      <rect x="116" y="48" width="24" height="104" rx="4" fill="#fffaf3"/>
      <rect x="144" y="48" width="24" height="104" rx="4" fill="#fffaf3"/>
      <rect x="50" y="48" width="16" height="62" rx="3" fill="#1a1a1a"/>
      <rect x="78" y="48" width="16" height="62" rx="3" fill="#1a1a1a"/>
      <rect x="130" y="48" width="16" height="62" rx="3" fill="#1a1a1a"/>
      <rect x="158" y="48" width="10" height="62" rx="3" fill="#1a1a1a"/>
    `),
  },
  {
    id: "tictactoe",
    title: "Tic Tac Toe",
    category: "2player",
    src: "games/tictactoe/",
    tags: ["xo", "two player", "2 player", "board", "puzzle"],
    art: cover("c-ttt", ["#ffd89a", "#f0b45a"], `
      <rect x="36" y="36" width="128" height="128" rx="18" fill="#fff6e4"/>
      <path d="M78 48v104M122 48v104M48 78h104M48 122h104" stroke="#e0b56a" stroke-width="6" stroke-linecap="round"/>
      <path d="M54 56l16 16M70 56L54 72" stroke="#e85d4c" stroke-width="7" stroke-linecap="round"/>
      <circle cx="138" cy="138" r="12" fill="none" stroke="#2f6bff" stroke-width="7"/>
    `),
  },
  {
    id: "snake",
    title: "Snake",
    category: "arcade",
    src: "games/snake/",
    tags: ["arcade", "snake"],
    art: cover("c-snake", ["#7ed957", "#2f9e44"], `
      <rect x="28" y="28" width="144" height="144" rx="28" fill="#1f7a32"/>
      <circle cx="78" cy="118" r="16" fill="#d8ff9a"/>
      <circle cx="104" cy="96" r="16" fill="#d8ff9a"/>
      <circle cx="128" cy="78" r="18" fill="#eaffc2"/>
      <circle cx="122" cy="74" r="3" fill="#163316"/><circle cx="134" cy="74" r="3" fill="#163316"/>
      <circle cx="146" cy="118" r="10" fill="#ff5d73"/>
      <circle cx="150" cy="114" r="3" fill="#fff" opacity=".7"/>
    `),
  },
  {
    id: "catch",
    title: "Note Catch",
    category: "arcade",
    src: "games/catch/",
    tags: ["catch", "basket", "notes", "arcade", "music"],
    art: cover("c-catch", ["#8ecae6", "#ffb703"], `
      <circle cx="150" cy="42" r="18" fill="#fff3bf"/>
      <path d="M36 132c18 28 110 28 128 0v22H36v-22z" fill="#c47b2b"/>
      <path d="M36 132c18 18 110 18 128 0" fill="none" stroke="#8a4b12" stroke-width="6"/>
      <ellipse cx="78" cy="78" rx="16" ry="12" fill="#fff" transform="rotate(-20 78 78)"/>
      <rect x="90" y="58" width="4" height="28" rx="2" fill="#fff"/>
      <ellipse cx="124" cy="64" rx="14" ry="10" fill="#ffd23f" transform="rotate(16 124 64)"/>
      <rect x="134" y="46" width="4" height="24" rx="2" fill="#ffd23f"/>
    `),
  },
  {
    id: "draw",
    title: "Doodle",
    category: "draw",
    src: "games/draw/",
    tags: ["draw", "color", "art", "doodle", "paint"],
    art: cover("c-draw", ["#fff7ea", "#ffe0b5"], `
      <path d="M36 140c24-48 40-18 58-52 10 28 22 22 34-8 8 30 20 18 36-6" fill="none" stroke="#ff5d73" stroke-width="10" stroke-linecap="round"/>
      <path d="M40 150c30-10 70 8 120-16" fill="none" stroke="#3ecf8e" stroke-width="8" stroke-linecap="round"/>
      <path d="M48 118c20 8 28-6 48 2" fill="none" stroke="#4d7cff" stroke-width="8" stroke-linecap="round"/>
      <rect x="132" y="36" width="18" height="64" rx="6" fill="#ff5d73" transform="rotate(28 141 68)"/>
      <polygon points="168,108 150,102 156,120" fill="#e8b86a"/>
    `),
  },
  {
    id: "hop",
    title: "Hop",
    category: "arcade",
    src: "games/hop/",
    tags: ["jump", "arcade", "runner"],
    art: cover("c-hop", ["#8fd3ff", "#d9f6c8"], `
      <rect x="0" y="140" width="200" height="60" fill="#67b35a"/>
      <rect x="128" y="96" width="28" height="44" rx="6" fill="#f4a261"/>
      <rect x="46" y="78" width="46" height="50" rx="16" fill="#ff8fab"/>
      <circle cx="76" cy="96" r="4" fill="#1d4e89"/>
    `),
  },
  {
    id: "bricks",
    title: "Bricks",
    category: "arcade",
    src: "games/bricks/",
    tags: ["breakout", "ball", "arcade", "bounce"],
    art: cover("c-bricks", ["#2a3160", "#14182f"], `
      <rect x="28" y="36" width="34" height="16" rx="4" fill="#ff5d73"/>
      <rect x="68" y="36" width="34" height="16" rx="4" fill="#ffd23f"/>
      <rect x="108" y="36" width="34" height="16" rx="4" fill="#3ecf8e"/>
      <rect x="148" y="36" width="24" height="16" rx="4" fill="#4d7cff"/>
      <rect x="28" y="58" width="34" height="16" rx="4" fill="#e056c1"/>
      <rect x="68" y="58" width="34" height="16" rx="4" fill="#ff5d73"/>
      <rect x="108" y="58" width="34" height="16" rx="4" fill="#ffd23f"/>
      <circle cx="100" cy="120" r="10" fill="#fff"/>
      <rect x="70" y="156" width="60" height="12" rx="6" fill="#fff"/>
    `),
  },
  {
    id: "whack",
    title: "Whack",
    category: "arcade",
    src: "games/whack/",
    tags: ["tap", "whack", "arcade"],
    art: cover("c-whack", ["#8fd18a", "#2f7d42"], `
      <circle cx="58" cy="78" r="28" fill="#1d4a28"/>
      <circle cx="142" cy="78" r="28" fill="#1d4a28"/>
      <circle cx="100" cy="132" r="32" fill="#163f22"/>
      <circle cx="100" cy="118" r="18" fill="#ffe08a"/>
      <circle cx="94" cy="116" r="2.5" fill="#1c2430"/><circle cx="106" cy="116" r="2.5" fill="#1c2430"/>
    `),
  },
  {
    id: "slide",
    title: "Slide",
    category: "puzzle",
    src: "games/slide/",
    tags: ["puzzle", "slide", "tiles", "numbers"],
    art: cover("c-slide", ["#ffe08a", "#f4a261"], `
      <rect x="36" y="36" width="40" height="40" rx="8" fill="#fff8ec"/>
      <rect x="82" y="36" width="40" height="40" rx="8" fill="#fff8ec"/>
      <rect x="128" y="36" width="40" height="40" rx="8" fill="#fff8ec"/>
      <rect x="36" y="82" width="40" height="40" rx="8" fill="#fff8ec"/>
      <rect x="82" y="82" width="40" height="40" rx="8" fill="#fff8ec"/>
      <rect x="128" y="82" width="40" height="40" rx="8" fill="#fff"/>
      <text x="48" y="64" font-size="22" font-family="Arial, sans-serif" font-weight="700" fill="#5a3412">1</text>
      <text x="94" y="64" font-size="22" font-family="Arial, sans-serif" font-weight="700" fill="#5a3412">2</text>
      <text x="140" y="64" font-size="22" font-family="Arial, sans-serif" font-weight="700" fill="#5a3412">3</text>
    `),
  },
  {
    id: "rally",
    title: "Rally",
    category: "2player",
    src: "games/rally/",
    tags: ["pong", "2 player", "two player", "ball"],
    art: cover("c-rally", ["#1f8a4c", "#123524"], `
      <rect x="28" y="70" width="14" height="60" rx="6" fill="#7ed957"/>
      <rect x="158" y="70" width="14" height="60" rx="6" fill="#ffd23f"/>
      <circle cx="100" cy="100" r="12" fill="#fff"/>
      <path d="M100 28v144" stroke="#fff" stroke-width="4" stroke-dasharray="8 10" opacity=".5"/>
    `),
  },
  {
    id: "hue",
    title: "Hue",
    category: "puzzle",
    src: "games/hue/",
    tags: ["color", "colors", "match", "puzzle"],
    art: cover("c-hue", ["#fff7ea", "#f3e7d3"], `
      <circle cx="100" cy="78" r="36" fill="#e85d4c"/>
      <rect x="28" y="132" width="64" height="36" rx="10" fill="#fff"/>
      <rect x="108" y="132" width="64" height="36" rx="10" fill="#fff"/>
      <text x="42" y="156" font-size="16" font-family="Arial, sans-serif" font-weight="700" fill="#1c2430">Red</text>
    `),
  },
  {
    id: "lights",
    title: "Lights",
    category: "puzzle",
    src: "games/lights/",
    tags: ["lights", "puzzle", "toggle", "logic"],
    art: cover("c-lights", ["#2a2558", "#1a1740"], `
      <rect x="36" y="36" width="36" height="36" rx="8" fill="#ffe56a"/>
      <rect x="82" y="36" width="36" height="36" rx="8" fill="#3a3470"/>
      <rect x="128" y="36" width="36" height="36" rx="8" fill="#ffe56a"/>
      <rect x="36" y="82" width="36" height="36" rx="8" fill="#3a3470"/>
      <rect x="82" y="82" width="36" height="36" rx="8" fill="#ffe56a"/>
      <rect x="128" y="82" width="36" height="36" rx="8" fill="#3a3470"/>
      <rect x="36" y="128" width="36" height="36" rx="8" fill="#ffe56a"/>
      <rect x="82" y="128" width="36" height="36" rx="8" fill="#3a3470"/>
      <rect x="128" y="128" width="36" height="36" rx="8" fill="#ffe56a"/>
    `),
  },
  {
    id: "maze",
    title: "Maze",
    category: "puzzle",
    src: "games/maze/",
    tags: ["maze", "puzzle", "path"],
    art: cover("c-maze", ["#16324f", "#10243a"], `
      <path d="M40 40h50v30H70v30h50V70h40v30H90v30h70v30H40V40z" fill="none" stroke="#d7e6f5" stroke-width="8"/>
      <circle cx="52" cy="56" r="8" fill="#7ee0ff"/>
      <circle cx="150" cy="150" r="8" fill="#ffd23f"/>
    `),
  },
  {
    id: "odd",
    title: "Odd One",
    category: "puzzle",
    src: "games/odd/",
    tags: ["odd", "spot", "difference", "puzzle"],
    art: cover("c-odd", ["#fff4d6", "#f7c1d8"], `
      <circle cx="58" cy="70" r="16" fill="#fff"/>
      <circle cx="100" cy="70" r="16" fill="#fff"/>
      <circle cx="142" cy="70" r="16" fill="#fff"/>
      <text x="50" y="76" font-size="18" fill="#3a2440">★</text>
      <text x="92" y="76" font-size="18" fill="#3a2440">★</text>
      <text x="134" y="76" font-size="18" fill="#e85d4c">☆</text>
      <circle cx="58" cy="130" r="16" fill="#fff"/>
      <circle cx="100" cy="130" r="16" fill="#fff"/>
      <circle cx="142" cy="130" r="16" fill="#fff"/>
    `),
  },
  {
    id: "next",
    title: "Next",
    category: "puzzle",
    src: "games/next/",
    tags: ["pattern", "sequence", "next", "puzzle"],
    art: cover("c-next", ["#f4f7fb", "#d5e2f2"], `
      <rect x="24" y="78" width="32" height="32" rx="8" fill="#e85d4c"/>
      <rect x="64" y="78" width="32" height="32" rx="8" fill="#2f6bff"/>
      <rect x="104" y="78" width="32" height="32" rx="8" fill="#e85d4c"/>
      <rect x="144" y="78" width="32" height="32" rx="8" fill="none" stroke="#8aa0b8" stroke-width="4" stroke-dasharray="6 4"/>
    `),
  },
  {
    id: "marble",
    title: "Marble",
    category: "tilt",
    src: "games/marble/",
    tags: ["marble", "maze", "tilt", "gyroscope"],
    art: cover("c-marble", ["#16324f", "#10243a"], `
      <path d="M40 40h50v30H70v30h50V70h40v30H90v30h70v30H40V40z" fill="none" stroke="#d7e6f5" stroke-width="8"/>
      <circle cx="58" cy="58" r="12" fill="#f2f5f8"/>
      <circle cx="150" cy="150" r="8" fill="#ffd23f"/>
    `),
  },
  {
    id: "boat",
    title: "Boat",
    category: "tilt",
    src: "games/boat/",
    tags: ["boat", "river", "tilt", "gyroscope"],
    art: cover("c-boat", ["#1383b5", "#0c4a6e"], `
      <path d="M100 48 L132 130 L68 130 Z" fill="#f4f1ea"/>
      <rect x="96" y="36" width="8" height="28" fill="#e85d4c"/>
      <circle cx="48" cy="150" r="14" fill="#5c3b2e"/>
      <circle cx="156" cy="88" r="12" fill="#5c3b2e"/>
    `),
  },
  {
    id: "stars",
    title: "Stars",
    category: "tilt",
    src: "games/stars/",
    tags: ["stars", "catch", "tilt", "gyroscope"],
    art: cover("c-stars", ["#241c55", "#1b1740"], `
      <circle cx="58" cy="52" r="10" fill="#ffd23f"/>
      <circle cx="120" cy="78" r="8" fill="#ffd23f"/>
      <circle cx="150" cy="46" r="7" fill="#ffd23f"/>
      <rect x="62" y="140" width="76" height="16" rx="6" fill="#f2f5f8"/>
    `),
  },
  {
    id: "stamps",
    title: "Stamps",
    category: "draw",
    src: "games/stamps/",
    tags: ["stamp", "stickers", "art", "draw", "emoji"],
    art: cover("c-stamps", ["#ffe8f3", "#c9e4ff"], `
      <circle cx="70" cy="78" r="34" fill="#fff"/>
      <text x="56" y="90" font-size="36">⭐</text>
      <circle cx="130" cy="118" r="28" fill="#fff"/>
      <text x="116" y="128" font-size="28">🌸</text>
      <circle cx="140" cy="58" r="22" fill="#fff"/>
      <text x="128" y="66" font-size="22">🦋</text>
    `),
  },
  {
    id: "paintnum",
    title: "Paint Numbers",
    category: "draw",
    size: "lg",
    src: "games/paintnum/",
    tags: ["paint", "color", "numbers", "art", "draw", "coloring"],
    art: cover("c-paintnum", ["#fff6d8", "#ffd6e8"], `
      <rect x="36" y="36" width="48" height="48" rx="10" fill="#e85d4c"/>
      <rect x="92" y="36" width="48" height="48" rx="10" fill="#f4f0ea"/>
      <text x="108" y="68" font-size="22" font-family="Arial, sans-serif" font-weight="700" fill="#6a6078">2</text>
      <rect x="36" y="92" width="48" height="48" rx="10" fill="#f4f0ea"/>
      <text x="52" y="124" font-size="22" font-family="Arial, sans-serif" font-weight="700" fill="#6a6078">3</text>
      <rect x="92" y="92" width="48" height="48" rx="10" fill="#2f6bff"/>
      <circle cx="158" cy="70" r="18" fill="#6ab04c"/>
      <text x="151" y="77" font-size="18" font-family="Arial, sans-serif" font-weight="700" fill="#fff">3</text>
    `),
  },
  {
    id: "mirror",
    title: "Mirror Draw",
    category: "draw",
    src: "games/mirror/",
    tags: ["mirror", "symmetry", "draw", "art", "reflect"],
    art: cover("c-mirror", ["#e8fff4", "#dce8ff"], `
      <path d="M100 24v152" stroke="#8aa0b8" stroke-width="4" stroke-dasharray="8 8"/>
      <path d="M42 70c18-28 40-8 48 20" fill="none" stroke="#e85d4c" stroke-width="10" stroke-linecap="round"/>
      <path d="M158 70c-18-28-40-8-48 20" fill="none" stroke="#e85d4c" stroke-width="10" stroke-linecap="round"/>
      <path d="M48 130c20 18 36 6 46-16" fill="none" stroke="#2f6bff" stroke-width="8" stroke-linecap="round"/>
      <path d="M152 130c-20 18-36 6-46-16" fill="none" stroke="#2f6bff" stroke-width="8" stroke-linecap="round"/>
    `),
  },
  {
    id: "sudoku",
    title: "Mini Sudoku",
    category: "puzzle",
    src: "games/sudoku/",
    tags: ["sudoku", "numbers", "logic", "puzzle", "grid"],
    art: cover("c-sudoku", ["#eef3ff", "#b8c9f0"], `
      <rect x="40" y="40" width="120" height="120" rx="14" fill="#fff"/>
      <path d="M100 40v120M40 100h120" stroke="#1d2a4a" stroke-width="5"/>
      <path d="M70 40v120M130 40v120M40 70h120M40 130h120" stroke="#c5d0e8" stroke-width="2"/>
      <text x="52" y="66" font-size="20" font-family="Arial, sans-serif" font-weight="700" fill="#1d2a4a">1</text>
      <text x="112" y="96" font-size="20" font-family="Arial, sans-serif" font-weight="700" fill="#1d2a4a">3</text>
      <text x="142" y="156" font-size="20" font-family="Arial, sans-serif" font-weight="700" fill="#1d2a4a">2</text>
    `),
  },
  {
    id: "connect",
    title: "Connect",
    category: "puzzle",
    src: "games/connect/",
    tags: ["connect", "flow", "logic", "puzzle", "path", "colors"],
    art: cover("c-connect", ["#1a2040", "#2a1850"], `
      <circle cx="52" cy="52" r="16" fill="#ff5d73"/>
      <circle cx="148" cy="148" r="16" fill="#ff5d73"/>
      <path d="M52 52h40v56h56v40" fill="none" stroke="#ff5d73" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" opacity=".7"/>
      <circle cx="148" cy="52" r="16" fill="#3ecf8e"/>
      <circle cx="52" cy="148" r="16" fill="#3ecf8e"/>
      <path d="M148 52v40H92v56H52" fill="none" stroke="#3ecf8e" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" opacity=".7"/>
    `),
  },
  {
    id: "wordsearch",
    title: "Word Search",
    category: "words",
    size: "lg",
    src: "games/wordsearch/",
    tags: ["word", "search", "letters", "find", "words", "puzzle"],
    art: cover("c-wordsearch", ["#fff4e0", "#ffc98a"], `
      <rect x="36" y="36" width="128" height="128" rx="16" fill="#fff"/>
      <text x="48" y="70" font-size="18" font-family="Arial, sans-serif" font-weight="700" fill="#3a2a18">C A T S</text>
      <text x="48" y="100" font-size="18" font-family="Arial, sans-serif" font-weight="700" fill="#3a2a18">O G X U</text>
      <text x="48" y="130" font-size="18" font-family="Arial, sans-serif" font-weight="700" fill="#3a2a18">D O G N</text>
      <rect x="44" y="108" width="78" height="28" rx="8" fill="#ffd23f" opacity=".55"/>
    `),
  },
  {
    id: "scramble",
    title: "Word Scramble",
    category: "words",
    src: "games/scramble/",
    tags: ["scramble", "anagram", "word", "letters", "unscramble", "words"],
    art: cover("c-scramble", ["#e4f7ff", "#9ec9f0"], `
      <rect x="28" y="70" width="40" height="50" rx="10" fill="#fff"/>
      <rect x="76" y="70" width="40" height="50" rx="10" fill="#fff"/>
      <rect x="124" y="70" width="40" height="50" rx="10" fill="#fff"/>
      <text x="40" y="104" font-size="24" font-family="Arial, sans-serif" font-weight="700" fill="#2f6bff">T</text>
      <text x="88" y="104" font-size="24" font-family="Arial, sans-serif" font-weight="700" fill="#2f6bff">A</text>
      <text x="136" y="104" font-size="24" font-family="Arial, sans-serif" font-weight="700" fill="#2f6bff">C</text>
      <path d="M48 150h104" stroke="#2f6bff" stroke-width="4" stroke-linecap="round"/>
      <path d="M140 142l12 8-12 8" fill="none" stroke="#2f6bff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    `),
  },
];
