export const sectionIds=['home','learn','exam','sounds','practice','translate','captions'];
export function sectionForHash(hash){const name=hash.replace(/^#/,'');if(name==='exam-model')return 'exam';if(name==='infinite')return 'practice';return sectionIds.includes(name)?name:'home';}
