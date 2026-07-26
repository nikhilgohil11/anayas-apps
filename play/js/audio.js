const FREQUENCIES = {
  do: 261.63, // C4
  re: 293.66, // D4
  mi: 329.63, // E4
  fa: 349.23, // F4
  sol: 392.0, // G4
  la: 440.0, // A4
  ti: 493.88, // B4
};

let audioContext = null;

function getContext() {
  if (!audioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioCtx();
  }
  return audioContext;
}

/** Call on first user gesture so browsers allow sound. */
export async function unlockAudio() {
  const ctx = getContext();
  if (ctx.state === "suspended") {
    await ctx.resume();
  }
  return ctx;
}

/**
 * Play a short tone for a solfège pad id.
 * @param {keyof typeof FREQUENCIES} padId
 * @param {number} [duration=0.35]
 */
export function playNote(padId, duration = 0.35) {
  const freq = FREQUENCIES[padId];
  if (!freq) return;

  const ctx = getContext();
  const now = ctx.currentTime;

  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(freq, now);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.28, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  oscillator.connect(gain);
  gain.connect(ctx.destination);

  oscillator.start(now);
  oscillator.stop(now + duration + 0.02);
}

export const PAD_IDS = Object.keys(FREQUENCIES);
