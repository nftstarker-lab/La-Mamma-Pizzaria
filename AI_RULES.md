# AI Rules for La Mamma Pizzeria

This document defines the stack and the rules for choosing libraries and patterns when evolving this app.

## Tech stack (overview)
- React 19 with React DOM and TypeScript 5.8 for a modern, typed SPA.
- Vite 6 for dev/build with environment injection via define; GEMINI_API_KEY is mapped to process.env.API_KEY.
- Tailwind CSS via CDN configured in index.html with custom brand colors and fonts (Anton, Inter).
- lucide-react for lightweight, consistent icons throughout the UI.
- @google/genai (Google GenAI SDK) for AI recommendations, abstracted in services/geminiService.ts.
- React Context + hooks for state management (e.g., CartContext) — no external state libraries.
- Single-page anchored sections (Navbar links) with client-only rendering and WhatsApp-based checkout.
- Fonts loaded from Google Fonts; images served from CDNs (e.g., Unsplash).

## Library usage rules (what to use for what)
- UI components and primitives:
  - Prefer shadcn/ui components for new UI where it fits; customize with Tailwind classes.
  - If a shadcn/ui primitive is not needed, build simple components with Tailwind only (no CSS-in-JS).
- Styling and layout:
  - Use Tailwind CSS exclusively for styling, layout, spacing, and responsiveness.
  - Favor utility classes and small component-level compositions over global CSS.
- Icons:
  - Use lucide-react icons; do not add additional icon libraries.
- State management:
  - Use React state and Context (e.g., contexts/CartContext.tsx). Avoid adding Redux/Zustand unless there is a clear, documented need.
- AI and external APIs:
  - For Gemini calls, always go through services/geminiService.ts.
  - Access API keys via process.env.API_KEY (defined from GEMINI_API_KEY in Vite). Never hardcode secrets.
- Routing and navigation:
  - Current app uses anchored sections; if true multi-page navigation is needed, use React Router and keep routes in src/App.tsx.
- Forms and validation:
  - Start with native inputs + React state. Only introduce a form library if complexity justifies it.
- Animations and feedback:
  - Use Tailwind transitions and keyframes. Prefer shadcn/ui toast/feedback primitives when notifications are needed.
- Maps and embeds:
  - Use iframe embeds (as in Location.tsx) for maps. Do not add Google Maps SDK unless strictly necessary.
- Utilities and dates:
  - Use built-in Intl APIs for formatting. Avoid adding date/utility libraries unless essential.

## Coding and structure conventions
- File structure:
  - Components in src/components/, context in src/contexts/, services in src/services/, constants in src/, types in src/.
  - Pages (if added) go in src/pages/, with routes declared in src/App.tsx.
- Component design:
  - Create a new file for each new component or hook. Keep components focused and preferably under ~100 LOC.
  - Ensure responsive design across mobile and desktop using Tailwind utilities.
- Error handling:
  - Keep it minimal; surface errors where user-facing and centralize API errors in service layers.
- Performance and accessibility:
  - Use semantic HTML, alt text for images, logical heading order, and keyboard-friendly controls.
  - Prefer lightweight dependencies and zero-dependency solutions when possible.