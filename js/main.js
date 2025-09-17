import { PythonEngine } from './python-engine.js';
import { NotebookInterface } from './notebook.js';
import { TerminalInterface } from './terminal.js';
import { StorageManager } from './storage.js';
import {
    showConcept,
    navigateConcept,
    populateTopicList,
    toggleTopicsSidebar,
    togglePackagesSidebar,
    closeSidebars,
    markConceptCompleted,
    copyToClipboard
} from './concepts.js';

class PythonLearnerApp {
    constructor() {
        this.pythonEngine = new PythonEngine();
        this.notebookInterface = null;
        this.terminalInterface = null;
        this.storageManager = new StorageManager();
        this.currentMode = 'notebook';
        this.isInitialized = false;
    }

    async initialize() {
        if (this.isInitialized) return;

        try {
            console.log('Starting app initialization...');

            // Verify essential DOM elements exist
            const requiredElements = ['topic-list', 'concept-content', 'current-concept'];
            for (const elementId of requiredElements) {
                const element = document.getElementById(elementId);
                if (!element) {
                    throw new Error(`Required element '${elementId}' not found in DOM`);
                }
            }
            console.log('All required DOM elements found');

            // Initialize Python engine
            console.log('Initializing Python engine...');
            await this.pythonEngine.initialize();
            console.log('Python engine initialized');

            // Initialize interfaces
            this.notebookInterface = new NotebookInterface(this.pythonEngine);
            this.terminalInterface = new TerminalInterface(this.pythonEngine);
            console.log('Interfaces initialized');

            // Setup event listeners
            this.setupEventListeners();
            console.log('Event listeners setup');

            // Setup auto-save
            this.storageManager.enableAutoSave(
                this.notebookInterface,
                this.terminalInterface,
                30000 // 30 seconds
            );
            console.log('Auto-save enabled');

            // Initialize concepts and populate topic list FIRST
            console.log('Populating topic list...');
            populateTopicList();

            // Load saved data AFTER topic list is populated
            const hasLoadedProgress = this.loadSavedData();
            console.log('Saved data loaded:', hasLoadedProgress);
            
            // Always show initial concept to ensure content is visible
            console.log('Showing initial concept...');
            try {
                showConcept(0, 0);
                console.log('Initial concept displayed successfully');
            } catch (error) {
                console.error('Error showing initial concept:', error);
                // Force fallback content
                this.showFallbackContent();
            }
            
            // Double-check content is visible after a delay
            setTimeout(() => {
                const conceptContent = document.getElementById('concept-content');
                if (!conceptContent || conceptContent.innerHTML.includes('Content Loading Error')) {
                    console.log('Content still showing error, forcing showConcept again');
                    try {
                        showConcept(0, 0);
                    } catch (error) {
                        console.error('Failed to show concept on retry:', error);
                        this.showFallbackContent();
                    }
                }
            }, 500);

            // Initialize packages sidebar
            this.initializePackagesSidebar();

            this.isInitialized = true;
            console.log('Python Learner App initialized successfully');

        } catch (error) {
            console.error('Failed to initialize app:', error);
            this.showError('Failed to initialize the Python learning environment. Please refresh the page.');
        }
    }

    setupEventListeners() {
        // Mode switching
        document.getElementById('notebook-mode').addEventListener('click', () => {
            this.switchMode('notebook');
        });

        document.getElementById('terminal-mode').addEventListener('click', () => {
            this.switchMode('terminal');
        });

        // Navigation
        document.getElementById('prev-concept').addEventListener('click', () => {
            navigateConcept(-1);
        });

        document.getElementById('next-concept').addEventListener('click', () => {
            navigateConcept(1);
        });

        // Sidebar toggles
        document.getElementById('toggle-topics').addEventListener('click', toggleTopicsSidebar);
        document.getElementById('preview-packages').addEventListener('click', togglePackagesSidebar);
        document.querySelector('.overlay').addEventListener('click', closeSidebars);

        // Package management
        document.getElementById('install-package').addEventListener('click', () => {
            this.installPackage();
        });

        document.getElementById('package-search').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.installPackage();
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch (e.key) {
                    case 's':
                        e.preventDefault();
                        this.saveCurrentData();
                        break;
                    case 'e':
                        e.preventDefault();
                        this.storageManager.exportAllData();
                        break;
                    case '1':
                        e.preventDefault();
                        this.switchMode('notebook');
                        break;
                    case '2':
                        e.preventDefault();
                        this.switchMode('terminal');
                        break;
                }
            }
        });

        // Window events
        window.addEventListener('beforeunload', () => {
            this.saveCurrentData();
        });

        // Handle browser back/forward buttons
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.mode) {
                this.switchMode(e.state.mode);
            }
        });
    }

    switchMode(mode) {
        if (mode === this.currentMode) return;

        // Save current data before switching
        this.saveCurrentData();

        // Update mode
        this.currentMode = mode;

        // Update UI
        const notebookBtn = document.getElementById('notebook-mode');
        const terminalBtn = document.getElementById('terminal-mode');
        const notebookInterface = document.getElementById('notebook-interface');
        const terminalInterface = document.getElementById('terminal-interface');

        if (mode === 'notebook') {
            notebookBtn.classList.add('active');
            terminalBtn.classList.remove('active');
            notebookInterface.classList.add('active');
            terminalInterface.classList.remove('active');
        } else {
            terminalBtn.classList.add('active');
            notebookBtn.classList.remove('active');
            terminalInterface.classList.add('active');
            notebookInterface.classList.remove('active');

            // Focus terminal when switching to it
            this.terminalInterface.focus();
        }

        // Update browser history
        history.pushState({ mode }, '', `#${mode}`);

        console.log(`Switched to ${mode} mode`);
    }

    async installPackage() {
        const searchInput = document.getElementById('package-search');
        const packageName = searchInput.value.trim();

        if (!packageName) {
            this.showMessage('Please enter a package name', 'warning');
            return;
        }

        try {
            this.showMessage(`Installing ${packageName}...`, 'info');

            const result = await this.pythonEngine.installPackage(packageName);

            if (result.success) {
                this.showMessage(result.message, 'success');
                searchInput.value = '';
                this.updatePackagesList();
            } else {
                this.showMessage(result.message, 'error');
            }

        } catch (error) {
            this.showMessage(`Failed to install ${packageName}: ${error.message}`, 'error');
        }
    }

    async initializePackagesSidebar() {
        try {
            // Update installed packages
            this.updatePackagesList();

            // Update available packages
            const availablePackages = await this.pythonEngine.getAvailablePackages();
            const availableList = document.getElementById('available-packages');
            availableList.innerHTML = '';

            availablePackages.forEach(pkg => {
                const listItem = document.createElement('li');
                listItem.textContent = pkg;
                listItem.style.cursor = 'pointer';
                listItem.addEventListener('click', () => {
                    document.getElementById('package-search').value = pkg;
                });
                availableList.appendChild(listItem);
            });

        } catch (error) {
            console.error('Failed to initialize packages sidebar:', error);
        }
    }

    updatePackagesList() {
        const installedPackages = this.pythonEngine.getInstalledPackages();
        const installedList = document.getElementById('preinstalled-packages');
        installedList.innerHTML = '';

        installedPackages.forEach(pkg => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<i class="fas fa-check-circle" style="color: #28a745; margin-right: 0.5rem;"></i>${pkg}`;
            installedList.appendChild(listItem);
        });
    }

    saveCurrentData() {
        try {
            if (this.notebookInterface) {
                const notebookData = this.notebookInterface.getCellsData();
                this.storageManager.saveNotebook(notebookData);
            }

            if (this.terminalInterface) {
                const terminalData = this.terminalInterface.getSessionData();
                this.storageManager.saveTerminalSession(terminalData);
            }

        } catch (error) {
            console.error('Failed to save data:', error);
        }
    }

    loadSavedData() {
        let hasLoadedProgress = false;
        try {
            // Load notebook data
            const notebookData = this.storageManager.loadNotebook();
            if (notebookData && this.notebookInterface) {
                this.notebookInterface.loadNotebook({ cells: notebookData });
            }

            // Load terminal session
            const terminalData = this.storageManager.loadTerminalSession();
            if (terminalData && this.terminalInterface) {
                this.terminalInterface.loadSession(terminalData);
            }

            // Load progress
            const progress = this.storageManager.loadProgress();
            if (progress) {
                showConcept(progress.currentConcept, progress.currentSubConcept);
                hasLoadedProgress = true;
            }

        } catch (error) {
            console.error('Failed to load saved data:', error);
        }
        return hasLoadedProgress;
    }

    showMessage(message, type = 'info') {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message message-${type}`;
        messageDiv.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: ${this.getMessageColor(type)};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            border: 1px solid ${this.getMessageBorderColor(type)};
            z-index: 10000;
            max-width: 300px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            font-family: inherit;
            font-size: 0.9rem;
        `;

        messageDiv.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas ${this.getMessageIcon(type)}"></i>
                <span>${message}</span>
            </div>
        `;

        document.body.appendChild(messageDiv);

        // Auto-remove after delay
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.style.opacity = '0';
                messageDiv.style.transform = 'translateX(100%)';
                messageDiv.style.transition = 'all 0.3s ease';
                setTimeout(() => {
                    if (messageDiv.parentNode) {
                        messageDiv.parentNode.removeChild(messageDiv);
                    }
                }, 300);
            }
        }, type === 'error' ? 5000 : 3000);
    }

    getMessageColor(type) {
        const colors = {
            info: '#3776ab',
            success: '#28a745',
            warning: '#ffc107',
            error: '#dc3545'
        };
        return colors[type] || colors.info;
    }

    getMessageBorderColor(type) {
        const colors = {
            info: '#4a8bc2',
            success: '#34ce57',
            warning: '#ffcd39',
            error: '#e86470'
        };
        return colors[type] || colors.info;
    }

    getMessageIcon(type) {
        const icons = {
            info: 'fa-info-circle',
            success: 'fa-check-circle',
            warning: 'fa-exclamation-triangle',
            error: 'fa-times-circle'
        };
        return icons[type] || icons.info;
    }

    showError(message) {
        this.showMessage(message, 'error');
    }

    showFallbackContent() {
        console.log('Showing fallback content...');
        const contentArea = document.getElementById('concept-content');
        const conceptTitle = document.getElementById('current-concept');
        
        if (conceptTitle) {
            conceptTitle.textContent = 'Python Basics';
        }
        
        if (contentArea) {
            contentArea.innerHTML = `
                <div class="concept-header-info">
                    <div class="concept-meta">
                        <div class="level-info">
                            <span class="level-badge basic">Basic</span>
                            <span class="time-estimate">
                                <i class="fas fa-clock"></i> 1-2 hours
                            </span>
                            <span class="completion-badge">
                                <i class="far fa-circle"></i> Getting Started
                            </span>
                        </div>
                        <div class="concept-description">
                            <p>Welcome to Python! Let's start with the fundamentals of programming in Python.</p>
                        </div>
                    </div>
                </div>

                <div class="subconcept-content">
                    <div class="subconcept-header">
                        <h2>Welcome to Python Learning! 🐍</h2>
                    </div>

                    <div class="explanation-section">
                        <h3>Getting Started with Python</h3>
                        <p>Python is a powerful, easy-to-learn programming language. Let's start your journey!</p>
                        
                        <h4>🚀 What you'll learn:</h4>
                        <ul>
                            <li><strong>Python Syntax:</strong> Variables, data types, and basic operations</li>
                            <li><strong>Control Flow:</strong> Conditions, loops, and logic</li>
                            <li><strong>Data Structures:</strong> Lists, dictionaries, and more</li>
                            <li><strong>Functions:</strong> Writing reusable code</li>
                            <li><strong>Object-Oriented Programming:</strong> Classes and objects</li>
                        </ul>

                        <h4>💡 Try your first Python code:</h4>
                        <p>Click the "Topics" button in the top-left to see all available lessons, or try running some Python code in the terminal/notebook!</p>
                    </div>

                    <div class="code-example">
                        <div class="code-header">
                            <div class="code-language">
                                Your First Python Program
                            </div>
                            <button class="copy-btn" data-code='print("Hello, Python!")\\nprint("Welcome to programming!")\\n\\n# Variables\\nname = "Python Learner"\\nage = 25\\nprint(f"Hi {name}, you are {age} years old!")'>
                                <i class="fas fa-copy"></i> Copy Code
                            </button>
                        </div>
                        <div class="code-content">print("Hello, Python!")
print("Welcome to programming!")

# Variables
name = "Python Learner"
age = 25
print(f"Hi {name}, you are {age} years old!")</div>
                    </div>

                    <div class="concept-nav">
                        <button class="nav-btn" onclick="toggleTopicsSidebar()">
                            <i class="fas fa-list"></i> View All Topics
                        </button>
                        <button class="nav-btn" onclick="location.reload()">
                            <i class="fas fa-refresh"></i> Refresh Page
                        </button>
                    </div>
                </div>
            `;

            // Setup copy button event listener
            const copyBtn = contentArea.querySelector('.copy-btn');
            if (copyBtn) {
                copyBtn.addEventListener('click', () => {
                    const code = copyBtn.getAttribute('data-code').replace(/\\n/g, '\n');
                    copyToClipboard(copyBtn, code);
                });
            }
        }
    }

    // Method to handle URL hash changes
    handleHashChange() {
        const hash = window.location.hash.substr(1);
        if (hash === 'terminal' || hash === 'notebook') {
            this.switchMode(hash);
        }
    }
}

// Global error handler
window.addEventListener('error', (event) => {
    console.error('Global error caught:', event.error);
    console.error('Error details:', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error
    });
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    event.preventDefault(); // Prevent the default handler
});

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM loaded, initializing app...');
    
    try {
        const app = new PythonLearnerApp();

        // Handle initial hash
        const initialHash = window.location.hash.substr(1);
        if (initialHash === 'terminal') {
            app.currentMode = 'terminal';
        }

        // Initialize the app
        await app.initialize();

        // Handle hash changes
        window.addEventListener('hashchange', () => app.handleHashChange());

        // Handle initial hash
        app.handleHashChange();

        // Make app available globally for debugging
        window.pythonLearnerApp = app;

        // Make notebook interface globally available for concept refresh
        window.notebookInterface = app.notebookInterface;

        // Make notebook modal close function globally available
        window.closeNotebookModal = () => {
            if (app.notebookInterface) {
                app.notebookInterface.closeModal();
            }
        };

        // Make concept functions globally available for onclick handlers
        window.markConceptCompleted = markConceptCompleted;
        window.copyToClipboard = copyToClipboard;
        window.navigateConcept = navigateConcept;
        
        // Make sidebar functions globally available
        window.toggleTopicsSidebar = toggleTopicsSidebar;
        window.togglePackagesSidebar = togglePackagesSidebar;
        window.closeSidebars = closeSidebars;

        console.log('Python Learner App ready!');
        
    } catch (error) {
        console.error('Failed to initialize app:', error);
        
        // Show fallback error message
        const contentArea = document.getElementById('concept-content');
        if (contentArea) {
            contentArea.innerHTML = `
                <div class="error-message">
                    <h3>⚠️ Initialization Error</h3>
                    <p>The application failed to initialize properly. Please refresh the page.</p>
                    <p><strong>Error:</strong> ${error.message}</p>
                    <button onclick="location.reload()" class="btn primary">Refresh Page</button>
                    <details style="margin-top: 10px;">
                        <summary>Technical Details</summary>
                        <pre style="background: #f5f5f5; padding: 10px; margin-top: 10px; overflow-x: auto;">${error.stack}</pre>
                    </details>
                </div>
            `;
        }
    }
});

export { PythonLearnerApp };