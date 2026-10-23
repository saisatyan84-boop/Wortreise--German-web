// The book owns navigation; this short, cancellable scene begins only after it opens.
export function deskAction(previous,next){return next==='exam'?'collect':previous==='exam'?'scatter':'none';}
const loosePaper='.scroll-section:not([hidden]) .book-scrap,.scroll-section:not([hidden]) .creased-rag,.scroll-section:not([hidden]) .paper-crumple,.desk-scraps i,.object-crumple';
const binDrawing=`<svg viewBox="0 0 100 112" fill="none" aria-hidden="true"><ellipse cx="50" cy="102" rx="36" ry="6" fill="#352e2520"/><path d="m19 31 7 65q24 11 48 0l7-65" fill="#8d9689" stroke="#474f45" stroke-width="2"/><path d="m24 34 7 59q19 7 38 0l7-59" fill="#b5baaa"/><path d="m29 39 39 52M28 55l28 38m-26-7 6 7m35-54L32 91m41-35L45 94m27-16L58 94M23 44h54M25 59h50M27 75h46M28 88h43" stroke="#727e6c" stroke-width="1.1"/><ellipse cx="50" cy="32" rx="31" ry="8" fill="#525e4f" stroke="#3d473b" stroke-width="2"/><ellipse cx="50" cy="31" rx="25" ry="4" fill="#303b2d"/><path d="M20 33q30 12 60 0" stroke="#d6dcc8" stroke-width="1.7"/><path d="m23 39 6 53" stroke="#e2e5d3" stroke-opacity=".55" stroke-width="2"/><path d="M28 96q22 8 44 0" stroke="#56634f" stroke-width="2"/><g class="bin-lid"><path d="M42 12v-5q8-4 16 0v5" stroke="#454f40" stroke-width="3"/><path d="m15 22 4-9q31-10 62 0l4 9q-35 9-70 0Z" fill="#a6ad9b" stroke="#4e5948" stroke-width="2"/><path d="M24 17q26-7 52 0" stroke="#dbe0cd" stroke-width="2"/><path d="M17 22q33 9 66 0" stroke="#636f59" stroke-width="2"/></g></svg>`;

export function mountExamDesk({motionAllowed,resetMotion}){
 const root=document.documentElement;
 const scene=document.createElement('div');scene.className='exam-desk-scene';scene.setAttribute('aria-hidden','true');scene.setAttribute('inert','');
 scene.innerHTML=`<div class="tidy-pen-tray"><span>bereit zum Lernen.</span><div class="tidy-pen-rows"></div></div><div class="cleanup-bin">${binDrawing}</div><div class="desk-flight-layer"></div>`;
 document.body.append(scene);
 const tray=scene.querySelector('.tidy-pen-tray'),rows=scene.querySelector('.tidy-pen-rows'),bin=scene.querySelector('.cleanup-bin'),flights=scene.querySelector('.desk-flight-layer');
 let generation=0,animations=new Set(),initialFrame=0;
 const writingTools=()=>[...document.querySelectorAll('.desk-stationery .desk-object:not(.object-crumple),.scroll-section:not([hidden]) .page-pencil')];
 const fillTray=()=>{rows.innerHTML=writingTools().map(el=>`<i>${el.querySelector('svg').outerHTML}</i>`).join('');};
 const cancel=()=>{generation++;cancelAnimationFrame(initialFrame);animations.forEach(a=>a.cancel());animations.clear();flights.replaceChildren();bin.style.opacity='0';};
 const play=(el,frames,options)=>{const a=el.animate(frames,{fill:'both',...options});animations.add(a);return a.finished.catch(()=>{});};
 const finalState=next=>{root.dataset.deskLayout=next==='exam'?'tidy':'loose';root.dataset.deskScene=next==='exam'?'tidy':'loose';tray.style.opacity=next==='exam'?'1':'0';bin.style.opacity='0';};
 const paperItems=()=>[...document.querySelectorAll(loosePaper)].map(el=>{const rect=el.getBoundingClientRect();return {el,rect,markup:el.outerHTML};}).filter(({el,rect})=>getComputedStyle(el).display!=='none'&&rect.width&&rect.height&&rect.bottom>0&&rect.top<innerHeight&&rect.right>0&&rect.left<innerWidth);
 const cloneAt=(item,kind)=>{const clone=document.createElement('div');clone.className='desk-flight '+kind;Object.assign(clone.style,{left:item.rect.left+'px',top:item.rect.top+'px',width:item.rect.width+'px',height:item.rect.height+'px'});if(kind==='pen-flight')clone.innerHTML=item.el.querySelector('svg').outerHTML;else{const content=item.el.cloneNode(true);content.removeAttribute('style');content.className='collected-paper';const css=getComputedStyle(item.el);Object.assign(content.style,{background:css.background,color:css.color,font:css.font,clipPath:css.clipPath,padding:css.padding});clone.append(content);}flights.append(clone);return clone;};
 const toolAngle=el=>el.classList.contains('object-pencil')?-76:el.classList.contains('object-pen')?72:-5;
 const moveTools=(items,reverse=false,startDelay=0)=>Promise.all(items.map((item,index)=>{const slot=rows.children[index]?.getBoundingClientRect();if(!slot)return;const clone=cloneAt(item,'pen-flight');clone.style.transformOrigin='50% 50%';const dx=slot.left+slot.width/2-item.rect.left-item.rect.width/2,dy=slot.top+slot.height/2-item.rect.top-item.rect.height/2,scale=slot.width/item.rect.width;const scattered={transform:`translate(0,0) rotate(${toolAngle(item.el)}deg) scale(1)`,opacity:1},neat={transform:`translate(${dx}px,${dy}px) rotate(0deg) scale(${scale})`,opacity:1};return play(clone,reverse?[neat,{transform:`translate(${dx*.4}px,${dy*.4-28}px) rotate(${toolAngle(item.el)*.6+12}deg) scale(${(1+scale)/2})`,opacity:1},scattered]:[scattered,{transform:`translate(${dx*.6}px,${dy*.6-25}px) rotate(${toolAngle(item.el)*.3}deg) scale(${(1+scale)/2})`,opacity:1},neat],{duration:760,delay:startDelay+index*65,easing:'cubic-bezier(.22,.65,.3,1)'});}));
 const mouth=()=>{const r=bin.getBoundingClientRect();return {x:r.left+r.width*.5,y:r.top+r.height*.28};};
 const flyPapers=(items,reverse=false,startDelay=0)=>Promise.all(items.map((item,index)=>{const clone=cloneAt(item,'paper-flight'),point=mouth(),dx=point.x-item.rect.left-item.rect.width/2,dy=point.y-item.rect.top-item.rect.height/2;const scattered={transform:'translate(0,0) rotate(0deg) scale(1)',opacity:1};const collected={transform:`translate(${dx}px,${dy}px) rotate(${index%2?220:-190}deg) scale(.04)`,opacity:0};const arc={transform:`translate(${dx*.56}px,${dy*.55-70-(index%3)*24}px) rotate(${index%2?80:-70}deg) scale(.7)`,opacity:1};return play(clone,reverse?[collected,arc,scattered]:[scattered,arc,collected],{duration:reverse?850:900,delay:startDelay+index*40,easing:reverse?'cubic-bezier(.18,.7,.3,1)':'cubic-bezier(.45,0,.8,.45)'});}));
 const run=async(previous,next)=>{
  cancel();resetMotion();fillTray();const token=generation,action=deskAction(previous,next);
  if(action==='none'||!motionAllowed()||document.hidden){finalState(next);return;}
  const tools=writingTools().map(el=>({el,rect:el.getBoundingClientRect()})),papers=paperItems();
  root.dataset.deskScene=action==='collect'?'collecting':'scattering';
  // Hidden originals retain layout; inert flight copies carry the scene without moving study controls.
  root.dataset.deskLayout='tidy';tray.style.opacity=action==='collect'?'0':'1';bin.style.opacity='1';
  if(action==='collect'){
   const clearing=Promise.all([flyPapers(papers,false,370),moveTools(tools,false,370)]);
   await play(bin,[{transform:'translateY(130px) scale(.4)',opacity:0},{transform:'translateY(-10px) scale(1.06)',opacity:1},{transform:'none',opacity:1}],{duration:370,easing:'ease-out'});
   if(token!==generation)return;
   scene.classList.add('bin-open');
   await clearing;
  }else{
   await play(bin,[{transform:'translateY(-110vh) rotate(-32deg)',opacity:1},{offset:.68,transform:'translateY(0) rotate(12deg)',opacity:1},{offset:.83,transform:'translateY(-22px) rotate(-9deg)',opacity:1},{transform:'none',opacity:1}],{duration:620,easing:'cubic-bezier(.5,0,.8,.65)'});
   if(token!==generation)return;
   scene.classList.add('bin-open');tray.style.opacity='0';
   await Promise.all([flyPapers(papers,true),moveTools(tools,true)]);
  }
  if(token!==generation)return;
  // Commit the real layout before removing copies, so there is no empty frame.
  root.dataset.deskLayout=next==='exam'?'tidy':'loose';tray.style.opacity=next==='exam'?'1':'0';flights.replaceChildren();scene.classList.remove('bin-open');
  await play(bin,[{transform:'none',opacity:1},{transform:'translateY(38px) scale(.65)',opacity:0}],{duration:260,easing:'ease-in'});
  if(token===generation){animations.forEach(a=>a.cancel());animations.clear();finalState(next);}
 };
 document.addEventListener('wortreise:book-changing',event=>{cancel();resetMotion();scene.classList.remove('bin-open');root.dataset.deskScene='swapping';root.dataset.deskLayout=event.detail.previous==='exam'?'tidy':'loose';tray.style.opacity=event.detail.previous==='exam'?'1':'0';});
 document.addEventListener('wortreise:book-opened',event=>{if(root.dataset.book===event.detail.next)run(event.detail.previous,event.detail.next);});
 const settle=()=>{cancel();scene.classList.remove('bin-open');fillTray();finalState(root.dataset.book);};
 document.addEventListener('wortreise:desk-preference',()=>{if(!motionAllowed())settle();});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)settle();});
 window.addEventListener('resize',settle,{passive:true});
 document.addEventListener('wortreise:pages-updated',()=>{if(root.dataset.deskScene==='tidy')fillTray();});
 if(root.dataset.book==='exam')initialFrame=requestAnimationFrame(()=>run(null,'exam'));else finalState(root.dataset.book);
}
