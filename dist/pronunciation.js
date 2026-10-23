import {nativeAudio} from './audio/manifest.js';

let audio, run = 0, finish, waitTimer, spelling = false, playbackRate = 1;
const clips = new Map();
export const letters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜß'];
export const letterIPA = ['aː','beː','tseː','deː','eː','ɛf','ɡeː','haː','iː','jɔt','kaː','ɛl','ɛm','ɛn','oː','peː','kuː','ɛʁ','ɛs','teː','uː','faʊ','veː','ɪks','ˈʏpsilɔn','tsɛt','ɛː','øː','yː','ɛsˈtsɛt'];

export function nativeKey(text) {
  let key = text.normalize('NFC').trim();
  if (key === 'ẞ') key = 'ß';
  if (nativeAudio[key]) return key;
  if (key.length === 1 && nativeAudio[key.toUpperCase()]) return key.toUpperCase();
  return Object.keys(nativeAudio).find(k => k.length > 1 && k.toLocaleLowerCase('de') === key.toLocaleLowerCase('de')) || null;
}

export function stopNative() {
  if (spelling || finish || (audio && !audio.paused)) {
    const status = document.querySelector('#spelling-status');
    if (status) status.textContent = 'Playback stopped. Tap a letter to hear it, or start spelling again.';
  }
  spelling = false;
  run++;
  audio?.pause();
  clearTimeout(waitTimer);
  if (finish) { finish(); finish = null; }
  document.querySelectorAll('.spelling-token.active,.letter.active').forEach(el => el.classList.remove('active'));
}

async function clip(key) {
  if (!clips.has(key)) {
    const pending = fetch(nativeAudio[key], {signal: AbortSignal.timeout(15000)})
      .then(r => { if (!r.ok) throw Error('The recording for ' + key + ' could not load. Please try again.'); return r.blob(); })
      .then(b => URL.createObjectURL(b))
      .catch(e => { clips.delete(key); throw e; });
    clips.set(key, pending);
  }
  return clips.get(key);
}

export function updateNativeRate(rate) {
  playbackRate = Math.min(1.25, Math.max(.5, rate));
  if (audio) audio.playbackRate = playbackRate;
}

async function play(key, token) {
  const src = await clip(key);
  if (token !== run) return;
  // Reuse the same media element for sequential playback on mobile browsers.
  audio ??= new Audio();
  audio.src = src;
  audio.preload = 'auto';
  audio.playbackRate = playbackRate;
  audio.preservesPitch = true;
  return new Promise((resolve, reject) => {
    let settled = false;
    const done = error => {
      if (settled) return;
      settled = true;
      finish = null;
      error ? reject(error) : resolve();
    };
    finish = () => done();
    audio.onended = () => done();
    audio.onerror = () => done(Error('The recording for ' + key + ' could not play. Please try again.'));
    audio.play().catch(() => done(Error('Tap the letter or Spelling button again to allow audio.')));
  });
}

export async function playNative(text, rate = 1) {
  const key = nativeKey(text);
  if (!key) return false;
  stopNative();
  updateNativeRate(rate);
  const token = run;
  document.querySelectorAll('[data-letter]').forEach(el => el.classList.toggle('active', el.dataset.letter === key));
  try { await play(key, token); }
  finally { if (token === run) document.querySelectorAll('.letter.active').forEach(el => el.classList.remove('active')); }
  return true;
}

export function spellingTokens(text) {
  return [...text.normalize('NFC')]
    .map((char, index) => ({char, key: char === 'ẞ' || char === 'ß' ? 'ß' : char.toLocaleUpperCase('de'), index}))
    .filter(t => !/[.,!?;:"'„“‚‘’()…–—-]/u.test(t.char));
}

function pause(ms) {
  return new Promise(resolve => {
    finish = resolve;
    waitTimer = setTimeout(() => { finish = null; resolve(); }, ms);
  });
}

export async function spellWord(text, rate = 1) {
  stopNative();
  const all = spellingTokens(text);
  if (!all.some(t => nativeAudio[t.key])) throw Error('Enter a German word or phrase first.');
  const invalid = all.find(t => !nativeAudio[t.key] && !/\s/u.test(t.char));
  if (invalid) throw Error('Spelling supports German letters. Please remove “' + invalid.char + '” first.');
  updateNativeRate(rate);
  const token = run;
  spelling = true;
  const track = document.querySelector('#spelling-track'), feedback = document.querySelector('#spelling-status');
  if (track) track.replaceChildren(...all.map(t => {
    const span = document.createElement('span');
    span.className = 'spelling-token';
    span.textContent = /\s/u.test(t.char) ? '·' : t.char;
    span.dataset.spellingIndex = t.index;
    return span;
  }));
  if (feedback) feedback.textContent = 'Loading the human-recorded letter names…';
  try {
    await Promise.all([...new Set(all.filter(t => nativeAudio[t.key]).map(t => t.key))].map(clip));
    if (token !== run) return;
    for (const t of all) {
      if (token !== run) return;
      if (/\s/u.test(t.char)) { await pause(380); continue; }
      const current = track?.querySelector('[data-spelling-index="' + t.index + '"]');
      current?.classList.add('active');
      if (feedback) feedback.textContent = 'Letter ' + t.char + ' · /' + letterIPA[letters.indexOf(t.key)] + '/';
      await play(t.key, token);
      current?.classList.remove('active');
      if (token !== run) return;
      await pause(220);
    }
    if (token === run && feedback) feedback.textContent = 'Spelling complete. Now use Hear the word to hear how the whole word sounds.';
  } finally {
    if (token === run) {
      spelling = false;
      document.querySelectorAll('.spelling-token.active').forEach(el => el.classList.remove('active'));
    }
  }
}
