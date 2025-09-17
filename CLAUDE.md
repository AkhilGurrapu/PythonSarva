# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains the **Python Learner** - an interactive Python learning platform that runs entirely in the browser using WebAssembly technology. The application provides both notebook-style and terminal-style interfaces for learning Python programming.

The application follows a zero-backend architecture and is designed for static hosting deployment with no server requirements.

## Key Commands

### Development Server
```bash
# Start local development server (required for ES6 modules)
npm run dev
# OR
python -m http.server 8000
# OR
npx serve .

# Access application:
# Python Learner: http://localhost:8000/index.html
```

### Deployment Commands
```bash
# Deploy to Netlify
npm run deploy:netlify

# Deploy to Vercel
npm run deploy:vercel

# No build step required - static files only
npm run build  # Will echo confirmation
```

### Browser Requirements
- Chrome 67+ (recommended for WebAssembly performance)
- Firefox 68+
- Safari 14+
- Edge 79+
- HTTPS required for SharedArrayBuffer (Python Learner)

## Architecture Overview

### Python Learner Architecture

The repository contains a single Python learning application with the following structure:

#### Core Architecture (`js/` directory)
- **Pyodide Integration**: Python 3.13 runtime via WebAssembly
- **Dual Interface System**: Notebook cells + Terminal REPL
- **Module-Based Architecture**: ES6 imports with clear separation of concerns
- **Local Storage**: Browser-based persistence with auto-save

### Core Components

#### PythonEngine (`js/python-engine.js`)
- Manages Pyodide WebAssembly runtime initialization
- Handles Python code execution with output capture
- Package management via micropip
- Global state management for Python environment

#### Interface Layer
- **NotebookInterface** (`js/notebook.js`): Jupyter-like cell-based execution
- **TerminalInterface** (`js/terminal.js`): REPL with command history and auto-completion
- **Mode switching**: Seamless transitions between notebook/terminal modes

#### Data Management
- **StorageManager** (`js/storage.js`): LocalStorage abstraction with auto-save
- **Export/Import**: JSON-based data persistence and Google Colab integration

### UI Patterns

The application follows consistent design patterns:
- **Concept Navigation**: Left/right arrows, sidebar topic lists
- **Resizable Layout**: Draggable dividers between content areas
- **Responsive Design**: Mobile-friendly with collapsible sidebars
- **Dark Theme**: Styling optimized for code display

## Critical Implementation Details

### WebAssembly Requirements
- **CORS Headers**: Both applications require proper CORS configuration
- **SharedArrayBuffer**: Python Learner needs `Cross-Origin-Embedder-Policy: require-corp`
- **Module Loading**: ES6 modules must be served from HTTP server (not file://)

### Python Execution Flow
1. **Initialization**: Pyodide loads asynchronously with loading overlay
2. **Code Execution**: Wrapped in Python function that captures stdout/stderr
3. **Output Handling**: Differentiated success/error states with formatted display
4. **Package Management**: Runtime installation via micropip with fallback to loadPackage

### Storage Architecture
- **Auto-save**: 30-second intervals for both notebook cells and terminal history
- **Local Only**: No backend dependencies, complete privacy
- **Export Format**: Standardized JSON for cross-application compatibility

## Deployment Configuration

The repository includes configuration for multiple hosting platforms:
- **`netlify.toml`**: Netlify-specific headers and redirects
- **`vercel.json`**: Vercel deployment configuration
- **`firebase.json`**: Firebase hosting setup
- **`_headers`**: Static header configuration

### Required Headers
```
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
```

## Content Management

### Adding Python Concepts
Python lessons are defined in `js/concepts.js` as structured objects:
```javascript
{
    title: "Concept Name",
    description: "Overview text",
    subConcepts: [{
        title: "Sub-topic",
        content: "HTML content with examples",
        exampleCode: "print('Hello World')"
    }]
}
```

## File Structure Significance

### Key Relationships
- **Main Application**: `index.html` is the Python Learner entry point
- **Styling**: `css/styles.css` contains all application styles
- **JavaScript Modules**: `js/` directory contains all application logic
- **Deployment Configs**: Multiple platform configurations for zero-config deployment

### Module Dependencies
The application uses ES6 module imports with clear dependency hierarchy:
- `main.js` → Core app initialization and coordination
- `python-engine.js` → WebAssembly runtime management
- `notebook.js` + `terminal.js` → UI interfaces (depend on python-engine)
- `storage.js` → Data persistence (independent utility)
- `concepts.js` → Learning content (independent data)

## Development Considerations

### Browser Compatibility Testing
- Test SharedArrayBuffer support for Python features
- Verify ES6 module loading across target browsers
- Validate WebAssembly performance on different devices

### Performance Optimization
- Pyodide initialization can take 5-10 seconds on first load
- Application works offline after initial load
- WebAssembly compilation happens on first visit

### Debugging
- Browser developer tools console shows module loading errors
- Network tab reveals CORS issues
- WebAssembly compilation errors appear in console