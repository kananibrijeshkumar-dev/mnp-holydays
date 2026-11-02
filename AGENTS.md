# Project Guidelines for MNP Holidays

## Speed & Direct Execution
- For any requested changes (images, text, prices, styling, buttons), apply edits directly to `src/App.jsx` and `src/App.css`.
- Avoid unnecessary exploratory tool loops, subagents, or trial scripts. Execute changes cleanly in 1-2 steps.
- Always mirror changes to root: `cp src/App.jsx App.jsx && cp src/App.css App.css`.
- Always verify build integrity: `npm run build` must pass cleanly with 0 errors.

## Accuracy & Authenticity
- All destination images must strictly match the actual location (Udaipur = City Palace/Lake Pichola, Jaisalmer = Thar Desert, Andaman = Havelock Island/Radhanagar Beach, etc.).
- Ensure all interactive buttons, inclusion chips, WhatsApp inquiries, and Google Maps links work properly.
