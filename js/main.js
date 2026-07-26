import { unlockAudio } from "./audio.js";
import { MelodyGame } from "./game.js";
import { SONGS, getSongById } from "./songs.js";

const screens = {
  menu: document.getElementById("screen-menu"),
  play: document.getElementById("screen-play"),
  complete: document.getElementById("screen-complete"),
};

const songList = document.getElementById("song-list");
const completeMessage = document.getElementById("complete-message");
const btnBack = document.getElementById("btn-back");
const btnReplay = document.getElementById("btn-replay");
const btnMenu = document.getElementById("btn-menu");

/** @type {string | null} */
let currentSongId = null;

const game = new MelodyGame({
  padRow: document.getElementById("pad-row"),
  progressEl: document.getElementById("progress"),
  titleEl: document.getElementById("song-title"),
  onComplete(song) {
    completeMessage.textContent = `You played “${song.title}”!`;
    showScreen("complete");
  },
});

function showScreen(name) {
  for (const [key, el] of Object.entries(screens)) {
    const active = key === name;
    el.classList.toggle("screen--active", active);
    el.hidden = !active;
  }
}

function renderSongList() {
  songList.replaceChildren();

  for (const song of SONGS) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "song-btn";
    button.textContent = song.title;
    button.addEventListener("click", async () => {
      await unlockAudio();
      startSong(song.id);
    });
    songList.appendChild(button);
  }
}

function startSong(songId) {
  const song = getSongById(songId);
  if (!song) return;
  currentSongId = song.id;
  game.start(song);
  showScreen("play");
}

btnBack.addEventListener("click", () => {
  game.stop();
  showScreen("menu");
});

btnReplay.addEventListener("click", async () => {
  await unlockAudio();
  if (currentSongId) {
    startSong(currentSongId);
  }
});

btnMenu.addEventListener("click", () => {
  game.stop();
  showScreen("menu");
});

renderSongList();
showScreen("menu");
