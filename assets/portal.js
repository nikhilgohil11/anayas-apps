const HOME_TITLE = "Anaya — Free online games";
const PLAYED_KEY = "anaya-played";

const home = document.getElementById("home");
const player = document.getElementById("player");
const board = document.getElementById("board");
const rail = document.getElementById("rail");
const playerBrand = document.getElementById("player-brand");
const frame = document.getElementById("frame");
const stage = document.getElementById("stage");
const finder = document.getElementById("finder");
const searchInput = document.getElementById("search");
const chips = document.getElementById("chips");
const filterbar = document.getElementById("filterbar");
const empty = document.getElementById("empty");
const footCats = document.getElementById("foot-cats");

let query = "";
let category = "all";
let finderOpen = false;
let finderFocus = "search";
let playedIds = loadPlayed();

chips.innerHTML = CATEGORIES.map(
  (cat) =>
    `<button type="button" class="chip" data-category="${cat.id}" aria-pressed="false">${esc(cat.label)}</button>`
).join("");

footCats.innerHTML = CATEGORIES.filter((cat) => cat.id !== "all")
  .map(
    (cat) =>
      `<button type="button" data-category="${cat.id}">${esc(cat.label)}</button>`
  )
  .join("");

searchInput.addEventListener("input", () => {
  query = searchInput.value;
  renderBoard();
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  const first = filtered()[0];
  if (first) openGame(first.id);
});

chips.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  category = button.dataset.category;
  renderBoard();
});

footCats.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  category = button.dataset.category;
  query = "";
  searchInput.value = "";
  finderOpen = true;
  finderFocus = "categories";
  window.scrollTo({ top: 0, behavior: "smooth" });
  renderBoard();
});

filterbar.addEventListener("click", () => {
  query = "";
  category = "all";
  searchInput.value = "";
  renderBoard();
});

board.addEventListener("click", onTileClick);
rail.addEventListener("click", onTileClick);
playerBrand.addEventListener("click", (event) => {
  if (onBrandAction(event)) return;
  goHome();
});

document.addEventListener("keydown", (event) => {
  const typing = event.target instanceof HTMLInputElement;
  if (event.key === "/" && !typing) {
    event.preventDefault();
    if (!player.hidden) goHome();
    openFinder("search");
  }
  if (event.key === "Escape") {
    if (finderOpen) {
      closeFinder(true);
    } else if (!player.hidden) {
      goHome();
    }
  }
});

frame.addEventListener("load", () => {
  stage.classList.remove("is-loading");
});

window.addEventListener("hashchange", route);

renderBoard();
route();

function onTileClick(event) {
  if (onBrandAction(event)) return;
  const tile = event.target.closest("[data-game]");
  if (!tile) return;
  openGame(tile.dataset.game);
}

function onBrandAction(event) {
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (!action) return false;
  event.stopPropagation();
  if (!player.hidden) goHome();
  if (action === "search") openFinder("search");
  if (action === "categories") openFinder("categories");
  return true;
}

function openFinder(mode) {
  if (finderOpen && finderFocus === mode) {
    closeFinder(false);
    return;
  }
  finderOpen = true;
  finderFocus = mode;
  finder.hidden = false;
  renderBoard();
  if (mode === "search") searchInput.focus();
}

function closeFinder(clearFilters) {
  finderOpen = false;
  finder.hidden = true;
  if (clearFilters) {
    query = "";
    category = "all";
    searchInput.value = "";
  }
  renderBoard();
}

function openGame(id) {
  const next = `#/g/${id}`;
  if (location.hash === next) showGame(gameById(id));
  else location.hash = next;
}

function goHome() {
  if (location.hash) location.hash = "";
  else showHome();
}

function route() {
  const id = (location.hash.match(/^#\/g\/([a-z0-9-]+)$/) || [])[1];
  if (!id) {
    showHome();
    return;
  }
  const game = gameById(id);
  if (!game) {
    location.hash = "";
    return;
  }
  showGame(game);
}

function showHome() {
  player.hidden = true;
  home.hidden = false;
  frame.src = "about:blank";
  document.title = HOME_TITLE;
  renderBoard();
}

function showGame(game) {
  finderOpen = false;
  finder.hidden = true;
  home.hidden = true;
  player.hidden = false;
  document.title = `${game.title} — Anaya`;
  stage.classList.add("is-loading");
  frame.title = game.title;
  frame.src = game.src;
  rememberPlayed(game.id);
  playerBrand.innerHTML = brandHTML(false);
  rail.innerHTML = GAMES.filter((item) => item.id !== game.id)
    .map((item) => tileHTML(item, { compact: true }))
    .join("");
}

function renderBoard() {
  const games = filtered();
  board.innerHTML = brandHTML(true) + games.map((game) => tileHTML(game)).join("");
  empty.hidden = games.length > 0;
  finder.hidden = !finderOpen;
  chips.querySelectorAll("[data-category]").forEach((button) => {
    const on = button.dataset.category === category;
    button.classList.toggle("is-on", on);
    button.setAttribute("aria-pressed", on ? "true" : "false");
  });
  const bits = [];
  if (category !== "all") bits.push(categoryLabel(category));
  if (query.trim()) bits.push(`“${query.trim()}”`);
  filterbar.hidden = bits.length === 0;
  filterbar.innerHTML = bits.length ? `<button type="button">${esc(bits.join(" · "))}  ✕</button>` : "";
}

function filtered() {
  const q = query.trim().toLowerCase();
  return GAMES.filter((game) => {
    if (category !== "all" && game.category !== category) return false;
    if (!q) return true;
    const hay = `${game.title} ${game.category} ${game.tags.join(" ")}`.toLowerCase();
    return hay.includes(q);
  });
}

function tileHTML(game, options = {}) {
  const lg = !options.compact && game.size === "lg" ? " tile--lg" : "";
  const played = playedIds.includes(game.id) ? `<span class="tile__played" aria-hidden="true"></span>` : "";
  return `<button type="button" class="tile${lg}" data-game="${game.id}" aria-label="${esc(game.title)}"><span class="tile__art">${game.art}</span>${played}<span class="tile__name">${esc(game.title)}</span></button>`;
}

function brandHTML(heading) {
  const catOn = finderOpen && finderFocus === "categories" ? " is-on" : "";
  const searchOn = finderOpen && finderFocus === "search" ? " is-on" : "";
  const tag = heading ? "h1" : "p";
  return `<div class="tile tile--brand"><div class="brand__mark"><${tag} class="logo">anaya</${tag}></div><div class="brand__tools"><button type="button" data-action="categories" class="${catOn}" aria-label="Categories"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z"/></svg></button><button type="button" data-action="search" class="${searchOn}" aria-label="Search"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16a6.47 6.47 0 0 0 4.23-1.57l.27.28v.79L20 21.49 21.49 20 15.5 14zM9.5 14A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z"/></svg></button></div></div>`;
}

function gameById(id) {
  return GAMES.find((game) => game.id === id);
}

function categoryLabel(id) {
  return CATEGORIES.find((cat) => cat.id === id)?.label || id;
}

function loadPlayed() {
  try {
    const parsed = JSON.parse(localStorage.getItem(PLAYED_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function rememberPlayed(id) {
  playedIds = [id, ...playedIds.filter((item) => item !== id)].slice(0, 12);
  localStorage.setItem(PLAYED_KEY, JSON.stringify(playedIds));
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[char]);
}
