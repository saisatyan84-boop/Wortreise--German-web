export const voiceOptions={
 'de_DE-thorsten-medium':{name:'Thorsten',gender:'male'},
 'de_DE-thorsten-high':{name:'Thorsten Studio',gender:'male'},
 'de_DE-kerstin-low':{name:'Kerstin',gender:'female'},
 device:{name:'Device voice'}
};
export const voicePreview='Hallo! Ich freue mich, mit dir Deutsch zu lernen. Die Straße ist schön und die Äpfel sind grün.';
export function safeRate(value){return Number.isFinite(Number(value))?Math.max(.5,Math.min(1.25,Number(value))):.9;}
export function spokenText(value){return String(value??'').normalize('NFC').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F\u200B\uFEFF]/g,'').replace(/\s+/gu,' ').trim();}
export function speechParts(value){
 const text=spokenText(value);if(!text)return [];
 const sentences=typeof Intl.Segmenter==='function'?[...new Intl.Segmenter('de',{granularity:'sentence'}).segment(text)].map(item=>item.segment.trim()):text.match(/[^.!?]+(?:[.!?]+(?:[”"’']|$)?|$)/gu)||[text];
 const parts=[];
 for(const sentence of sentences){let part='';for(const word of sentence.split(/\s+/u)){if(part&&part.length+word.length+1>160){parts.push(part);part='';}part+=(part?' ':'')+word;}if(part)parts.push(part);}
 return parts;
}
