import {voiceOptions,voicePreview,safeRate,spokenText,speechParts} from './speech-utils.js';
let selected='de_DE-thorsten-medium';try{const saved=localStorage.getItem('wortreise-neural-voice');if(voiceOptions[saved])selected=saved;}catch{}
let worker,player,finishPlayer,seq=0,requestId=0,activeRate=.9;
const pending=new Map(),memory=new Map();
const announce=message=>document.querySelectorAll('[data-voice-status]').forEach(el=>el.textContent=message);
export function selection(){return selected;}
function settlePlayer(){player?.pause();finishPlayer?.();finishPlayer=null;}
export function stopVoice(){seq++;settlePlayer();window.speechSynthesis?.cancel();for(const request of pending.values())request.resolve(null);pending.clear();worker?.postMessage({type:'cancel'});announce('Ready when you are.');}
export function choose(value){if(!voiceOptions[value])return;stopVoice();selected=value;try{localStorage.setItem('wortreise-neural-voice',value);}catch{}document.querySelectorAll('[data-neural-voice]').forEach(el=>el.value=value);announce(value==='device'?'Device voice selected. Choose a German voice installed on your device.':'Voice selected. Tap Prepare voice once to get ready.');}
function getWorker(){
 if(worker)return worker;
 worker=new Worker('voice-worker.js?v=3',{type:'module'});
 worker.onmessage=({data})=>{
  if(data.type==='status'){if(pending.size)announce(data.message);return;}
  const request=pending.get(data.id);if(!request)return;pending.delete(data.id);
  if(data.error)request.reject(Error(data.error));else request.resolve(data.blob);
 };
 worker.onerror=()=>{for(const request of pending.values())request.reject(Error('This browser could not start the neural voice. Choose Device voice or try another browser.'));pending.clear();worker?.terminate();worker=null;};
 return worker;
}
async function voiceBlob(text,voice,token){
 const key=voice+'|'+text;if(memory.has(key))return memory.get(key);
 let store,url,blob;
 try{store=await caches.open('wortreise-spoken-v4');url=new URL('/__spoken/'+encodeURIComponent(key),location.origin).href;const hit=await store.match(url);if(hit)blob=await hit.blob();}catch{}
 if(token!==seq)return null;
 if(!blob){const id=++requestId;blob=await new Promise((resolve,reject)=>{pending.set(id,{resolve,reject});getWorker().postMessage({id,text,voiceId:voice});});}
 if(!blob||token!==seq)return null;
 memory.set(key,blob);if(memory.size>100)memory.delete(memory.keys().next().value);
 if(store&&url)store.put(url,new Response(blob)).then(async()=>{const keys=await store.keys();if(keys.length>300)await store.delete(keys[0]);}).catch(()=>{});
 return blob;
}
export async function prepareVoice(){
 stopVoice();if(selected==='device'){announce('Device voice selected. No neural model download is needed.');return;}
 const token=seq,voice=selected;announce('Preparing your voice… keep this tab open.');
 for(const part of speechParts(voicePreview)){if(token!==seq)return;await voiceBlob(part,voice,token);}
 if(token===seq)announce(`${voiceOptions[voice].name} ready. Preview is cached; new sentences generate on your device.`);
}
function playBlob(blob,token){
 if(token!==seq)return Promise.resolve();
 player??=new Audio();const audio=player,url=URL.createObjectURL(blob);audio.src=url;audio.preload='auto';audio.playbackRate=activeRate;audio.preservesPitch=true;
 return new Promise((resolve,reject)=>{let settled=false;const done=error=>{if(settled)return;settled=true;URL.revokeObjectURL(url);if(finishPlayer===stop)finishPlayer=null;audio.onended=null;audio.onerror=null;error?reject(error):resolve();};const stop=()=>done();finishPlayer=stop;audio.onended=()=>done();audio.onerror=()=>done(Error('This audio could not play. Tap Listen again.'));audio.play().catch(()=>done(Error('Voice is ready. Tap Listen again to allow playback.')));});
}
function deviceSpeak(text,lang,token){
 if(!window.speechSynthesis)throw Error('Device speech is unavailable. Choose a neural German voice.');
 const candidates=speechSynthesis.getVoices().filter(voice=>voice.lang.toLowerCase().startsWith(lang.slice(0,2).toLowerCase()));
 if(!candidates.length)throw Error(`No ${lang.startsWith('de')?'German':'English'} device voice is available. ${lang.startsWith('de')?'Choose Thorsten or Kerstin.':'Install an English voice on your device.'}`);
 return new Promise(resolve=>{const utterance=new SpeechSynthesisUtterance(text);utterance.lang=lang;utterance.rate=activeRate;utterance.voice=candidates.find(voice=>/natural|online|premium|enhanced/i.test(voice.name))||candidates[0];const done=()=>{if(finishPlayer===done)finishPlayer=null;resolve();};finishPlayer=done;utterance.onend=done;utterance.onerror=event=>{done();if(token===seq&&!['canceled','interrupted'].includes(event.error))announce('Device speech could not play. Choose a neural German voice.');};speechSynthesis.speak(utterance);});
}
export async function neuralSpeak(value,rate=.9,lang='de-DE'){
 stopVoice();const text=spokenText(value);if(!text)return;
 const token=seq,voice=selected;activeRate=safeRate(rate);
 if(lang.startsWith('en')||voice==='device')return deviceSpeak(text,lang,token);
 const parts=speechParts(text);announce('Preparing the first phrase…');
 let upcoming=voiceBlob(parts[0],voice,token);
 for(let index=0;index<parts.length;index++){
  const blob=await upcoming;if(!blob||token!==seq)return;
  // Prepare the next bounded sentence while this one plays; catch failures immediately.
  upcoming=index+1<parts.length?voiceBlob(parts[index+1],voice,token).then(blob=>({blob}),error=>({error})):null;
  announce(`${voiceOptions[voice].name} · ${voiceOptions[voice].gender} · ${activeRate.toFixed(2)}× · phrase ${index+1}/${parts.length}`);
  await playBlob(blob,token);if(token!==seq)return;
  if(upcoming){const result=await upcoming;if(result.error)throw result.error;upcoming=Promise.resolve(result.blob);}
 }
 if(token===seq)announce(`${voiceOptions[voice].name} · replay ready · ${activeRate.toFixed(2)}×`);
}
export function updateAudioRate(rate){activeRate=safeRate(rate);if(player)player.playbackRate=activeRate;}
