import assert from 'node:assert/strict';
import {readFileSync, existsSync, readdirSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {nativeKey, spellingTokens, letters, spellWord, playNative, stopNative, updateNativeRate} from '../dist/pronunciation.js';
import {nativeAudio} from '../dist/audio/manifest.js';

for (const name of readdirSync(new URL('../dist/', import.meta.url)).filter(n => n.endsWith('.js'))) {
  const result = spawnSync(process.execPath, ['--check', fileURLToPath(new URL('../dist/' + name, import.meta.url))], {encoding:'utf8'});
  assert.equal(result.status, 0, result.stderr);
}
assert.equal(letters.length, 30);
for (const letter of letters) assert.ok(nativeAudio[letter], `Missing letter ${letter}`);
assert.deepEqual(spellingTokens('Straße').map(t=>t.key), ['S','T','R','A','ß','E']);
assert.deepEqual(spellingTokens('gru\u0308n').map(t=>t.key), ['G','R','Ü','N']);
assert.deepEqual(spellingTokens('ẞ!').map(t=>t.key), ['ß']);
assert.equal(nativeKey('ü'), 'Ü');
assert.equal(nativeKey('ẞ'), 'ß');
assert.equal(nativeKey('SchÖn'), 'schön');
assert.equal(nativeKey('unsupported sentence'), null);

const records = JSON.parse(readFileSync(new URL('../dist/audio/sources.json', import.meta.url), 'utf8'));
assert.equal(records.length, 44);
for (const item of records) {
  const path = new URL('../dist/' + item.path, import.meta.url);
  assert.ok(existsSync(path));
  assert.ok(item.source && item.author && item.license && item.changes);
  const wav = readFileSync(path);
  assert.equal(wav.toString('ascii',0,4), 'RIFF');
  let pos=12, data, sampleRate;
  while(pos+8<=wav.length) {
    const kind=wav.toString('ascii',pos,pos+4), size=wav.readUInt32LE(pos+4);
    if(kind==='fmt ') {assert.equal(wav.readUInt16LE(pos+8),1);assert.equal(wav.readUInt16LE(pos+10),1);sampleRate=wav.readUInt32LE(pos+12);assert.equal(wav.readUInt16LE(pos+22),16);}
    if(kind==='data')data=wav.subarray(pos+8,pos+8+size);
    pos+=8+size+(size%2);
  }
  assert.ok(data && sampleRate);
  let peak=0, energy=0;
  for(let i=0;i<data.length;i+=2){const x=data.readInt16LE(i)/32768;peak=Math.max(peak,Math.abs(x));energy+=x*x;}
  assert.ok(peak>.03 && peak<.99, 'Silent or clipped: '+item.label);
  assert.ok(Math.sqrt(energy/(data.length/2))>.005, 'Inaudible RMS: '+item.label);
  assert.ok(data.length/2/sampleRate>.25 && data.length/2/sampleRate<5);
}
console.log('PASS: 44 attributed PCM recordings, audible waveform levels, all 30 letters and Unicode spelling.');

// Exercise the audio sequence independently of browser media decoding.
const feedback={textContent:''};
globalThis.document={querySelector:s=>s==='#spelling-status'?feedback:null,querySelectorAll:()=>[]};
const paths=Object.fromEntries(Object.entries(nativeAudio).map(([key,path])=>[path,key]));
globalThis.fetch=async path=>({ok:true,blob:async()=>({source:paths[path]})});
URL.createObjectURL=blob=>blob.source;
let played=[],hold=false,fail=false,last;
globalThis.Audio=class {
  constructor(src){this.src=src;this.paused=true;last=this;}
  play(){this.paused=false;played.push(this.src);if(fail)return Promise.reject(Error('blocked'));if(!hold)queueMicrotask(()=>{this.paused=true;this.onended?.()});return Promise.resolve();}
  pause(){this.paused=true;}
};
await assert.rejects(spellWord('Straße123'), /remove “1”/);
await spellWord('Straße');
assert.deepEqual(played,['S','T','R','A','ß','E']);
assert.match(feedback.textContent,/Spelling complete/);
played=[];hold=true;
const pending=spellWord('AB');
await new Promise(setImmediate);
assert.deepEqual(played,['A']);
updateNativeRate(.5);assert.equal(last.playbackRate,.5);assert.equal(last.preservesPitch,true);
stopNative();await pending;
assert.deepEqual(played,['A']);
assert.match(feedback.textContent,/Playback stopped/);
hold=false;fail=true;
await assert.rejects(playNative('Ü'), /allow audio/);
console.log('PASS: Eszett playback order, completion, cancellation, live speed changes and surfaced playback errors.');
