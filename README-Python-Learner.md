# Python Learner - Interactive Browser-Based Python Learning Platform

A fully browser-based Python learning environment that requires zero backend hosting or compute costs. Experience Python programming with dual notebook and terminal modes, all running entirely in your browser using WebAssembly technology.

![Python Learner Screenshot](./images/python-learner-preview.png)

## ✨ Features

### 🚀 **Zero Backend Required**
- Runs entirely in the browser using Pyodide (Python 3.13 on WebAssembly)
- No server setup, no installations, no accounts required
- Deploy as a static site on any hosting platform

### 📚 **Dual Learning Modes**
- **Notebook Mode**: Jupyter-like interface with cell-based code execution
- **Terminal Mode**: Interactive Python REPL for quick experimentation
- Seamless switching between modes with persistent state

### 🎯 **Interactive Learning**
- Guided lessons with hands-on examples
- Progressive curriculum from basics to advanced concepts
- Copy-to-clipboard code examples
- Real-time code execution and output

### 💾 **Local Data Persistence**
- Auto-save your progress and code snippets
- Export/import functionality for data backup
- No data leaves your browser - complete privacy

### 🔧 **Python Ecosystem**
- Pre-installed packages: NumPy, Pandas, Matplotlib, and more
- Install additional packages with micropip
- Full Python standard library support

### 🎨 **Modern UX**
- Clean, responsive design inspired by modern IDEs
- Dark theme optimized for coding
- Keyboard shortcuts for power users
- Mobile-friendly responsive layout

### 🔗 **Google Colab Integration**
- Export notebooks to .ipynb format
- One-click download for Google Colab upload
- Seamless transition to cloud-based development

## 🚀 Quick Start

### Option 1: Try Online (Recommended)
Visit the live demo: **[Python Learner Demo](https://your-demo-url.com)**

### Option 2: Local Development
```bash
# Clone or download the files
git clone <your-repo>
cd python-learner

# Serve locally (required for module imports)
python -m http.server 8000
# OR
npx serve .
# OR
live-server

# Open http://localhost:8000/python-learner.html
```

### Option 3: Deploy to Free Hosting

#### GitHub Pages
1. Push code to a GitHub repository
2. Go to Settings → Pages
3. Select source branch (main/master)
4. Access via `https://username.github.io/repository-name/python-learner.html`

#### Netlify
1. Drag and drop the project folder to [Netlify](https://app.netlify.com)
2. Get instant URL: `https://random-name.netlify.app`

#### Vercel
1. Import project from GitHub to [Vercel](https://vercel.com)
2. Deploy automatically on every commit

## 📖 Learning Curriculum

### 1. **Introduction to Python**
- What is Python and why use it?
- Python syntax fundamentals
- Running your first Python program

### 2. **Variables and Data Types**
- Numeric types (int, float, complex)
- Strings and string methods
- Type conversion and checking

### 3. **Control Flow**
- Conditional statements (if/elif/else)
- Loops (for/while) and loop control
- Practical examples and exercises

### 4. **Data Structures**
- Lists and list methods
- Dictionaries for key-value storage
- Sets for unique collections
- Tuples for immutable data

### 5. **Functions**
- Defining and calling functions
- Parameters and return values
- Advanced concepts (*args, **kwargs, lambda)

### 6. **Coming Soon**
- Object-Oriented Programming
- File handling and I/O
- Error handling and debugging
- Working with APIs
- Data analysis with Pandas
- Visualization with Matplotlib

## 🎹 Keyboard Shortcuts

### General Navigation
- `Ctrl+1` - Switch to Notebook mode
- `Ctrl+2` - Switch to Terminal mode
- `Ctrl+Shift+T` - Toggle Topics sidebar
- `Ctrl+Shift+P` - Toggle Packages sidebar
- `Ctrl+← / Ctrl+→` - Navigate between concepts

### Notebook Mode
- `Ctrl+Enter` - Run current cell
- `Shift+Enter` - Run cell and add new cell
- `Ctrl+D` - Delete current cell

### Terminal Mode
- `Ctrl+L` - Clear terminal
- `Ctrl+C` - Interrupt current command
- `↑/↓` - Navigate command history
- `Tab` - Auto-completion

### Data Management
- `Ctrl+S` - Save current work
- `Ctrl+Shift+E` - Export all data
- `F1` - Show help

## 🛠️ Technical Architecture

### Core Technologies
- **Pyodide 0.28.2**: Python 3.13 runtime on WebAssembly
- **Vanilla JavaScript**: No framework dependencies
- **Web Workers**: Isolate Python execution
- **LocalStorage**: Client-side data persistence
- **ES6 Modules**: Modern JavaScript architecture

### Browser Support
- ✅ Chrome 67+ (recommended)
- ✅ Firefox 68+
- ✅ Safari 14+
- ✅ Edge 79+

*Note: WebAssembly and ES6 modules required*

### File Structure
```
python-learner/
├── python-learner.html          # Main application entry point
├── python-css/
│   └── styles.css              # Complete styling
├── python-js/
│   ├── main.js                 # Application core
│   ├── python-engine.js        # Pyodide integration
│   ├── notebook.js             # Notebook interface
│   ├── terminal.js             # Terminal REPL
│   ├── concepts.js             # Learning content
│   ├── storage.js              # Data persistence
│   └── layout.js               # UI and responsive design
└── images/                     # Assets and screenshots
```

## 🔧 Customization

### Adding New Learning Concepts
Edit `python-js/concepts.js` to add new topics:

```javascript
{
    title: "Your New Concept",
    description: "Brief description",
    subConcepts: [
        {
            title: "Sub-topic",
            content: `<h3>Your content here</h3>`,
            exampleCode: `print("Hello, World!")`
        }
    ]
}
```

### Customizing Appearance
Modify `python-css/styles.css` for:
- Color schemes and themes
- Layout adjustments
- Typography changes
- Mobile responsiveness

### Package Management
Pre-installed packages are configured in `python-engine.js`:
```javascript
const commonPackages = [
    'numpy',
    'pandas',
    'matplotlib',
    'micropip'
];
```

## 🚀 Deployment Guide

### Static Hosting Requirements
- **HTTPS**: Required for SharedArrayBuffer (Pyodide requirement)
- **CORS Headers**: Proper headers for module imports
- **Modern Browser**: WebAssembly and ES6 module support

### Recommended Hosting Platforms
1. **GitHub Pages** - Free, automatic deployments
2. **Netlify** - Instant deployment with drag-and-drop
3. **Vercel** - Git integration with automatic builds
4. **Cloudflare Pages** - Fast global CDN
5. **Firebase Hosting** - Google's hosting solution

### Optimization Tips
- Enable gzip compression for faster loading
- Use CDN for external libraries
- Implement service worker for offline capability
- Consider lazy loading for large datasets

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Content Contributions
- Add new learning concepts and examples
- Improve existing explanations
- Create interactive exercises
- Translate content to other languages

### Code Contributions
- Fix bugs and improve performance
- Add new features (code completion, debugging tools)
- Enhance mobile experience
- Improve accessibility

### Getting Started
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📚 Educational Use

### For Educators
- Self-contained learning environment
- No software installation required for students
- Progress tracking and export capabilities
- Customizable curriculum

### For Students
- Learn at your own pace
- Experiment safely in the browser
- Transition smoothly to professional tools
- Build a portfolio of projects

### For Workshops
- Zero setup time
- Works on any device with a browser
- Offline capable after initial load
- Easy to customize for specific topics

## 🔒 Privacy & Security

- **No Data Collection**: All data stays in your browser
- **No Analytics**: No tracking scripts or telemetry
- **Offline Capable**: Works without internet after initial load
- **Local Storage**: Your code and progress never leave your device

## 📄 License

MIT License - feel free to use, modify, and distribute.

## 🙏 Acknowledgments

- **Pyodide Team** - For making Python in the browser possible
- **Python Software Foundation** - For the amazing Python language
- **WebAssembly Community** - For the technology that powers this app

## 🐛 Troubleshooting

### Common Issues

**Python environment not loading**
- Ensure you're using HTTPS (required for SharedArrayBuffer)
- Check browser compatibility (Chrome 67+, Firefox 68+)
- Clear browser cache and reload

**Modules not importing**
- Verify the app is served from a web server (not file://)
- Check browser console for CORS errors
- Ensure all JavaScript files are accessible

**Performance issues**
- Close other browser tabs to free memory
- Use desktop browser for better performance
- Consider using Chrome for optimal WebAssembly performance

### Getting Help
- Check browser console for error messages
- Review the troubleshooting section
- Create an issue on GitHub with details
- Join our community discussions

---

**Start learning Python today with zero setup required!** 🐍✨