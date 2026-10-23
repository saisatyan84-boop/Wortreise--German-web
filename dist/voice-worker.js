import {predict} from './vits-web.js';
let running=false,queued=null;
async function drain(){if(running||!queued)return;const data=queued;queued=null;running=true;const start=performance.now();try{const blob=await predict({text:data.text,voiceId:data.voiceId},p=>self.postMessage({type:'status',message:p.total?`Downloading this voice: ${Math.min(100,Math.round(p.loaded/p.total*100))}%`:`Downloading voice: ${(p.loaded/1048576).toFixed(1)} MB…`}));self.postMessage({id:data.id,blob,ms:performance.now()-start})}catch(e){self.postMessage({id:data.id,error:e.message||String(e)})}finally{running=false;drain()}}
self.onmessage=({data})=>{if(data.type==='cancel'){queued=null;return}queued=data;drain()};
