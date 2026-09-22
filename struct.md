┌──────────────────────────────────────────────┐
│                  Header                      │
├──────────────┬───────────────────────────────┤
│              │                               │
│   Sidebar    │   Main Content                │
│              │                               │
│   Topics     │   Concept / Learning          │
│              │                               │
│              │   Practice                    │
│              │                               │
│              │   Quiz                        │
└──────────────┴───────────────────────────────┘

App.jsx
   │
   ├── Responsive Header       ✅
   ├── Responsive Sidebar      ✅
   └── Responsive Main         ✅
          │
          └── ChapterView      ✅
                │
                └── ContentRenderer
                      │
                      ├── Heading    ✅
                      ├── Text       ✅
                      ├── Code       ✅
                      ├── Example    ✅
                      ├── Image      ✅
                      ├── Quiz       ✅
                      └── Practice   ✅




                         APP
                          │
             ┌────────────┴────────────┐
             │                         │
        Course State              Navigation
             │                         │
             │                ┌────────┴────────┐
             │                │                 │
             │          Section Select    Chapter Select
             │                │                 │
             └───────────────┬┴─────────────────┘
                             │
                       ChapterView
                             │
                    ┌────────┴────────┐
                    │                 │
               Content Flow       Quiz Flow
                    │                 │
             ┌──────┼──────┐          │
             │      │      │          │
           Text    Code  Image       Quiz
             │      │      │          │
             └──────┴──────┘          │
                    │                 │
                    └────────┬────────┘
                             │
                       Action Bar
                             │
                  ┌──────────┴──────────┐
                  │                     │
              Continue            Next Chapter
                                        │
                                  App Navigation