# Speed, Accuracy & Execution Rules

## 1. Direct Execution & Speed (No Overthinking)
- For UI, text, images, styling, layout, and pricing updates, edit the target files directly (`src/App.jsx`, `src/App.css`) in a single turn using `replace_file_content`.
- Do NOT run intermediate exploratory loops, trial scripts, web scraping, or heavy background subagents unless the user specifically asks for research or browser testing.
- If an image needs replacing, use authentic local assets (`/destinations/*.jpg`) or direct high-quality URLs without chaining 10 diagnostic commands.

## 2. Uncompromising Accuracy & Quality
- Maintain exact geographical authenticity for all travel destinations (e.g., Udaipur must show City Palace/Lake Pichola; Jaisalmer must show Thar Desert sand dunes; Andaman must show tropical white-sand beach).
- Keep interactive features fully functional (all buttons, WhatsApp links, Google Maps links, and modals must work).
- Always synchronize root mirror files (`cp src/App.jsx App.jsx && cp src/App.css App.css`).
- Always run `npm run build` after edits to guarantee 0 syntax errors, 0 broken JSX, and 100% build health.

## 3. Fast Git Workflow
- Stage, commit, and push directly with clear, concise commit messages.
- Avoid unnecessary sequential branch ping-pong unless requested by the user.
