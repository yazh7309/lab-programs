# Copilot Instructions for program1

## Project Overview
This is a minimal React application built with Vite, using React 19. The project serves as a starting point for developing React components and features, with a focus on fast development and hot module replacement (HMR).

Key directories:
- `src/component/` - Houses individual component implementations in subfolders (e.g., `counter/`, `TO-DO-List/`)
- `src/assets/` - Static assets like images and SVGs
- `public/` - Public assets served directly

## Architecture
- **Framework**: React 19 with functional components and hooks
- **Build Tool**: Vite for fast development and optimized production builds
- **Component Organization**: Components are organized in `src/component/` with dedicated subfolders per feature/component
- **Entry Point**: `src/main.jsx` renders `App.jsx` in StrictMode for development warnings

Example component structure (when implemented):
```
src/component/counter/
  Counter.jsx
  Counter.css (if needed)
```

## Development Workflow
- **Start Development**: `npm run dev` - Launches Vite dev server with HMR
- **Build for Production**: `npm run build` - Creates optimized build in `dist/`
- **Preview Build**: `npm run preview` - Serves the production build locally
- **Linting**: `npm run lint` - Runs ESLint on JS/JSX files

Use `npm run dev` for iterative development; changes to `.jsx` files trigger instant updates.

## Code Conventions
- **ESLint Rules**: 
  - Standard recommended rules plus React hooks and refresh plugins
  - Unused variables starting with uppercase letters or underscores are ignored (e.g., `const UNUSED_VAR = ...`)
- **File Extensions**: Use `.jsx` for React components, `.js` for utilities
- **Imports**: Prefer relative imports for components within `src/`
- **Component Naming**: PascalCase for component functions and files (e.g., `Counter.jsx`)
- **Folder Naming**: Lowercase or hyphenated for component folders (observed: `counter`, `TO-DO-List`)

## Dependencies
- **Runtime**: React 19.2.0, React DOM 19.2.0
- **Dev Tools**: Vite 7.2.4, ESLint 9.39.1 with React-specific plugins
- **TypeScript Ready**: @types/react and @types/react-dom included for future TS migration

When adding new components, create a subfolder in `src/component/` and follow the established naming patterns. Reference `src/App.jsx` for integration examples.