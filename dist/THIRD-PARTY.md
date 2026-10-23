# Speech engine attribution

Browser neural speech uses @diffusionstudio/vits-web 1.0.3 (https://github.com/diffusionstudio/vits-web), Piper phonemization WASM (@diffusionstudio/piper-wasm 1.0.0), and ONNX Runtime Web 1.18.0 (MIT). vits-web.js is adapted to use an explicit browser ESM import, one WASM thread, the original Rhasspy model host, reuse the phonemizer and active inference session between phrases, release the previous session when switching voices, and cache voice models through the browser Cache API. Phonemizer assets and the runtime load from public CDNs. Consult each upstream repository/package for its full applicable license and notices; Piper phonemization uses eSpeak NG (GPL).

Voice datasets: Thorsten Voice (https://github.com/thorstenMueller/Thorsten-Voice), CC0; Kerstin (https://github.com/rhasspy/dataset-voice-kerstin), CC0. Model cards: https://huggingface.co/rhasspy/piper-voices/blob/main/de/de_DE/thorsten/high/MODEL_CARD and https://huggingface.co/rhasspy/piper-voices/blob/main/de/de_DE/kerstin/low/MODEL_CARD. Model generation is local, not a paid speech API. Models are synthetic voices; quality differs, and no human recording or emotional-expression guarantee is made.

## Human pronunciation recordings

The alphabet and selected pronunciation examples include adapted Wikimedia Commons recordings, separate from synthetic voice models. Per-file author, source, license and modifications are listed in audio/credits.html and audio/sources.json. Some clips are CC BY-SA 3.0 or 4.0 and retain those licenses; other clips are public domain. Conversion to mono PCM WAV, peak normalization and surrounding-silence shortening do not change speed or pitch.
