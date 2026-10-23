export const modelMetadata={
  "title": "German term-end model paper",
  "fileName": "German model qp end term Oct 26.pdf",
  "pages": 5,
  "duration": 180,
  "marks": 90,
  "pdf": "exam-resources/german-model-paper.pdf",
  "sha256": "8f558014ca41250c4f62afb493aea588a47eb658818313ba58d62f69ee143b5a",
  "instructions": [
    "Answer all six questions. Q1–Q3 carry 5 marks each; Q4–Q6 carry 25 marks each.",
    "Q4–Q6 each have parts (a) 5 marks, (b) 8 marks, (c) 8 marks and (d) 4 marks.",
    "Answer all sub-parts in the given order.",
    "Write answers in German wherever applicable.",
    "The paper requires text-based descriptions and has no map dependency."
  ]
};
export const modelSections=[
  {
    "id": "q1",
    "title": "Dative possessives and prepositions",
    "de": "Dativ: Possessivartikel und Mischübungen",
    "marks": 5,
    "page": 1,
    "co": "CO1",
    "parts": [
      {
        "id": "q1-a",
        "title": "A · Dative possessive articles",
        "instruction": "Complete the sentences with the correct possessive article in the dative case.",
        "items": [
          {
            "id": "q1-a-1",
            "page": 1,
            "label": "1",
            "kind": "auto",
            "prompt": "Ich helfe ___ Vater. (mein)",
            "answers": [
              [
                "meinem"
              ]
            ],
            "model": "Ich helfe meinem Vater.",
            "en": "I help my father.",
            "reason": "Helfen takes dative. Vater is masculine: mein → meinem.",
            "caseSensitive": false
          },
          {
            "id": "q1-a-2",
            "page": 1,
            "label": "2",
            "kind": "auto",
            "prompt": "Du spielst mit ___ Schwester. (dein)",
            "answers": [
              [
                "deiner"
              ]
            ],
            "model": "Du spielst mit deiner Schwester.",
            "en": "You play with your sister.",
            "reason": "Mit takes dative. Schwester is feminine: dein → deiner.",
            "caseSensitive": false
          },
          {
            "id": "q1-a-3",
            "page": 1,
            "label": "3",
            "kind": "auto",
            "prompt": "Wir antworten ___ Großeltern. (unser)",
            "answers": [
              [
                "unseren"
              ]
            ],
            "model": "Wir antworten unseren Großeltern.",
            "en": "We answer our grandparents.",
            "reason": "Antworten takes dative. Plural unser → unseren; Großeltern already ends in -n.",
            "caseSensitive": false
          }
        ],
        "marks": null
      },
      {
        "id": "q1-b",
        "title": "B · Dative prepositions",
        "instruction": "Choose the appropriate preposition from aus, bei, nach, zu.",
        "items": [
          {
            "id": "q1-b-1",
            "page": 1,
            "label": "1",
            "kind": "auto",
            "prompt": "Nach dem Unterricht gehe ich ___ dem Arzt.",
            "answers": [
              [
                "zu"
              ]
            ],
            "model": "Nach dem Unterricht gehe ich zu dem Arzt.",
            "en": "After class I go to the doctor.",
            "reason": "To the doctor is zu dem Arzt, commonly contracted to zum Arzt. The blank takes zu because dem is already printed.",
            "caseSensitive": false
          },
          {
            "id": "q1-b-2",
            "page": 1,
            "label": "2",
            "kind": "auto",
            "prompt": "Herr Schmidt kommt ursprünglich ___ der Schweiz.",
            "answers": [
              [
                "aus"
              ]
            ],
            "model": "Herr Schmidt kommt ursprünglich aus der Schweiz.",
            "en": "Mr Schmidt originally comes from Switzerland.",
            "reason": "Origin → aus. Die Schweiz becomes der Schweiz in dative.",
            "caseSensitive": false
          }
        ],
        "marks": null
      }
    ]
  },
  {
    "id": "q2",
    "title": "Modal verbs and ihr commands",
    "de": "Modalverben und Imperativformen",
    "marks": 5,
    "page": 1,
    "co": "CO2",
    "parts": [
      {
        "id": "q2-a",
        "title": "A · können, wollen or müssen",
        "instruction": "Use an appropriate modal verb in its correct present-tense form.",
        "items": [
          {
            "id": "q2-a-1",
            "page": 1,
            "label": "1",
            "kind": "auto",
            "prompt": "Er hat kein Geld, deshalb ___ er kein neues Auto kaufen.",
            "answers": [
              [
                "kann"
              ]
            ],
            "model": "Er hat kein Geld, deshalb kann er kein neues Auto kaufen.",
            "en": "He has no money, so he cannot buy a new car.",
            "reason": "The context is inability: er kann. Kaufen stays as an infinitive at the end.",
            "caseSensitive": false
          },
          {
            "id": "q2-a-2",
            "page": 1,
            "label": "2",
            "kind": "auto",
            "prompt": "Wir ___ am Wochenende lange schlafen, weil wir keine Arbeit haben.",
            "answers": [
              [
                "wollen",
                "können"
              ]
            ],
            "model": "Wir wollen am Wochenende lange schlafen, weil wir keine Arbeit haben.",
            "en": "We want to sleep late at the weekend because we have no work.",
            "reason": "Wollen is a suitable model for intention. Können is also grammatical if you mean “we can sleep late”. The paper does not explicitly require using each modal only once, so both are accepted.",
            "caseSensitive": false
          },
          {
            "id": "q2-a-3",
            "page": 1,
            "label": "3",
            "kind": "auto",
            "prompt": "Morgen ist eine wichtige Prüfung. Ich ___ heute Abend fleißig lernen.",
            "answers": [
              [
                "muss"
              ]
            ],
            "model": "Morgen ist eine wichtige Prüfung. Ich muss heute Abend fleißig lernen.",
            "en": "There is an important exam tomorrow. I must study hard this evening.",
            "reason": "Necessity → müssen; ich takes muss.",
            "caseSensitive": false
          }
        ],
        "marks": null
      },
      {
        "id": "q2-b",
        "title": "B · Imperative with ihr",
        "instruction": "Rewrite each statement as a command addressed to a familiar group.",
        "items": [
          {
            "id": "q2-b-1",
            "page": 1,
            "label": "1",
            "kind": "auto",
            "prompt": "Ihr macht die Hausaufgabe.",
            "answers": [
              [
                "Macht die Hausaufgabe!"
              ]
            ],
            "model": "Macht die Hausaufgabe!",
            "en": "Do the homework!",
            "reason": "Use the ihr verb form macht and omit the subject ihr.",
            "caseSensitive": false
          },
          {
            "id": "q2-b-2",
            "page": 1,
            "label": "2",
            "kind": "auto",
            "prompt": "Ihr hört dem Lehrer zu.",
            "answers": [
              [
                "Hört dem Lehrer zu!"
              ]
            ],
            "model": "Hört dem Lehrer zu!",
            "en": "Listen to the teacher!",
            "reason": "Zuhören is separable. Keep hört at the front and zu at the end; dem Lehrer remains dative.",
            "caseSensitive": false
          }
        ],
        "marks": null
      }
    ]
  },
  {
    "id": "q3",
    "title": "Two-way prepositions and home descriptions",
    "de": "Wechselpräpositionen und Wohnungsbeschreibung",
    "marks": 5,
    "page": 2,
    "co": "CO3",
    "parts": [
      {
        "id": "q3-a",
        "title": "A · Location or destination?",
        "instruction": "Fill both blanks: the preposition and the correct dative or accusative article.",
        "items": [
          {
            "id": "q3-a-1",
            "page": 2,
            "label": "1",
            "kind": "auto",
            "prompt": "Das Buch liegt ___ (on top of) ___ Tisch. (m)",
            "answers": [
              [
                "auf"
              ],
              [
                "dem"
              ]
            ],
            "model": "Das Buch liegt auf dem Tisch.",
            "en": "The book is on the table.",
            "reason": "Liegen describes a location: Wo? Auf + dative masculine dem.",
            "caseSensitive": false
          },
          {
            "id": "q3-a-2",
            "page": 2,
            "label": "2",
            "kind": "auto",
            "prompt": "Sie stellt die Blumen ___ (into) ___ Vase. (f)",
            "answers": [
              [
                "in"
              ],
              [
                "die"
              ]
            ],
            "model": "Sie stellt die Blumen in die Vase.",
            "en": "She puts the flowers into the vase.",
            "reason": "Stellen here expresses placement into a destination: Wohin? In + accusative feminine die.",
            "caseSensitive": false
          },
          {
            "id": "q3-a-3",
            "page": 2,
            "label": "3",
            "kind": "auto",
            "prompt": "Die Katze schläft ___ (under) ___ Bett. (n)",
            "answers": [
              [
                "unter"
              ],
              [
                "dem"
              ]
            ],
            "model": "Die Katze schläft unter dem Bett.",
            "en": "The cat sleeps under the bed.",
            "reason": "A location under a neuter noun: unter dem Bett.",
            "caseSensitive": false
          }
        ],
        "marks": null
      },
      {
        "id": "q3-b",
        "title": "B · sein/haben and an adjective",
        "instruction": "Use the correct form of sein or haben and the adjective in the form required by the sentence.",
        "items": [
          {
            "id": "q3-b-1",
            "page": 2,
            "label": "1",
            "kind": "auto",
            "prompt": "Das neue Arbeitszimmer ___ sehr ___. (bright/hell)",
            "answers": [
              [
                "ist"
              ],
              [
                "hell"
              ]
            ],
            "model": "Das neue Arbeitszimmer ist sehr hell.",
            "en": "The new study is very bright.",
            "reason": "Arbeitszimmer is singular → ist. After sein, the adjective has no ending: hell.",
            "caseSensitive": false
          },
          {
            "id": "q3-b-2",
            "page": 2,
            "label": "2",
            "kind": "auto",
            "prompt": "Die Wohnung ___ einen ___ Balkon. (large/groß)",
            "answers": [
              [
                "hat"
              ],
              [
                "großen"
              ]
            ],
            "model": "Die Wohnung hat einen großen Balkon.",
            "en": "The apartment has a large balcony.",
            "reason": "The apartment has something → hat. Balkon is masculine accusative after haben; after einen, the adjective takes -en: großen.",
            "caseSensitive": false
          }
        ],
        "marks": null
      }
    ]
  },
  {
    "id": "q4",
    "title": "A new job in a new city",
    "de": "Ein neuer Job in einer neuen Stadt",
    "marks": 25,
    "page": 2,
    "co": "CO4",
    "scenario": "Anna ist 25 Jahre alt und hat vor kurzem ihr Studium an einer Fachhochschule abgeschlossen. Jetzt sucht sie eine Stelle als Marketingassistentin. Sie findet eine sehr attraktive Anzeige von einer internationalen Medienfirma. Die Firma bietet flexible Arbeitszeiten und moderne Arbeitsplätze. Anna möchte sich sofort per E-Mail bewerben. Sie bereitet ihren Lebenslauf vor und formuliert ein Anschreiben, in dem sie ihre Sprachkenntnisse und IT-Fähigkeiten beschreibt. Zwei Tage später bekommt sie eine positive Rückmeldung und eine Einladung zu einem Online-Interview. Nach dem erfolgreichen Gespräch telefoniert sie mit ihren Eltern und erzählt im Perfekt, wie der Tag verlaufen ist. Am nächsten Tag geht sie in die Stadt, um neue formelle Kleidung für ihren ersten Arbeitstag auszuwählen.",
    "scenarioEn": "Anna, 25, has recently graduated from a university of applied sciences. She applies by email for a marketing-assistant role at an international media company, preparing her CV and cover letter. After a successful online interview she tells her parents about the day in the Perfekt, then buys formal clothing for her first day.",
    "parts": [
      {
        "id": "q4-a",
        "title": "(a) · Career, skills and education",
        "instruction": "Answer these four prompts in German.",
        "items": [
          {
            "id": "q4-a-1",
            "page": 2,
            "label": "1",
            "kind": "writing",
            "prompt": "Write two sentences about Anna’s education.",
            "lines": [
              {
                "de": "Anna hat an einer Fachhochschule studiert.",
                "en": "Anna studied at a university of applied sciences.",
                "speaker": ""
              },
              {
                "de": "Sie hat ihr Studium vor Kurzem abgeschlossen.",
                "en": "She recently completed her degree.",
                "speaker": ""
              }
            ],
            "requirements": [
              "Two German sentences",
              "Fachhochschule mentioned",
              "Completed studies mentioned"
            ],
            "reason": "These sentences use only education details given in the scenario. Studiert has no ge-; abgeschlossen is the participle of abschließen.",
            "note": ""
          },
          {
            "id": "q4-a-2",
            "page": 2,
            "label": "2",
            "kind": "writing",
            "prompt": "Name two typical IT skills or languages needed at work.",
            "lines": [
              {
                "de": "Wordkenntnisse und Excelkenntnisse.",
                "en": "Knowledge of Word and Excel.",
                "speaker": ""
              }
            ],
            "requirements": [
              "Two distinct IT skills or languages named"
            ],
            "reason": "The prompt asks you to name two examples; a short list is sufficient. Deutschkenntnisse und Englischkenntnisse is another suitable example.",
            "note": ""
          },
          {
            "id": "q4-a-3",
            "page": 2,
            "label": "3",
            "kind": "writing",
            "prompt": "Name two different departments in a company.",
            "lines": [
              {
                "de": "Die Marketingabteilung und die Personalabteilung.",
                "en": "The marketing department and the HR department.",
                "speaker": ""
              }
            ],
            "requirements": [
              "Two different company departments named"
            ],
            "reason": "Keep the article die with Abteilung. These are examples, not a claim about the company’s actual structure.",
            "note": ""
          },
          {
            "id": "q4-a-4",
            "page": 2,
            "label": "4",
            "kind": "writing",
            "prompt": "Write one sentence about your own dream profession.",
            "lines": [
              {
                "de": "Mein Traumberuf ist Ingenieur.",
                "en": "My dream profession is engineer.",
                "speaker": ""
              }
            ],
            "requirements": [
              "One full German sentence",
              "Your own dream profession named"
            ],
            "reason": "Replace the profession with your own answer, for example Ingenieurin, Arzt or Ärztin. This is an example sentence, not personal information about you.",
            "note": ""
          }
        ],
        "marks": 5
      },
      {
        "id": "q4-b",
        "title": "(b) · Formal application email",
        "instruction": "Write a formal application email for the marketing-assistant position. Include a formal greeting, your name/introduction, application purpose, two sentences about skills, one about studies, availability and a suitable closing.",
        "items": [
          {
            "id": "q4-b",
            "page": 2,
            "label": "Email",
            "kind": "writing",
            "prompt": "Write your complete application email.",
            "lines": [
              {
                "de": "Betreff: Bewerbung als Marketingassistentin",
                "en": "Subject: Application for the marketing-assistant position",
                "speaker": ""
              },
              {
                "de": "Sehr geehrte Damen und Herren,",
                "en": "Dear Sir or Madam,",
                "speaker": ""
              },
              {
                "de": "ich heiße Anna und bin 25 Jahre alt.",
                "en": "My name is Anna and I am 25 years old.",
                "speaker": ""
              },
              {
                "de": "Ich bewerbe mich bei Ihnen als Marketingassistentin.",
                "en": "I am applying to you for the marketing-assistant position.",
                "speaker": ""
              },
              {
                "de": "Ich kann gut mit Word und Excel arbeiten.",
                "en": "I can work well with Word and Excel.",
                "speaker": ""
              },
              {
                "de": "Ich spreche Deutsch und Englisch.",
                "en": "I speak German and English.",
                "speaker": ""
              },
              {
                "de": "Ich habe mein Studium an einer Fachhochschule abgeschlossen.",
                "en": "I completed my degree at a university of applied sciences.",
                "speaker": ""
              },
              {
                "de": "Ich kann ab dem nächsten Monat arbeiten.",
                "en": "I can start work next month.",
                "speaker": ""
              },
              {
                "de": "Über eine Einladung zu einem Gespräch freue ich mich.",
                "en": "I look forward to an invitation to an interview.",
                "speaker": ""
              },
              {
                "de": "Mit freundlichen Grüßen",
                "en": "Kind regards",
                "speaker": ""
              },
              {
                "de": "Anna",
                "en": "Anna",
                "speaker": ""
              }
            ],
            "requirements": [
              "Formal greeting",
              "Name and introduction",
              "Clear application purpose and correct position",
              "Two sentences about skills/knowledge",
              "One sentence about studies",
              "Availability stated",
              "Suitable formal closing"
            ],
            "reason": "After the comma in the greeting, the first body word is lowercase. Formal Ihnen is capitalized. The subject line makes the purpose easy to identify.",
            "note": "The chosen skills, languages and availability are illustrative details; the scenario does not specify them."
          }
        ],
        "marks": 8
      },
      {
        "id": "q4-c",
        "title": "(c) · Perfekt in a work context",
        "instruction": "Rewrite every sentence in the Perfekt, choosing haben or sein.",
        "items": [
          {
            "id": "q4-c-1",
            "page": 3,
            "label": "1",
            "kind": "auto",
            "prompt": "Anna sucht einen Arbeitsplatz.",
            "answers": [
              [
                "Anna hat einen Arbeitsplatz gesucht."
              ]
            ],
            "model": "Anna hat einen Arbeitsplatz gesucht.",
            "en": "Anna looked for a job.",
            "reason": "Suchen → gesucht; it uses haben.",
            "caseSensitive": false
          },
          {
            "id": "q4-c-2",
            "page": 3,
            "label": "2",
            "kind": "auto",
            "prompt": "Sie findet eine interessante Anzeige.",
            "answers": [
              [
                "Sie hat eine interessante Anzeige gefunden."
              ]
            ],
            "model": "Sie hat eine interessante Anzeige gefunden.",
            "en": "She found an interesting advertisement.",
            "reason": "Finden → gefunden; sie (she) takes hat.",
            "caseSensitive": false
          },
          {
            "id": "q4-c-3",
            "page": 3,
            "label": "3",
            "kind": "auto",
            "prompt": "Der Personalleiter ruft die Bewerberin an.",
            "answers": [
              [
                "Der Personalleiter hat die Bewerberin angerufen."
              ]
            ],
            "model": "Der Personalleiter hat die Bewerberin angerufen.",
            "en": "The HR manager called the applicant.",
            "reason": "Anrufen is separable: an + ge + rufen → angerufen; use hat.",
            "caseSensitive": false
          },
          {
            "id": "q4-c-4",
            "page": 3,
            "label": "4",
            "kind": "auto",
            "prompt": "Wir sprechen mit dem Chef.",
            "answers": [
              [
                "Wir haben mit dem Chef gesprochen."
              ]
            ],
            "model": "Wir haben mit dem Chef gesprochen.",
            "en": "We spoke with the boss.",
            "reason": "Sprechen → gesprochen; wir takes haben.",
            "caseSensitive": false
          },
          {
            "id": "q4-c-5",
            "page": 3,
            "label": "5",
            "kind": "auto",
            "prompt": "Er reist für das Interview nach Hamburg.",
            "answers": [
              [
                "Er ist für das Interview nach Hamburg gereist."
              ]
            ],
            "model": "Er ist für das Interview nach Hamburg gereist.",
            "en": "He travelled to Hamburg for the interview.",
            "reason": "Travel to a destination uses sein: ist gereist.",
            "caseSensitive": false
          },
          {
            "id": "q4-c-6",
            "page": 3,
            "label": "6",
            "kind": "auto",
            "prompt": "Ich schreibe ein kurzes Anschreiben.",
            "answers": [
              [
                "Ich habe ein kurzes Anschreiben geschrieben."
              ]
            ],
            "model": "Ich habe ein kurzes Anschreiben geschrieben.",
            "en": "I wrote a short cover letter.",
            "reason": "Schreiben → geschrieben; use habe.",
            "caseSensitive": false
          },
          {
            "id": "q4-c-7",
            "page": 3,
            "label": "7",
            "kind": "auto",
            "prompt": "Das Gespräch beginnt pünktlich um 10 Uhr.",
            "answers": [
              [
                "Das Gespräch hat pünktlich um 10 Uhr begonnen.",
                "Das Gespräch hat pünktlich um zehn Uhr begonnen."
              ]
            ],
            "model": "Das Gespräch hat pünktlich um zehn Uhr begonnen.",
            "en": "The interview began punctually at ten.",
            "reason": "Beginnen → begonnen. It uses haben, even though something begins; do not choose sein just from the idea of change.",
            "caseSensitive": false
          },
          {
            "id": "q4-c-8",
            "page": 3,
            "label": "8",
            "kind": "auto",
            "prompt": "Wann kommt der Mitarbeiter im Büro an?",
            "answers": [
              [
                "Wann ist der Mitarbeiter im Büro angekommen?"
              ]
            ],
            "model": "Wann ist der Mitarbeiter im Büro angekommen?",
            "en": "When did the employee arrive at the office?",
            "reason": "Ankommen → angekommen with sein. Keep the W-question order: Wann + ist + subject.",
            "caseSensitive": false
          }
        ],
        "marks": 8
      },
      {
        "id": "q4-d",
        "title": "(d) · Arrange a phone call",
        "instruction": "Imagine you are Anna. Write a four-sentence dialogue with HR, containing a polite greeting, an interview-time question, an affirmative answer with a specific time, and a professional closing.",
        "items": [
          {
            "id": "q4-d",
            "page": 3,
            "label": "Dialogue",
            "kind": "writing",
            "prompt": "Write four short dialogue utterances.",
            "lines": [
              {
                "de": "Guten Tag, hier spricht Anna.",
                "en": "Hello, this is Anna speaking.",
                "speaker": "Anna"
              },
              {
                "de": "Wann haben Sie Zeit für das Interview?",
                "en": "When are you available for the interview?",
                "speaker": "HR"
              },
              {
                "de": "Ja, ich habe am Dienstag um zehn Uhr Zeit.",
                "en": "Yes, I am available on Tuesday at ten.",
                "speaker": "Anna"
              },
              {
                "de": "Vielen Dank, auf Wiederhören!",
                "en": "Thank you, goodbye!",
                "speaker": "HR"
              }
            ],
            "requirements": [
              "Four short dialogue utterances",
              "Polite greeting",
              "Question about a suitable interview time",
              "Affirmative answer with a precise time",
              "Professional telephone closing"
            ],
            "reason": "Am Dienstag gives the day; um zehn Uhr gives the time. Auf Wiederhören is the standard telephone farewell. Dialogue greetings and closings can be short spoken utterances.",
            "note": ""
          }
        ],
        "marks": 4
      }
    ]
  },
  {
    "id": "q5",
    "title": "Shopping and winter-holiday plans",
    "de": "Einkauf im Kaufhaus und Urlaubspläne",
    "marks": 25,
    "page": 3,
    "co": "CO5",
    "scenario": "Thomas möchte im Winter eine Woche in den Alpen verbringen. Er braucht dafür neue, warme Winterkleidung. Am Samstagvormittag geht er in ein großes Einkaufszentrum in der Innenstadt. Er besichtigt mehrere Geschäfte und vergleicht verschiedene Mäntel, Pullover und Winterschuhe. Er sucht gezielt nach bestimmten Farben und Größen. Eine nette Verkäuferin berät ihn ausführlich und schlägt ihm unterschiedliche Modelle vor. Thomas verwendet in dem Gespräch Demonstrativpronomen und Interrogativartikel, um seine Auswahl zu präzisieren. Nach einem erfolgreichen Einkauf trifft er seinen Freund Lukas in einem Café. Sie diskutieren leidenschaftlich über ihre konkreten Reisepläne, mögliche Aktivitäten im Schnee und tauschen ihre Meinungen mit Dativ-Personalpronomen aus.",
    "scenarioEn": "Thomas plans a winter week in the Alps and shops for warm clothing. He compares coats, sweaters and winter shoes, asking about colours and sizes. He uses welch- and dies- while choosing items. Afterwards he meets Lukas in a café to discuss travel plans and activities in the snow.",
    "parts": [
      {
        "id": "q5-a",
        "title": "(a) · welch- and dies-",
        "instruction": "Complete both blanks in each exchange, using the correct case, gender and number.",
        "items": [
          {
            "id": "q5-a-1",
            "page": 3,
            "label": "1",
            "kind": "auto",
            "prompt": "___ Mantel (m) steht mir am besten? – Ich finde ___ Mantel hier sehr elegant.",
            "answers": [
              [
                "Welcher"
              ],
              [
                "diesen"
              ]
            ],
            "model": "Welcher Mantel steht mir am besten? Ich finde diesen Mantel hier sehr elegant.",
            "en": "Which coat suits me best? I find this coat here very elegant.",
            "reason": "Mantel is the nominative subject of steht → welcher. It is the masculine accusative object of finde → diesen.",
            "caseSensitive": false
          },
          {
            "id": "q5-a-2",
            "page": 3,
            "label": "2",
            "kind": "auto",
            "prompt": "___ Hemd (n) möchten Sie anprobieren? – ___ Hemd da drüben gefällt mir.",
            "answers": [
              [
                "Welches"
              ],
              [
                "Dieses"
              ]
            ],
            "model": "Welches Hemd möchten Sie anprobieren? Dieses Hemd da drüben gefällt mir.",
            "en": "Which shirt would you like to try on? I like that shirt over there.",
            "reason": "Neuter accusative welches Hemd; neuter nominative dieses Hemd is the subject of gefällt.",
            "caseSensitive": false
          },
          {
            "id": "q5-a-3",
            "page": 3,
            "label": "3",
            "kind": "auto",
            "prompt": "___ Schuhe (pl) passen Ihnen? – ___ Winterschuhe hier sind sehr bequem.",
            "answers": [
              [
                "Welche"
              ],
              [
                "Diese"
              ]
            ],
            "model": "Welche Schuhe passen Ihnen? Diese Winterschuhe hier sind sehr bequem.",
            "en": "Which shoes fit you? These winter shoes here are very comfortable.",
            "reason": "Both nouns are plural nominative subjects: welche / diese.",
            "caseSensitive": false
          },
          {
            "id": "q5-a-4",
            "page": 3,
            "label": "4",
            "kind": "auto",
            "prompt": "___ Mütze (f) nimmst du? – Ich nehme ___ rote Mütze.",
            "answers": [
              [
                "Welche"
              ],
              [
                "diese"
              ]
            ],
            "model": "Welche Mütze nimmst du? Ich nehme diese rote Mütze.",
            "en": "Which cap are you taking? I am taking this red cap.",
            "reason": "Feminine accusative looks like nominative: welche / diese.",
            "caseSensitive": false
          },
          {
            "id": "q5-a-5",
            "page": 3,
            "label": "5",
            "kind": "auto",
            "prompt": "___ Kleidungsstück (n) ist am billigsten? – ___ Pullover kostet nur 20 Euro.",
            "answers": [
              [
                "Welches"
              ],
              [
                "Dieser"
              ]
            ],
            "model": "Welches Kleidungsstück ist am billigsten? Dieser Pullover kostet nur zwanzig Euro.",
            "en": "Which item of clothing is cheapest? This sweater costs only twenty euros.",
            "reason": "The nouns change: Kleidungsstück is neuter → welches; Pullover is masculine → dieser.",
            "caseSensitive": false
          }
        ],
        "marks": 5
      },
      {
        "id": "q5-b",
        "title": "(b) · Clothing-store sales conversation",
        "instruction": "Write at least eight German sentences. Cover clothing, available sizes, colours, welch-, dies-, price, a decision to buy and a polite farewell.",
        "items": [
          {
            "id": "q5-b",
            "page": 3,
            "label": "Dialogue",
            "kind": "writing",
            "prompt": "Write your customer–sales-assistant dialogue.",
            "lines": [
              {
                "de": "Guten Tag, ich suche einen warmen Wintermantel.",
                "en": "Hello, I am looking for a warm winter coat.",
                "speaker": "Kunde"
              },
              {
                "de": "Gerne, wir haben hier mehrere Modelle.",
                "en": "Certainly, we have several models here.",
                "speaker": "Verkäuferin"
              },
              {
                "de": "In welchen Größen gibt es diesen Mantel?",
                "en": "In which sizes is this coat available?",
                "speaker": "Kunde"
              },
              {
                "de": "Es gibt ihn in M und L.",
                "en": "It is available in M and L.",
                "speaker": "Verkäuferin"
              },
              {
                "de": "Gibt es ihn in Blau oder Schwarz?",
                "en": "Is it available in blue or black?",
                "speaker": "Kunde"
              },
              {
                "de": "Ja, beide Farben sind da.",
                "en": "Yes, both colours are available.",
                "speaker": "Verkäuferin"
              },
              {
                "de": "Welcher Mantel ist wärmer?",
                "en": "Which coat is warmer?",
                "speaker": "Kunde"
              },
              {
                "de": "Dieser Mantel ist sehr warm.",
                "en": "This coat is very warm.",
                "speaker": "Verkäuferin"
              },
              {
                "de": "Wie viel kostet er?",
                "en": "How much does it cost?",
                "speaker": "Kunde"
              },
              {
                "de": "Er kostet achtzig Euro.",
                "en": "It costs eighty euros.",
                "speaker": "Verkäuferin"
              },
              {
                "de": "Ich nehme diesen blauen Mantel in Größe M.",
                "en": "I will take this blue coat in size M.",
                "speaker": "Kunde"
              },
              {
                "de": "Vielen Dank und auf Wiedersehen!",
                "en": "Thank you and goodbye!",
                "speaker": "Verkäuferin"
              }
            ],
            "requirements": [
              "At least eight sentences/utterances",
              "Specific request for winter clothing",
              "Question about available sizes",
              "Question about colours",
              "Question with a form of welch-",
              "Answer with a form of dies-",
              "Price question",
              "Final buying decision",
              "Polite farewell"
            ],
            "reason": "This model has twelve dialogue utterances and covers every required function. Diesen Mantel is masculine accusative after nehmen.",
            "note": "The sizes, colours and price are sample choices; use any coherent choices in your own dialogue."
          }
        ],
        "marks": 8
      },
      {
        "id": "q5-c",
        "title": "(c) · Present-tense sentence construction",
        "instruction": "Construct complete German main clauses from the supplied elements.",
        "items": [
          {
            "id": "q5-c-1",
            "page": 4,
            "label": "1",
            "kind": "auto",
            "prompt": "anziehen – der Kunde – den warmen Pullover",
            "answers": [
              [
                "Der Kunde zieht den warmen Pullover an."
              ]
            ],
            "model": "Der Kunde zieht den warmen Pullover an.",
            "en": "The customer puts on the warm sweater.",
            "reason": "Anziehen separates: zieht … an.",
            "caseSensitive": false
          },
          {
            "id": "q5-c-2",
            "page": 4,
            "label": "2",
            "kind": "auto",
            "prompt": "mitbringen – wir – warme Kleidung – für den Urlaub",
            "answers": [
              [
                "Wir bringen warme Kleidung für den Urlaub mit."
              ]
            ],
            "model": "Wir bringen warme Kleidung für den Urlaub mit.",
            "en": "We bring warm clothing for the holiday.",
            "reason": "Mitbringen separates: bringen … mit.",
            "caseSensitive": false
          },
          {
            "id": "q5-c-3",
            "page": 4,
            "label": "3",
            "kind": "auto",
            "prompt": "anrufen – Lukas – seinen Freund – am Abend",
            "answers": [
              [
                "Lukas ruft seinen Freund am Abend an.",
                "Am Abend ruft Lukas seinen Freund an.",
                "Lukas ruft am Abend seinen Freund an."
              ]
            ],
            "model": "Lukas ruft seinen Freund am Abend an.",
            "en": "Lukas calls his friend in the evening.",
            "reason": "An goes to the end. If Am Abend comes first, ruft still occupies position 2.",
            "caseSensitive": false
          },
          {
            "id": "q5-c-4",
            "page": 4,
            "label": "4",
            "kind": "auto",
            "prompt": "vorbereiten – Thomas – die Reiseliste",
            "answers": [
              [
                "Thomas bereitet die Reiseliste vor."
              ]
            ],
            "model": "Thomas bereitet die Reiseliste vor.",
            "en": "Thomas prepares the travel list.",
            "reason": "Vorbereiten separates: bereitet … vor.",
            "caseSensitive": false
          },
          {
            "id": "q5-c-5",
            "page": 4,
            "label": "5",
            "kind": "auto",
            "prompt": "bezahlen – ich – die Winterschuhe – an der Kasse",
            "answers": [
              [
                "Ich bezahle die Winterschuhe an der Kasse.",
                "An der Kasse bezahle ich die Winterschuhe."
              ]
            ],
            "model": "Ich bezahle die Winterschuhe an der Kasse.",
            "en": "I pay for the winter shoes at the till.",
            "reason": "Be- is inseparable; bezahlt does not split into zahlt … be. For ich, use bezahle.",
            "caseSensitive": false
          },
          {
            "id": "q5-c-6",
            "page": 4,
            "label": "6",
            "kind": "auto",
            "prompt": "verstehen – die Touristen – den Verkäufer – nicht",
            "answers": [
              [
                "Die Touristen verstehen den Verkäufer nicht."
              ]
            ],
            "model": "Die Touristen verstehen den Verkäufer nicht.",
            "en": "The tourists do not understand the salesperson.",
            "reason": "Ver- is inseparable. Plural die Touristen → verstehen.",
            "caseSensitive": false
          },
          {
            "id": "q5-c-7",
            "page": 4,
            "label": "7",
            "kind": "auto",
            "prompt": "einladen – er – seine Freunde – zu einer Party",
            "answers": [
              [
                "Er lädt seine Freunde zu einer Party ein."
              ]
            ],
            "model": "Er lädt seine Freunde zu einer Party ein.",
            "en": "He invites his friends to a party.",
            "reason": "Einladen separates and changes a → ä in er lädt … ein.",
            "caseSensitive": false
          },
          {
            "id": "q5-c-8",
            "page": 4,
            "label": "8",
            "kind": "auto",
            "prompt": "empfehlen – die Verkäuferin – eine Jacke",
            "answers": [
              [
                "Die Verkäuferin empfiehlt eine Jacke."
              ]
            ],
            "model": "Die Verkäuferin empfiehlt eine Jacke.",
            "en": "The sales assistant recommends a jacket.",
            "reason": "Empfehlen is inseparable and changes e → ie: empfiehlt.",
            "caseSensitive": false
          }
        ],
        "marks": 8
      },
      {
        "id": "q5-d",
        "title": "(d) · Dative pronouns",
        "instruction": "Rewrite each sentence, replacing the bracketed noun phrase (underlined in the PDF) with a dative pronoun.",
        "items": [
          {
            "id": "q5-d-1",
            "page": 4,
            "label": "1",
            "kind": "auto",
            "prompt": "Der Mantel passt [dem Vater] ausgezeichnet.",
            "answers": [
              [
                "Der Mantel passt ihm ausgezeichnet."
              ]
            ],
            "model": "Der Mantel passt ihm ausgezeichnet.",
            "en": "The coat fits him perfectly.",
            "reason": "Dem Vater → ihm; passen takes a dative person.",
            "caseSensitive": true
          },
          {
            "id": "q5-d-2",
            "page": 4,
            "label": "2",
            "kind": "auto",
            "prompt": "Wir schenken [der Freundin] einen Schal.",
            "answers": [
              [
                "Wir schenken ihr einen Schal."
              ]
            ],
            "model": "Wir schenken ihr einen Schal.",
            "en": "We give her a scarf.",
            "reason": "Der Freundin → ihr; the recipient is dative.",
            "caseSensitive": true
          },
          {
            "id": "q5-d-3",
            "page": 4,
            "label": "3",
            "kind": "auto",
            "prompt": "Die Verkäuferin zeigt [den Kindern] die Handschuhe.",
            "answers": [
              [
                "Die Verkäuferin zeigt ihnen die Handschuhe."
              ]
            ],
            "model": "Die Verkäuferin zeigt ihnen die Handschuhe.",
            "en": "The sales assistant shows them the gloves.",
            "reason": "Den Kindern → ihnen, lowercase. Capital Ihnen would mean formal “you”, not the children.",
            "caseSensitive": true
          },
          {
            "id": "q5-d-4",
            "page": 4,
            "label": "4",
            "kind": "auto",
            "prompt": "Ich antworte [dem Verkäufer] direkt.",
            "answers": [
              [
                "Ich antworte ihm direkt."
              ]
            ],
            "model": "Ich antworte ihm direkt.",
            "en": "I answer him directly.",
            "reason": "Dem Verkäufer → ihm; antworten takes dative.",
            "caseSensitive": true
          }
        ],
        "marks": 4
      }
    ]
  },
  {
    "id": "q6",
    "title": "A city trip to Vienna",
    "de": "Eine Städtereise nach Wien",
    "marks": 25,
    "page": 4,
    "co": "CO6",
    "scenario": "Maximilian macht eine Kurzreise nach Wien. Er kommt am Freitagmorgen am Hauptbahnhof an. Da er die Stadt zum ersten Mal besucht, muss er zuerst den Weg zu seinem Hotel finden. Er hat keinen Internetempfang und fragt eine Passantin auf der Straße höflich nach der Richtung. Sie erklärt ihm detailliert, welche Straßen er entlanggehen und wo er abbiegen muss. Nachdem er sein Gepäck abgegeben hat, unternimmt er einen Spaziergang im Stadtzentrum und besichtigt berühmte historische Sehenswürdigkeiten. Das Wetter wechselt schnell: am Vormittag scheint die Sonne, aber am Nachmittag wird es stark bewölkt und es fängt an zu regnen. Maximilian muss seine Pläne anpassen und besucht stattdessen ein traditionelles Wiener Café. Am Sonntagabend verfasst er einen kurzen Reisebericht für seinen Blog, um seine Eindrücke mit Freunden zu teilen.",
    "scenarioEn": "Maximilian arrives in Vienna on Friday morning and asks a passer-by for directions to his hotel. He explores historic sights. The sunny morning changes to a cloudy, rainy afternoon, so he visits a Viennese café. On Sunday evening he writes a short travel report.",
    "parts": [
      {
        "id": "q6-a",
        "title": "(a) · Weather and tourist attractions",
        "instruction": "Write five distinct German sentences: two about weather and three about attractions/buildings. Include at least one precise time expression.",
        "items": [
          {
            "id": "q6-a",
            "page": 4,
            "label": "Five sentences",
            "kind": "writing",
            "prompt": "Write two weather sentences and three attraction sentences.",
            "lines": [
              {
                "de": "Am Freitag um zehn Uhr ist es in Wien sonnig.",
                "en": "It is sunny in Vienna at ten on Friday.",
                "speaker": ""
              },
              {
                "de": "Am Nachmittag regnet es.",
                "en": "It rains in the afternoon.",
                "speaker": ""
              },
              {
                "de": "Man kann den Stephansdom besuchen.",
                "en": "You can visit St Stephen’s Cathedral.",
                "speaker": ""
              },
              {
                "de": "Das Schloss Schönbrunn ist sehr schön.",
                "en": "Schönbrunn Palace is very beautiful.",
                "speaker": ""
              },
              {
                "de": "Das Kunsthistorische Museum ist interessant.",
                "en": "The Museum of Art History is interesting.",
                "speaker": ""
              }
            ],
            "requirements": [
              "Exactly five distinct sentences",
              "Two weather sentences",
              "Three attraction/building sentences",
              "At least one precise time expression"
            ],
            "reason": "Am Freitag um zehn Uhr provides both a day and an exact clock time. Use Es ist + adjective, but Es regnet with a weather verb.",
            "note": ""
          }
        ],
        "marks": 5
      },
      {
        "id": "q6-b",
        "title": "(b) · Text-only route description",
        "instruction": "Write at least eight German sentences from the main station to the central museum. Include a starting point, two sequence markers, two turns, at least two named streets/squares, a landmark and an arrival statement.",
        "items": [
          {
            "id": "q6-b",
            "page": 5,
            "label": "Directions",
            "kind": "writing",
            "prompt": "Write a complete step-by-step route.",
            "lines": [
              {
                "de": "Sie starten am Hauptbahnhof.",
                "en": "You start at the main station.",
                "speaker": ""
              },
              {
                "de": "Gehen Sie zuerst geradeaus die Bahnhofstraße entlang.",
                "en": "First walk straight along Bahnhofstraße.",
                "speaker": ""
              },
              {
                "de": "Biegen Sie an der ersten Kreuzung rechts in die Schulstraße ab.",
                "en": "At the first intersection, turn right into Schulstraße.",
                "speaker": ""
              },
              {
                "de": "Gehen Sie danach bis zum Rathausplatz.",
                "en": "Then walk to Rathausplatz.",
                "speaker": ""
              },
              {
                "de": "Das große Rathaus auf dem Platz ist Ihr Orientierungspunkt.",
                "en": "The large town hall on the square is your landmark.",
                "speaker": ""
              },
              {
                "de": "Biegen Sie am Rathaus links in die Museumsstraße ab.",
                "en": "At the town hall, turn left into Museumsstraße.",
                "speaker": ""
              },
              {
                "de": "Gehen Sie dann noch etwa hundert Meter geradeaus.",
                "en": "Then walk straight ahead for about another hundred metres.",
                "speaker": ""
              },
              {
                "de": "Das zentrale Museum liegt auf der rechten Seite.",
                "en": "The central museum is on the right.",
                "speaker": ""
              },
              {
                "de": "Jetzt sind Sie am Ziel.",
                "en": "Now you have reached your destination.",
                "speaker": ""
              }
            ],
            "requirements": [
              "At least eight German sentences",
              "Starting point stated",
              "At least two sequence markers",
              "At least two explicit turns",
              "At least two named streets or squares",
              "Identifiable landmark",
              "Concluding arrival statement"
            ],
            "reason": "This nine-sentence model uses zuerst, danach and dann, right and left turns, named streets/square, the town hall landmark and an explicit arrival.",
            "note": "This is an invented text-only exam route, as permitted by the paper. It is not verified navigation through Vienna."
          }
        ],
        "marks": 8
      },
      {
        "id": "q6-c",
        "title": "(c) · Questions with logical answers",
        "instruction": "For each context, write an appropriate W-question and a corresponding logical German answer.",
        "items": [
          {
            "id": "q6-c-1",
            "page": 5,
            "label": "1",
            "kind": "writing",
            "prompt": "Ask the way to the hotel. Use man in the answer.",
            "lines": [
              {
                "de": "Wie kommt man zum Hotel?",
                "en": "How do you get to the hotel?",
                "speaker": "Frage"
              },
              {
                "de": "Man geht zuerst geradeaus und biegt dann rechts ab.",
                "en": "You first go straight ahead, then turn right.",
                "speaker": "Antwort"
              }
            ],
            "requirements": [
              "Appropriate W-question about the hotel route",
              "Logical answer using man",
              "Third-person singular verbs with man"
            ],
            "reason": "Man takes geht and biegt, not gehen and biegen. This is an illustrative route response.",
            "note": ""
          },
          {
            "id": "q6-c-2",
            "page": 5,
            "label": "2",
            "kind": "writing",
            "prompt": "Ask the train’s exact arrival time and answer with a time expression.",
            "lines": [
              {
                "de": "Um wie viel Uhr kommt der Zug an?",
                "en": "At what time does the train arrive?",
                "speaker": "Frage"
              },
              {
                "de": "Der Zug kommt um zehn Uhr an.",
                "en": "The train arrives at ten.",
                "speaker": "Antwort"
              }
            ],
            "requirements": [
              "Question asks for an exact arrival time",
              "Answer contains a clock time",
              "Correct separable verb ankommen"
            ],
            "reason": "Um wie viel Uhr asks specifically for the clock time. The answer uses um + time. An goes at the end.",
            "note": ""
          },
          {
            "id": "q6-c-3",
            "page": 5,
            "label": "3",
            "kind": "writing",
            "prompt": "Ask about the current weather. Use es in the answer.",
            "lines": [
              {
                "de": "Wie ist das Wetter heute?",
                "en": "What is the weather like today?",
                "speaker": "Frage"
              },
              {
                "de": "Es ist bewölkt und es regnet.",
                "en": "It is cloudy and it is raining.",
                "speaker": "Antwort"
              }
            ],
            "requirements": [
              "W-question about current weather",
              "Logical answer using es"
            ],
            "reason": "Weather statements use impersonal es. Bewölkt follows ist; regnet is a conjugated weather verb.",
            "note": ""
          },
          {
            "id": "q6-c-4",
            "page": 5,
            "label": "4",
            "kind": "writing",
            "prompt": "Ask about planned holiday activities on Saturday and give a logical answer.",
            "lines": [
              {
                "de": "Was machst du am Samstag im Urlaub?",
                "en": "What are you doing on Saturday during the holiday?",
                "speaker": "Frage"
              },
              {
                "de": "Am Samstag besuche ich das Museum.",
                "en": "On Saturday I am visiting the museum.",
                "speaker": "Antwort"
              }
            ],
            "requirements": [
              "W-question about Saturday holiday activities",
              "A matching planned activity in the answer",
              "Correct main-clause verb position"
            ],
            "reason": "A planned future activity can use the present tense with a future time expression. With Am Samstag first, besuche stays in position 2.",
            "note": ""
          }
        ],
        "marks": 8
      },
      {
        "id": "q6-d",
        "title": "(d) · Short travel report",
        "instruction": "Write a unified four-sentence report about a recent holiday. Mention a precise destination, arrival day/time, a major historic sight and a final evaluation of weather or an activity.",
        "items": [
          {
            "id": "q6-d",
            "page": 5,
            "label": "Travel report",
            "kind": "writing",
            "prompt": "Write four connected German sentences.",
            "lines": [
              {
                "de": "Ich bin letztes Wochenende nach Wien in Österreich gereist.",
                "en": "Last weekend I travelled to Vienna in Austria.",
                "speaker": ""
              },
              {
                "de": "Ich bin am Freitagmorgen am Hauptbahnhof angekommen.",
                "en": "I arrived at the main station on Friday morning.",
                "speaker": ""
              },
              {
                "de": "Ich habe das Schloss Schönbrunn besichtigt.",
                "en": "I visited Schönbrunn Palace.",
                "speaker": ""
              },
              {
                "de": "Das sonnige Wetter hat mir sehr gut gefallen.",
                "en": "I liked the sunny weather very much.",
                "speaker": ""
              }
            ],
            "requirements": [
              "A unified four-sentence text",
              "Precise geographic destination",
              "Specific arrival day or time",
              "Major historic attraction visited",
              "Final evaluative statement"
            ],
            "reason": "Gereist and angekommen use sein; besichtigt and gefallen use haben. The final sentence evaluates the weather with gefallen + mir. Write the four sentences as one paragraph in an exam.",
            "note": "This is a sample travel experience for the writing task, not a claim about your own holiday."
          }
        ],
        "marks": 4
      }
    ]
  }
];
