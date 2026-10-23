import {mountExamDesk} from './exam-desk.js?v=2';
const clamp=(value,min,max)=>Math.min(max,Math.max(min,value));
export function inputVelocity(delta,elapsed){return clamp(delta*1000/Math.max(8,elapsed),-2200,2200);}
export function advanceBody(body,seconds,limits={x:65,y:45,angle:30}){
 const dt=Math.min(Math.max(seconds,0),.04),drag=Math.exp(-5.8*dt);
 const next={...body};
 for(const [position,velocity,limit] of [['x','vx',limits.x],['y','vy',limits.y],['angle','spin',limits.angle]]){
  next[velocity]=(body[velocity]-body[position]*15*dt)*drag;
  next[position]=clamp(body[position]+next[velocity]*dt,-limit,limit);
  if(Math.abs(next[position])>=limit&&Math.sign(next[velocity])===Math.sign(next[position]))next[velocity]*=-.35;
  if(Math.abs(next[position])<.015&&Math.abs(next[velocity])<.04){next[position]=0;next[velocity]=0;}
 }
 return next;
}
export function bodyIsMoving(body){return ['x','y','angle','vx','vy','spin'].some(key=>Math.abs(body[key])>.03);}
const zero=()=>({x:0,y:0,angle:0,vx:0,vy:0,spin:0});
const pencil=`<svg viewBox="0 0 232 30" fill="none" aria-hidden="true"><path d="m2 15 28-8h166v16H30Z" fill="#baa174"/><path d="m2 15 10-3v6Z" fill="#37342e"/><path d="m13 12 17-5v16l-17-5 8-3Z" fill="#d9bc8d"/><path d="M30 7h150v5H30Z" fill="#b47d3c"/><path d="M30 12h150v7H30Z" fill="#d6ae5c"/><path d="M30 19h150v4H30Z" fill="#8b632f"/><path d="M35 8h142" stroke="#e7c982" stroke-opacity=".6"/><path d="M180 7h19v16h-19Z" fill="#aaa497"/><path d="M181 11h17m-17 3h17m-17 5h17" stroke="#6e6c65" stroke-opacity=".5"/><path d="M199 7h20q10 8 0 16h-20Z" fill="#b4877b"/><path d="M200 9h19q5 2 5 4" stroke="#dac1ad" stroke-opacity=".6"/><text x="79" y="17" fill="#715124" font-size="5.4" letter-spacing="1.5" font-family="serif">WORTREISE · HB</text></svg>`;
const pen=`<svg viewBox="0 0 236 30" fill="none" aria-hidden="true"><path d="m3 16 26-7v14Z" fill="#a09a8d"/><path d="m3 16 8-2v4Z" fill="#333331"/><path d="M28 9h126v14H28Z" fill="#38413c"/><path d="M31 10h124v4H31Z" fill="#62716b"/><path d="M32 20h121v3H32Z" fill="#252e2a"/><path d="M151 7h54q17 0 21 9-4 9-21 9h-54Z" fill="#303a35"/><path d="M156 9h50q12 0 15 5h-65Z" fill="#536159"/><path d="M151 8v16m4-17v18" stroke="#aaa28e" stroke-width="2"/><path d="M175 8h33q8 0 11 9h-4q-1-6-9-6h-31Z" fill="#b8b29f"/><path d="M159 11h10" stroke="#cbd0b9" stroke-opacity=".3"/></svg>`;
export const crumpledPaper=`<svg viewBox="0 0 90 80" fill="none" aria-hidden="true"><path d="m18 11 21-7 26 6 16 20-4 27-17 16-30 2L9 57 4 32Z" fill="#d8cdb7"/><path d="m18 11 22 15L39 4Zm22 15 25-16 2 24Zm0 0L12 40 4 32Zm0 0 27 8-15 15Z" fill="#eee4d1"/><path d="m12 40 28-14-4 31Zm24 17 16-8 8 24Zm16-8 25 8-17 16Z" fill="#bdb097"/><path d="m40 26-4 31 16-8Zm27 8 14-4-4 27-25-8Z" fill="#d3c5ac"/><path d="m9 57 27 0-6 18Zm58-23-2-24 16 20Z" fill="#e7ddc8"/><path d="m18 11 22 15-4 31 24 16M40 26l27 8-15 15M12 40l24 17M39 4l1 22 25-16" stroke="#9b8c7180" stroke-width=".8"/><path d="m20 28 9 5m18-13 9-6m9 30 7 3M19 56l8 8M43 59l5 6" stroke="#fff8e4" stroke-opacity=".6"/></svg>`;
export function pageEphemera(id){const index=['home','learn','exam','sounds','practice','translate','captions'].indexOf(id);return `<div class="page-ephemera" aria-hidden="true" data-scatter="${index}"><span class="creased-rag rag-a"><i></i><i></i><small>${['not quite finished…','noch einmal!','cases & endings','hören → sprechen','keep this word','a thought, twice','[a quiet moment]'][index]}</small></span><span class="creased-rag rag-b"><i></i><i></i></span><span class="paper-crumple page-crumple">${crumpledPaper}</span><span class="page-pencil desk-object"><span class="stationery-shape">${pencil}</span></span></div>`;}
export function mountDeskMotion(){
 const preference=matchMedia('(prefers-reduced-motion: reduce)');let paused=false;
 try{paused=localStorage.getItem('wortreise-desk-motion')==='paused';}catch{}
 const layer=document.createElement('div');layer.className='desk-stationery';layer.setAttribute('aria-hidden','true');layer.setAttribute('inert','');
 layer.innerHTML=`<div class="desk-object object-pencil"><div class="stationery-shape">${pencil}</div></div><div class="desk-object object-pen"><div class="stationery-shape">${pen}</div></div><div class="desk-object object-pencil-second"><div class="stationery-shape">${pencil}</div></div><div class="desk-object object-crumple"><div class="stationery-shape">${crumpledPaper}</div></div>`;
 document.body.append(layer);
 const objects=[...layer.children,...document.querySelectorAll('.page-pencil')].map((el,index)=>({el,body:zero(),factor:[1,.7,.85,.46][index]||.6}));
 const toggle=document.createElement('button');toggle.className='desk-motion-toggle';toggle.type='button';toggle.innerHTML='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m4 17-1 4 4-1L20 7l-3-3Zm10-10 3 3M3 7h6M3 11h3"/></svg>';
 document.querySelector('.header-right').append(toggle);
 let frame=0,lastFrame=0,lastScroll=scrollY,scrollTime=0,pointer=null;
 const motionAllowed=()=>!paused&&!preference.matches;
 const enabled=()=>motionAllowed()&&!document.hidden&&(!document.documentElement.dataset.deskScene||document.documentElement.dataset.deskScene==='loose');
 const paint=()=>objects.forEach(({el,body})=>{el.style.transform=`translate3d(${body.x.toFixed(2)}px,${body.y.toFixed(2)}px,0) rotate(${body.angle.toFixed(2)}deg)`;});
 const collectPageObjects=()=>{for(let index=objects.length-1;index>=4;index--)if(!objects[index].el.isConnected)objects.splice(index,1);document.querySelectorAll('.page-pencil').forEach(el=>{if(!objects.some(object=>object.el===el))objects.push({el,body:zero(),factor:.6});});};
 const stop=()=>{cancelAnimationFrame(frame);frame=0;lastFrame=0;objects.forEach(object=>object.body=zero());paint();};
 const sync=()=>{const active=motionAllowed();document.documentElement.dataset.deskMotion=active?'on':'paused';toggle.setAttribute('aria-pressed',String(!active));toggle.setAttribute('aria-label',preference.matches?'Desk motion is reduced by your device settings':active?'Pause moving pens and paper':'Resume moving pens and paper');toggle.title=toggle.getAttribute('aria-label');toggle.disabled=preference.matches;if(!active)stop();document.dispatchEvent(new Event('wortreise:desk-preference'));};
 const tick=time=>{const elapsed=lastFrame?Math.min((time-lastFrame)/1000,.04):1/60;lastFrame=time;const phone=innerWidth<700;let moving=false;objects.forEach((object,index)=>{const limits=index===2?{x:phone?24:60,y:4,angle:6}:index<2?{x:phone?4:12,y:phone?22:49,angle:phone?5:8}:index===3?{x:8,y:18,angle:20}:{x:phone?12:28,y:8,angle:12};object.body=advanceBody(object.body,elapsed,limits);moving=bodyIsMoving(object.body)||moving;});paint();if(moving&&enabled())frame=requestAnimationFrame(tick);else{frame=0;lastFrame=0;}};
 const kick=(vx,vy)=>{if(!enabled())return;objects.forEach((object,index)=>{const sign=index%2?-1:1;object.body.vx+=vx*.075*object.factor;object.body.vy+=vy*.085*object.factor*sign;object.body.spin+=(vx*.016+vy*.027)*object.factor*sign;});if(!frame)frame=requestAnimationFrame(tick);};
 window.addEventListener('scroll',()=>{const now=performance.now(),position=scrollY,delta=position-lastScroll;lastScroll=position;const elapsed=scrollTime?now-scrollTime:32;scrollTime=now;if(Math.abs(delta)>innerHeight*1.2||!delta)return;kick(delta*.13,inputVelocity(delta,elapsed));},{passive:true});
 window.addEventListener('pointermove',event=>{if(event.pointerType!=='mouse'||!enabled())return;const now=performance.now();if(pointer){const elapsed=now-pointer.time;kick(inputVelocity(event.clientX-pointer.x,elapsed)*.42,inputVelocity(event.clientY-pointer.y,elapsed)*.42);}pointer={x:event.clientX,y:event.clientY,time:now};},{passive:true});
 document.addEventListener('pointerleave',()=>{pointer=null;});
 document.addEventListener('wortreise:pages-updated',collectPageObjects);
 window.addEventListener('hashchange',()=>{collectPageObjects();lastScroll=scrollY;scrollTime=0;pointer=null;stop();});
 window.addEventListener('resize',()=>{lastScroll=scrollY;pointer=null;stop();},{passive:true});
 document.addEventListener('visibilitychange',()=>{pointer=null;lastScroll=scrollY;sync();});preference.addEventListener('change',sync);
 toggle.addEventListener('click',()=>{paused=!paused;try{localStorage.setItem('wortreise-desk-motion',paused?'paused':'on');}catch{}sync();});sync();mountExamDesk({motionAllowed,resetMotion:stop});
}
