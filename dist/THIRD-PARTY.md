# Speech engine attribution

Browser neural speech uses @diffusionstudio/vits-web 1.0.3 (https://github.com/diffusionstudio/vits-web), Piper phonemization WASM (@diffusionstudio/piper-wasm 1.0.0), and ONNX Runtime Web 1.18.0 (MIT). vits-web.js is adapted to use an explicit browser ESM import, one WASM thread, the original Rhasspy model host, reuse the phonemizer and active inference session between phrases, release the previous session when switching voices, and cache voice models through the browser Cache API. Phonemizer assets and the runtime load from public CDNs. Consult each upstream repository/package for its full applicable license and notices; Piper phonemization uses eSpeak NG (GPL).

Voice datasets: Thorsten Voice (https://github.com/thorstenMueller/Thorsten-Voice), CC0; Kerstin (https://github.com/rhasspy/dataset-voice-kerstin), CC0. Model cards: https://huggingface.co/rhasspy/piper-voices/blob/main/de/de_DE/thorsten/high/MODEL_CARD and https://huggingface.co/rhasspy/piper-voices/blob/main/de/de_DE/kerstin/low/MODEL_CARD. Model generation is local, not a paid speech API. Models are synthetic voices; quality differs, and no human recording or emotional-expression guarantee is made.

## Human pronunciation recordings

The alphabet and selected pronunciation examples include adapted Wikimedia Commons recordings, separate from synthetic voice models. Per-file author, source, license and modifications are listed in audio/credits.html and audio/sources.json. Some clips are CC BY-SA 3.0 or 4.0 and retain those licenses; other clips are public domain. Conversion to mono PCM WAV, peak normalization and surrounding-silence shortening do not change speed or pitch.


## Locally bundled typefaces

Caveat, Kalam, Lora, DM Sans and Manrope are distributed under the SIL Open Font License 1.1. Their license and copyright notices are included in `fonts/*-OFL.txt`. Source: https://github.com/google/fonts (the respective `ofl` family directories). The supplied Google Fonts CSS preserves its character-range declarations.

## Original illustration

`illustrations/black-forest-ink.png` was generated for Wortreise with the built-in image-generation tool. It is an illustrative fictional German village, not a photograph or a real destination guide. No Pinterest pin images are redistributed.

## Model-specific phoneme mapping

The inference adapter now maps the phonemizer’s Unicode sound symbols through each model’s phoneme_id_map, with its beginning/end symbols and interspersed padding. It composes combining characters before mapping, including c + cedilla as ç for the older Kerstin table (130 symbols). This avoids passing the phonemizer’s newer universal IDs into an incompatible model. Upstream format and mapping references: https://github.com/wide-video/piper-phonemize/blob/master/src/phoneme_ids.cpp and the per-voice JSON files on the Rhasspy model host. Regression fixtures contain the male/female symbol tables from those JSON files.
