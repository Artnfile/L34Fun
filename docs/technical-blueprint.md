# AnMo Learning Lab — technical blueprint

## Purpose

AnMo is a small, low-pressure number-identification activity. It presents one star group at a time, accepts a number choice, and offers brief supportive feedback. It is a prototype, not an assessment or a learner-record system.

## Stack

- React 19 and TypeScript for stateful, accessible interaction
- Vite for local development and production bundling
- Three.js via React Three Fiber for the original BOLT-5 guide
- Browser `Blob` API for a user-initiated CSV download

## Data and privacy

No network calls, accounts, names, identifiers, or persistent storage are used. A completed run produces a browser-downloaded CSV containing only fictional trial values: trial number, target number, selected number, correct/incorrect, and response time. The exported filename explicitly labels this data as fictional.

## Interaction flow

1. Render a small set of stars (one through five).
2. Let the learner choose a number using pointer or keyboard.
3. Record only the in-memory trial result and give neutral, encouraging feedback.
4. Repeat for five trials, then offer a CSV export and restart control.

## Accessibility and safeguards

- Native buttons provide keyboard and screen-reader support.
- The star group has a concise accessible label.
- The page avoids countdowns, penalties, and learner identity fields.
- Color is accompanied by words and the controls retain visible focus.

## Next steps

- Usability testing with educators and learners.
- Optional preference controls for sound, reduced motion, and contrast.
- A teacher-facing export schema review before any real-data use.
