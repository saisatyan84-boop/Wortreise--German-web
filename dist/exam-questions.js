export const examSources=[
  {
    "id": "notes",
    "name": "german end-sem 26 notes.pdf",
    "pages": 10,
    "sha256": "584fcb43b833c832ac8dff943ee07ba8441a9ca3d88dc8420e61dd1b47edb016"
  },
  {
    "id": "vocab",
    "name": "german end-sem vocab 2026.pdf",
    "pages": 11,
    "sha256": "b2bf0174ea6f46426a058477d1c22c1cb617f27951a8ea37ccec0eef042848bd"
  },
  {
    "id": "workbook",
    "name": "end-sem practice book german 2026.pdf",
    "pages": 18,
    "sha256": "9c8df68e358415ab474be9dffbe908c39ab79588893a25a19c66ac30c879a7ca"
  }
];
export const examQuestions=[
  {
    "id": "g001",
    "set": "grammar",
    "topic": "perfekt",
    "num": 1,
    "page": 1,
    "source": "workbook",
    "prompt": "Gestern ___ ich spät nach Hause ___. (kommen)",
    "answers": [
      [
        "bin"
      ],
      [
        "gekommen"
      ]
    ],
    "reason": "Kommen describes a change of location: ich bin gekommen.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g002",
    "set": "grammar",
    "topic": "perfekt",
    "num": 2,
    "page": 1,
    "source": "workbook",
    "prompt": "Wir ___ am Wochenende ein neues Auto ___. (kaufen)",
    "answers": [
      [
        "haben"
      ],
      [
        "gekauft"
      ]
    ],
    "reason": "Kaufen normally uses haben; kaufen→gekauft.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g003",
    "set": "grammar",
    "topic": "perfekt",
    "num": 3,
    "page": 1,
    "source": "workbook",
    "prompt": "___ du schon einmal nach Paris ___? (fliegen)",
    "answers": [
      [
        "bist"
      ],
      [
        "geflogen"
      ]
    ],
    "reason": "Fliegen to Paris describes travel: du bist geflogen.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g004",
    "set": "grammar",
    "topic": "perfekt",
    "num": 4,
    "page": 1,
    "source": "workbook",
    "prompt": "Er ___ den ganzen Abend im Restaurant ___. (arbeiten)",
    "answers": [
      [
        "hat"
      ],
      [
        "gearbeitet"
      ]
    ],
    "reason": "Arbeiten uses haben. Add -et: gearbeitet.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g005",
    "set": "grammar",
    "topic": "perfekt",
    "num": 5,
    "page": 1,
    "source": "workbook",
    "prompt": "Die Kinder ___ ihre Hausaufgaben komplett ___. (vergessen)",
    "answers": [
      [
        "haben"
      ],
      [
        "vergessen"
      ]
    ],
    "reason": "Vergessen uses haben. Ver- is inseparable, so there is no added ge-.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g006",
    "set": "grammar",
    "topic": "perfekt",
    "num": 6,
    "page": 1,
    "source": "workbook",
    "prompt": "Warum ___ ihr so schnell ___? (laufen)",
    "answers": [
      [
        "seid"
      ],
      [
        "gelaufen"
      ]
    ],
    "reason": "Laufen here describes travel: ihr seid gelaufen.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g007",
    "set": "grammar",
    "topic": "perfekt",
    "num": 7,
    "page": 1,
    "source": "workbook",
    "prompt": "Sie [she] ___ mir ein wunderschönes Buch ___. (schenken)",
    "answers": [
      [
        "hat"
      ],
      [
        "geschenkt"
      ]
    ],
    "reason": "She is sie: hat geschenkt.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g008",
    "set": "grammar",
    "topic": "perfekt",
    "num": 8,
    "page": 1,
    "source": "workbook",
    "prompt": "Mein Großvater ___ im Jahr 2018 ___. (sterben)",
    "answers": [
      [
        "ist"
      ],
      [
        "gestorben"
      ]
    ],
    "reason": "Sterben is a change of state and uses sein: ist gestorben.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g009",
    "set": "grammar",
    "topic": "perfekt",
    "num": 9,
    "page": 1,
    "source": "workbook",
    "prompt": "Ich ___ gestern acht Stunden ___. (schlafen)",
    "answers": [
      [
        "habe"
      ],
      [
        "geschlafen"
      ]
    ],
    "reason": "Schlafen uses haben, although it describes a state: habe geschlafen.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g010",
    "set": "grammar",
    "topic": "perfekt",
    "num": 10,
    "page": 1,
    "source": "workbook",
    "prompt": "___ Sie den neuen Film schon ___, Herr Müller? (sehen)",
    "answers": [
      [
        "Haben"
      ],
      [
        "gesehen"
      ]
    ],
    "reason": "Formal Sie uses haben. Sehen→gesehen.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g011",
    "set": "grammar",
    "topic": "perfekt",
    "num": 11,
    "page": 1,
    "source": "workbook",
    "prompt": "Wir ___ drei Stunden lang im Park ___. (spazieren gehen)",
    "answers": [
      [
        "sind"
      ],
      [
        "spazieren gegangen"
      ]
    ],
    "reason": "For the supplied verb spazieren gehen, use sind spazieren gegangen. The shorter sind spaziert corresponds to spazieren.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g012",
    "set": "grammar",
    "topic": "perfekt",
    "num": 12,
    "page": 1,
    "source": "workbook",
    "prompt": "Was ___ gestern Abend ___? (passieren)",
    "answers": [
      [
        "ist"
      ],
      [
        "passiert"
      ]
    ],
    "reason": "Passieren (to happen) uses sein: Was ist passiert?",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g013",
    "set": "grammar",
    "topic": "perfekt",
    "num": 13,
    "page": 1,
    "source": "workbook",
    "prompt": "Ich ___ den Schlüssel leider nicht ___. (finden)",
    "answers": [
      [
        "habe"
      ],
      [
        "gefunden"
      ]
    ],
    "reason": "Finden uses haben: habe gefunden.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g014",
    "set": "grammar",
    "topic": "perfekt",
    "num": 14,
    "page": 1,
    "source": "workbook",
    "prompt": "Ihr ___ viel zu spät zum Unterricht ___. (erscheinen)",
    "answers": [
      [
        "seid"
      ],
      [
        "erschienen"
      ]
    ],
    "reason": "Erscheinen (to arrive/appear) uses sein: ihr seid erschienen.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g015",
    "set": "grammar",
    "topic": "perfekt",
    "num": 15,
    "page": 1,
    "source": "workbook",
    "prompt": "Sie [they] ___ den ganzen Tag Deutsch ___. (lernen)",
    "answers": [
      [
        "haben"
      ],
      [
        "gelernt"
      ]
    ],
    "reason": "They is plural sie: haben gelernt.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g016",
    "set": "grammar",
    "topic": "separable",
    "num": 16,
    "page": 1,
    "source": "workbook",
    "prompt": "(anrufen) Ich ___ meine Großmutter heute Abend ___.",
    "answers": [
      [
        "rufe"
      ],
      [
        "an"
      ]
    ],
    "reason": "In a main clause, conjugate the base verb and move a separable prefix to the end. Inseparable prefixes stay attached.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g017",
    "set": "grammar",
    "topic": "separable",
    "num": 17,
    "page": 1,
    "source": "workbook",
    "prompt": "(verstehen) Der Schüler ___ die schwierige Grammatik nicht.",
    "answers": [
      [
        "versteht"
      ]
    ],
    "reason": "In a main clause, conjugate the base verb and move a separable prefix to the end. Inseparable prefixes stay attached.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g018",
    "set": "grammar",
    "topic": "separable",
    "num": 18,
    "page": 1,
    "source": "workbook",
    "prompt": "(einkaufen) Am Samstag ___ wir immer im Supermarkt ___.",
    "answers": [
      [
        "kaufen"
      ],
      [
        "ein"
      ]
    ],
    "reason": "In a main clause, conjugate the base verb and move a separable prefix to the end. Inseparable prefixes stay attached.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g019",
    "set": "grammar",
    "topic": "separable",
    "num": 19,
    "page": 1,
    "source": "workbook",
    "prompt": "(besuchen) Morgen ___ er seinen besten Freund in Hamburg.",
    "answers": [
      [
        "besucht"
      ]
    ],
    "reason": "In a main clause, conjugate the base verb and move a separable prefix to the end. Inseparable prefixes stay attached.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g020",
    "set": "grammar",
    "topic": "separable",
    "num": 20,
    "page": 1,
    "source": "workbook",
    "prompt": "(mitbringen) Was ___ du zum Picknick ___?",
    "answers": [
      [
        "bringst"
      ],
      [
        "mit"
      ]
    ],
    "reason": "In a main clause, conjugate the base verb and move a separable prefix to the end. Inseparable prefixes stay attached.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g021",
    "set": "grammar",
    "topic": "separable",
    "num": 21,
    "page": 2,
    "source": "workbook",
    "prompt": "(erklären) Die Lehrerin ___ die Regeln sehr geduldig.",
    "answers": [
      [
        "erklärt"
      ]
    ],
    "reason": "In a main clause, conjugate the base verb and move a separable prefix to the end. Inseparable prefixes stay attached.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g022",
    "set": "grammar",
    "topic": "separable",
    "num": 22,
    "page": 2,
    "source": "workbook",
    "prompt": "(aufstehen) Unter der Woche ___ ich immer um 6:00 Uhr ___.",
    "answers": [
      [
        "stehe"
      ],
      [
        "auf"
      ]
    ],
    "reason": "In a main clause, conjugate the base verb and move a separable prefix to the end. Inseparable prefixes stay attached.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g023",
    "set": "grammar",
    "topic": "separable",
    "num": 23,
    "page": 2,
    "source": "workbook",
    "prompt": "(bezahlen) Wer ___ das Mittagessen im Restaurant?",
    "answers": [
      [
        "bezahlt"
      ]
    ],
    "reason": "In a main clause, conjugate the base verb and move a separable prefix to the end. Inseparable prefixes stay attached.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g024",
    "set": "grammar",
    "topic": "separable",
    "num": 24,
    "page": 2,
    "source": "workbook",
    "prompt": "(fernsehen) Am Abend ___ meine Eltern oft stundenlang ___.",
    "answers": [
      [
        "sehen"
      ],
      [
        "fern"
      ]
    ],
    "reason": "In a main clause, conjugate the base verb and move a separable prefix to the end. Inseparable prefixes stay attached.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g025",
    "set": "grammar",
    "topic": "separable",
    "num": 25,
    "page": 2,
    "source": "workbook",
    "prompt": "(empfehlen) Welches Gericht ___ du mir in diesem Lokal?",
    "answers": [
      [
        "empfiehlst"
      ]
    ],
    "reason": "Empfehlen changes e→ie with du: du empfiehlst.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g026",
    "set": "grammar",
    "topic": "separable",
    "num": 26,
    "page": 2,
    "source": "workbook",
    "prompt": "(mitkommen) ___ du heute Abend ins Kino ___?",
    "answers": [
      [
        "Kommst"
      ],
      [
        "mit"
      ]
    ],
    "reason": "In a main clause, conjugate the base verb and move a separable prefix to the end. Inseparable prefixes stay attached.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g027",
    "set": "grammar",
    "topic": "separable",
    "num": 27,
    "page": 2,
    "source": "workbook",
    "prompt": "(verlieren) Ich ___ ständig meinen Haustürschlüssel.",
    "answers": [
      [
        "verliere"
      ]
    ],
    "reason": "In a main clause, conjugate the base verb and move a separable prefix to the end. Inseparable prefixes stay attached.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g028",
    "set": "grammar",
    "topic": "separable",
    "num": 28,
    "page": 2,
    "source": "workbook",
    "prompt": "(vorbereiten) Die Studenten ___ sich auf die A1-Prüfung ___.",
    "answers": [
      [
        "bereiten"
      ],
      [
        "vor"
      ]
    ],
    "reason": "In a main clause, conjugate the base verb and move a separable prefix to the end. Inseparable prefixes stay attached.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g029",
    "set": "grammar",
    "topic": "separable",
    "num": 29,
    "page": 2,
    "source": "workbook",
    "prompt": "(gehören) Das rote Fahrrad ___ meinem jüngeren Bruder.",
    "answers": [
      [
        "gehört"
      ]
    ],
    "reason": "In a main clause, conjugate the base verb and move a separable prefix to the end. Inseparable prefixes stay attached.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g030",
    "set": "grammar",
    "topic": "separable",
    "num": 30,
    "page": 2,
    "source": "workbook",
    "prompt": "(anfangen) Der Deutschkurs ___ pünktlich um 9:00 Uhr ___.",
    "answers": [
      [
        "fängt"
      ],
      [
        "an"
      ]
    ],
    "reason": "Anfangen separates an and changes a→ä: fängt ... an.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g031",
    "set": "grammar",
    "topic": "imperative",
    "num": 31,
    "page": 2,
    "source": "workbook",
    "prompt": "(du) Hier nicht rauchen! ➔ ___ hier nicht!",
    "answers": [
      [
        "Rauch",
        "Rauche"
      ]
    ],
    "reason": "Choose the command for du, ihr or formal Sie. Du usually drops -st and the pronoun; ihr uses its normal verb form without ihr; formal commands keep Sie.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g032",
    "set": "grammar",
    "topic": "imperative",
    "num": 32,
    "page": 2,
    "source": "workbook",
    "prompt": "(ihr) Die Hausaufgaben machen! ➔ ___ die Hausaufgaben!",
    "answers": [
      [
        "Macht"
      ]
    ],
    "reason": "Choose the command for du, ihr or formal Sie. Du usually drops -st and the pronoun; ihr uses its normal verb form without ihr; formal commands keep Sie.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g033",
    "set": "grammar",
    "topic": "imperative",
    "num": 33,
    "page": 2,
    "source": "workbook",
    "prompt": "(Sie) Bitte den Satz wiederholen. ➔ Wiederholen ___ bitte den Satz!",
    "answers": [
      [
        "Sie"
      ]
    ],
    "reason": "Choose the command for du, ihr or formal Sie. Du usually drops -st and the pronoun; ihr uses its normal verb form without ihr; formal commands keep Sie.",
    "caseSensitive": true,
    "correction": false
  },
  {
    "id": "g034",
    "set": "grammar",
    "topic": "imperative",
    "num": 34,
    "page": 2,
    "source": "workbook",
    "prompt": "(du) Leise sein! ➔ ___ leise!",
    "answers": [
      [
        "Sei"
      ]
    ],
    "reason": "The du imperative of sein is Sei.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g035",
    "set": "grammar",
    "topic": "imperative",
    "num": 35,
    "page": 2,
    "source": "workbook",
    "prompt": "(ihr) Schnell laufen! ➔ ___ schnell!",
    "answers": [
      [
        "Lauft"
      ]
    ],
    "reason": "Choose the command for du, ihr or formal Sie. Du usually drops -st and the pronoun; ihr uses its normal verb form without ihr; formal commands keep Sie.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g036",
    "set": "grammar",
    "topic": "imperative",
    "num": 36,
    "page": 2,
    "source": "workbook",
    "prompt": "(Sie) Hier unterschreiben. ➔ Bitte unterschreiben ___ hier.",
    "answers": [
      [
        "Sie"
      ]
    ],
    "reason": "Choose the command for du, ihr or formal Sie. Du usually drops -st and the pronoun; ihr uses its normal verb form without ihr; formal commands keep Sie.",
    "caseSensitive": true,
    "correction": false
  },
  {
    "id": "g037",
    "set": "grammar",
    "topic": "imperative",
    "num": 37,
    "page": 2,
    "source": "workbook",
    "prompt": "(du) Mir das Buch geben! ➔ ___ mir das Buch!",
    "answers": [
      [
        "Gib"
      ]
    ],
    "reason": "Geben has the irregular du imperative Gib.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g038",
    "set": "grammar",
    "topic": "imperative",
    "num": 38,
    "page": 2,
    "source": "workbook",
    "prompt": "(ihr) Laut sprechen! ➔ ___ lauter!",
    "answers": [
      [
        "Sprecht"
      ]
    ],
    "reason": "Choose the command for du, ihr or formal Sie. Du usually drops -st and the pronoun; ihr uses its normal verb form without ihr; formal commands keep Sie.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g039",
    "set": "grammar",
    "topic": "imperative",
    "num": 39,
    "page": 2,
    "source": "workbook",
    "prompt": "(Sie) Platz nehmen. ➔ Nehmen ___ bitte Platz.",
    "answers": [
      [
        "Sie"
      ]
    ],
    "reason": "Choose the command for du, ihr or formal Sie. Du usually drops -st and the pronoun; ihr uses its normal verb form without ihr; formal commands keep Sie.",
    "caseSensitive": true,
    "correction": false
  },
  {
    "id": "g040",
    "set": "grammar",
    "topic": "imperative",
    "num": 40,
    "page": 2,
    "source": "workbook",
    "prompt": "(du) Keine Angst haben! ➔ ___ keine Angst!",
    "answers": [
      [
        "Hab",
        "Habe"
      ]
    ],
    "reason": "Choose the command for du, ihr or formal Sie. Du usually drops -st and the pronoun; ihr uses its normal verb form without ihr; formal commands keep Sie.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g041",
    "set": "grammar",
    "topic": "imperative",
    "num": 41,
    "page": 2,
    "source": "workbook",
    "prompt": "(ihr) Pünktlich sein! ➔ ___ pünktlich!",
    "answers": [
      [
        "Seid"
      ]
    ],
    "reason": "Choose the command for du, ihr or formal Sie. Du usually drops -st and the pronoun; ihr uses its normal verb form without ihr; formal commands keep Sie.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g042",
    "set": "grammar",
    "topic": "imperative",
    "num": 42,
    "page": 2,
    "source": "workbook",
    "prompt": "(Sie) Langsam fahren. ➔ Fahren ___ bitte langsam.",
    "answers": [
      [
        "Sie"
      ]
    ],
    "reason": "Choose the command for du, ihr or formal Sie. Du usually drops -st and the pronoun; ihr uses its normal verb form without ihr; formal commands keep Sie.",
    "caseSensitive": true,
    "correction": false
  },
  {
    "id": "g043",
    "set": "grammar",
    "topic": "imperative",
    "num": 43,
    "page": 2,
    "source": "workbook",
    "prompt": "(du) Den Apfel essen! ➔ ___ den Apfel!",
    "answers": [
      [
        "Iss"
      ]
    ],
    "reason": "Essen has the irregular du imperative Iss.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g044",
    "set": "grammar",
    "topic": "imperative",
    "num": 44,
    "page": 3,
    "source": "workbook",
    "prompt": "(ihr) Den Text lesen! ➔ ___ den Text!",
    "answers": [
      [
        "Lest"
      ]
    ],
    "reason": "The ihr imperative of lesen is Lest; do not use the du form Lies.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g045",
    "set": "grammar",
    "topic": "imperative",
    "num": 45,
    "page": 3,
    "source": "workbook",
    "prompt": "(Sie) Keine Sorge haben. ➔ Machen ___ sich keine Sorgen.",
    "answers": [
      [
        "Sie"
      ]
    ],
    "reason": "Choose the command for du, ihr or formal Sie. Du usually drops -st and the pronoun; ihr uses its normal verb form without ihr; formal commands keep Sie.",
    "caseSensitive": true,
    "correction": false
  },
  {
    "id": "g046",
    "set": "grammar",
    "topic": "modals",
    "num": 46,
    "page": 3,
    "source": "workbook",
    "prompt": "(müssen) Ich bin krank. Ich ___ heute zum Arzt gehen.",
    "answers": [
      [
        "muss"
      ]
    ],
    "reason": "Conjugate the modal for the subject. The second verb remains an infinitive at the end.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g047",
    "set": "grammar",
    "topic": "modals",
    "num": 47,
    "page": 3,
    "source": "workbook",
    "prompt": "(dürfen) Kinder ___ hier nicht alleine schwimmen.",
    "answers": [
      [
        "dürfen"
      ]
    ],
    "reason": "Conjugate the modal for the subject. The second verb remains an infinitive at the end.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g048",
    "set": "grammar",
    "topic": "modals",
    "num": 48,
    "page": 3,
    "source": "workbook",
    "prompt": "(sollen) Der Arzt sagt, du ___ weniger Kaffee trinken.",
    "answers": [
      [
        "sollst"
      ]
    ],
    "reason": "The key gives soll, but the subject is du. Use sollst.",
    "caseSensitive": false,
    "correction": true
  },
  {
    "id": "g049",
    "set": "grammar",
    "topic": "modals",
    "num": 49,
    "page": 3,
    "source": "workbook",
    "prompt": "(müssen) ___ ihr morgen am Samstag arbeiten?",
    "answers": [
      [
        "Müsst"
      ]
    ],
    "reason": "Conjugate the modal for the subject. The second verb remains an infinitive at the end.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g050",
    "set": "grammar",
    "topic": "modals",
    "num": 50,
    "page": 3,
    "source": "workbook",
    "prompt": "(dürfen) Entschuldigung, ___ ich Sie etwas fragen?",
    "answers": [
      [
        "darf"
      ]
    ],
    "reason": "Conjugate the modal for the subject. The second verb remains an infinitive at the end.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g051",
    "set": "grammar",
    "topic": "modals",
    "num": 51,
    "page": 3,
    "source": "workbook",
    "prompt": "(sollen) Was ___ ich für das Abendessen kochen?",
    "answers": [
      [
        "soll"
      ]
    ],
    "reason": "Conjugate the modal for the subject. The second verb remains an infinitive at the end.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g052",
    "set": "grammar",
    "topic": "modals",
    "num": 52,
    "page": 3,
    "source": "workbook",
    "prompt": "(müssen) Wir ___ uns beeilen, der Zug fährt gleich ab.",
    "answers": [
      [
        "müssen"
      ]
    ],
    "reason": "Conjugate the modal for the subject. The second verb remains an infinitive at the end.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g053",
    "set": "grammar",
    "topic": "modals",
    "num": 53,
    "page": 3,
    "source": "workbook",
    "prompt": "(dürfen) Im Museum ___ man keine Fotos machen.",
    "answers": [
      [
        "darf"
      ]
    ],
    "reason": "Conjugate the modal for the subject. The second verb remains an infinitive at the end.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g054",
    "set": "grammar",
    "topic": "modals",
    "num": 54,
    "page": 3,
    "source": "workbook",
    "prompt": "(sollen) Ihr ___ laut Anweisung die Fenster schließen.",
    "answers": [
      [
        "sollt"
      ]
    ],
    "reason": "Conjugate the modal for the subject. The second verb remains an infinitive at the end.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g055",
    "set": "grammar",
    "topic": "modals",
    "num": 55,
    "page": 3,
    "source": "workbook",
    "prompt": "(müssen) Er ___ jeden Tag zwei Liter Wasser trinken.",
    "answers": [
      [
        "muss"
      ]
    ],
    "reason": "Conjugate the modal for the subject. The second verb remains an infinitive at the end.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g056",
    "set": "grammar",
    "topic": "modals",
    "num": 56,
    "page": 3,
    "source": "workbook",
    "prompt": "(dürfen) Hier ___ man ab 22:00 Uhr nicht mehr laut sein.",
    "answers": [
      [
        "darf"
      ]
    ],
    "reason": "Conjugate the modal for the subject. The second verb remains an infinitive at the end.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g057",
    "set": "grammar",
    "topic": "modals",
    "num": 57,
    "page": 3,
    "source": "workbook",
    "prompt": "(sollen) Meine Mutter sagt, ich ___ mein Zimmer aufräumen.",
    "answers": [
      [
        "soll"
      ]
    ],
    "reason": "Conjugate the modal for the subject. The second verb remains an infinitive at the end.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g058",
    "set": "grammar",
    "topic": "modals",
    "num": 58,
    "page": 3,
    "source": "workbook",
    "prompt": "(müssen) Du ___ noch viel lernen, wenn du bestehen willst.",
    "answers": [
      [
        "musst"
      ]
    ],
    "reason": "Conjugate the modal for the subject. The second verb remains an infinitive at the end.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g059",
    "set": "grammar",
    "topic": "modals",
    "num": 59,
    "page": 3,
    "source": "workbook",
    "prompt": "(dürfen) ___ wir unseren Hund mitbringen?",
    "answers": [
      [
        "Dürfen"
      ]
    ],
    "reason": "Conjugate the modal for the subject. The second verb remains an infinitive at the end.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g060",
    "set": "grammar",
    "topic": "modals",
    "num": 60,
    "page": 3,
    "source": "workbook",
    "prompt": "(sollen) Sie [they] ___ den Chef sofort zurückrufen.",
    "answers": [
      [
        "sollen"
      ]
    ],
    "reason": "Conjugate the modal for the subject. The second verb remains an infinitive at the end.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g061",
    "set": "grammar",
    "topic": "adjectives",
    "num": 61,
    "page": 3,
    "source": "workbook",
    "prompt": "Nach der langen Reise ___ ich sehr ___. Ich gehe direkt ins Bett.",
    "answers": [
      [
        "bin"
      ],
      [
        "müde"
      ]
    ],
    "reason": "Conjugate sein for the subject. The adjective after sein stays uninflected; use the context to choose its meaning.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g062",
    "set": "grammar",
    "topic": "adjectives",
    "num": 62,
    "page": 3,
    "source": "workbook",
    "prompt": "Die Luxusuhr ___ unglaublich ___. Sie kostet 5000 Euro.",
    "answers": [
      [
        "ist"
      ],
      [
        "teuer"
      ]
    ],
    "reason": "Conjugate sein for the subject. The adjective after sein stays uninflected; use the context to choose its meaning.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g063",
    "set": "grammar",
    "topic": "adjectives",
    "num": 63,
    "page": 4,
    "source": "workbook",
    "prompt": "Wir haben die Prüfung bestanden! Wir ___ so ___.",
    "answers": [
      [
        "sind"
      ],
      [
        "glücklich"
      ]
    ],
    "reason": "Conjugate sein for the subject. The adjective after sein stays uninflected; use the context to choose its meaning.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g064",
    "set": "grammar",
    "topic": "adjectives",
    "num": 64,
    "page": 4,
    "source": "workbook",
    "prompt": "Es ist Winter und das Fenster steht offen. Es ___ sehr ___ hier drin.",
    "answers": [
      [
        "ist"
      ],
      [
        "kalt"
      ]
    ],
    "reason": "Conjugate sein for the subject. The adjective after sein stays uninflected; use the context to choose its meaning.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g065",
    "set": "grammar",
    "topic": "adjectives",
    "num": 65,
    "page": 4,
    "source": "workbook",
    "prompt": "Hast du deine Hausaufgaben erledigt? ___ du schon ___?",
    "answers": [
      [
        "Bist"
      ],
      [
        "fertig"
      ]
    ],
    "reason": "Conjugate sein for the subject. The adjective after sein stays uninflected; use the context to choose its meaning.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g066",
    "set": "grammar",
    "topic": "adjectives",
    "num": 66,
    "page": 4,
    "source": "workbook",
    "prompt": "Die Wohnung glänzt. Alles ___ absolut ___.",
    "answers": [
      [
        "ist"
      ],
      [
        "sauber"
      ]
    ],
    "reason": "Conjugate sein for the subject. The adjective after sein stays uninflected; use the context to choose its meaning.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g067",
    "set": "grammar",
    "topic": "adjectives",
    "num": 67,
    "page": 4,
    "source": "workbook",
    "prompt": "Es ist Mitternacht. Das Geschäft ___ jetzt ___.",
    "answers": [
      [
        "ist"
      ],
      [
        "geschlossen"
      ]
    ],
    "reason": "Conjugate sein for the subject. The adjective after sein stays uninflected; use the context to choose its meaning.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g068",
    "set": "grammar",
    "topic": "adjectives",
    "num": 68,
    "page": 4,
    "source": "workbook",
    "prompt": "Markus lernt jeden Tag stundenlang. Er ___ wirklich ___.",
    "answers": [
      [
        "ist"
      ],
      [
        "fleißig"
      ]
    ],
    "reason": "Conjugate sein for the subject. The adjective after sein stays uninflected; use the context to choose its meaning.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g069",
    "set": "grammar",
    "topic": "adjectives",
    "num": 69,
    "page": 4,
    "source": "workbook",
    "prompt": "Meine Schwester hat heute Geburtstag, sie ___ total ___.",
    "answers": [
      [
        "ist"
      ],
      [
        "glücklich"
      ]
    ],
    "reason": "Conjugate sein for the subject. The adjective after sein stays uninflected; use the context to choose its meaning.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g070",
    "set": "grammar",
    "topic": "adjectives",
    "num": 70,
    "page": 4,
    "source": "workbook",
    "prompt": "Nach dem 10-Kilometer-Lauf ___ die Sportler erschöpft und ___.",
    "answers": [
      [
        "sind"
      ],
      [
        "müde"
      ]
    ],
    "reason": "Conjugate sein for the subject. The adjective after sein stays uninflected; use the context to choose its meaning.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g071",
    "set": "grammar",
    "topic": "adjectives",
    "num": 71,
    "page": 4,
    "source": "workbook",
    "prompt": "Das alte Auto ist kaputt. Die Reparatur ___ zu ___.",
    "answers": [
      [
        "ist"
      ],
      [
        "teuer"
      ]
    ],
    "reason": "Conjugate sein for the subject. The adjective after sein stays uninflected; use the context to choose its meaning.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g072",
    "set": "grammar",
    "topic": "adjectives",
    "num": 72,
    "page": 4,
    "source": "workbook",
    "prompt": "Die Suppe kommt frisch vom Herd. Pass auf, sie ___ sehr ___.",
    "answers": [
      [
        "ist"
      ],
      [
        "heiß"
      ]
    ],
    "reason": "The soup is fresh from the stove, so heiß is correct. Kalt in the key contradicts the sentence; heiß was omitted from the adjective box.",
    "caseSensitive": false,
    "correction": true
  },
  {
    "id": "g073",
    "set": "grammar",
    "topic": "adjectives",
    "num": 73,
    "page": 4,
    "source": "workbook",
    "prompt": "Das Restaurant macht erst um 17 Uhr auf. Um 14 Uhr ___ es noch ___.",
    "answers": [
      [
        "ist"
      ],
      [
        "geschlossen"
      ]
    ],
    "reason": "Conjugate sein for the subject. The adjective after sein stays uninflected; use the context to choose its meaning.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g074",
    "set": "grammar",
    "topic": "adjectives",
    "num": 74,
    "page": 4,
    "source": "workbook",
    "prompt": "Ihr habt das Projekt erfolgreich beendet. ___ ihr ___?",
    "answers": [
      [
        "Seid"
      ],
      [
        "fertig"
      ]
    ],
    "reason": "Conjugate sein for the subject. The adjective after sein stays uninflected; use the context to choose its meaning.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g075",
    "set": "grammar",
    "topic": "adjectives",
    "num": 75,
    "page": 4,
    "source": "workbook",
    "prompt": "Der Teller hat Flecken. Er ___ nicht ___.",
    "answers": [
      [
        "ist"
      ],
      [
        "sauber"
      ]
    ],
    "reason": "Conjugate sein for the subject. The adjective after sein stays uninflected; use the context to choose its meaning.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g076",
    "set": "grammar",
    "topic": "dative-articles",
    "num": 76,
    "page": 4,
    "source": "workbook",
    "prompt": "Ich helfe ___ Kind bei den Hausaufgaben. (das Kind)",
    "answers": [
      [
        "dem"
      ]
    ],
    "reason": "Dative articles: masculine dem/einem, neuter dem/einem, feminine der/einer, plural den. Dative plural nouns usually add -n.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g077",
    "set": "grammar",
    "topic": "dative-articles",
    "num": 77,
    "page": 4,
    "source": "workbook",
    "prompt": "Das Auto gehört ___ Lehrerin. (die Lehrerin)",
    "answers": [
      [
        "der"
      ]
    ],
    "reason": "Dative articles: masculine dem/einem, neuter dem/einem, feminine der/einer, plural den. Dative plural nouns usually add -n.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g078",
    "set": "grammar",
    "topic": "dative-articles",
    "num": 78,
    "page": 4,
    "source": "workbook",
    "prompt": "Wir gratulieren ___ Mann zum Geburtstag. (der Mann)",
    "answers": [
      [
        "dem"
      ]
    ],
    "reason": "Dative articles: masculine dem/einem, neuter dem/einem, feminine der/einer, plural den. Dative plural nouns usually add -n.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g079",
    "set": "grammar",
    "topic": "dative-articles",
    "num": 79,
    "page": 4,
    "source": "workbook",
    "prompt": "Sie antwortet ___ Gästen nicht. (die Gäste - plural)",
    "answers": [
      [
        "den"
      ]
    ],
    "reason": "Dative articles: masculine dem/einem, neuter dem/einem, feminine der/einer, plural den. Dative plural nouns usually add -n.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g080",
    "set": "grammar",
    "topic": "dative-articles",
    "num": 80,
    "page": 4,
    "source": "workbook",
    "prompt": "Er wohnt bei ___ Freund. (ein Freund)",
    "answers": [
      [
        "einem"
      ]
    ],
    "reason": "Dative articles: masculine dem/einem, neuter dem/einem, feminine der/einer, plural den. Dative plural nouns usually add -n.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g081",
    "set": "grammar",
    "topic": "dative-articles",
    "num": 81,
    "page": 4,
    "source": "workbook",
    "prompt": "Nach ___ Unterricht gehen wir Kaffee trinken. (der Unterricht)",
    "answers": [
      [
        "dem"
      ]
    ],
    "reason": "Dative articles: masculine dem/einem, neuter dem/einem, feminine der/einer, plural den. Dative plural nouns usually add -n.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g082",
    "set": "grammar",
    "topic": "dative-articles",
    "num": 82,
    "page": 4,
    "source": "workbook",
    "prompt": "Das Buch liegt unter ___ Tisch. (der Tisch)",
    "answers": [
      [
        "dem"
      ]
    ],
    "reason": "Dative articles: masculine dem/einem, neuter dem/einem, feminine der/einer, plural den. Dative plural nouns usually add -n.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g083",
    "set": "grammar",
    "topic": "dative-articles",
    "num": 83,
    "page": 4,
    "source": "workbook",
    "prompt": "Ich kaufe mein Gemüse auf ___ Markt. (der Markt)",
    "answers": [
      [
        "dem"
      ]
    ],
    "reason": "Dative articles: masculine dem/einem, neuter dem/einem, feminine der/einer, plural den. Dative plural nouns usually add -n.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g084",
    "set": "grammar",
    "topic": "dative-articles",
    "num": 84,
    "page": 4,
    "source": "workbook",
    "prompt": "Sie spricht mit ___ Ärztin. (eine Ärztin)",
    "answers": [
      [
        "einer"
      ]
    ],
    "reason": "Dative articles: masculine dem/einem, neuter dem/einem, feminine der/einer, plural den. Dative plural nouns usually add -n.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g085",
    "set": "grammar",
    "topic": "dative-articles",
    "num": 85,
    "page": 4,
    "source": "workbook",
    "prompt": "Das Haus von ___ Großeltern ist sehr alt. (die Großeltern - plural)",
    "answers": [
      [
        "den"
      ]
    ],
    "reason": "Dative articles: masculine dem/einem, neuter dem/einem, feminine der/einer, plural den. Dative plural nouns usually add -n.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g086",
    "set": "grammar",
    "topic": "dative-articles",
    "num": 86,
    "page": 5,
    "source": "workbook",
    "prompt": "Wir sitzen an ___ Tisch. (ein Tisch)",
    "answers": [
      [
        "einem"
      ]
    ],
    "reason": "Dative articles: masculine dem/einem, neuter dem/einem, feminine der/einer, plural den. Dative plural nouns usually add -n.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g087",
    "set": "grammar",
    "topic": "dative-articles",
    "num": 87,
    "page": 5,
    "source": "workbook",
    "prompt": "Die Katze schläft unter ___ Sofa. (das Sofa)",
    "answers": [
      [
        "dem"
      ]
    ],
    "reason": "Dative articles: masculine dem/einem, neuter dem/einem, feminine der/einer, plural den. Dative plural nouns usually add -n.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g088",
    "set": "grammar",
    "topic": "dative-articles",
    "num": 88,
    "page": 5,
    "source": "workbook",
    "prompt": "Das Geschenk ist von ___ Chef. (der Chef)",
    "answers": [
      [
        "dem"
      ]
    ],
    "reason": "Dative articles: masculine dem/einem, neuter dem/einem, feminine der/einer, plural den. Dative plural nouns usually add -n.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g089",
    "set": "grammar",
    "topic": "dative-articles",
    "num": 89,
    "page": 5,
    "source": "workbook",
    "prompt": "Er schenkt ___ Frau Blumen. (eine Frau)",
    "answers": [
      [
        "einer"
      ]
    ],
    "reason": "Dative articles: masculine dem/einem, neuter dem/einem, feminine der/einer, plural den. Dative plural nouns usually add -n.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g090",
    "set": "grammar",
    "topic": "dative-articles",
    "num": 90,
    "page": 5,
    "source": "workbook",
    "prompt": "Seit ___ Monat lerne ich intensiv Deutsch. (ein Monat)",
    "answers": [
      [
        "einem"
      ]
    ],
    "reason": "Dative articles: masculine dem/einem, neuter dem/einem, feminine der/einer, plural den. Dative plural nouns usually add -n.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g091",
    "set": "grammar",
    "topic": "dieser",
    "num": 91,
    "page": 5,
    "source": "workbook",
    "prompt": "Nominativ (masc.): ___ Rock sieht sehr elegant aus.",
    "answers": [
      [
        "Dieser"
      ]
    ],
    "reason": "Dies- uses definite-article endings: nominative -er/-e/-es/-e; accusative -en/-e/-es/-e; dative -em/-er/-em/-en.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g092",
    "set": "grammar",
    "topic": "dieser",
    "num": 92,
    "page": 5,
    "source": "workbook",
    "prompt": "Akkusativ (neut.): Ich möchte ___ Buch unbedingt kaufen.",
    "answers": [
      [
        "dieses"
      ]
    ],
    "reason": "Dies- uses definite-article endings: nominative -er/-e/-es/-e; accusative -en/-e/-es/-e; dative -em/-er/-em/-en.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g093",
    "set": "grammar",
    "topic": "dieser",
    "num": 93,
    "page": 5,
    "source": "workbook",
    "prompt": "Dative (fem.): In ___ Woche habe ich keine Zeit.",
    "answers": [
      [
        "dieser"
      ]
    ],
    "reason": "Dies- uses definite-article endings: nominative -er/-e/-es/-e; accusative -en/-e/-es/-e; dative -em/-er/-em/-en.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g094",
    "set": "grammar",
    "topic": "dieser",
    "num": 94,
    "page": 5,
    "source": "workbook",
    "prompt": "Akkusativ (masc.): Findest du ___ Mantel nicht zu teuer?",
    "answers": [
      [
        "diesen"
      ]
    ],
    "reason": "Dies- uses definite-article endings: nominative -er/-e/-es/-e; accusative -en/-e/-es/-e; dative -em/-er/-em/-en.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g095",
    "set": "grammar",
    "topic": "dieser",
    "num": 95,
    "page": 5,
    "source": "workbook",
    "prompt": "Nominativ (fem.): ___ Tasche gefällt mir am besten.",
    "answers": [
      [
        "Diese"
      ]
    ],
    "reason": "Dies- uses definite-article endings: nominative -er/-e/-es/-e; accusative -en/-e/-es/-e; dative -em/-er/-em/-en.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g096",
    "set": "grammar",
    "topic": "dieser",
    "num": 96,
    "page": 5,
    "source": "workbook",
    "prompt": "Dative (masc.): Ich spreche morgen mit ___ Mann.",
    "answers": [
      [
        "diesem"
      ]
    ],
    "reason": "Dies- uses definite-article endings: nominative -er/-e/-es/-e; accusative -en/-e/-es/-e; dative -em/-er/-em/-en.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g097",
    "set": "grammar",
    "topic": "dieser",
    "num": 97,
    "page": 5,
    "source": "workbook",
    "prompt": "Nominativ (plural): ___ Schuhe passen mir leider nicht.",
    "answers": [
      [
        "Diese"
      ]
    ],
    "reason": "Dies- uses definite-article endings: nominative -er/-e/-es/-e; accusative -en/-e/-es/-e; dative -em/-er/-em/-en.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g098",
    "set": "grammar",
    "topic": "dieser",
    "num": 98,
    "page": 5,
    "source": "workbook",
    "prompt": "Akkusativ (plural): Wer wäscht ___ Hemden?",
    "answers": [
      [
        "diese"
      ]
    ],
    "reason": "Dies- uses definite-article endings: nominative -er/-e/-es/-e; accusative -en/-e/-es/-e; dative -em/-er/-em/-en.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g099",
    "set": "grammar",
    "topic": "dieser",
    "num": 99,
    "page": 5,
    "source": "workbook",
    "prompt": "Dative (neut.): In ___ Restaurant schmeckt das Essen wunderbar.",
    "answers": [
      [
        "diesem"
      ]
    ],
    "reason": "Dies- uses definite-article endings: nominative -er/-e/-es/-e; accusative -en/-e/-es/-e; dative -em/-er/-em/-en.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g100",
    "set": "grammar",
    "topic": "dieser",
    "num": 100,
    "page": 5,
    "source": "workbook",
    "prompt": "Akkusativ (fem.): Er liebt ___ Musik über alles.",
    "answers": [
      [
        "diese"
      ]
    ],
    "reason": "Dies- uses definite-article endings: nominative -er/-e/-es/-e; accusative -en/-e/-es/-e; dative -em/-er/-em/-en.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g101",
    "set": "grammar",
    "topic": "dieser",
    "num": 101,
    "page": 5,
    "source": "workbook",
    "prompt": "Nominativ (neut.): ___ Haus ist sehr alt.",
    "answers": [
      [
        "Dieses"
      ]
    ],
    "reason": "Dies- uses definite-article endings: nominative -er/-e/-es/-e; accusative -en/-e/-es/-e; dative -em/-er/-em/-en.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g102",
    "set": "grammar",
    "topic": "dieser",
    "num": 102,
    "page": 5,
    "source": "workbook",
    "prompt": "Dative (plural): Mit ___ Kindern gehe ich morgen in den Zoo.",
    "answers": [
      [
        "diesen"
      ]
    ],
    "reason": "Dies- uses definite-article endings: nominative -er/-e/-es/-e; accusative -en/-e/-es/-e; dative -em/-er/-em/-en.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g103",
    "set": "grammar",
    "topic": "dieser",
    "num": 103,
    "page": 5,
    "source": "workbook",
    "prompt": "Akkusativ (masc.): Wir besuchen ___ Sonntag meine Eltern.",
    "answers": [
      [
        "diesen"
      ]
    ],
    "reason": "Dies- uses definite-article endings: nominative -er/-e/-es/-e; accusative -en/-e/-es/-e; dative -em/-er/-em/-en.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g104",
    "set": "grammar",
    "topic": "dieser",
    "num": 104,
    "page": 5,
    "source": "workbook",
    "prompt": "Nominativ (masc.): ___ Wein schmeckt hervorragend.",
    "answers": [
      [
        "Dieser"
      ]
    ],
    "reason": "Dies- uses definite-article endings: nominative -er/-e/-es/-e; accusative -en/-e/-es/-e; dative -em/-er/-em/-en.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g105",
    "set": "grammar",
    "topic": "dieser",
    "num": 105,
    "page": 5,
    "source": "workbook",
    "prompt": "Dative (fem.): Ich wohne in ___ Wohnung seit drei Jahren.",
    "answers": [
      [
        "dieser"
      ]
    ],
    "reason": "Dies- uses definite-article endings: nominative -er/-e/-es/-e; accusative -en/-e/-es/-e; dative -em/-er/-em/-en.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g106",
    "set": "grammar",
    "topic": "welcher",
    "num": 106,
    "page": 5,
    "source": "workbook",
    "prompt": "Nominativ (masc.): ___ Tag ist heute?",
    "answers": [
      [
        "Welcher"
      ]
    ],
    "reason": "Welch- uses definite-article endings. Determine the noun’s gender/number and its case before choosing the ending.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g107",
    "set": "grammar",
    "topic": "welcher",
    "num": 107,
    "page": 6,
    "source": "workbook",
    "prompt": "Akkusativ (masc.): ___ Anzug möchtest du anprobieren?",
    "answers": [
      [
        "Welchen"
      ]
    ],
    "reason": "Welch- uses definite-article endings. Determine the noun’s gender/number and its case before choosing the ending.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g108",
    "set": "grammar",
    "topic": "welcher",
    "num": 108,
    "page": 6,
    "source": "workbook",
    "prompt": "Nominativ (neut.): ___ Auto gehört dir?",
    "answers": [
      [
        "Welches"
      ]
    ],
    "reason": "Welch- uses definite-article endings. Determine the noun’s gender/number and its case before choosing the ending.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g109",
    "set": "grammar",
    "topic": "welcher",
    "num": 109,
    "page": 6,
    "source": "workbook",
    "prompt": "Akkusativ (neut.): ___ Kleid zieht sie heute Abend an?",
    "answers": [
      [
        "Welches"
      ]
    ],
    "reason": "Welch- uses definite-article endings. Determine the noun’s gender/number and its case before choosing the ending.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g110",
    "set": "grammar",
    "topic": "welcher",
    "num": 110,
    "page": 6,
    "source": "workbook",
    "prompt": "Nominativ (fem.): ___ Jacke hält im Winter richtig warm?",
    "answers": [
      [
        "Welche"
      ]
    ],
    "reason": "Welch- uses definite-article endings. Determine the noun’s gender/number and its case before choosing the ending.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g111",
    "set": "grammar",
    "topic": "welcher",
    "num": 111,
    "page": 6,
    "source": "workbook",
    "prompt": "Akkusativ (fem.): ___ Zeitung liest du jeden Morgen?",
    "answers": [
      [
        "Welche"
      ]
    ],
    "reason": "Welch- uses definite-article endings. Determine the noun’s gender/number and its case before choosing the ending.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g112",
    "set": "grammar",
    "topic": "welcher",
    "num": 112,
    "page": 6,
    "source": "workbook",
    "prompt": "Dativ (fem.): Von ___ Kollegin hast du das gehört?",
    "answers": [
      [
        "welcher"
      ]
    ],
    "reason": "Kollegin is feminine, despite the masculine label. Von requires dative: welcher Kollegin.",
    "caseSensitive": false,
    "correction": true
  },
  {
    "id": "g113",
    "set": "grammar",
    "topic": "welcher",
    "num": 113,
    "page": 6,
    "source": "workbook",
    "prompt": "Akkusativ (plural): ___ Sprachen sprechen Sie?",
    "answers": [
      [
        "Welche"
      ]
    ],
    "reason": "Sprachen is the direct object of sprechen, so it is accusative plural, not nominative. The answer Welche stays the same.",
    "caseSensitive": false,
    "correction": true
  },
  {
    "id": "g114",
    "set": "grammar",
    "topic": "welcher",
    "num": 114,
    "page": 6,
    "source": "workbook",
    "prompt": "Akkusativ (plural): ___ Bücher hast du für die Prüfung gelesen?",
    "answers": [
      [
        "Welche"
      ]
    ],
    "reason": "Welch- uses definite-article endings. Determine the noun’s gender/number and its case before choosing the ending.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g115",
    "set": "grammar",
    "topic": "welcher",
    "num": 115,
    "page": 6,
    "source": "workbook",
    "prompt": "Dativ (neut.): In ___ Hotel übernachten wir?",
    "answers": [
      [
        "welchem"
      ]
    ],
    "reason": "Welch- uses definite-article endings. Determine the noun’s gender/number and its case before choosing the ending.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g116",
    "set": "grammar",
    "topic": "welcher",
    "num": 116,
    "page": 6,
    "source": "workbook",
    "prompt": "Dativ (masc.): Mit ___ Bus fährst du zur Arbeit?",
    "answers": [
      [
        "welchem"
      ]
    ],
    "reason": "Welch- uses definite-article endings. Determine the noun’s gender/number and its case before choosing the ending.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g117",
    "set": "grammar",
    "topic": "welcher",
    "num": 117,
    "page": 6,
    "source": "workbook",
    "prompt": "Akkusativ (masc.): ___ Kaffee trinkst du am liebsten?",
    "answers": [
      [
        "Welchen"
      ]
    ],
    "reason": "Welch- uses definite-article endings. Determine the noun’s gender/number and its case before choosing the ending.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g118",
    "set": "grammar",
    "topic": "welcher",
    "num": 118,
    "page": 6,
    "source": "workbook",
    "prompt": "Nominativ (fem.): ___ Universität ist die beste der Stadt?",
    "answers": [
      [
        "Welche"
      ]
    ],
    "reason": "Welch- uses definite-article endings. Determine the noun’s gender/number and its case before choosing the ending.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g119",
    "set": "grammar",
    "topic": "welcher",
    "num": 119,
    "page": 6,
    "source": "workbook",
    "prompt": "Dativ (plural): Zu ___ Ärzten gehst du normalerweise?",
    "answers": [
      [
        "welchen"
      ]
    ],
    "reason": "Welch- uses definite-article endings. Determine the noun’s gender/number and its case before choosing the ending.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g120",
    "set": "grammar",
    "topic": "welcher",
    "num": 120,
    "page": 6,
    "source": "workbook",
    "prompt": "Akkusativ (neut.): ___ Fahrrad hast du gekauft?",
    "answers": [
      [
        "Welches"
      ]
    ],
    "reason": "Welch- uses definite-article endings. Determine the noun’s gender/number and its case before choosing the ending.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g121",
    "set": "grammar",
    "topic": "dative-pronouns",
    "num": 121,
    "page": 6,
    "source": "workbook",
    "prompt": "Hallo Peter! Wie geht es ___? (you - informal singular)",
    "answers": [
      [
        "dir"
      ]
    ],
    "reason": "Use the pronoun required by the verb or preposition: ich→mir, du→dir, er/es→ihm, sie→ihr, wir→uns, ihr→euch, sie→ihnen, Sie→Ihnen.",
    "caseSensitive": true,
    "correction": false
  },
  {
    "id": "g122",
    "set": "grammar",
    "topic": "dative-pronouns",
    "num": 122,
    "page": 6,
    "source": "workbook",
    "prompt": "Kannst du ___ bitte helfen? Ich schaffe das nicht allein. (me)",
    "answers": [
      [
        "mir"
      ]
    ],
    "reason": "Use the pronoun required by the verb or preposition: ich→mir, du→dir, er/es→ihm, sie→ihr, wir→uns, ihr→euch, sie→ihnen, Sie→Ihnen.",
    "caseSensitive": true,
    "correction": false
  },
  {
    "id": "g123",
    "set": "grammar",
    "topic": "dative-pronouns",
    "num": 123,
    "page": 6,
    "source": "workbook",
    "prompt": "Das Kleid gefällt ___ überhaupt nicht. (her)",
    "answers": [
      [
        "ihr"
      ]
    ],
    "reason": "Use the pronoun required by the verb or preposition: ich→mir, du→dir, er/es→ihm, sie→ihr, wir→uns, ihr→euch, sie→ihnen, Sie→Ihnen.",
    "caseSensitive": true,
    "correction": false
  },
  {
    "id": "g124",
    "set": "grammar",
    "topic": "dative-pronouns",
    "num": 124,
    "page": 6,
    "source": "workbook",
    "prompt": "Wir danken ___ für das tolle Geschenk! (you - formal)",
    "answers": [
      [
        "Ihnen"
      ]
    ],
    "reason": "Formal you is Ihnen with a capital I. Lowercase ihnen means them.",
    "caseSensitive": true,
    "correction": false
  },
  {
    "id": "g125",
    "set": "grammar",
    "topic": "dative-pronouns",
    "num": 125,
    "page": 6,
    "source": "workbook",
    "prompt": "Der Hund gehört ___. (them)",
    "answers": [
      [
        "ihnen"
      ]
    ],
    "reason": "Use the pronoun required by the verb or preposition: ich→mir, du→dir, er/es→ihm, sie→ihr, wir→uns, ihr→euch, sie→ihnen, Sie→Ihnen.",
    "caseSensitive": true,
    "correction": false
  },
  {
    "id": "g126",
    "set": "grammar",
    "topic": "dative-pronouns",
    "num": 126,
    "page": 6,
    "source": "workbook",
    "prompt": "Schmeckt ___ das Essen, Kinder? (you - informal plural)",
    "answers": [
      [
        "euch"
      ]
    ],
    "reason": "Use the pronoun required by the verb or preposition: ich→mir, du→dir, er/es→ihm, sie→ihr, wir→uns, ihr→euch, sie→ihnen, Sie→Ihnen.",
    "caseSensitive": true,
    "correction": false
  },
  {
    "id": "g127",
    "set": "grammar",
    "topic": "dative-pronouns",
    "num": 127,
    "page": 6,
    "source": "workbook",
    "prompt": "Ich kaufe ___ morgen ein Eis. (him)",
    "answers": [
      [
        "ihm"
      ]
    ],
    "reason": "Use the pronoun required by the verb or preposition: ich→mir, du→dir, er/es→ihm, sie→ihr, wir→uns, ihr→euch, sie→ihnen, Sie→Ihnen.",
    "caseSensitive": true,
    "correction": false
  },
  {
    "id": "g128",
    "set": "grammar",
    "topic": "dative-pronouns",
    "num": 128,
    "page": 6,
    "source": "workbook",
    "prompt": "Der Chef antwortet ___ nicht auf meine Mail. (me)",
    "answers": [
      [
        "mir"
      ]
    ],
    "reason": "Use the pronoun required by the verb or preposition: ich→mir, du→dir, er/es→ihm, sie→ihr, wir→uns, ihr→euch, sie→ihnen, Sie→Ihnen.",
    "caseSensitive": true,
    "correction": false
  },
  {
    "id": "g129",
    "set": "grammar",
    "topic": "dative-pronouns",
    "num": 129,
    "page": 6,
    "source": "workbook",
    "prompt": "Dieses Buch bringt ___ kein Glück. (us)",
    "answers": [
      [
        "uns"
      ]
    ],
    "reason": "Use the pronoun required by the verb or preposition: ich→mir, du→dir, er/es→ihm, sie→ihr, wir→uns, ihr→euch, sie→ihnen, Sie→Ihnen.",
    "caseSensitive": true,
    "correction": false
  },
  {
    "id": "g130",
    "set": "grammar",
    "topic": "dative-pronouns",
    "num": 130,
    "page": 6,
    "source": "workbook",
    "prompt": "Es tut ___ leid, ich habe dein Buch vergessen. (me)",
    "answers": [
      [
        "mir"
      ]
    ],
    "reason": "Use the pronoun required by the verb or preposition: ich→mir, du→dir, er/es→ihm, sie→ihr, wir→uns, ihr→euch, sie→ihnen, Sie→Ihnen.",
    "caseSensitive": true,
    "correction": false
  },
  {
    "id": "g131",
    "set": "grammar",
    "topic": "dative-pronouns",
    "num": 131,
    "page": 7,
    "source": "workbook",
    "prompt": "Wir gratulieren ___ herzlich zur Hochzeit! (you - informal plural)",
    "answers": [
      [
        "euch"
      ]
    ],
    "reason": "Use the pronoun required by the verb or preposition: ich→mir, du→dir, er/es→ihm, sie→ihr, wir→uns, ihr→euch, sie→ihnen, Sie→Ihnen.",
    "caseSensitive": true,
    "correction": false
  },
  {
    "id": "g132",
    "set": "grammar",
    "topic": "dative-pronouns",
    "num": 132,
    "page": 7,
    "source": "workbook",
    "prompt": "Wie schmeckt ___ der Kaffee, Frau Schmidt? (you - formal)",
    "answers": [
      [
        "Ihnen"
      ]
    ],
    "reason": "Frau Schmidt is addressed formally: Ihnen, not ihnen.",
    "caseSensitive": true,
    "correction": false
  },
  {
    "id": "g133",
    "set": "grammar",
    "topic": "dative-pronouns",
    "num": 133,
    "page": 7,
    "source": "workbook",
    "prompt": "Das Haus ist zu groß für ___. (them)",
    "answers": [
      [
        "sie"
      ]
    ],
    "reason": "Für always requires accusative, including in this dative-pronoun exercise. The correct answer is sie, not ihnen.",
    "caseSensitive": true,
    "correction": true
  },
  {
    "id": "g134",
    "set": "grammar",
    "topic": "dative-pronouns",
    "num": 134,
    "page": 7,
    "source": "workbook",
    "prompt": "Thomas leiht ___ sein Auto für das Wochenende. (her)",
    "answers": [
      [
        "ihr"
      ]
    ],
    "reason": "Use the pronoun required by the verb or preposition: ich→mir, du→dir, er/es→ihm, sie→ihr, wir→uns, ihr→euch, sie→ihnen, Sie→Ihnen.",
    "caseSensitive": true,
    "correction": false
  },
  {
    "id": "g135",
    "set": "grammar",
    "topic": "dative-pronouns",
    "num": 135,
    "page": 7,
    "source": "workbook",
    "prompt": "Tut ___ der Kopf immer noch weh, Max? (you - informal singular)",
    "answers": [
      [
        "dir"
      ]
    ],
    "reason": "Use the pronoun required by the verb or preposition: ich→mir, du→dir, er/es→ihm, sie→ihr, wir→uns, ihr→euch, sie→ihnen, Sie→Ihnen.",
    "caseSensitive": true,
    "correction": false
  },
  {
    "id": "g136",
    "set": "grammar",
    "topic": "questions-time",
    "num": 136,
    "page": 7,
    "source": "workbook",
    "prompt": "In Deutschland darf ___ am Sonntag nicht laut sein.",
    "answers": [
      [
        "man"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g137",
    "set": "grammar",
    "topic": "questions-time",
    "num": 137,
    "page": 7,
    "source": "workbook",
    "prompt": "___ beginnt der Deutschkurs morgen früh? (At what time)",
    "answers": [
      [
        "Um wie viel Uhr",
        "Wann"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g138",
    "set": "grammar",
    "topic": "questions-time",
    "num": 138,
    "page": 7,
    "source": "workbook",
    "prompt": "Der Flug geht ___ 14:30 Uhr.",
    "answers": [
      [
        "um"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g139",
    "set": "grammar",
    "topic": "questions-time",
    "num": 139,
    "page": 7,
    "source": "workbook",
    "prompt": "___ kommt dein neuer Mitbewohner? – Aus Italien.",
    "answers": [
      [
        "Woher"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g140",
    "set": "grammar",
    "topic": "questions-time",
    "num": 140,
    "page": 7,
    "source": "workbook",
    "prompt": "Wenn ___ Fieber hat, sollte ___ zum Arzt gehen.",
    "answers": [
      [
        "man"
      ],
      [
        "man"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g141",
    "set": "grammar",
    "topic": "questions-time",
    "num": 141,
    "page": 7,
    "source": "workbook",
    "prompt": "___ hast du am Wochenende gemacht? – Ich war im Kino.",
    "answers": [
      [
        "Was"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g142",
    "set": "grammar",
    "topic": "questions-time",
    "num": 142,
    "page": 7,
    "source": "workbook",
    "prompt": "Mein Geburtstag ist ___ Juli.",
    "answers": [
      [
        "im"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g143",
    "set": "grammar",
    "topic": "questions-time",
    "num": 143,
    "page": 7,
    "source": "workbook",
    "prompt": "___ stellst du die neue Waschmaschine hin? – In die Küche.",
    "answers": [
      [
        "Wohin"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g144",
    "set": "grammar",
    "topic": "questions-time",
    "num": 144,
    "page": 7,
    "source": "workbook",
    "prompt": "___ ist dein Lieblingslehrer? – Herr Müller.",
    "answers": [
      [
        "Wer"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g145",
    "set": "grammar",
    "topic": "questions-time",
    "num": 145,
    "page": 7,
    "source": "workbook",
    "prompt": "Am Bahnhof kann ___ Fahrkarten kaufen.",
    "answers": [
      [
        "man"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g146",
    "set": "grammar",
    "topic": "questions-time",
    "num": 146,
    "page": 7,
    "source": "workbook",
    "prompt": "Wir treffen uns ___ Samstagabend vor dem Restaurant.",
    "answers": [
      [
        "am"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g147",
    "set": "grammar",
    "topic": "questions-time",
    "num": 147,
    "page": 7,
    "source": "workbook",
    "prompt": "___ wohnst du jetzt? – In Berlin.",
    "answers": [
      [
        "Wo"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g148",
    "set": "grammar",
    "topic": "questions-time",
    "num": 148,
    "page": 7,
    "source": "workbook",
    "prompt": "___ lernst du Deutsch? – Weil ich in Österreich arbeiten will.",
    "answers": [
      [
        "Warum",
        "Wieso"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g149",
    "set": "grammar",
    "topic": "questions-time",
    "num": 149,
    "page": 7,
    "source": "workbook",
    "prompt": "___ fährst du in den Urlaub? – Nächste Woche Freitag.",
    "answers": [
      [
        "Wann"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g150",
    "set": "grammar",
    "topic": "questions-time",
    "num": 150,
    "page": 7,
    "source": "workbook",
    "prompt": "Hier darf ___ absolut kein Auto parken.",
    "answers": [
      [
        "man"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g151",
    "set": "grammar",
    "topic": "dative-prepositions",
    "num": 151,
    "page": 8,
    "source": "workbook",
    "prompt": "Ich fahre jeden Morgen mit ___ U-Bahn zur Arbeit. (die U-Bahn)",
    "answers": [
      [
        "der"
      ]
    ],
    "reason": "The duplicated mit in the sheet has been removed. Mit der U-Bahn is the correct phrase.",
    "caseSensitive": false,
    "correction": true
  },
  {
    "id": "g152",
    "set": "grammar",
    "topic": "dative-prepositions",
    "num": 152,
    "page": 8,
    "source": "workbook",
    "prompt": "Nach ___ Abendessen gehen wir im Park spazieren. (das Abendessen)",
    "answers": [
      [
        "dem"
      ]
    ],
    "reason": "Mit, nach, von, zu, bei, seit and aus take the dative. Choose the complete dative word, even where the sheet printed only an ending blank.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g153",
    "set": "grammar",
    "topic": "dative-prepositions",
    "num": 153,
    "page": 8,
    "source": "workbook",
    "prompt": "Er kommt gerade von ___ Zahnarzt. (der Zahnarzt)",
    "answers": [
      [
        "dem"
      ]
    ],
    "reason": "Mit, nach, von, zu, bei, seit and aus take the dative. Choose the complete dative word, even where the sheet printed only an ending blank.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g154",
    "set": "grammar",
    "topic": "dative-prepositions",
    "num": 154,
    "page": 8,
    "source": "workbook",
    "prompt": "Am Wochenende gehen wir zu ___ Großeltern. (die Großeltern - plural)",
    "answers": [
      [
        "den"
      ]
    ],
    "reason": "Mit, nach, von, zu, bei, seit and aus take the dative. Choose the complete dative word, even where the sheet printed only an ending blank.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g155",
    "set": "grammar",
    "topic": "dative-prepositions",
    "num": 155,
    "page": 8,
    "source": "workbook",
    "prompt": "Sie wohnt schon seit ___ Jahr in Wien. (ein Jahr)",
    "answers": [
      [
        "einem"
      ]
    ],
    "reason": "Seit takes dative; ein Jahr becomes einem Jahr.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g156",
    "set": "grammar",
    "topic": "dative-prepositions",
    "num": 156,
    "page": 8,
    "source": "workbook",
    "prompt": "Heute bleibe ich gemütlich bei ___ Freund zu Hause. (mein Freund)",
    "answers": [
      [
        "meinem"
      ]
    ],
    "reason": "Mit, nach, von, zu, bei, seit and aus take the dative. Choose the complete dative word, even where the sheet printed only an ending blank.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g157",
    "set": "grammar",
    "topic": "dative-prepositions",
    "num": 157,
    "page": 8,
    "source": "workbook",
    "prompt": "Der Tisch ist komplett aus ___ Holz gemacht. (schweres Holz - no article needed, add adj ending)",
    "answers": [
      [
        "schwerem"
      ]
    ],
    "reason": "Without an article, the adjective carries the dative ending: aus schwerem Holz.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g158",
    "set": "grammar",
    "topic": "dative-prepositions",
    "num": 158,
    "page": 8,
    "source": "workbook",
    "prompt": "Kommst du heute Abend mit zu ___ Party? (die Party)",
    "answers": [
      [
        "der"
      ]
    ],
    "reason": "Mit, nach, von, zu, bei, seit and aus take the dative. Choose the complete dative word, even where the sheet printed only an ending blank.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g159",
    "set": "grammar",
    "topic": "dative-prepositions",
    "num": 159,
    "page": 8,
    "source": "workbook",
    "prompt": "Nach ___ Arbeit trinke ich ein kaltes Bier. (die Arbeit)",
    "answers": [
      [
        "der"
      ]
    ],
    "reason": "Arbeit is feminine: nach der Arbeit. The key incorrectly gives dem.",
    "caseSensitive": false,
    "correction": true
  },
  {
    "id": "g160",
    "set": "grammar",
    "topic": "dative-prepositions",
    "num": 160,
    "page": 8,
    "source": "workbook",
    "prompt": "Er trinkt den Tee am liebsten mit ___ Milch. (die Milch)",
    "answers": [
      [
        "viel"
      ]
    ],
    "reason": "The normal phrase is mit viel Milch. Viel remains unchanged here; do not add a second article after it.",
    "caseSensitive": false,
    "correction": true
  },
  {
    "id": "g161",
    "set": "grammar",
    "topic": "dative-prepositions",
    "num": 161,
    "page": 8,
    "source": "workbook",
    "prompt": "Das Geschenk ist von ___ Kollegen. (mein Kollege)",
    "answers": [
      [
        "meinem"
      ]
    ],
    "reason": "Von takes dative. Mein becomes meinem; the weak masculine noun Kollege becomes Kollegen.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g162",
    "set": "grammar",
    "topic": "dative-prepositions",
    "num": 162,
    "page": 8,
    "source": "workbook",
    "prompt": "Seit ___ Woche bin ich leider stark erkältet. (eine Woche)",
    "answers": [
      [
        "einer"
      ]
    ],
    "reason": "Seit takes dative feminine: einer Woche.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g163",
    "set": "grammar",
    "topic": "dative-prepositions",
    "num": 163,
    "page": 8,
    "source": "workbook",
    "prompt": "Sie geht jeden Dienstag zu ___ Yogakurs. (ihr Yogakurs)",
    "answers": [
      [
        "ihrem"
      ]
    ],
    "reason": "Zu takes dative masculine: ihrem Yogakurs.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g164",
    "set": "grammar",
    "topic": "dative-prepositions",
    "num": 164,
    "page": 8,
    "source": "workbook",
    "prompt": "Bei ___ schlechten Wetter bleibe ich lieber drin. (dieses Wetter)",
    "answers": [
      [
        "diesem"
      ]
    ],
    "reason": "Bei takes dative neuter: diesem Wetter.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g165",
    "set": "grammar",
    "topic": "dative-prepositions",
    "num": 165,
    "page": 8,
    "source": "workbook",
    "prompt": "Ich trinke Wasser direkt aus ___ Flasche. (die Flasche)",
    "answers": [
      [
        "der"
      ]
    ],
    "reason": "Mit, nach, von, zu, bei, seit and aus take the dative. Choose the complete dative word, even where the sheet printed only an ending blank.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g166",
    "set": "grammar",
    "topic": "accusative-prepositions",
    "num": 166,
    "page": 8,
    "source": "workbook",
    "prompt": "Wir gehen abends gern durch ___ schönen Park. (der Park)",
    "answers": [
      [
        "den"
      ]
    ],
    "reason": "Durch, für, gegen, ohne and um take the accusative: masculine den/einen, feminine die/eine, neuter das/ein, plural die.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g167",
    "set": "grammar",
    "topic": "accusative-prepositions",
    "num": 167,
    "page": 8,
    "source": "workbook",
    "prompt": "Diese bunten Blumen sind für ___ Mutter. (meine Mutter)",
    "answers": [
      [
        "meine"
      ]
    ],
    "reason": "Durch, für, gegen, ohne and um take the accusative: masculine den/einen, feminine die/eine, neuter das/ein, plural die.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g168",
    "set": "grammar",
    "topic": "accusative-prepositions",
    "num": 168,
    "page": 8,
    "source": "workbook",
    "prompt": "Er ist ohne ___ Brille absolut hilflos. (seine Brille)",
    "answers": [
      [
        "seine"
      ]
    ],
    "reason": "Durch, für, gegen, ohne and um take the accusative: masculine den/einen, feminine die/eine, neuter das/ein, plural die.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g169",
    "set": "grammar",
    "topic": "accusative-prepositions",
    "num": 169,
    "page": 8,
    "source": "workbook",
    "prompt": "Das Auto fuhr direkt gegen ___ dicken Baum. (der Baum)",
    "answers": [
      [
        "den"
      ]
    ],
    "reason": "Durch, für, gegen, ohne and um take the accusative: masculine den/einen, feminine die/eine, neuter das/ein, plural die.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g170",
    "set": "grammar",
    "topic": "accusative-prepositions",
    "num": 170,
    "page": 8,
    "source": "workbook",
    "prompt": "Wir sitzen alle gemütlich um ___ großen Tisch herum. (der Tisch)",
    "answers": [
      [
        "den"
      ]
    ],
    "reason": "Durch, für, gegen, ohne and um take the accusative: masculine den/einen, feminine die/eine, neuter das/ein, plural die.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g171",
    "set": "grammar",
    "topic": "accusative-prepositions",
    "num": 171,
    "page": 8,
    "source": "workbook",
    "prompt": "Ist das Geschenk für ___? (me)",
    "answers": [
      [
        "mich"
      ]
    ],
    "reason": "Durch, für, gegen, ohne and um take the accusative: masculine den/einen, feminine die/eine, neuter das/ein, plural die.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g172",
    "set": "grammar",
    "topic": "accusative-prepositions",
    "num": 172,
    "page": 8,
    "source": "workbook",
    "prompt": "Du kannst nicht ohne ___ Pass reisen. (ein Pass)",
    "answers": [
      [
        "einen"
      ]
    ],
    "reason": "Durch, für, gegen, ohne and um take the accusative: masculine den/einen, feminine die/eine, neuter das/ein, plural die.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g173",
    "set": "grammar",
    "topic": "accusative-prepositions",
    "num": 173,
    "page": 9,
    "source": "workbook",
    "prompt": "Das Medikament hilft super gegen ___ Kopfschmerz. (der Kopfschmerz)",
    "answers": [
      [
        "den"
      ]
    ],
    "reason": "Durch, für, gegen, ohne and um take the accusative: masculine den/einen, feminine die/eine, neuter das/ein, plural die.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g174",
    "set": "grammar",
    "topic": "accusative-prepositions",
    "num": 174,
    "page": 9,
    "source": "workbook",
    "prompt": "Wir spazieren durch ___ alte Stadtzentrum. (das Stadtzentrum)",
    "answers": [
      [
        "das"
      ]
    ],
    "reason": "Durch, für, gegen, ohne and um take the accusative: masculine den/einen, feminine die/eine, neuter das/ein, plural die.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g175",
    "set": "grammar",
    "topic": "accusative-prepositions",
    "num": 175,
    "page": 9,
    "source": "workbook",
    "prompt": "Um ___ Haus herum stehen viele Bäume. (das Haus)",
    "answers": [
      [
        "das"
      ]
    ],
    "reason": "Durch, für, gegen, ohne and um take the accusative: masculine den/einen, feminine die/eine, neuter das/ein, plural die.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g176",
    "set": "grammar",
    "topic": "accusative-prepositions",
    "num": 176,
    "page": 9,
    "source": "workbook",
    "prompt": "Ohne ___ kann ich nicht leben. (you - informal singular)",
    "answers": [
      [
        "dich"
      ]
    ],
    "reason": "The sheet already printed dich before a redundant blank. Here you supply dich once.",
    "caseSensitive": false,
    "correction": true
  },
  {
    "id": "g177",
    "set": "grammar",
    "topic": "accusative-prepositions",
    "num": 177,
    "page": 9,
    "source": "workbook",
    "prompt": "Der Weg führt direkt durch ___ dunklen Tunnel. (der Tunnel)",
    "answers": [
      [
        "den"
      ]
    ],
    "reason": "Durch, für, gegen, ohne and um take the accusative: masculine den/einen, feminine die/eine, neuter das/ein, plural die.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g178",
    "set": "grammar",
    "topic": "accusative-prepositions",
    "num": 178,
    "page": 9,
    "source": "workbook",
    "prompt": "Ich brauche Geld für ___ neues Fahrrad. (ein Fahrrad)",
    "answers": [
      [
        "ein"
      ]
    ],
    "reason": "Fahrrad is neuter, so accusative indefinite ein stays ein.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g179",
    "set": "grammar",
    "topic": "accusative-prepositions",
    "num": 179,
    "page": 9,
    "source": "workbook",
    "prompt": "Morgen spielen wir gegen ___ stärkste Team der Liga. (das Team)",
    "answers": [
      [
        "das"
      ]
    ],
    "reason": "Durch, für, gegen, ohne and um take the accusative: masculine den/einen, feminine die/eine, neuter das/ein, plural die.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g180",
    "set": "grammar",
    "topic": "accusative-prepositions",
    "num": 180,
    "page": 9,
    "source": "workbook",
    "prompt": "Für ___ Monat mache ich ein Praktikum im Büro. (ein Monat)",
    "answers": [
      [
        "einen"
      ]
    ],
    "reason": "Monat is masculine: für einen Monat.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g181",
    "set": "grammar",
    "topic": "location",
    "num": 181,
    "page": 9,
    "source": "workbook",
    "prompt": "Das Notebook liegt auf ___ Schreibtisch. (der Schreibtisch)",
    "answers": [
      [
        "dem"
      ]
    ],
    "reason": "A location answers Wo? and uses dative with these two-way prepositions. Movement inside a place alone does not force accusative.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g182",
    "set": "grammar",
    "topic": "location",
    "num": 182,
    "page": 9,
    "source": "workbook",
    "prompt": "Die Schuhe stehen unter ___ Bett. (das Bett)",
    "answers": [
      [
        "dem"
      ]
    ],
    "reason": "A location answers Wo? and uses dative with these two-way prepositions. Movement inside a place alone does not force accusative.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g183",
    "set": "grammar",
    "topic": "location",
    "num": 183,
    "page": 9,
    "source": "workbook",
    "prompt": "Das Poster hängt an ___ Wand. (die Wand)",
    "answers": [
      [
        "der"
      ]
    ],
    "reason": "A location answers Wo? and uses dative with these two-way prepositions. Movement inside a place alone does not force accusative.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g184",
    "set": "grammar",
    "topic": "location",
    "num": 184,
    "page": 9,
    "source": "workbook",
    "prompt": "Die Katze schläft hinter ___ Sofa. (das Sofa)",
    "answers": [
      [
        "dem"
      ]
    ],
    "reason": "A location answers Wo? and uses dative with these two-way prepositions. Movement inside a place alone does not force accusative.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g185",
    "set": "grammar",
    "topic": "location",
    "num": 185,
    "page": 9,
    "source": "workbook",
    "prompt": "Das Auto parkt vor ___ Garage. (die Garage)",
    "answers": [
      [
        "der"
      ]
    ],
    "reason": "A location answers Wo? and uses dative with these two-way prepositions. Movement inside a place alone does not force accusative.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g186",
    "set": "grammar",
    "topic": "location",
    "num": 186,
    "page": 9,
    "source": "workbook",
    "prompt": "Wir sitzen alle in ___ Küche. (die Küche)",
    "answers": [
      [
        "der"
      ]
    ],
    "reason": "A location answers Wo? and uses dative with these two-way prepositions. Movement inside a place alone does not force accusative.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g187",
    "set": "grammar",
    "topic": "location",
    "num": 187,
    "page": 9,
    "source": "workbook",
    "prompt": "Die Apotheke befindet sich neben ___ Supermarkt. (der Supermarkt)",
    "answers": [
      [
        "dem"
      ]
    ],
    "reason": "A location answers Wo? and uses dative with these two-way prepositions. Movement inside a place alone does not force accusative.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g188",
    "set": "grammar",
    "topic": "location",
    "num": 188,
    "page": 9,
    "source": "workbook",
    "prompt": "Die Lampe hängt über ___ Esstisch. (der Esstisch)",
    "answers": [
      [
        "dem"
      ]
    ],
    "reason": "A location answers Wo? and uses dative with these two-way prepositions. Movement inside a place alone does not force accusative.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g189",
    "set": "grammar",
    "topic": "location",
    "num": 189,
    "page": 9,
    "source": "workbook",
    "prompt": "Der Stuhl steht zwischen ___ Tisch und der Wand. (der Tisch)",
    "answers": [
      [
        "dem"
      ]
    ],
    "reason": "A location answers Wo? and uses dative with these two-way prepositions. Movement inside a place alone does not force accusative.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g190",
    "set": "grammar",
    "topic": "location",
    "num": 190,
    "page": 9,
    "source": "workbook",
    "prompt": "Das Buch liegt in ___ Tasche. (die Tasche)",
    "answers": [
      [
        "der"
      ]
    ],
    "reason": "A location answers Wo? and uses dative with these two-way prepositions. Movement inside a place alone does not force accusative.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g191",
    "set": "grammar",
    "topic": "location",
    "num": 191,
    "page": 9,
    "source": "workbook",
    "prompt": "Die Kinder spielen auf ___ Spielplatz. (der Spielplatz)",
    "answers": [
      [
        "dem"
      ]
    ],
    "reason": "A location answers Wo? and uses dative with these two-way prepositions. Movement inside a place alone does not force accusative.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g192",
    "set": "grammar",
    "topic": "location",
    "num": 192,
    "page": 9,
    "source": "workbook",
    "prompt": "Der Schlüssel steckt an ___ Haustür. (die Haustür)",
    "answers": [
      [
        "der"
      ]
    ],
    "reason": "A location answers Wo? and uses dative with these two-way prepositions. Movement inside a place alone does not force accusative.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g193",
    "set": "grammar",
    "topic": "location",
    "num": 193,
    "page": 9,
    "source": "workbook",
    "prompt": "Das Fahrrad steht hinter ___ Haus. (das Haus)",
    "answers": [
      [
        "dem"
      ]
    ],
    "reason": "A location answers Wo? and uses dative with these two-way prepositions. Movement inside a place alone does not force accusative.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g194",
    "set": "grammar",
    "topic": "location",
    "num": 194,
    "page": 9,
    "source": "workbook",
    "prompt": "Wir warten vor ___ Kino auf dich. (das Kino)",
    "answers": [
      [
        "dem"
      ]
    ],
    "reason": "A location answers Wo? and uses dative with these two-way prepositions. Movement inside a place alone does not force accusative.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g195",
    "set": "grammar",
    "topic": "location",
    "num": 195,
    "page": 9,
    "source": "workbook",
    "prompt": "Die Milch steht im Kühlschrank neben ___ Saft. (der Saft)",
    "answers": [
      [
        "dem"
      ]
    ],
    "reason": "A location answers Wo? and uses dative with these two-way prepositions. Movement inside a place alone does not force accusative.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g196",
    "set": "grammar",
    "topic": "conjunctions",
    "num": 196,
    "page": 10,
    "source": "workbook",
    "prompt": "Join with und: Ich lerne fleißig Deutsch. Ich möchte in Österreich studieren.",
    "answers": [
      [
        "Ich lerne fleißig Deutsch und ich möchte in Österreich studieren.",
        "Ich lerne fleißig Deutsch und möchte in Österreich studieren."
      ]
    ],
    "reason": "Und adds information, aber contrasts it, and oder offers a choice. These coordinating conjunctions do not send the verb to the end.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g197",
    "set": "grammar",
    "topic": "conjunctions",
    "num": 197,
    "page": 10,
    "source": "workbook",
    "prompt": "Join with aber: Er sucht eine Wohnung. Sie sind alle zu teuer.",
    "answers": [
      [
        "Er sucht eine Wohnung, aber sie sind alle zu teuer."
      ]
    ],
    "reason": "Und adds information, aber contrasts it, and oder offers a choice. These coordinating conjunctions do not send the verb to the end.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g198",
    "set": "grammar",
    "topic": "conjunctions",
    "num": 198,
    "page": 10,
    "source": "workbook",
    "prompt": "Join with oder: Trinken wir heute einen Tee? Gehen wir ein Bier trinken?",
    "answers": [
      [
        "Trinken wir heute einen Tee oder gehen wir ein Bier trinken?"
      ]
    ],
    "reason": "Und adds information, aber contrasts it, and oder offers a choice. These coordinating conjunctions do not send the verb to the end.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g199",
    "set": "grammar",
    "topic": "conjunctions",
    "num": 199,
    "page": 10,
    "source": "workbook",
    "prompt": "Join with und: Ich habe Kopfschmerzen. Ich habe heute Fieber.",
    "answers": [
      [
        "Ich habe Kopfschmerzen und ich habe heute Fieber.",
        "Ich habe Kopfschmerzen und habe heute Fieber."
      ]
    ],
    "reason": "Und adds information, aber contrasts it, and oder offers a choice. These coordinating conjunctions do not send the verb to the end.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g200",
    "set": "grammar",
    "topic": "conjunctions",
    "num": 200,
    "page": 10,
    "source": "workbook",
    "prompt": "Join with aber: Der Pullover ist schön. Er passt mir leider nicht.",
    "answers": [
      [
        "Der Pullover ist schön, aber er passt mir leider nicht."
      ]
    ],
    "reason": "Und adds information, aber contrasts it, and oder offers a choice. These coordinating conjunctions do not send the verb to the end.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g201",
    "set": "grammar",
    "topic": "conjunctions",
    "num": 201,
    "page": 10,
    "source": "workbook",
    "prompt": "Join with oder: Willst du im Kaufhaus einkaufen? Gehen wir in die kleinen Geschäfte?",
    "answers": [
      [
        "Willst du im Kaufhaus einkaufen oder gehen wir in die kleinen Geschäfte?"
      ]
    ],
    "reason": "Und adds information, aber contrasts it, and oder offers a choice. These coordinating conjunctions do not send the verb to the end.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g202",
    "set": "grammar",
    "topic": "conjunctions",
    "num": 202,
    "page": 10,
    "source": "workbook",
    "prompt": "Join with und: Thomas arbeitet im Krankenhaus. Seine Freundin studiert Medizin.",
    "answers": [
      [
        "Thomas arbeitet im Krankenhaus und seine Freundin studiert Medizin."
      ]
    ],
    "reason": "Und adds information, aber contrasts it, and oder offers a choice. These coordinating conjunctions do not send the verb to the end.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g203",
    "set": "grammar",
    "topic": "conjunctions",
    "num": 203,
    "page": 10,
    "source": "workbook",
    "prompt": "Join with aber: Ich würde gerne mitkommen. Ich muss arbeiten.",
    "answers": [
      [
        "Ich würde gerne mitkommen, aber ich muss arbeiten."
      ]
    ],
    "reason": "Und adds information, aber contrasts it, and oder offers a choice. These coordinating conjunctions do not send the verb to the end.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g204",
    "set": "grammar",
    "topic": "conjunctions",
    "num": 204,
    "page": 10,
    "source": "workbook",
    "prompt": "Join with oder: Fahren wir mit dem Bus? Nehmen wir lieber die U-Bahn?",
    "answers": [
      [
        "Fahren wir mit dem Bus oder nehmen wir lieber die U-Bahn?"
      ]
    ],
    "reason": "Und adds information, aber contrasts it, and oder offers a choice. These coordinating conjunctions do not send the verb to the end.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g205",
    "set": "grammar",
    "topic": "conjunctions",
    "num": 205,
    "page": 10,
    "source": "workbook",
    "prompt": "Join with und: Wir kaufen Gemüse auf dem Markt. Wir kaufen Brot in der Bäckerei.",
    "answers": [
      [
        "Wir kaufen Gemüse auf dem Markt und wir kaufen Brot in der Bäckerei.",
        "Wir kaufen Gemüse auf dem Markt und Brot in der Bäckerei."
      ]
    ],
    "reason": "Und adds information, aber contrasts it, and oder offers a choice. These coordinating conjunctions do not send the verb to the end.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g206",
    "set": "grammar",
    "topic": "conjunctions",
    "num": 206,
    "page": 10,
    "source": "workbook",
    "prompt": "Join with aber: Ich suche eine neue Stelle. Ich finde keine Angebote.",
    "answers": [
      [
        "Ich suche eine neue Stelle, aber ich finde keine Angebote."
      ]
    ],
    "reason": "Und adds information, aber contrasts it, and oder offers a choice. These coordinating conjunctions do not send the verb to the end.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g207",
    "set": "grammar",
    "topic": "conjunctions",
    "num": 207,
    "page": 10,
    "source": "workbook",
    "prompt": "Join with oder: Essen wir zu Hause? Gehen wir heute Abend ins Restaurant?",
    "answers": [
      [
        "Essen wir zu Hause oder gehen wir heute Abend ins Restaurant?"
      ]
    ],
    "reason": "Und adds information, aber contrasts it, and oder offers a choice. These coordinating conjunctions do not send the verb to the end.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g208",
    "set": "grammar",
    "topic": "conjunctions",
    "num": 208,
    "page": 10,
    "source": "workbook",
    "prompt": "Join with aber: Das Wetter ist heute sonnig. Es ist ziemlich kalt draußen.",
    "answers": [
      [
        "Das Wetter ist heute sonnig, aber es ist ziemlich kalt draußen."
      ]
    ],
    "reason": "Und adds information, aber contrasts it, and oder offers a choice. These coordinating conjunctions do not send the verb to the end.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g209",
    "set": "grammar",
    "topic": "conjunctions",
    "num": 209,
    "page": 11,
    "source": "workbook",
    "prompt": "Join with und: Er packt seinen Koffer. Er reist morgen ab.",
    "answers": [
      [
        "Er packt seinen Koffer und er reist morgen ab.",
        "Er packt seinen Koffer und reist morgen ab."
      ]
    ],
    "reason": "Und adds information, aber contrasts it, and oder offers a choice. These coordinating conjunctions do not send the verb to the end.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "g210",
    "set": "grammar",
    "topic": "conjunctions",
    "num": 210,
    "page": 11,
    "source": "workbook",
    "prompt": "Join with oder: Möchtest du Urlaub am Strand machen? Wanderst du lieber in den Bergen?",
    "answers": [
      [
        "Möchtest du Urlaub am Strand machen oder wanderst du lieber in den Bergen?"
      ]
    ],
    "reason": "Und adds information, aber contrasts it, and oder offers a choice. These coordinating conjunctions do not send the verb to the end.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v001",
    "set": "vocab",
    "topic": "clothing",
    "num": 1,
    "page": 13,
    "source": "workbook",
    "prompt": "Translate the item: The dress → ___",
    "answers": [
      [
        "das Kleid"
      ]
    ],
    "reason": "Keep the article with every clothing noun. An adjective after sein has no ending.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v002",
    "set": "vocab",
    "topic": "clothing",
    "num": 2,
    "page": 13,
    "source": "workbook",
    "prompt": "Translate the item: The skirt → ___",
    "answers": [
      [
        "der Rock"
      ]
    ],
    "reason": "Keep the article with every clothing noun. An adjective after sein has no ending.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v003",
    "set": "vocab",
    "topic": "clothing",
    "num": 3,
    "page": 13,
    "source": "workbook",
    "prompt": "Translate the item: The suit → ___",
    "answers": [
      [
        "der Anzug"
      ]
    ],
    "reason": "Keep the article with every clothing noun. An adjective after sein has no ending.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v004",
    "set": "vocab",
    "topic": "clothing",
    "num": 4,
    "page": 13,
    "source": "workbook",
    "prompt": "Translate the sentence: The jacket is old-fashioned. → Die Jacke ist ___.",
    "answers": [
      [
        "altmodisch"
      ]
    ],
    "reason": "Keep the article with every clothing noun. An adjective after sein has no ending.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v005",
    "set": "vocab",
    "topic": "clothing",
    "num": 5,
    "page": 13,
    "source": "workbook",
    "prompt": "Translate the sentence: The trousers/pants are comfortable. → Die Hose ist ___.",
    "answers": [
      [
        "bequem"
      ]
    ],
    "reason": "Keep the article with every clothing noun. An adjective after sein has no ending.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v006",
    "set": "vocab",
    "topic": "shops",
    "num": 6,
    "page": 13,
    "source": "workbook",
    "prompt": "Ich kaufe Brot und Brötchen in der ___. (bakery)",
    "answers": [
      [
        "Bäckerei"
      ]
    ],
    "reason": "The preposition/article is already given in this sentence; enter the shop noun. For full noun translations, include the article.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v007",
    "set": "vocab",
    "topic": "shops",
    "num": 7,
    "page": 13,
    "source": "workbook",
    "prompt": "Wenn ich krank bin, kaufe ich Medikamente in der ___. (pharmacy)",
    "answers": [
      [
        "Apotheke"
      ]
    ],
    "reason": "The preposition/article is already given in this sentence; enter the shop noun. For full noun translations, include the article.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v008",
    "set": "vocab",
    "topic": "shops",
    "num": 8,
    "page": 13,
    "source": "workbook",
    "prompt": "Wir kaufen frisches Fleisch und Wurst in der ___. (butcher shop)",
    "answers": [
      [
        "Metzgerei",
        "Fleischerei"
      ]
    ],
    "reason": "The preposition/article is already given in this sentence; enter the shop noun. For full noun translations, include the article.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v009",
    "set": "vocab",
    "topic": "shops",
    "num": 9,
    "page": 13,
    "source": "workbook",
    "prompt": "Das große Gebäude mit vielen Geschäften heißt ___. (department store)",
    "answers": [
      [
        "das Kaufhaus",
        "das Warenhaus"
      ]
    ],
    "reason": "The preposition/article is already given in this sentence; enter the shop noun. For full noun translations, include the article.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v010",
    "set": "vocab",
    "topic": "shops",
    "num": 10,
    "page": 13,
    "source": "workbook",
    "prompt": "Für den Hund kaufe ich Futter im ___. (pet store)",
    "answers": [
      [
        "Tiergeschäft"
      ]
    ],
    "reason": "The preposition/article is already given in this sentence; enter the shop noun. For full noun translations, include the article.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v011",
    "set": "vocab",
    "topic": "holidays",
    "num": 11,
    "page": 13,
    "source": "workbook",
    "prompt": "Ein Urlaub am Strand mit Meer und Sonne ist ein ___.",
    "answers": [
      [
        "Strandurlaub"
      ]
    ],
    "reason": "Learn the compound as one word: Strand + Urlaub, Städte + Reise, or Kreuz + Fahrt.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v012",
    "set": "vocab",
    "topic": "holidays",
    "num": 12,
    "page": 13,
    "source": "workbook",
    "prompt": "Eine Reise auf einem großen Schiff im Ozean nennt man ___.",
    "answers": [
      [
        "Kreuzfahrt",
        "eine Kreuzfahrt"
      ]
    ],
    "reason": "Learn the compound as one word: Strand + Urlaub, Städte + Reise, or Kreuz + Fahrt.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v013",
    "set": "vocab",
    "topic": "holidays",
    "num": 13,
    "page": 14,
    "source": "workbook",
    "prompt": "Wenn man im Winter in die Berge fährt, macht man einen ___.",
    "answers": [
      [
        "Skiurlaub",
        "Winterurlaub"
      ]
    ],
    "reason": "Learn the compound as one word: Strand + Urlaub, Städte + Reise, or Kreuz + Fahrt.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v014",
    "set": "vocab",
    "topic": "holidays",
    "num": 14,
    "page": 14,
    "source": "workbook",
    "prompt": "Eine Reise in eine Großstadt wie Berlin oder Paris ist eine ___.",
    "answers": [
      [
        "Städtereise"
      ]
    ],
    "reason": "Learn the compound as one word: Strand + Urlaub, Städte + Reise, or Kreuz + Fahrt.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v015",
    "set": "vocab",
    "topic": "holidays",
    "num": 15,
    "page": 14,
    "source": "workbook",
    "prompt": "Die Reise direkt nach der Hochzeit heißt ___.",
    "answers": [
      [
        "die Flitterwochen",
        "die Hochzeitsreise",
        "Flitterwochen",
        "Hochzeitsreise"
      ]
    ],
    "reason": "Learn the compound as one word: Strand + Urlaub, Städte + Reise, or Kreuz + Fahrt.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v016",
    "set": "vocab",
    "topic": "travel",
    "num": 16,
    "page": 14,
    "source": "workbook",
    "prompt": "Wir fahren an die ___, um das Meer zu sehen. (coast)",
    "answers": [
      [
        "Küste"
      ]
    ],
    "reason": "Match the destination or travel verb to the sentence. Capitalize nouns such as Küste and Berge.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v017",
    "set": "vocab",
    "topic": "travel",
    "num": 17,
    "page": 14,
    "source": "workbook",
    "prompt": "Ich wandere nicht gern, deshalb fahre ich nicht in die ___. (mountains)",
    "answers": [
      [
        "Berge"
      ]
    ],
    "reason": "Match the destination or travel verb to the sentence. Capitalize nouns such as Küste and Berge.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v018",
    "set": "vocab",
    "topic": "travel",
    "num": 18,
    "page": 14,
    "source": "workbook",
    "prompt": "Vor der Abreise muss ich noch meinen Koffer ___. (to pack)",
    "answers": [
      [
        "packen"
      ]
    ],
    "reason": "Match the destination or travel verb to the sentence. Capitalize nouns such as Küste and Berge.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v019",
    "set": "vocab",
    "topic": "travel",
    "num": 19,
    "page": 14,
    "source": "workbook",
    "prompt": "Wir möchten ein Zimmer im Hotel online ___. (to book)",
    "answers": [
      [
        "buchen"
      ]
    ],
    "reason": "Match the destination or travel verb to the sentence. Capitalize nouns such as Küste and Berge.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v020",
    "set": "vocab",
    "topic": "travel",
    "num": 20,
    "page": 14,
    "source": "workbook",
    "prompt": "In Rom kann man viele alte Monumente ___. (to go sightseeing/visit)",
    "answers": [
      [
        "besichtigen"
      ]
    ],
    "reason": "Match the destination or travel verb to the sentence. Capitalize nouns such as Küste and Berge.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v021",
    "set": "vocab",
    "topic": "landmarks",
    "num": 21,
    "page": 14,
    "source": "workbook",
    "prompt": "Translate: The castle / palace → ___",
    "answers": [
      [
        "das Schloss"
      ]
    ],
    "reason": "Landmark nouns have fixed grammatical genders. Learn the article with the noun.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v022",
    "set": "vocab",
    "topic": "landmarks",
    "num": 22,
    "page": 14,
    "source": "workbook",
    "prompt": "Translate: The museum → ___",
    "answers": [
      [
        "das Museum"
      ]
    ],
    "reason": "Landmark nouns have fixed grammatical genders. Learn the article with the noun.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v023",
    "set": "vocab",
    "topic": "landmarks",
    "num": 23,
    "page": 14,
    "source": "workbook",
    "prompt": "Translate: The bridge → ___",
    "answers": [
      [
        "die Brücke"
      ]
    ],
    "reason": "Landmark nouns have fixed grammatical genders. Learn the article with the noun.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v024",
    "set": "vocab",
    "topic": "landmarks",
    "num": 24,
    "page": 14,
    "source": "workbook",
    "prompt": "Translate: The town hall → ___",
    "answers": [
      [
        "das Rathaus"
      ]
    ],
    "reason": "Landmark nouns have fixed grammatical genders. Learn the article with the noun.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v025",
    "set": "vocab",
    "topic": "landmarks",
    "num": 25,
    "page": 14,
    "source": "workbook",
    "prompt": "Translate: The fountain → ___",
    "answers": [
      [
        "der Brunnen"
      ]
    ],
    "reason": "Landmark nouns have fixed grammatical genders. Learn the article with the noun.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v026",
    "set": "vocab",
    "topic": "weather",
    "num": 26,
    "page": 14,
    "source": "workbook",
    "prompt": "Wenn die Sonne scheint, sagen wir: Es ist ___.",
    "answers": [
      [
        "sonnig"
      ]
    ],
    "reason": "Use Es ist + adjective, but Es regnet/schneit for a weather verb.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v027",
    "set": "vocab",
    "topic": "weather",
    "num": 27,
    "page": 14,
    "source": "workbook",
    "prompt": "Wenn Wasser vom Himmel fällt, heißt es: Es ___.",
    "answers": [
      [
        "regnet"
      ]
    ],
    "reason": "Use Es ist + adjective, but Es regnet/schneit for a weather verb.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v028",
    "set": "vocab",
    "topic": "weather",
    "num": 28,
    "page": 15,
    "source": "workbook",
    "prompt": "Es ist Winter und alles ist weiß: Es ___.",
    "answers": [
      [
        "schneit"
      ]
    ],
    "reason": "Use Es ist + adjective, but Es regnet/schneit for a weather verb.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v029",
    "set": "vocab",
    "topic": "weather",
    "num": 29,
    "page": 15,
    "source": "workbook",
    "prompt": "Man kann nicht weit sehen, weil alles grau ist: Es ist ___. (foggy)",
    "answers": [
      [
        "neblig",
        "nebelig"
      ]
    ],
    "reason": "Use Es ist + adjective, but Es regnet/schneit for a weather verb.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v030",
    "set": "vocab",
    "topic": "weather",
    "num": 30,
    "page": 15,
    "source": "workbook",
    "prompt": "Wenn das Thermometer 38 Grad anzeigt, ist es sehr ___.",
    "answers": [
      [
        "heiß"
      ]
    ],
    "reason": "Use Es ist + adjective, but Es regnet/schneit for a weather verb.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v031",
    "set": "vocab",
    "topic": "orientation",
    "num": 31,
    "page": 15,
    "source": "workbook",
    "prompt": "Fahren Sie nicht nach links, fahren Sie nach ___. (right)",
    "answers": [
      [
        "rechts"
      ]
    ],
    "reason": "Match the direction or road feature. Rechts means right; a Kreuzung is an intersection.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v032",
    "set": "vocab",
    "topic": "orientation",
    "num": 32,
    "page": 15,
    "source": "workbook",
    "prompt": "Gehen Sie immer geradeaus bis zur nächsten ___. (intersection/crossing)",
    "answers": [
      [
        "Kreuzung"
      ]
    ],
    "reason": "Match the direction or road feature. Rechts means right; a Kreuzung is an intersection.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v033",
    "set": "vocab",
    "topic": "orientation",
    "num": 33,
    "page": 15,
    "source": "workbook",
    "prompt": "Wenn die Ampel rot ist, müssen wir stehen bleiben. Was bedeutet „die Ampel“? → ___",
    "answers": [
      [
        "traffic light",
        "traffic lights"
      ]
    ],
    "reason": "Match the direction or road feature. Rechts means right; a Kreuzung is an intersection.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v034",
    "set": "vocab",
    "topic": "orientation",
    "num": 34,
    "page": 15,
    "source": "workbook",
    "prompt": "Um den richtigen Weg zu finden, benutze ich eine ___. (map)",
    "answers": [
      [
        "Karte"
      ]
    ],
    "reason": "Match the direction or road feature. Rechts means right; a Kreuzung is an intersection.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v035",
    "set": "vocab",
    "topic": "orientation",
    "num": 35,
    "page": 15,
    "source": "workbook",
    "prompt": "Das Auto parkt auf dem ___. (parking lot)",
    "answers": [
      [
        "Parkplatz"
      ]
    ],
    "reason": "Match the direction or road feature. Rechts means right; a Kreuzung is an intersection.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v036",
    "set": "vocab",
    "topic": "directions",
    "num": 36,
    "page": 15,
    "source": "workbook",
    "prompt": "Translate: Turn left → ___",
    "answers": [
      [
        "links abbiegen",
        "Biegen Sie links ab"
      ]
    ],
    "reason": "These are direction phrases from the sheet. With a formal command, put Sie after the verb.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v037",
    "set": "vocab",
    "topic": "directions",
    "num": 37,
    "page": 15,
    "source": "workbook",
    "prompt": "Translate: Go straight ahead → ___",
    "answers": [
      [
        "geradeaus fahren",
        "Gehen Sie geradeaus",
        "Fahren Sie geradeaus"
      ]
    ],
    "reason": "These are direction phrases from the sheet. With a formal command, put Sie after the verb.",
    "caseSensitive": false,
    "correction": true
  },
  {
    "id": "v038",
    "set": "vocab",
    "topic": "directions",
    "num": 38,
    "page": 15,
    "source": "workbook",
    "prompt": "Translate: Cross the street → ___",
    "answers": [
      [
        "die Straße überqueren",
        "Überqueren Sie die Straße"
      ]
    ],
    "reason": "These are direction phrases from the sheet. With a formal command, put Sie after the verb.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v039",
    "set": "vocab",
    "topic": "directions",
    "num": 39,
    "page": 15,
    "source": "workbook",
    "prompt": "Translate: It is next to the bank. → Es ist ___ der Bank.",
    "answers": [
      [
        "neben"
      ]
    ],
    "reason": "These are direction phrases from the sheet. With a formal command, put Sie after the verb.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v040",
    "set": "vocab",
    "topic": "directions",
    "num": 40,
    "page": 15,
    "source": "workbook",
    "prompt": "Translate: Take the second street. → Die ___ Straße nehmen.",
    "answers": [
      [
        "zweite"
      ]
    ],
    "reason": "These are direction phrases from the sheet. With a formal command, put Sie after the verb.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v041",
    "set": "vocab",
    "topic": "workplaces",
    "num": 41,
    "page": 15,
    "source": "workbook",
    "prompt": "Ein Wissenschaftler arbeitet im ___. (laboratory)",
    "answers": [
      [
        "Labor"
      ]
    ],
    "reason": "Workplace nouns often follow im (= in dem). Plural examples: Büros, Werkstätten.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v042",
    "set": "vocab",
    "topic": "workplaces",
    "num": 42,
    "page": 16,
    "source": "workbook",
    "prompt": "Ärzte und Krankenschwestern arbeiten im ___. (hospital)",
    "answers": [
      [
        "Krankenhaus"
      ]
    ],
    "reason": "Workplace nouns often follow im (= in dem). Plural examples: Büros, Werkstätten.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v043",
    "set": "vocab",
    "topic": "workplaces",
    "num": 43,
    "page": 16,
    "source": "workbook",
    "prompt": "Der Bauer arbeitet auf dem ___. (farm)",
    "answers": [
      [
        "Bauernhof"
      ]
    ],
    "reason": "Workplace nouns often follow im (= in dem). Plural examples: Büros, Werkstätten.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v044",
    "set": "vocab",
    "topic": "workplaces",
    "num": 44,
    "page": 16,
    "source": "workbook",
    "prompt": "What is the plural of \"das Büro\"? → ___",
    "answers": [
      [
        "die Büros",
        "Büros"
      ]
    ],
    "reason": "Workplace nouns often follow im (= in dem). Plural examples: Büros, Werkstätten.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "v045",
    "set": "vocab",
    "topic": "workplaces",
    "num": 45,
    "page": 16,
    "source": "workbook",
    "prompt": "What is the plural of \"die Werkstatt\"? → ___",
    "answers": [
      [
        "die Werkstätten",
        "Werkstätten"
      ]
    ],
    "reason": "Workplace nouns often follow im (= in dem). Plural examples: Büros, Werkstätten.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n1-1",
    "set": "notes",
    "topic": "welcher",
    "num": 1,
    "page": 1,
    "source": "notes",
    "block": "welch-",
    "prompt": "___ Bluse gefällt dir besser? Die rote oder die blaue?",
    "answers": [
      [
        "Welche"
      ]
    ],
    "reason": "Welch- uses definite-article endings. Determine the noun’s gender/number and its case before choosing the ending.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n1-2",
    "set": "notes",
    "topic": "welcher",
    "num": 2,
    "page": 1,
    "source": "notes",
    "block": "welch-",
    "prompt": "___ Film läuft heute Abend im Kino?",
    "answers": [
      [
        "Welcher"
      ]
    ],
    "reason": "Welch- uses definite-article endings. Determine the noun’s gender/number and its case before choosing the ending.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n1-3",
    "set": "notes",
    "topic": "welcher",
    "num": 3,
    "page": 1,
    "source": "notes",
    "block": "welch-",
    "prompt": "___ Buch liest du gerade? Ist es ein Roman?",
    "answers": [
      [
        "Welches"
      ]
    ],
    "reason": "Welch- uses definite-article endings. Determine the noun’s gender/number and its case before choosing the ending.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n1-4",
    "set": "notes",
    "topic": "welcher",
    "num": 4,
    "page": 2,
    "source": "notes",
    "block": "welch-",
    "prompt": "Mit ___ Bus fährst du jeden Tag zur Schule?",
    "answers": [
      [
        "welchem"
      ]
    ],
    "reason": "Welch- uses definite-article endings. Determine the noun’s gender/number and its case before choosing the ending.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n1-5",
    "set": "notes",
    "topic": "welcher",
    "num": 5,
    "page": 2,
    "source": "notes",
    "block": "welch-",
    "prompt": "___ Bücher nimmst du mit in den Urlaub?",
    "answers": [
      [
        "Welche"
      ]
    ],
    "reason": "Welch- uses definite-article endings. Determine the noun’s gender/number and its case before choosing the ending.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n1-6",
    "set": "notes",
    "topic": "welcher",
    "num": 6,
    "page": 2,
    "source": "notes",
    "block": "welch-",
    "prompt": "___ Auto gehört deinem Vater?",
    "answers": [
      [
        "Welches"
      ]
    ],
    "reason": "Welch- uses definite-article endings. Determine the noun’s gender/number and its case before choosing the ending.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n1-7",
    "set": "notes",
    "topic": "welcher",
    "num": 7,
    "page": 2,
    "source": "notes",
    "block": "welch-",
    "prompt": "___ Tag ist heute? Donnerstag?",
    "answers": [
      [
        "Welcher"
      ]
    ],
    "reason": "Welch- uses definite-article endings. Determine the noun’s gender/number and its case before choosing the ending.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n1-8",
    "set": "notes",
    "topic": "welcher",
    "num": 8,
    "page": 2,
    "source": "notes",
    "block": "welch-",
    "prompt": "___ Freund gibst du das Geburtstagsgeschenk?",
    "answers": [
      [
        "Welchem"
      ]
    ],
    "reason": "Welch- uses definite-article endings. Determine the noun’s gender/number and its case before choosing the ending.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n1-9",
    "set": "notes",
    "topic": "welcher",
    "num": 9,
    "page": 2,
    "source": "notes",
    "block": "welch-",
    "prompt": "___ Schuhe willst du für die Party kaufen?",
    "answers": [
      [
        "Welche"
      ]
    ],
    "reason": "Welch- uses definite-article endings. Determine the noun’s gender/number and its case before choosing the ending.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n1-10",
    "set": "notes",
    "topic": "welcher",
    "num": 10,
    "page": 2,
    "source": "notes",
    "block": "welch-",
    "prompt": "___ Fach hast du in der ersten Stunde? Mathe oder Deutsch?",
    "answers": [
      [
        "Welches"
      ]
    ],
    "reason": "Welch- uses definite-article endings. Determine the noun’s gender/number and its case before choosing the ending.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n2-1",
    "set": "notes",
    "topic": "dieser",
    "num": 1,
    "page": 3,
    "source": "notes",
    "block": "dies-",
    "prompt": "___ Bluse gefällt mir sehr gut, ich kaufe sie!",
    "answers": [
      [
        "Diese"
      ]
    ],
    "reason": "Dies- uses definite-article endings: nominative -er/-e/-es/-e; accusative -en/-e/-es/-e; dative -em/-er/-em/-en.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n2-2",
    "set": "notes",
    "topic": "dieser",
    "num": 2,
    "page": 3,
    "source": "notes",
    "block": "dies-",
    "prompt": "___ Film läuft heute Abend im Kino.",
    "answers": [
      [
        "Dieser"
      ]
    ],
    "reason": "Dies- uses definite-article endings: nominative -er/-e/-es/-e; accusative -en/-e/-es/-e; dative -em/-er/-em/-en.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n2-3",
    "set": "notes",
    "topic": "dieser",
    "num": 3,
    "page": 3,
    "source": "notes",
    "block": "dies-",
    "prompt": "___ Buch ist wirklich spannend.",
    "answers": [
      [
        "Dieses"
      ]
    ],
    "reason": "Dies- uses definite-article endings: nominative -er/-e/-es/-e; accusative -en/-e/-es/-e; dative -em/-er/-em/-en.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n2-4",
    "set": "notes",
    "topic": "dieser",
    "num": 4,
    "page": 3,
    "source": "notes",
    "block": "dies-",
    "prompt": "___ Schuhe sind viel zu teuer.",
    "answers": [
      [
        "Diese"
      ]
    ],
    "reason": "Dies- uses definite-article endings: nominative -er/-e/-es/-e; accusative -en/-e/-es/-e; dative -em/-er/-em/-en.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n2-5",
    "set": "notes",
    "topic": "dieser",
    "num": 5,
    "page": 3,
    "source": "notes",
    "block": "dies-",
    "prompt": "___ Lehrer unterrichtet Mathematik.",
    "answers": [
      [
        "Dieser"
      ]
    ],
    "reason": "Dies- uses definite-article endings: nominative -er/-e/-es/-e; accusative -en/-e/-es/-e; dative -em/-er/-em/-en.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n2-6",
    "set": "notes",
    "topic": "dieser",
    "num": 6,
    "page": 3,
    "source": "notes",
    "block": "dies-",
    "prompt": "___ Auto gehört meiner Familie.",
    "answers": [
      [
        "Dieses"
      ]
    ],
    "reason": "Dies- uses definite-article endings: nominative -er/-e/-es/-e; accusative -en/-e/-es/-e; dative -em/-er/-em/-en.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n2-7",
    "set": "notes",
    "topic": "dieser",
    "num": 7,
    "page": 3,
    "source": "notes",
    "block": "dies-",
    "prompt": "___ Farbe mag ich überhaupt nicht.",
    "answers": [
      [
        "Diese"
      ]
    ],
    "reason": "Dies- uses definite-article endings: nominative -er/-e/-es/-e; accusative -en/-e/-es/-e; dative -em/-er/-em/-en.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n2-8",
    "set": "notes",
    "topic": "dieser",
    "num": 8,
    "page": 3,
    "source": "notes",
    "block": "dies-",
    "prompt": "___ Essen schmeckt hervorragend!",
    "answers": [
      [
        "Dieses"
      ]
    ],
    "reason": "Dies- uses definite-article endings: nominative -er/-e/-es/-e; accusative -en/-e/-es/-e; dative -em/-er/-em/-en.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n2-9",
    "set": "notes",
    "topic": "dieser",
    "num": 9,
    "page": 3,
    "source": "notes",
    "block": "dies-",
    "prompt": "___ Tag ist mein Glückstag.",
    "answers": [
      [
        "Dieser"
      ]
    ],
    "reason": "Dies- uses definite-article endings: nominative -er/-e/-es/-e; accusative -en/-e/-es/-e; dative -em/-er/-em/-en.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n2-10",
    "set": "notes",
    "topic": "dieser",
    "num": 10,
    "page": 3,
    "source": "notes",
    "block": "dies-",
    "prompt": "___ Bücher lese ich im Urlaub.",
    "answers": [
      [
        "Diese"
      ]
    ],
    "reason": "Dies- uses definite-article endings: nominative -er/-e/-es/-e; accusative -en/-e/-es/-e; dative -em/-er/-em/-en.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n3-1",
    "set": "notes",
    "topic": "dative-pronouns",
    "num": 1,
    "page": 5,
    "source": "notes",
    "block": "Dative pronouns",
    "prompt": "Das Kleid passt ___ überhaupt nicht. (ich)",
    "answers": [
      [
        "mir"
      ]
    ],
    "reason": "Use the pronoun required by the verb or preposition: ich→mir, du→dir, er/es→ihm, sie→ihr, wir→uns, ihr→euch, sie→ihnen, Sie→Ihnen.",
    "caseSensitive": true,
    "correction": false
  },
  {
    "id": "n3-2",
    "set": "notes",
    "topic": "dative-pronouns",
    "num": 2,
    "page": 5,
    "source": "notes",
    "block": "Dative pronouns",
    "prompt": "Wie geht es ___, Herr Schmidt? (Sie)",
    "answers": [
      [
        "Ihnen"
      ]
    ],
    "reason": "Use the pronoun required by the verb or preposition: ich→mir, du→dir, er/es→ihm, sie→ihr, wir→uns, ihr→euch, sie→ihnen, Sie→Ihnen.",
    "caseSensitive": true,
    "correction": false
  },
  {
    "id": "n3-3",
    "set": "notes",
    "topic": "dative-pronouns",
    "num": 3,
    "page": 5,
    "source": "notes",
    "block": "Dative pronouns",
    "prompt": "Wir helfen ___ morgen beim Umzug. (ihr)",
    "answers": [
      [
        "euch"
      ]
    ],
    "reason": "Use the pronoun required by the verb or preposition: ich→mir, du→dir, er/es→ihm, sie→ihr, wir→uns, ihr→euch, sie→ihnen, Sie→Ihnen.",
    "caseSensitive": true,
    "correction": false
  },
  {
    "id": "n3-4",
    "set": "notes",
    "topic": "dative-pronouns",
    "num": 4,
    "page": 5,
    "source": "notes",
    "block": "Dative pronouns",
    "prompt": "Das Auto gehört ___. (er)",
    "answers": [
      [
        "ihm"
      ]
    ],
    "reason": "Use the pronoun required by the verb or preposition: ich→mir, du→dir, er/es→ihm, sie→ihr, wir→uns, ihr→euch, sie→ihnen, Sie→Ihnen.",
    "caseSensitive": true,
    "correction": false
  },
  {
    "id": "n3-5",
    "set": "notes",
    "topic": "dative-pronouns",
    "num": 5,
    "page": 5,
    "source": "notes",
    "block": "Dative pronouns",
    "prompt": "Schmeckt ___ das Essen, Kinder? (ihr)",
    "answers": [
      [
        "euch"
      ]
    ],
    "reason": "Use the pronoun required by the verb or preposition: ich→mir, du→dir, er/es→ihm, sie→ihr, wir→uns, ihr→euch, sie→ihnen, Sie→Ihnen.",
    "caseSensitive": true,
    "correction": false
  },
  {
    "id": "n3-6",
    "set": "notes",
    "topic": "dative-pronouns",
    "num": 6,
    "page": 5,
    "source": "notes",
    "block": "Dative pronouns",
    "prompt": "Das Buch gefällt ___ sehr gut. (sie — her)",
    "answers": [
      [
        "ihr"
      ]
    ],
    "reason": "Use the pronoun required by the verb or preposition: ich→mir, du→dir, er/es→ihm, sie→ihr, wir→uns, ihr→euch, sie→ihnen, Sie→Ihnen.",
    "caseSensitive": true,
    "correction": false
  },
  {
    "id": "n3-7",
    "set": "notes",
    "topic": "dative-pronouns",
    "num": 7,
    "page": 5,
    "source": "notes",
    "block": "Dative pronouns",
    "prompt": "Kannst du ___ bitte den Salzstreuer geben? (wir)",
    "answers": [
      [
        "uns"
      ]
    ],
    "reason": "Use the pronoun required by the verb or preposition: ich→mir, du→dir, er/es→ihm, sie→ihr, wir→uns, ihr→euch, sie→ihnen, Sie→Ihnen.",
    "caseSensitive": true,
    "correction": false
  },
  {
    "id": "n3-8",
    "set": "notes",
    "topic": "dative-pronouns",
    "num": 8,
    "page": 5,
    "source": "notes",
    "block": "Dative pronouns",
    "prompt": "Ich danke ___ für das schöne Geschenk! (du)",
    "answers": [
      [
        "dir"
      ]
    ],
    "reason": "Use the pronoun required by the verb or preposition: ich→mir, du→dir, er/es→ihm, sie→ihr, wir→uns, ihr→euch, sie→ihnen, Sie→Ihnen.",
    "caseSensitive": true,
    "correction": false
  },
  {
    "id": "n3-9",
    "set": "notes",
    "topic": "dative-pronouns",
    "num": 9,
    "page": 5,
    "source": "notes",
    "block": "Dative pronouns",
    "prompt": "Das Baby weint. Was fehlt ___ denn? (es)",
    "answers": [
      [
        "ihm"
      ]
    ],
    "reason": "Use the pronoun required by the verb or preposition: ich→mir, du→dir, er/es→ihm, sie→ihr, wir→uns, ihr→euch, sie→ihnen, Sie→Ihnen.",
    "caseSensitive": true,
    "correction": false
  },
  {
    "id": "n3-10",
    "set": "notes",
    "topic": "dative-pronouns",
    "num": 10,
    "page": 5,
    "source": "notes",
    "block": "Dative pronouns",
    "prompt": "Die Großeltern wohnen weit weg, aber wir schreiben ___ oft. (sie — them)",
    "answers": [
      [
        "ihnen"
      ]
    ],
    "reason": "Use the pronoun required by the verb or preposition: ich→mir, du→dir, er/es→ihm, sie→ihr, wir→uns, ihr→euch, sie→ihnen, Sie→Ihnen.",
    "caseSensitive": true,
    "correction": false
  },
  {
    "id": "n4-1",
    "set": "notes",
    "topic": "questions-time",
    "num": 1,
    "page": 8,
    "source": "notes",
    "block": "man + verbs",
    "prompt": "Hier ___ man Deutsch. (sprechen)",
    "answers": [
      [
        "spricht"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n4-2",
    "set": "notes",
    "topic": "questions-time",
    "num": 2,
    "page": 8,
    "source": "notes",
    "block": "man + verbs",
    "prompt": "Wie ___ man dieses Wort? (schreiben)",
    "answers": [
      [
        "schreibt"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n4-3",
    "set": "notes",
    "topic": "questions-time",
    "num": 3,
    "page": 8,
    "source": "notes",
    "block": "man + verbs",
    "prompt": "Im Sommer ___ man gerne schwimmen. (gehen)",
    "answers": [
      [
        "geht"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n4-4",
    "set": "notes",
    "topic": "questions-time",
    "num": 4,
    "page": 8,
    "source": "notes",
    "block": "man + verbs",
    "prompt": "Hier darf man nicht ___. (rauchen)",
    "answers": [
      [
        "rauchen"
      ]
    ],
    "reason": "The original line is malformed. With darf, use man as subject and keep rauchen as an infinitive at the end.",
    "caseSensitive": false,
    "correction": true
  },
  {
    "id": "n4-5",
    "set": "notes",
    "topic": "questions-time",
    "num": 5,
    "page": 8,
    "source": "notes",
    "block": "man + verbs",
    "prompt": "In Italien ___ man viel Pasta. (essen)",
    "answers": [
      [
        "isst"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n5-1",
    "set": "notes",
    "topic": "questions-time",
    "num": 1,
    "page": 8,
    "source": "notes",
    "block": "W-words",
    "prompt": "___ ist das? — Das ist mein Deutschlehrer, Herr Müller.",
    "answers": [
      [
        "Wer"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n5-2",
    "set": "notes",
    "topic": "questions-time",
    "num": 2,
    "page": 8,
    "source": "notes",
    "block": "W-words",
    "prompt": "___ wohnst du? — Ich wohne in Berlin.",
    "answers": [
      [
        "Wo"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n5-3",
    "set": "notes",
    "topic": "questions-time",
    "num": 3,
    "page": 8,
    "source": "notes",
    "block": "W-words",
    "prompt": "___ kommst du? — Ich komme aus Frankreich.",
    "answers": [
      [
        "Woher"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n5-4",
    "set": "notes",
    "topic": "questions-time",
    "num": 4,
    "page": 8,
    "source": "notes",
    "block": "W-words",
    "prompt": "___ machst du am Wochenende? — Ich spiele Fußball.",
    "answers": [
      [
        "Was"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n5-5",
    "set": "notes",
    "topic": "questions-time",
    "num": 5,
    "page": 8,
    "source": "notes",
    "block": "W-words",
    "prompt": "___ gehst du heute Abend? — Ich gehe ins Kino.",
    "answers": [
      [
        "Wohin"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n5-6",
    "set": "notes",
    "topic": "questions-time",
    "num": 6,
    "page": 8,
    "source": "notes",
    "block": "W-words",
    "prompt": "___ geht es dir? — Mir geht es sehr gut, danke!",
    "answers": [
      [
        "Wie"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n5-7",
    "set": "notes",
    "topic": "questions-time",
    "num": 7,
    "page": 8,
    "source": "notes",
    "block": "W-words",
    "prompt": "___ lernst du Deutsch? — Weil es mir Spaß macht.",
    "answers": [
      [
        "Warum",
        "Wieso"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n6-1",
    "set": "notes",
    "topic": "questions-time",
    "num": 1,
    "page": 8,
    "source": "notes",
    "block": "Time prepositions",
    "prompt": "Mein Geburtstag ist ___ September.",
    "answers": [
      [
        "im"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n6-2",
    "set": "notes",
    "topic": "questions-time",
    "num": 2,
    "page": 8,
    "source": "notes",
    "block": "Time prepositions",
    "prompt": "Der Deutschkurs beginnt ___ 9:00 Uhr.",
    "answers": [
      [
        "um"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n6-3",
    "set": "notes",
    "topic": "questions-time",
    "num": 3,
    "page": 9,
    "source": "notes",
    "block": "Time prepositions",
    "prompt": "Wir haben ___ Montag keine Schule.",
    "answers": [
      [
        "am"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n6-4",
    "set": "notes",
    "topic": "questions-time",
    "num": 4,
    "page": 9,
    "source": "notes",
    "block": "Time prepositions",
    "prompt": "Ich arbeite ___ Montag ___ Freitag.",
    "answers": [
      [
        "von"
      ],
      [
        "bis"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n6-5",
    "set": "notes",
    "topic": "questions-time",
    "num": 5,
    "page": 9,
    "source": "notes",
    "block": "Time prepositions",
    "prompt": "___ Winter schneit es oft in den Bergen.",
    "answers": [
      [
        "Im"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n6-6",
    "set": "notes",
    "topic": "questions-time",
    "num": 6,
    "page": 9,
    "source": "notes",
    "block": "Time prepositions",
    "prompt": "Was machst du ___ Morgen?",
    "answers": [
      [
        "am"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n7-1",
    "set": "notes",
    "topic": "questions-time",
    "num": 1,
    "page": 9,
    "source": "notes",
    "block": "Time adverbs",
    "prompt": "Ich gehe ___ ins Fitnessstudio. (today)",
    "answers": [
      [
        "heute"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n7-2",
    "set": "notes",
    "topic": "questions-time",
    "num": 2,
    "page": 9,
    "source": "notes",
    "block": "Time adverbs",
    "prompt": "Wir haben ___ Pizza gegessen. (yesterday)",
    "answers": [
      [
        "gestern"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n7-3",
    "set": "notes",
    "topic": "questions-time",
    "num": 3,
    "page": 9,
    "source": "notes",
    "block": "Time adverbs",
    "prompt": "Was machst du ___? (tomorrow)",
    "answers": [
      [
        "morgen"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  },
  {
    "id": "n7-4",
    "set": "notes",
    "topic": "questions-time",
    "num": 4,
    "page": 9,
    "source": "notes",
    "block": "Time adverbs",
    "prompt": "Er kommt ___ zu spät. (never)",
    "answers": [
      [
        "nie"
      ]
    ],
    "reason": "Man takes a third-person singular verb. Wo asks location; wohin destination; woher origin. Use am for days, um for clock times and im for months/seasons.",
    "caseSensitive": false,
    "correction": false
  }
];
export const examCorrections=[
  {
    "source": "notes",
    "page": 7,
    "title": "Time prepositions are not all dative",
    "text": "Am and im contain dem, and von takes dative. Um takes accusative; bis is not a general dative preposition. Learn am Montag, um 9 Uhr, im September and von Montag bis Freitag as shown."
  },
  {
    "source": "workbook",
    "page": 3,
    "title": "Grammar #48",
    "text": "The key gives soll, but the subject is du. Use sollst.",
    "example": "Du sollst weniger Kaffee trinken."
  },
  {
    "source": "workbook",
    "page": 4,
    "title": "Grammar #72",
    "text": "The soup is fresh from the stove, so heiß is correct. Kalt in the key contradicts the sentence; heiß was omitted from the adjective box.",
    "example": "Die Suppe ist sehr heiß."
  },
  {
    "source": "workbook",
    "page": 6,
    "title": "Grammar #112",
    "text": "Kollegin is feminine, despite the masculine label. Von requires dative: welcher Kollegin.",
    "example": "Von welcher Kollegin hast du das gehört?"
  },
  {
    "source": "workbook",
    "page": 6,
    "title": "Grammar #113",
    "text": "Sprachen is the direct object of sprechen, so it is accusative plural, not nominative. The answer Welche stays the same.",
    "example": "Welche Sprachen sprechen Sie?"
  },
  {
    "source": "workbook",
    "page": 7,
    "title": "Grammar #133",
    "text": "Für always requires accusative, including in this dative-pronoun exercise. The correct answer is sie, not ihnen.",
    "example": "Das Haus ist zu groß für sie."
  },
  {
    "source": "workbook",
    "page": 8,
    "title": "Grammar #151",
    "text": "The duplicated mit in the sheet has been removed. Mit der U-Bahn is the correct phrase.",
    "example": "Ich fahre jeden Morgen mit der U-Bahn zur Arbeit."
  },
  {
    "source": "workbook",
    "page": 8,
    "title": "Grammar #159",
    "text": "Arbeit is feminine: nach der Arbeit. The key incorrectly gives dem.",
    "example": "Nach der Arbeit trinke ich ein kaltes Bier."
  },
  {
    "source": "workbook",
    "page": 8,
    "title": "Grammar #160",
    "text": "The normal phrase is mit viel Milch. Viel remains unchanged here; do not add a second article after it.",
    "example": "Er trinkt den Tee am liebsten mit viel Milch."
  },
  {
    "source": "workbook",
    "page": 9,
    "title": "Grammar #176",
    "text": "The sheet already printed dich before a redundant blank. Here you supply dich once.",
    "example": "Ohne dich kann ich nicht leben."
  },
  {
    "source": "notes",
    "page": 8,
    "title": "Malformed man exercise #4",
    "text": "The sheet’s word order and missing subject cannot be repaired by conjugating rauchen alone. The exercise here reads: Hier darf man nicht rauchen."
  },
  {
    "source": "vocab",
    "page": 2,
    "title": "The pastry shop is feminine",
    "text": "Use die Konditorei. The vocabulary sheet incorrectly prints der Konditorei."
  },
  {
    "source": "workbook",
    "page": 15,
    "title": "Walking and driving directions",
    "text": "Vocabulary #37 asks “Go straight ahead” but the key gives geradeaus fahren. Gehen Sie geradeaus is valid on foot; geradeaus fahren / Fahren Sie geradeaus is for a vehicle."
  },
  {
    "source": "workbook",
    "page": 11,
    "title": "Perfekt #11 follows the supplied verb",
    "text": "For spazieren gehen, the full answer is sind … spazieren gegangen. Sind … spaziert uses the related verb spazieren."
  },
  {
    "source": "workbook",
    "page": 8,
    "title": "Full-word input for ending exercises",
    "text": "Split prompts such as seit ein ___ Jahr are presented as seit ___ Jahr, with einem as the answer. This avoids entering the already-printed stem twice."
  },
  {
    "source": "workbook",
    "page": 5,
    "title": "Accusative this Sunday",
    "text": "Grammar #103 is diesen Sonntag, an accusative time expression meaning “this Sunday”. It does not take a preposition."
  }
];
