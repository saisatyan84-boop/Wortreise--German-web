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

Caveat, Kalam, Lora, DM Sans and Manrope are bundled locally; their OFL licenses are included. Speech uses bundled human recordings for German letters and selected sound examples, and browser-local Piper neural voices for other German text. An explicit Device voice option uses voices installed on the visitor's device. Optional browser speech recognition can send audio to the browser vendor's service. Recordings and uploaded media remain in tab memory. Uploaded-media transcription downloads a model and runtime from Hugging Face/jsDelivr and runs on the device; no media upload endpoint is used. MyMemory receives text only when the visitor explicitly chooses translation and imposes anonymous daily quotas. A single request is limited to 450 UTF-8 bytes in this app. Caption translations run sequentially and preserve completed results on service failure. Progress does not sync between devices.

## Manual verification

Check all seven navigation views on desktop and at 390px width. Complete all three checks in a lesson and reload to verify progress. Save a word and filter to saved words. Hear a German phrase at 0.5× and 1×. Grant the microphone only when testing recording. Translate a short sentence in each direction. For transcription, choose a short German MP3/WAV, wait for the first model download, review/edit timestamps, add tone and sound cues, translate dialogue and export both formats. Reimport a caption file and verify timestamps. Inspect transcript quality: model output is a draft and can hallucinate on silence/music.

## Content

Original instructional copy and CSS/SVG illustrations. This is an introductory everyday-German course; it does not claim complete CEFR A1 coverage or certification.

## Chrome studio update

Seven navigation sections each show a focused view, with a finite word collection in Practice & words. Dark neutral glass panels use cyan, violet, coral, lime and amber accents. A persistent voice selector provides Thorsten (male, high-quality Piper model) and Kerstin (female, low-quality Piper model), generated locally with Piper/VITS and ONNX Runtime Web. No API key is needed. First use downloads the chosen voice (~65–115 MB) plus the phonemizer/runtime. Cached voice models speed up subsequent use. Playback changes preserve pitch. These are synthetic voices and quality differs between models, especially the lower-bandwidth female voice. Browser Device voice is an explicit compatibility option, not a silent fallback. Runtime and model licenses and attribution are in dist/THIRD-PARTY.md.

## Responsive speech and themes

The speech worker, pronunciation module and selected voice inference session remain alive between phrases. Pending requests are coalesced to the newest request, and Stop cancels playback without destroying the warm engine. Only one voice model stays in memory; switching voices reloads the selected model from disk. Thorsten medium is the default Fast neural option; Thorsten high remains available as Studio. Generated WAVs are cached in memory (80 phrases) and persistently through Cache Storage (about 300 phrases), so exact repeats do not require inference, including after reload. The first phrase after loading a page can still require engine setup. New phrases were tested with the warm male engine at about 0.35 seconds generation time in the authoring browser; this is not a guarantee for other devices.

A Light/Dark toggle is pinned beside the wordmark, is keyboard accessible, and saves the choice on the device. The initial default is Light. Light uses white glass with aqua, violet, coral and green accents; Dark uses brighter teal/purple/coral panels.


## Clear native spelling

All 30 German alphabet buttons (A–Z, Ä, Ö, Ü, ß) play individually credited human recordings. Letter-by-letter spelling uses the same clips with a 220 ms pause between letters, 380 ms between words, and a highlighted letter. Unicode normalization preserves combining umlauts and capital ẞ; ß is one Eszett recording, never expanded into two S letters. Punctuation is skipped; unsupported characters produce a clear message. Stops interrupt both playback and the sequence. Names of letters differ from the sounds they make inside words.

Selected sound-example words also use human recordings. These recordings have their original speaker; the male/female selector applies to generated phrases, not the recorded alphabet. All audio sources, authors, licenses and conversion details are in `dist/audio/credits.html` and `dist/audio/sources.json`. WAV clips are packaged with the app, need no model download, and preserve pitch at the chosen playback speed. Phrase generation still requires the selected neural model on first use.

Vocabulary cards synchronize saved states and counts across the page, including the saved-word filter.

Run `npm run check` with Node.js 18+ to verify JavaScript syntax, the recording assets, Unicode spelling and credits.


## Semester exam section

The `#exam` study guide and ZIP practice follow the German-folder material supplied from EndSem.zip; the uploaded model paper has its own tab:

- `german end-sem 26 notes.pdf` (10 pages): welch-, dies-, dative personal pronouns, man, W-questions and time expressions.
- `german end-sem vocab 2026.pdf` (11 pages): clothing, shops, holiday types, destinations/travel verbs, tourist attractions, weather, orientation, direction phrases and workplaces. Picture-only pages were visually checked. There are 191 vocabulary entries across the nine themes, including context-specific repeats.
- `end-sem practice book german 2026.pdf` (18 pages): 14 grammar topics with 210 grammar and 45 vocabulary questions and answer keys.

All 255 workbook questions and 52 notes exercises are available as 307 interactive practice questions. The study guide includes English explanations, case/conjugation tables, audio examples, common mistakes and original source question ranges. Exam progress uses its own local storage key and does not change everyday-course progress. A mixed 20-question revision includes one question from each grammar topic and six vocabulary questions. It is revision practice, not an official predicted paper or marking scheme.

The Corrections & sources tab records 16 corrections/clarifications. Examples: workbook #48 needs sollst for du; #72 needs heiß for soup fresh from the stove; #133 needs accusative sie after für; #159 needs der after nach with Arbeit. Formal pronouns distinguish Ihnen from ihnen in both directions. The notes’ broad “always dative” time-preposition heading is corrected. Split-ending and malformed prompts are normalized to complete-word answer boxes and identified in the source notes.

Source filenames, page counts and SHA-256 hashes are recorded in `dist/exam-questions.js`; original PDF scans and third-party illustrations are not redistributed. Study explanations are written for the supplied topics, with no assumed exam date, marks or additional units. `tests/verify-exam.mjs` checks source coverage, page references, all model answers, key corrections and grading behavior.


## Uploaded term-end model question paper

The `#exam-model` link opens the Model paper & answers tab directly. It includes the user-supplied five-page `German model qp end term Oct 26.pdf`, preserved byte-for-byte in `dist/exam-resources/german-model-paper.pdf`. Its SHA-256 and printed metadata are in `model-paper-data.js`: 180 minutes, 90 marks, all six main questions, and 5/8/8/4 sub-part marks for Q4–Q6. These are model-paper details, not an independently confirmed final-exam announcement.

All 40 grammar items have worked answers, explanations, English meanings and model-match checks. Fourteen open writing prompts have complete model responses, line-by-line English meanings, speech buttons, editable drafts and self-review checklists based on the paper. The application email, telephone and sales dialogues, route description, question/answer pairs and four-sentence travel report are all included. Models are authored revision answers; no official answer key was in the PDF. Alternative writing answers are possible and are not automatically awarded marks.

Five preparation guides cover the additional tested skills: dative possessives, können/wollen/müssen, location versus placement and adjective endings, the new verb forms, and writing structure. Additional source vocabulary includes application/career terms. The Q2 A2 blank accepts both wollen and können because the paper does not require each modal to be used once. The text-only Q6 route is explicitly fictional, with enough streets, turns, sequence words and a landmark to satisfy the prompt; it is not real Vienna navigation. Invented application details are identified as model choices.

Model-paper practice uses a separate local storage key from the 307 ZIP exercises. Drafts and self-review criteria are saved locally. Grammar matches and self-reviewed writing are reported as practice progress, not as a predicted mark out of 90. A text download contains all questions and worked answers; the original PDF can be opened from the same tab.


## Separate section navigation

Navigation now displays one section at a time: Overview, Learning path, Semester exam, Sound studio, Practice & words, Translator or Caption studio. Other sections are hidden from layout, keyboard focus and the accessibility tree. The infinite review feed and scroll observers are removed. Pages keep their drafts, filters and progress while switching sections. Navigation stops playback and recording, updates the active link and returns to the top of the chosen section. The model-paper deep link still opens its exam tab directly. Old #infinite links redirect to the finite Practice & words view.


## Illustrated bookshelf redesign (2.0)

The seven sections are independent physical notebooks. Everyday volumes include: Overview (an ivory scrapbook), Learning path (a ruled school notebook), Sound studio (a dotted field journal), Practice & words (a kraft word collector), Translator (a blue-lined phrasebook), and Caption studio (a monochrome ink/comic notebook). Each has its own binding, paper texture, pencil doodles, torn scraps, sticky-note placement and book cover. The Semester exam is a graph-paper revision notebook with a red binding, pencil annotations and an independent margin note. Its study-guide, vocabulary, practice and model-paper tabs and readable answer fields keep the same workflow.

The background textures are original procedural SVG paper/fibre patterns, not copied images. Caveat, Kalam, Lora, DM Sans and Manrope are bundled locally with their OFL notices. Body text, forms and exam answers retain clear type; informal handwriting is used for the surrounding notebook elements. The original generated German village illustration is in `dist/illustrations/black-forest-ink.png`; asset details are in `dist/THIRD-PARTY.md`.

The design references inspected on Pinterest include:

- https://uk.pinterest.com/pin/messy-junk-journal-spread-in-2025--993043786594029336/
- https://es.pinterest.com/pin/604256475040836472/
- https://in.pinterest.com/pin/158400111888222575/
- https://in.pinterest.com/pin/13721973850193521/
- https://au.pinterest.com/pin/philippe-ogaki-on-instagram-inktober-sketch-_-sketchbook-paper-pen-pencil-artsy-painting-blackandwhite-ink-creative-commission-graphic-manga--627407791833419064/

No Pinterest images are redistributed. The earlier language-app design references informed the navigation and activity hierarchy, while the final visual direction follows the requested handmade books and ink illustration.

Each notebook has a separate editable margin note, saved only on the current device under its own local-storage key. Notes are escaped before rendering and do not appear in other sections. The book transition closes the previous cover, slides it away, brings in the next volume and opens it. Repeated links and study tabs do not replay the animation. Reduced-motion preference skips it and disables the floating scraps.

Other interactions include a 5/10/15-minute focus timer (start, pause, resume and reset), a finite shuffled review round of up to ten everyday or saved words, reveal/hide, self-rated recall and a retry round for tricky cards. Flashcard ratings are session-only self-review, never automatic pronunciation marks. The timer continues while navigating sections; it resets on page reload and does not claim or record study time. The chosen timer duration is saved on the device.

Find a page (Ctrl/Cmd+K or the search button) searches tools, lessons and German/English vocabulary. Arrow keys and Enter navigate the results. Word results open the Sound studio with that word ready to practise. Learning-path filters show all, remaining or completed lessons, with an explanatory empty state. Actual completed-course progress appears in the bookshelf and Overview.

The isolated sections, native spelling recordings, male/female on-device neural voices, playback speed controls, all 307 ZIP exercises and the complete model paper remain available. Tests cover the content and audio, review-deck boundaries, timer expiry/pause, search, safely isolated notes, different book identities and the revision notebook view. Browser checks cover keyboard search, a full review round, a tricky-word retry, timer navigation, saved notes, theme switching, phone layouts and book transitions.


## Reactive stationery and history insert (2.1)

Pens, pencils, creased scraps and small faceted paper balls appear around the desk and notebook margins. Passive scroll and mouse-pointer listeners measure movement velocity and apply bounded impulses to a damped spring model. Stronger/ faster movement produces more motion, which settles when input stops. The animation loop runs only while objects are moving. Resize, book navigation, backgrounding the tab and pausing reset the motion. Touch devices use scroll input; no pointer tracking is transmitted or stored.

The pencil button beside Find a page pauses/resumes desk motion and stores that preference locally. The device's reduced-motion preference disables the reactive effect. Stationery is decorative, hidden from assistive technology and cannot receive clicks or focus. Its movement is constrained to the desk/page margins; answer fields retain normal text and controls. Paper scraps use original CSS/SVG folds and creases.

The translator uses an explicit EN ↔ DE mark. A small modern black-red-gold German flag appears beside the wordmark. Overview includes a labeled historical-context insert about Hitler and Nazi Germany, the Nazi swastika identified as a historical emblem, and the regime's dictatorship and crimes. It links directly to the United States Holocaust Memorial Museum and Deutsches Historisches Museum; the emblem is confined to that critical historical context and is not used in the learning navigation or branding. This insert is separate from the faculty exam material.

Sources for the history insert:
- https://encyclopedia.ushmm.org/content/en/article/introduction-to-the-holocaust
- https://www.dhm.de/lemo/kapitel/ns-regime

`tests/verify-desk-motion.mjs` checks speed-sensitive impulses, motion bounds, decay to rest and long-frame handling. Browser verification includes pause/resume, scroll reaction, exam answer checks and desktop/phone layouts.

## Exam desk choreography (2.2)

After the usual book swap into Semester exam, an illustrated bin pops up and collects loose paper while four writing tools line up in a tray at the bottom right. The bin leaves and the revision desk stays still. Leaving Semester exam preserves the normal book swap, then the bin drops in and spills the decorations back into the newly opened section. All other section changes retain the existing book animation and speed-sensitive stationery.

The sequences are cancellable on rapid navigation, resize, backgrounding, pausing motion or a device reduced-motion preference. In those cases the correct final desk layout appears immediately. Exam tabs never count as a book change. Decorative flight copies are inert and never move inputs, personal notes, answers or study content.

The bin lid renders outside its SVG frame, preventing clipping while it opens. A fresh-ink typography layer strengthens heading and body contrast in both themes, increases small interface labels and reading copy, and preserves dark ink on the light sticky notes.

## Clearer voice playback (2.3)

New visitors start at 0.90×, with saved speed choices preserved and safely bounded. “Prepare voice” loads the selected male/female model and caches the preview without autoplay. Longer text is normalized to German Unicode and split at sentence/word boundaries; the next segment is generated while the current one plays. Audio reuses a single media element, preserves pitch when slowed down, ignores stale worker replies after Stop and reuses bounded memory/persistent phrase caches. The 44 human pronunciation clips warm in the background without downloading a neural model. Device compatibility refuses a German request if no German voice is installed.

Synthetic pronunciation and timing still depend on the model, text, browser and hardware. Preparation is explicit, repeated phrases avoid inference, and novel phrases still need generation. Neither voice is a substitute for reviewed native recordings where a guaranteed pronunciation is required. The existing human alphabet clips are independent of the male/female sentence selector.

A live browser check found and fixed an incompatible phoneme map in the older female model. Both voices now receive IDs from their own model configuration, composing German ç correctly; new audio uses a fresh cache version so earlier generated clips are not replayed. On phones the exam pen tray sits on a reserved footer ledge, separate from the reading area.
