import { PythonEngine } from './python-engine.js';

class TerminalInterface {
    constructor(pythonEngine) {
        this.pythonEngine = pythonEngine;
        this.outputElement = document.getElementById('terminal-output');
        this.editorElement = document.getElementById('terminal-editor');
        this.history = [];
        this.historyIndex = -1;
        this.currentCommand = '';

        this.setupEventListeners();
        this.showWelcomeMessage();
        this.addInitialExamples();
    }

    setupEventListeners() {
        // Terminal controls
        document.getElementById('clear-terminal').addEventListener('click', () => this.clearTerminal());
        document.getElementById('reset-python').addEventListener('click', () => this.resetPython());
        document.getElementById('save-session').addEventListener('click', () => this.saveSession());

        // Editor event listeners
        this.editorElement.addEventListener('keydown', (e) => this.handleKeyDown(e));
        this.editorElement.addEventListener('input', (e) => this.handleInput(e));

        // Auto-resize textarea
        this.autoResizeEditor();
    }



    handleKeyDown(e) {
        switch (e.key) {
            case 'Enter':
                if (e.shiftKey) {
                    // Shift+Enter for new line
                    return;
                } else {
                    // Enter to execute
                    e.preventDefault();
                    this.executeCurrentCommand();
                }
                break;

            case 'ArrowUp':
                e.preventDefault();
                this.navigateHistory(-1);
                break;

            case 'ArrowDown':
                e.preventDefault();
                this.navigateHistory(1);
                break;

            case 'Tab':
                e.preventDefault();
                this.handleTabCompletion();
                break;

            case 'l':
                if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    this.clearTerminal();
                }
                break;

            case 'c':
                if (e.ctrlKey || e.metaKey) {
                    // Don't prevent default for Ctrl+C (copy)
                    if (window.getSelection().toString()) {
                        return;
                    }
                    // If no selection, interrupt current command
                    e.preventDefault();
                    this.interruptCommand();
                }
                break;
        }
    }

    handleInput(e) {
        this.currentCommand = e.target.value;
        this.autoResizeEditor();
    }

    autoResizeEditor() {
        this.editorElement.style.height = 'auto';
        const newHeight = Math.max(20, this.editorElement.scrollHeight);
        this.editorElement.style.height = newHeight + 'px';
    }

    async executeCurrentCommand() {
        const command = this.currentCommand.trim();

        if (!command) return;

        // Add to history
        this.history.push(command);
        this.historyIndex = this.history.length;

        // Display the command
        this.appendToOutput(`>>> ${command}`, 'command');

        // Clear the editor
        this.editorElement.value = '';
        this.currentCommand = '';
        this.autoResizeEditor();

        try {
            // Execute the command
            const result = await this.pythonEngine.executeCode(command);

            if (result.success) {
                if (result.output) {
                    this.appendToOutput(result.output, 'output');
                }
            } else {
                this.appendToOutput(result.error, 'error');
            }
        } catch (error) {
            this.appendToOutput(`Error: ${error.message}`, 'error');
        }

        // Scroll to bottom
        this.scrollToBottom();
    }

    appendToOutput(text, type = 'output') {
        const line = document.createElement('div');
        line.className = `terminal-line terminal-${type}`;

        // Format the text
        const formattedText = this.formatTerminalOutput(text);
        line.innerHTML = formattedText;

        this.outputElement.appendChild(line);
    }

    formatTerminalOutput(text) {
        if (!text) return '';

        // Escape HTML
        const escaped = text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');

        // Preserve whitespace and line breaks
        return escaped.replace(/\n/g, '<br>').replace(/ /g, '&nbsp;');
    }

    navigateHistory(direction) {
        if (this.history.length === 0) return;

        if (direction === -1) {
            // Go back in history
            if (this.historyIndex > 0) {
                this.historyIndex--;
            }
        } else {
            // Go forward in history
            if (this.historyIndex < this.history.length - 1) {
                this.historyIndex++;
            } else {
                // At the end, show current command
                this.historyIndex = this.history.length;
                this.editorElement.value = this.currentCommand;
                this.autoResizeEditor();
                return;
            }
        }

        // Update editor with history
        if (this.historyIndex >= 0 && this.historyIndex < this.history.length) {
            this.editorElement.value = this.history[this.historyIndex];
            this.autoResizeEditor();

            // Move cursor to end
            this.editorElement.setSelectionRange(
                this.editorElement.value.length,
                this.editorElement.value.length
            );
        }
    }

    handleTabCompletion() {
        // Basic tab completion for common Python keywords and built-ins
        const currentValue = this.editorElement.value;
        const cursorPosition = this.editorElement.selectionStart;

        // Find the word at cursor
        const beforeCursor = currentValue.substring(0, cursorPosition);
        const wordMatch = beforeCursor.match(/(\w+)$/);

        if (!wordMatch) return;

        const partialWord = wordMatch[1];
        const completions = this.getCompletions(partialWord);

        if (completions.length === 1) {
            // Single completion - auto-complete
            const completion = completions[0];
            const wordStart = cursorPosition - partialWord.length;
            const newValue =
                currentValue.substring(0, wordStart) +
                completion +
                currentValue.substring(cursorPosition);

            this.editorElement.value = newValue;
            this.editorElement.setSelectionRange(
                wordStart + completion.length,
                wordStart + completion.length
            );
            this.autoResizeEditor();
        } else if (completions.length > 1) {
            // Multiple completions - show them
            this.appendToOutput(`Completions: ${completions.join(', ')}`, 'info');
            this.scrollToBottom();
        }
    }

    getCompletions(partial) {
        const keywords = [
            'and', 'as', 'assert', 'break', 'class', 'continue', 'def', 'del',
            'elif', 'else', 'except', 'finally', 'for', 'from', 'global',
            'if', 'import', 'in', 'is', 'lambda', 'not', 'or', 'pass',
            'raise', 'return', 'try', 'while', 'with', 'yield'
        ];

        const builtins = [
            'abs', 'all', 'any', 'bin', 'bool', 'callable', 'chr', 'classmethod',
            'compile', 'complex', 'delattr', 'dict', 'dir', 'divmod', 'enumerate',
            'eval', 'exec', 'filter', 'float', 'format', 'frozenset', 'getattr',
            'globals', 'hasattr', 'hash', 'help', 'hex', 'id', 'input', 'int',
            'isinstance', 'issubclass', 'iter', 'len', 'list', 'locals', 'map',
            'max', 'memoryview', 'min', 'next', 'object', 'oct', 'open', 'ord',
            'pow', 'print', 'property', 'range', 'repr', 'reversed', 'round',
            'set', 'setattr', 'slice', 'sorted', 'staticmethod', 'str', 'sum',
            'super', 'tuple', 'type', 'vars', 'zip'
        ];

        const allCompletions = [...keywords, ...builtins];
        return allCompletions.filter(word =>
            word.toLowerCase().startsWith(partial.toLowerCase())
        );
    }

    interruptCommand() {
        this.editorElement.value = '';
        this.currentCommand = '';
        this.autoResizeEditor();
        this.appendToOutput('KeyboardInterrupt', 'error');
        this.scrollToBottom();
    }

    clearTerminal() {
        this.outputElement.innerHTML = '';
        this.showWelcomeMessage();
    }

    async resetPython() {
        this.appendToOutput('Resetting Python environment...', 'info');

        try {
            await this.pythonEngine.reset();
            this.appendToOutput('Python environment reset successfully.', 'success');
        } catch (error) {
            this.appendToOutput(`Failed to reset: ${error.message}`, 'error');
        }

        this.scrollToBottom();
    }

    saveSession() {
        const sessionData = {
            history: this.history,
            output: this.outputElement.innerHTML,
            timestamp: new Date().toISOString()
        };

        const blob = new Blob([JSON.stringify(sessionData, null, 2)], {
            type: 'application/json'
        });

        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `python-terminal-session-${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    loadSession(data) {
        if (data.history) {
            this.history = data.history;
            this.historyIndex = this.history.length;
        }

        if (data.output) {
            this.outputElement.innerHTML = data.output;
        }

        this.scrollToBottom();
    }

    showWelcomeMessage() {
        const welcomeMessage = `Python ${this.pythonEngine.isLoaded ? '3.13' : 'Loading...'} on Pyodide
Type "help()" for more information.

Available commands:
- Use Shift+Enter for multi-line input
- Use Tab for auto-completion
- Use Up/Down arrows for history
- Use Ctrl+L to clear terminal
- Use Ctrl+C to interrupt
`;

        this.appendToOutput(welcomeMessage, 'info');
    }

    addInitialExamples() {
        // Keep terminal clean - no prepopulated examples
        this.history = [];
        this.historyIndex = 0;
    }

    scrollToBottom() {
        const container = document.getElementById('terminal-container');
        container.scrollTop = container.scrollHeight;
    }

    focus() {
        this.editorElement.focus();
    }

    getSessionData() {
        return {
            history: this.history,
            output: this.outputElement.innerHTML
        };
    }
}

// Add terminal-specific CSS
const terminalCSS = `
.terminal-line {
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.9rem;
    line-height: 1.4;
    margin: 0;
    padding: 0.1rem 0;
}

.terminal-command {
    color: #ffffff;
    font-weight: bold;
}

.terminal-output {
    color: #e0e0e0;
}

.terminal-error {
    color: #ff6b6b;
}

.terminal-info {
    color: #4a8bc2;
}

.terminal-success {
    color: #28a745;
}

#terminal-editor::placeholder {
    color: #888;
    font-style: italic;
}
`;

// Inject terminal CSS
if (!document.getElementById('terminal-styles')) {
    const style = document.createElement('style');
    style.id = 'terminal-styles';
    style.textContent = terminalCSS;
    document.head.appendChild(style);
}

export { TerminalInterface };