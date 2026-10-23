// Piper models have their own symbol tables, including different older German tables.
export function modelPhonemeIds(phonemes,config){
 if(!Array.isArray(phonemes))throw Error('The pronunciation engine did not return sound symbols.');
 const map=config.phoneme_id_map,limit=config.num_symbols;
 const mapped=symbol=>{const ids=map?.[symbol];if(!ids?.length||ids.some(id=>!Number.isInteger(id)||id<0||id>=limit))throw Error('This voice does not support a sound in this phrase. Try the other German voice.');return ids;};
 const pad=mapped('_'),ids=[...mapped('^'),...pad];
 // Compose c + cedilla as ç before mapping; older voices do not have the separate mark.
 const normalized=phonemes.join('').normalize('NFC');
 for(const symbol of normalized){
  const replacement=config.phoneme_map?.[symbol]||[symbol];
  for(const sound of replacement){if(!map[sound]&&/\p{M}/u.test(sound))continue;ids.push(...mapped(sound),...pad);}
 }
 ids.push(...mapped('$'));return ids;
}
