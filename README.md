# Wortreise

An everyday German learning site built for absolute beginners. The complete app lives in `dist/` and has no build dependencies.

## Publish on Vercel

Import this directory into a Git repository, then import that repository in Vercel. Use the **Other** framework preset, no build command, and `dist` as the output directory. `vercel.json` already sets that output directory. No API keys or server are required. The Sites hosting identity in `.openai/hosting.json` is unrelated to Vercel and can be omitted from the Vercel repository.

For a local preview, serve `dist` with any local HTTP server, for example `python -m http.server 4173 --directory dist`. Do not open the HTML directly as a file: browser modules and workers require HTTP/HTTPS.

## Features

- 12 beginner lessons, English explanations, spoken phrases, conversations and 36 spelling/grammar checks.
- Alphabet, 14 pronunciation guides, German voices and playback rates from 0.50× to 1.25×.
- Local microphone recording and optional browser speech recognition; recognition compares text, not pronunciation quality.
- 72 lesson phrases plus a featured word; saved words and progress stored locally on each device.
- English/German translation using MyMemory, with honest errors and service-limit handling.
- Browser-local Whisper transcription of short audio/video using Transformers.js 3.8.1 and Xenova/whisper-tiny; multilingual model downloads on first use. Maximum input: 30 MB and 3 minutes. Decode support depends on browser codecs. MP3/WAV are recommended.
- Editable timed captions with speaker, tone, sounds and translated dialogue; SRT/WebVTT import and export. Emotion/speaker/sound labels require human review and are not automatically inferred.

## Services and privacy

Google Fonts supplies DM Sans and Manrope. Speech uses bundled human recordings for German letters and selected sound examples, and browser-local Piper neural voices for other German text. An explicit Device voice option uses voices installed on the visitor's device. Optional browser speech recognition can send audio to the browser vendor's service. Recordings and uploaded media remain in tab memory. Uploaded-media transcription downloads a model and runtime from Hugging Face/jsDelivr and runs on the device; no media upload endpoint is used. MyMemory receives text only when the visitor explicitly chooses translation and imposes anonymous daily quotas. A single request is limited to 450 UTF-8 bytes in this app. Caption translations run sequentially and preserve completed results on service failure. Progress does not sync between devices.

## Manual verification

Check all six navigation views on desktop and at 390px width. Complete all three checks in a lesson and reload to verify progress. Save a word and filter to saved words. Hear a German phrase at 0.5× and 1×. Grant the microphone only when testing recording. Translate a short sentence in each direction. For transcription, choose a short German MP3/WAV, wait for the first model download, review/edit timestamps, add tone and sound cues, translate dialogue and export both formats. Reimport a caption file and verify timestamps. Inspect transcript quality: model output is a draft and can hallucinate on silence/music.

## Content

Original instructional copy and CSS/SVG illustrations. This is an introductory everyday-German course; it does not claim complete CEFR A1 coverage or certification.

## Chrome studio update

All six tools now share one continuous scrolling page with an endless vocabulary review feed. Dark neutral glass panels use cyan, violet, coral, lime and amber accents. A persistent voice selector provides Thorsten (male, high-quality Piper model) and Kerstin (female, low-quality Piper model), generated locally with Piper/VITS and ONNX Runtime Web. No API key is needed. First use downloads the chosen voice (~65–115 MB) plus the phonemizer/runtime. Cached voice models speed up subsequent use. Playback changes preserve pitch. These are synthetic voices and quality differs between models, especially the lower-bandwidth female voice. Browser Device voice is an explicit compatibility option, not a silent fallback. Runtime and model licenses and attribution are in dist/THIRD-PARTY.md.

## Responsive speech and themes

The speech worker, pronunciation module and selected voice inference session remain alive between phrases. Pending requests are coalesced to the newest request, and Stop cancels playback without destroying the warm engine. Only one voice model stays in memory; switching voices reloads the selected model from disk. Thorsten medium is the default Fast neural option; Thorsten high remains available as Studio. Generated WAVs are cached in memory (80 phrases) and persistently through Cache Storage (about 300 phrases), so exact repeats do not require inference, including after reload. The first phrase after loading a page can still require engine setup. New phrases were tested with the warm male engine at about 0.35 seconds generation time in the authoring browser; this is not a guarantee for other devices.

A Light/Dark toggle is pinned beside the wordmark, is keyboard accessible, and saves the choice on the device. The initial default is Light. Light uses white glass with aqua, violet, coral and green accents; Dark uses brighter teal/purple/coral panels.


## Clear native spelling

All 30 German alphabet buttons (A–Z, Ä, Ö, Ü, ß) play individually credited human recordings. Letter-by-letter spelling uses the same clips with a 220 ms pause between letters, 380 ms between words, and a highlighted letter. Unicode normalization preserves combining umlauts and capital ẞ; ß is one Eszett recording, never expanded into two S letters. Punctuation is skipped; unsupported characters produce a clear message. Stops interrupt both playback and the sequence. Names of letters differ from the sounds they make inside words.

Selected sound-example words also use human recordings. These recordings have their original speaker; the male/female selector applies to generated phrases, not the recorded alphabet. All audio sources, authors, licenses and conversion details are in `dist/audio/credits.html` and `dist/audio/sources.json`. WAV clips are packaged with the app, need no model download, and preserve pitch at the chosen playback speed. Phrase generation still requires the selected neural model on first use.

Vocabulary cards synchronize saved states and counts across the page, including the saved-word filter. The continuous review feed shuffles the course vocabulary and exhausts its deck before reshuffling.

Run `npm run check` with Node.js 18+ to verify JavaScript syntax, the recording assets, Unicode spelling and credits.
