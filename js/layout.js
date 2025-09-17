// Layout and responsive functionality for Python Learner App

class LayoutManager {
    constructor() {
        this.isResizing = false;
        this.minColumnWidth = 300;
        this.setupResizer();
        this.setupResponsiveLayout();
    }

    setupResizer() {
        const resizer = document.getElementById('resizer');
        const container = document.querySelector('.container');
        const leftColumn = document.querySelector('.left-column');
        const rightColumn = document.querySelector('.right-column');

        if (!resizer || !container || !leftColumn || !rightColumn) return;

        let isResizing = false;
        let startX = 0;
        let startLeftWidth = 0;
        let startRightWidth = 0;

        resizer.addEventListener('mousedown', (e) => {
            isResizing = true;
            startX = e.clientX;
            startLeftWidth = leftColumn.offsetWidth;
            startRightWidth = rightColumn.offsetWidth;

            document.body.style.cursor = 'ew-resize';
            document.body.style.userSelect = 'none';

            e.preventDefault();
        });

        document.addEventListener('mousemove', (e) => {
            if (!isResizing) return;

            const dx = e.clientX - startX;
            const containerWidth = container.offsetWidth;
            const resizerWidth = resizer.offsetWidth;
            const availableWidth = containerWidth - resizerWidth;

            let newLeftWidth = startLeftWidth + dx;
            let newRightWidth = startRightWidth - dx;

            // Enforce minimum widths
            if (newLeftWidth < this.minColumnWidth) {
                newLeftWidth = this.minColumnWidth;
                newRightWidth = availableWidth - newLeftWidth;
            } else if (newRightWidth < this.minColumnWidth) {
                newRightWidth = this.minColumnWidth;
                newLeftWidth = availableWidth - newRightWidth;
            }

            // Calculate percentages
            const leftPercent = (newLeftWidth / availableWidth) * 100;
            const rightPercent = (newRightWidth / availableWidth) * 100;

            leftColumn.style.flex = `0 0 ${leftPercent}%`;
            rightColumn.style.flex = `0 0 ${rightPercent}%`;

            e.preventDefault();
        });

        document.addEventListener('mouseup', () => {
            if (isResizing) {
                isResizing = false;
                document.body.style.cursor = '';
                document.body.style.userSelect = '';

                // Save layout preferences
                this.saveLayoutPreferences();
            }
        });

        // Touch events for mobile
        resizer.addEventListener('touchstart', (e) => {
            isResizing = true;
            startX = e.touches[0].clientX;
            startLeftWidth = leftColumn.offsetWidth;
            startRightWidth = rightColumn.offsetWidth;

            e.preventDefault();
        });

        document.addEventListener('touchmove', (e) => {
            if (!isResizing) return;

            const dx = e.touches[0].clientX - startX;
            const containerWidth = container.offsetWidth;
            const resizerWidth = resizer.offsetWidth;
            const availableWidth = containerWidth - resizerWidth;

            let newLeftWidth = startLeftWidth + dx;
            let newRightWidth = startRightWidth - dx;

            // Enforce minimum widths
            if (newLeftWidth < this.minColumnWidth) {
                newLeftWidth = this.minColumnWidth;
                newRightWidth = availableWidth - newLeftWidth;
            } else if (newRightWidth < this.minColumnWidth) {
                newRightWidth = this.minColumnWidth;
                newLeftWidth = availableWidth - newRightWidth;
            }

            // Calculate percentages
            const leftPercent = (newLeftWidth / availableWidth) * 100;
            const rightPercent = (newRightWidth / availableWidth) * 100;

            leftColumn.style.flex = `0 0 ${leftPercent}%`;
            rightColumn.style.flex = `0 0 ${rightPercent}%`;

            e.preventDefault();
        });

        document.addEventListener('touchend', () => {
            if (isResizing) {
                isResizing = false;
                this.saveLayoutPreferences();
            }
        });
    }

    setupResponsiveLayout() {
        // Handle window resize
        window.addEventListener('resize', () => {
            this.handleWindowResize();
        });

        // Initial setup
        this.handleWindowResize();
        this.loadLayoutPreferences();
    }

    handleWindowResize() {
        const container = document.querySelector('.container');
        const leftColumn = document.querySelector('.left-column');
        const rightColumn = document.querySelector('.right-column');
        const resizer = document.getElementById('resizer');

        if (!container || !leftColumn || !rightColumn || !resizer) return;

        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            // Mobile layout
            container.style.flexDirection = 'column';
            resizer.style.display = 'none';
            leftColumn.style.flex = '0 0 40vh';
            rightColumn.style.flex = '0 0 55vh';
            leftColumn.style.maxHeight = '40vh';
            rightColumn.style.maxHeight = '55vh';
        } else {
            // Desktop layout
            container.style.flexDirection = 'row';
            resizer.style.display = 'block';
            leftColumn.style.maxHeight = 'none';
            rightColumn.style.maxHeight = 'none';

            // Reset to default if no saved preferences
            if (!this.hasLayoutPreferences()) {
                leftColumn.style.flex = '1';
                rightColumn.style.flex = '1';
            }
        }
    }

    saveLayoutPreferences() {
        const leftColumn = document.querySelector('.left-column');
        const rightColumn = document.querySelector('.right-column');

        if (!leftColumn || !rightColumn) return;

        const preferences = {
            leftFlex: leftColumn.style.flex,
            rightFlex: rightColumn.style.flex,
            timestamp: Date.now()
        };

        try {
            localStorage.setItem('python-learner-layout', JSON.stringify(preferences));
        } catch (error) {
            console.warn('Failed to save layout preferences:', error);
        }
    }

    loadLayoutPreferences() {
        if (window.innerWidth <= 768) return; // Don't apply preferences on mobile

        try {
            const saved = localStorage.getItem('python-learner-layout');
            if (!saved) return;

            const preferences = JSON.parse(saved);
            const leftColumn = document.querySelector('.left-column');
            const rightColumn = document.querySelector('.right-column');

            if (leftColumn && rightColumn && preferences.leftFlex && preferences.rightFlex) {
                leftColumn.style.flex = preferences.leftFlex;
                rightColumn.style.flex = preferences.rightFlex;
            }
        } catch (error) {
            console.warn('Failed to load layout preferences:', error);
        }
    }

    hasLayoutPreferences() {
        try {
            const saved = localStorage.getItem('python-learner-layout');
            return !!saved;
        } catch (error) {
            return false;
        }
    }

    resetLayout() {
        const leftColumn = document.querySelector('.left-column');
        const rightColumn = document.querySelector('.right-column');

        if (leftColumn && rightColumn) {
            leftColumn.style.flex = '1';
            rightColumn.style.flex = '1';
            this.saveLayoutPreferences();
        }
    }
}

// Keyboard shortcuts handler
class KeyboardShortcuts {
    constructor() {
        this.shortcuts = new Map();
        this.setupDefaultShortcuts();
        this.addEventListeners();
    }

    setupDefaultShortcuts() {
        // App-level shortcuts
        this.addShortcut('ctrl+1', () => this.switchMode('notebook'));
        this.addShortcut('ctrl+2', () => this.switchMode('terminal'));
        this.addShortcut('ctrl+shift+p', () => this.togglePackages());
        this.addShortcut('ctrl+shift+t', () => this.toggleTopics());
        this.addShortcut('ctrl+shift+e', () => this.exportData());
        this.addShortcut('ctrl+shift+r', () => this.resetPython());
        this.addShortcut('f1', () => this.showHelp());

        // Navigation shortcuts
        this.addShortcut('ctrl+left', () => this.navigateConcept(-1));
        this.addShortcut('ctrl+right', () => this.navigateConcept(1));

        // Mode-specific shortcuts will be handled by the respective interfaces
    }

    addShortcut(key, callback) {
        this.shortcuts.set(this.normalizeKey(key), callback);
    }

    normalizeKey(key) {
        return key.toLowerCase().replace(/\s+/g, '');
    }

    addEventListeners() {
        document.addEventListener('keydown', (e) => {
            const key = this.getKeyString(e);
            const normalizedKey = this.normalizeKey(key);

            if (this.shortcuts.has(normalizedKey)) {
                // Check if we should handle this shortcut
                if (this.shouldHandleShortcut(e)) {
                    e.preventDefault();
                    this.shortcuts.get(normalizedKey)();
                }
            }
        });
    }

    getKeyString(e) {
        const parts = [];

        if (e.ctrlKey) parts.push('ctrl');
        if (e.altKey) parts.push('alt');
        if (e.shiftKey) parts.push('shift');
        if (e.metaKey) parts.push('meta');

        if (e.key && e.key !== 'Control' && e.key !== 'Alt' && e.key !== 'Shift' && e.key !== 'Meta') {
            parts.push(e.key.toLowerCase());
        }

        return parts.join('+');
    }

    shouldHandleShortcut(e) {
        const target = e.target;
        const tagName = target.tagName.toLowerCase();

        // Don't handle shortcuts when typing in inputs
        if (tagName === 'input' || tagName === 'textarea') {
            return false;
        }

        // Don't handle shortcuts when in contenteditable elements
        if (target.contentEditable === 'true') {
            return false;
        }

        return true;
    }

    switchMode(mode) {
        if (window.pythonLearnerApp) {
            window.pythonLearnerApp.switchMode(mode);
        }
    }

    togglePackages() {
        const event = new Event('click');
        document.getElementById('preview-packages')?.dispatchEvent(event);
    }

    toggleTopics() {
        const event = new Event('click');
        document.getElementById('toggle-topics')?.dispatchEvent(event);
    }

    exportData() {
        if (window.pythonLearnerApp) {
            window.pythonLearnerApp.storageManager.exportAllData();
        }
    }

    resetPython() {
        if (window.pythonLearnerApp) {
            window.pythonLearnerApp.pythonEngine.reset();
        }
    }

    navigateConcept(direction) {
        if (window.navigateConcept) {
            window.navigateConcept(direction);
        }
    }

    showHelp() {
        const helpContent = `
            <h3>Keyboard Shortcuts</h3>
            <div style="font-family: monospace; line-height: 1.6;">
                <strong>App Navigation:</strong><br>
                Ctrl+1 - Switch to Notebook mode<br>
                Ctrl+2 - Switch to Terminal mode<br>
                Ctrl+Shift+T - Toggle Topics sidebar<br>
                Ctrl+Shift+P - Toggle Packages sidebar<br>
                Ctrl+← / Ctrl+→ - Navigate concepts<br><br>

                <strong>Data Management:</strong><br>
                Ctrl+S - Save current work<br>
                Ctrl+Shift+E - Export all data<br>
                Ctrl+Shift+R - Reset Python environment<br><br>

                <strong>Notebook Mode:</strong><br>
                Ctrl+Enter - Run current cell<br>
                Shift+Enter - Run cell and add new<br>
                Ctrl+D - Delete current cell<br><br>

                <strong>Terminal Mode:</strong><br>
                Ctrl+L - Clear terminal<br>
                Ctrl+C - Interrupt command<br>
                ↑/↓ - Navigate command history<br>
                Tab - Auto-completion<br><br>

                <strong>General:</strong><br>
                F1 - Show this help
            </div>
        `;

        this.showModal('Help - Keyboard Shortcuts', helpContent);
    }

    showModal(title, content) {
        // Create modal if it doesn't exist
        let modal = document.getElementById('help-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'help-modal';
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10001;
                padding: 2rem;
                box-sizing: border-box;
            `;

            const modalContent = document.createElement('div');
            modalContent.style.cssText = `
                background: #16213e;
                border: 1px solid #3776ab;
                border-radius: 8px;
                padding: 2rem;
                max-width: 600px;
                max-height: 80vh;
                overflow-y: auto;
                color: white;
                position: relative;
            `;

            modal.appendChild(modalContent);
            document.body.appendChild(modal);

            // Close on click outside
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });

            // Close on Escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modal.style.display !== 'none') {
                    modal.style.display = 'none';
                }
            });
        }

        const modalContent = modal.querySelector('div');
        modalContent.innerHTML = `
            <button style="
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
            " onclick="this.closest('#help-modal').style.display='none'">×</button>
            <h2 style="margin-top: 0; color: #ffd700;">${title}</h2>
            ${content}
        `;

        modal.style.display = 'flex';
    }
}

// Initialize layout management when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const layoutManager = new LayoutManager();
    const keyboardShortcuts = new KeyboardShortcuts();

    // Make available globally
    window.layoutManager = layoutManager;
    window.keyboardShortcuts = keyboardShortcuts;

    // Add layout reset function to window for global access
    window.resetLayout = () => layoutManager.resetLayout();
});

// Handle orientation change on mobile devices
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        if (window.layoutManager) {
            window.layoutManager.handleWindowResize();
        }
    }, 100);
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LayoutManager, KeyboardShortcuts };
}