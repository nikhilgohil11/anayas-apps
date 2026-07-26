import { playNote } from "./audio.js";

const PAD_LABELS = [
  { id: "do", solfege: "Do", letter: "C" },
  { id: "re", solfege: "Re", letter: "D" },
  { id: "mi", solfege: "Mi", letter: "E" },
  { id: "fa", solfege: "Fa", letter: "F" },
  { id: "sol", solfege: "Sol", letter: "G" },
  { id: "la", solfege: "La", letter: "A" },
  { id: "ti", solfege: "Ti", letter: "B" },
];

export class MelodyGame {
  /**
   * @param {{
   *   padRow: HTMLElement,
   *   progressEl: HTMLElement,
   *   titleEl: HTMLElement,
   *   onComplete: (song: { id: string, title: string, notes: string[] }) => void,
   * }} options
   */
  constructor({ padRow, progressEl, titleEl, onComplete }) {
    this.padRow = padRow;
    this.progressEl = progressEl;
    this.titleEl = titleEl;
    this.onComplete = onComplete;
    this.song = null;
    this.index = 0;
    this.active = false;
    this.pads = new Map();

    this.#buildPads();
  }

  #buildPads() {
    this.padRow.replaceChildren();

    for (const pad of PAD_LABELS) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "pad";
      button.dataset.pad = pad.id;
      button.setAttribute("aria-label", `${pad.solfege} (${pad.letter})`);
      button.innerHTML = `
        <span class="pad__solfege">${pad.solfege}</span>
        <span class="pad__letter">${pad.letter}</span>
      `;

      button.addEventListener("pointerdown", (event) => {
        event.preventDefault();
        this.#handlePadPress(pad.id, button);
      });

      this.padRow.appendChild(button);
      this.pads.set(pad.id, button);
    }
  }

  /**
   * @param {{ id: string, title: string, notes: string[] }} song
   */
  start(song) {
    this.song = song;
    this.index = 0;
    this.active = true;
    this.titleEl.textContent = song.title;
    this.#clearMiss();
    this.#updateProgress();
    this.#highlightTarget();
  }

  stop() {
    this.active = false;
    this.song = null;
    this.index = 0;
    this.#clearTarget();
    this.#clearMiss();
  }

  #currentNote() {
    return this.song?.notes[this.index] ?? null;
  }

  #updateProgress() {
    if (!this.song) {
      this.progressEl.textContent = "Note 0 / 0";
      return;
    }
    const shown = Math.min(this.index + 1, this.song.notes.length);
    this.progressEl.textContent = `Note ${shown} / ${this.song.notes.length}`;
  }

  #clearTarget() {
    for (const pad of this.pads.values()) {
      pad.classList.remove("pad--target");
    }
  }

  #clearMiss() {
    for (const pad of this.pads.values()) {
      pad.classList.remove("pad--miss");
    }
  }

  #highlightTarget() {
    this.#clearTarget();
    const note = this.#currentNote();
    if (!note) return;
    const pad = this.pads.get(note);
    if (pad) {
      pad.classList.add("pad--target");
    }
  }

  /**
   * @param {string} padId
   * @param {HTMLButtonElement} button
   */
  #handlePadPress(padId, button) {
    if (!this.active || !this.song) return;

    const expected = this.#currentNote();
    if (!expected) return;

    if (padId !== expected) {
      button.classList.remove("pad--miss");
      // Force reflow so animation can replay on repeated misses.
      void button.offsetWidth;
      button.classList.add("pad--miss");
      button.addEventListener(
        "animationend",
        () => button.classList.remove("pad--miss"),
        { once: true }
      );
      return;
    }

    playNote(padId);
    this.index += 1;

    if (this.index >= this.song.notes.length) {
      this.active = false;
      this.#clearTarget();
      this.progressEl.textContent = `Note ${this.song.notes.length} / ${this.song.notes.length}`;
      this.onComplete(this.song);
      return;
    }

    this.#updateProgress();
    this.#highlightTarget();
  }
}
