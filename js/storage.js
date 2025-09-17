class StorageManager {
    constructor() {
        this.storageKey = 'python-learner-data';
        this.notebookKey = 'python-learner-notebook';
        this.terminalKey = 'python-learner-terminal';
        this.progressKey = 'python-learner-progress';
    }

    // Save notebook data
    saveNotebook(notebookData) {
        try {
            const data = {
                cells: notebookData,
                timestamp: new Date().toISOString(),
                version: '1.0'
            };
            localStorage.setItem(this.notebookKey, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Failed to save notebook:', error);
            return false;
        }
    }

    // Load notebook data
    loadNotebook() {
        try {
            const data = localStorage.getItem(this.notebookKey);
            if (data) {
                const parsed = JSON.parse(data);
                return parsed.cells || [];
            }
            return null;
        } catch (error) {
            console.error('Failed to load notebook:', error);
            return null;
        }
    }

    // Save terminal session
    saveTerminalSession(sessionData) {
        try {
            const data = {
                ...sessionData,
                timestamp: new Date().toISOString(),
                version: '1.0'
            };
            localStorage.setItem(this.terminalKey, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Failed to save terminal session:', error);
            return false;
        }
    }

    // Load terminal session
    loadTerminalSession() {
        try {
            const data = localStorage.getItem(this.terminalKey);
            if (data) {
                return JSON.parse(data);
            }
            return null;
        } catch (error) {
            console.error('Failed to load terminal session:', error);
            return null;
        }
    }

    // Save user progress
    saveProgress(conceptIndex, subConceptIndex, completedConcepts = []) {
        try {
            const progressData = {
                currentConcept: conceptIndex,
                currentSubConcept: subConceptIndex,
                completedConcepts: completedConcepts,
                timestamp: new Date().toISOString(),
                version: '1.0'
            };
            localStorage.setItem(this.progressKey, JSON.stringify(progressData));
            return true;
        } catch (error) {
            console.error('Failed to save progress:', error);
            return false;
        }
    }

    // Load user progress
    loadProgress() {
        try {
            const data = localStorage.getItem(this.progressKey);
            if (data) {
                return JSON.parse(data);
            }
            return {
                currentConcept: 0,
                currentSubConcept: 0,
                completedConcepts: []
            };
        } catch (error) {
            console.error('Failed to load progress:', error);
            return {
                currentConcept: 0,
                currentSubConcept: 0,
                completedConcepts: []
            };
        }
    }

    // Save custom code snippets
    saveCodeSnippet(name, code, description = '', tags = []) {
        try {
            const snippets = this.loadCodeSnippets();
            const snippet = {
                id: Date.now().toString(),
                name,
                code,
                description,
                tags,
                created: new Date().toISOString(),
                modified: new Date().toISOString()
            };

            snippets.push(snippet);
            localStorage.setItem('python-learner-snippets', JSON.stringify(snippets));
            return snippet;
        } catch (error) {
            console.error('Failed to save code snippet:', error);
            return null;
        }
    }

    // Load code snippets
    loadCodeSnippets() {
        try {
            const data = localStorage.getItem('python-learner-snippets');
            if (data) {
                return JSON.parse(data);
            }
            return [];
        } catch (error) {
            console.error('Failed to load code snippets:', error);
            return [];
        }
    }

    // Delete code snippet
    deleteCodeSnippet(snippetId) {
        try {
            const snippets = this.loadCodeSnippets();
            const filtered = snippets.filter(snippet => snippet.id !== snippetId);
            localStorage.setItem('python-learner-snippets', JSON.stringify(filtered));
            return true;
        } catch (error) {
            console.error('Failed to delete code snippet:', error);
            return false;
        }
    }

    // Export all data
    exportAllData() {
        try {
            const data = {
                notebook: this.loadNotebook(),
                terminal: this.loadTerminalSession(),
                progress: this.loadProgress(),
                snippets: this.loadCodeSnippets(),
                exported: new Date().toISOString(),
                version: '1.0'
            };

            const blob = new Blob([JSON.stringify(data, null, 2)], {
                type: 'application/json'
            });

            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `python-learner-backup-${Date.now()}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            return true;
        } catch (error) {
            console.error('Failed to export data:', error);
            return false;
        }
    }

    // Import data
    importData(fileInput) {
        return new Promise((resolve, reject) => {
            const file = fileInput.files[0];
            if (!file) {
                reject(new Error('No file selected'));
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);

                    // Validate data structure
                    if (!data.version) {
                        reject(new Error('Invalid backup file format'));
                        return;
                    }

                    // Import notebook data
                    if (data.notebook) {
                        this.saveNotebook(data.notebook);
                    }

                    // Import terminal session
                    if (data.terminal) {
                        this.saveTerminalSession(data.terminal);
                    }

                    // Import progress
                    if (data.progress) {
                        this.saveProgress(
                            data.progress.currentConcept,
                            data.progress.currentSubConcept,
                            data.progress.completedConcepts
                        );
                    }

                    // Import snippets
                    if (data.snippets) {
                        localStorage.setItem('python-learner-snippets', JSON.stringify(data.snippets));
                    }

                    resolve(data);
                } catch (error) {
                    reject(new Error('Failed to parse backup file: ' + error.message));
                }
            };

            reader.onerror = () => {
                reject(new Error('Failed to read file'));
            };

            reader.readAsText(file);
        });
    }

    // Clear all data
    clearAllData() {
        try {
            localStorage.removeItem(this.notebookKey);
            localStorage.removeItem(this.terminalKey);
            localStorage.removeItem(this.progressKey);
            localStorage.removeItem('python-learner-snippets');
            return true;
        } catch (error) {
            console.error('Failed to clear data:', error);
            return false;
        }
    }

    // Get storage usage info
    getStorageInfo() {
        try {
            let totalSize = 0;
            const items = {
                notebook: 0,
                terminal: 0,
                progress: 0,
                snippets: 0
            };

            // Calculate sizes
            const notebookData = localStorage.getItem(this.notebookKey);
            if (notebookData) {
                items.notebook = new Blob([notebookData]).size;
                totalSize += items.notebook;
            }

            const terminalData = localStorage.getItem(this.terminalKey);
            if (terminalData) {
                items.terminal = new Blob([terminalData]).size;
                totalSize += items.terminal;
            }

            const progressData = localStorage.getItem(this.progressKey);
            if (progressData) {
                items.progress = new Blob([progressData]).size;
                totalSize += items.progress;
            }

            const snippetsData = localStorage.getItem('python-learner-snippets');
            if (snippetsData) {
                items.snippets = new Blob([snippetsData]).size;
                totalSize += items.snippets;
            }

            return {
                total: totalSize,
                items: items,
                totalFormatted: this.formatBytes(totalSize),
                itemsFormatted: {
                    notebook: this.formatBytes(items.notebook),
                    terminal: this.formatBytes(items.terminal),
                    progress: this.formatBytes(items.progress),
                    snippets: this.formatBytes(items.snippets)
                }
            };
        } catch (error) {
            console.error('Failed to get storage info:', error);
            return null;
        }
    }

    // Format bytes to human readable format
    formatBytes(bytes) {
        if (bytes === 0) return '0 Bytes';

        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    // Auto-save functionality
    enableAutoSave(notebookInterface, terminalInterface, interval = 30000) {
        setInterval(() => {
            try {
                // Auto-save notebook
                if (notebookInterface && notebookInterface.getCellsData) {
                    const notebookData = notebookInterface.getCellsData();
                    this.saveNotebook(notebookData);
                }

                // Auto-save terminal session
                if (terminalInterface && terminalInterface.getSessionData) {
                    const terminalData = terminalInterface.getSessionData();
                    this.saveTerminalSession(terminalData);
                }

                console.log('Auto-save completed at', new Date().toLocaleTimeString());
            } catch (error) {
                console.error('Auto-save failed:', error);
            }
        }, interval);
    }

    // Check if localStorage is available
    isStorageAvailable() {
        try {
            const test = '__storage_test__';
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (error) {
            return false;
        }
    }

    // Get recommended cleanup actions
    getCleanupRecommendations() {
        const info = this.getStorageInfo();
        const recommendations = [];

        if (info && info.total > 5 * 1024 * 1024) { // 5MB
            recommendations.push({
                type: 'size',
                message: 'Storage usage is high. Consider exporting and clearing old data.',
                action: 'export'
            });
        }

        const snippets = this.loadCodeSnippets();
        if (snippets.length > 50) {
            recommendations.push({
                type: 'snippets',
                message: 'You have many code snippets. Consider organizing or removing unused ones.',
                action: 'organize'
            });
        }

        return recommendations;
    }
}

export { StorageManager };