import { PythonEngine } from './python-engine.js';

class NotebookInterface {
    constructor(pythonEngine) {
        console.log('🏗️ NotebookInterface constructor called');
        this.pythonEngine = pythonEngine;
        this.cells = [];
        this.cellCounter = 0;
        this.container = document.getElementById('notebook-container');
        this.hasAddedDefaultCell = false; // Track if default cell was already added
        this.setupEventListeners();
        console.log('📱 Event listeners set up');
        // Don't add initial cell here - let the loading process handle it
        console.log('✅ NotebookInterface constructor completed');
    }

    setupEventListeners() {
        document.getElementById('add-cell').addEventListener('click', () => this.addCell());
        document.getElementById('run-all').addEventListener('click', () => this.runAllCells());
        document.getElementById('clear-output').addEventListener('click', () => this.clearAllOutput());
        document.getElementById('export-notebook').addEventListener('click', () => this.exportNotebook());
        document.getElementById('open-colab').addEventListener('click', () => this.openInColab());
    }


    addInitialCell() {
        console.log('🚀 addInitialCell called');
        // Clear any existing cells first
        this.clearAllCells();

        // Load examples from current concept
        this.loadConceptExamples();
        console.log('✅ addInitialCell completed');
    }

    clearAllCells() {
        console.log('🗑️ Clearing all cells. Current count:', this.cells.length);
        this.cells = [];
        this.cellCounter = 0;
        this.hasAddedDefaultCell = false; // Reset the flag when clearing
        this.rerenderNotebook();
        console.log('✅ All cells cleared. New count:', this.cells.length);
    }

    loadConceptExamples() {
        console.log('🎯 loadConceptExamples called');
        try {
            // Get current concept from the global scope (defined in concepts.js)
            console.log('📊 Global state check:', {
                hasPythonConcepts: !!window.pythonConcepts,
                currentConceptIndex: window.currentConceptIndex,
                currentSubConceptIndex: window.currentSubConceptIndex
            });

            if (window.pythonConcepts && typeof window.currentConceptIndex !== 'undefined' && typeof window.currentSubConceptIndex !== 'undefined') {
                const currentConcept = window.pythonConcepts[window.currentConceptIndex];
                console.log('📖 Current concept:', currentConcept?.title);
                
                if (currentConcept && currentConcept.subConcepts && currentConcept.subConcepts[window.currentSubConceptIndex]) {
                    const currentSubConcept = currentConcept.subConcepts[window.currentSubConceptIndex];

                    console.log('📝 Loading examples for:', currentSubConcept.title);
                    console.log('📋 Has exampleCode:', !!currentSubConcept.exampleCode);
                    console.log('📋 ExampleCode length:', currentSubConcept.exampleCode?.length);

                    if (currentSubConcept.exampleCode) {
                        // Try to split the example code by triple newlines first
                        const codeBlocks = currentSubConcept.exampleCode.split('\n\n\n').filter(block => block.trim());
                        console.log('🔀 Code blocks found:', codeBlocks.length);
                        
                        if (codeBlocks.length > 1) {
                            // Multiple blocks found - add each as separate cells
                            console.log('➕ Adding multiple blocks as separate cells');
                            codeBlocks.forEach((block, index) => {
                                console.log(`➕ Adding block ${index + 1}:`, block.substring(0, 50) + '...');
                                this.addCell(block.trim());
                            });
                        } else {
                            // Single block - add as one cell
                            console.log('➕ Adding single cell with example code');
                            this.addCell(currentSubConcept.exampleCode.trim());
                        }
                    } else {
                        console.log('⚠️ No example code found, using fallback');
                        this.addDefaultWelcomeCell();
                    }
                } else {
                    console.log('⚠️ No subconcept found, using fallback');
                    this.addDefaultWelcomeCell();
                }
            } else {
                console.log('⚠️ Global variables not available, using fallback');
                this.addDefaultWelcomeCell();
            }
        } catch (error) {
            console.warn('❌ Failed to load concept examples:', error);
            this.addDefaultWelcomeCell();
        }
        console.log('✅ loadConceptExamples completed. Total cells:', this.cells.length);
    }

    addDefaultWelcomeCell() {
        console.log('🏠 addDefaultWelcomeCell called');
        if (this.hasAddedDefaultCell) {
            console.log('⚠️ Default cell already added, skipping');
            return;
        }
        console.log('📊 Current cells count before adding default:', this.cells.length);
        this.hasAddedDefaultCell = true;
        this.addCell(`# 🐍 Welcome to Python Learner!
# This interactive notebook will populate with examples from the current concept
# Click "Run" or press Ctrl+Enter to execute cells

print("Hello, Python World! 🌍")
print("Navigate through concepts on the left to see relevant examples here!")`);
        console.log('📊 Current cells count after adding default:', this.cells.length);
    }

    // Method to refresh notebook when concept changes
    refreshWithCurrentConcept() {
        console.log('🔄 refreshWithCurrentConcept called');
        console.log('📝 Current cells before clear:', this.cells.length);
        this.clearAllCells(); // Clear existing cells first
        console.log('🗑️ Cells after clear:', this.cells.length);
        this.loadConceptExamples();
        console.log('➕ Cells after loading examples:', this.cells.length);
    }


    addCell(initialCode = '') {
        const cellId = `cell-${++this.cellCounter}`;
        const cell = {
            id: cellId,
            code: initialCode,
            output: '',
            error: null,
            isRunning: false,
            executionCount: null
        };

        this.cells.push(cell);
        const cellElement = this.renderCell(cell);
        
        // Auto-scroll to the newly created cell
        setTimeout(() => {
            this.scrollToNewCell(cellElement);
            // Focus on the new cell's textarea
            const textarea = cellElement.querySelector('.cell-editor');
            if (textarea) {
                textarea.focus();
            }
        }, 100);
        
        return cell;
    }

    renderCell(cell) {
        const cellElement = document.createElement('div');
        cellElement.className = 'notebook-cell';
        cellElement.dataset.cellId = cell.id;

        cellElement.innerHTML = `
            <div class="cell-controls">
                <button class="cell-btn run-cell" title="Run Cell (Ctrl+Enter)">
                    <i class="fas fa-play"></i> Run
                </button>
                <button class="cell-btn delete-cell" title="Delete Cell (Ctrl+D)">
                    <i class="fas fa-trash"></i>
                </button>
                <button class="cell-btn move-up" title="Move Up">
                    <i class="fas fa-arrow-up"></i>
                </button>
                <button class="cell-btn move-down" title="Move Down">
                    <i class="fas fa-arrow-down"></i>
                </button>
            </div>
            <div class="cell-header">
                <span class="cell-label">In [${cell.executionCount || ' '}]:</span>
                <div class="execution-status"></div>
            </div>
            <div class="cell-input">
                <textarea class="cell-editor" id="editor-${cell.id}" name="code-${cell.id}" placeholder="# Write your Python code here...">${cell.code}</textarea>
            </div>
            <div class="cell-output-container" style="display: ${cell.output || cell.error ? 'block' : 'none'}">
                <div class="cell-output-label">Out [${cell.executionCount || ' '}]:</div>
                <div class="cell-output ${cell.error ? 'error' : ''}">${this.formatOutput(cell.output || cell.error || '')}</div>
            </div>
        `;

        this.container.appendChild(cellElement);
        this.setupCellEventListeners(cellElement, cell);
        this.setupCodeEditor(cellElement, cell);

        return cellElement;
    }

    setupCellEventListeners(cellElement, cell) {
        // Run cell
        cellElement.querySelector('.run-cell').addEventListener('click', () => {
            this.runCell(cell);
        });

        // Delete cell
        cellElement.querySelector('.delete-cell').addEventListener('click', () => {
            this.deleteCell(cell);
        });

        // Move cell up
        cellElement.querySelector('.move-up').addEventListener('click', () => {
            this.moveCellUp(cell);
        });

        // Move cell down
        cellElement.querySelector('.move-down').addEventListener('click', () => {
            this.moveCellDown(cell);
        });

        // Auto-resize textarea
        const textarea = cellElement.querySelector('.cell-editor');
        textarea.addEventListener('input', (e) => {
            cell.code = e.target.value;
            this.autoResizeTextarea(e.target);
        });

        // Keyboard shortcuts
        textarea.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.runCell(cell);
                } else if (e.key === 'd') {
                    e.preventDefault();
                    this.deleteCell(cell);
                }
            } else if (e.shiftKey && e.key === 'Enter') {
                e.preventDefault();
                this.runCell(cell);
                this.addCell();
            }
        });

        // Initial resize
        this.autoResizeTextarea(textarea);
    }

    setupCodeEditor(cellElement, cell) {
        const textarea = cellElement.querySelector('.cell-editor');

        // Basic syntax highlighting could be added here
        // For now, we'll use a simple textarea with Python-friendly features

        textarea.addEventListener('keydown', (e) => {
            // Tab for indentation
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = textarea.selectionStart;
                const end = textarea.selectionEnd;
                const value = textarea.value;

                if (e.shiftKey) {
                    // Shift+Tab for dedent
                    const lineStart = value.lastIndexOf('\n', start - 1) + 1;
                    const lineText = value.substring(lineStart, start);
                    if (lineText.startsWith('    ')) {
                        textarea.value = value.substring(0, lineStart) +
                                       lineText.substring(4) +
                                       value.substring(start);
                        textarea.selectionStart = textarea.selectionEnd = start - 4;
                    }
                } else {
                    // Tab for indent
                    textarea.value = value.substring(0, start) + '    ' + value.substring(end);
                    textarea.selectionStart = textarea.selectionEnd = start + 4;
                }

                cell.code = textarea.value;
                this.autoResizeTextarea(textarea);
            }
        });
    }

    autoResizeTextarea(textarea) {
        textarea.style.height = 'auto';
        const newHeight = Math.max(100, Math.min(textarea.scrollHeight, 500));
        textarea.style.height = newHeight + 'px';

        // Add scrollbar if content exceeds max height
        if (textarea.scrollHeight > 500) {
            textarea.style.overflowY = 'auto';
        } else {
            textarea.style.overflowY = 'hidden';
        }
    }

    async runCell(cell) {
        if (cell.isRunning) return;

        const cellElement = document.querySelector(`[data-cell-id="${cell.id}"]`);
        if (!cellElement) {
            console.error(`❌ Cell element not found for cell ID: ${cell.id}`);
            return;
        }
        
        const statusElement = cellElement.querySelector('.execution-status');
        const outputContainer = cellElement.querySelector('.cell-output-container');
        const outputElement = cellElement.querySelector('.cell-output');
        const labelElement = cellElement.querySelector('.cell-label');
        const outputLabelElement = cellElement.querySelector('.cell-output-label');

        try {
            cell.isRunning = true;
            cellElement.classList.add('executing');
            cellElement.classList.remove('success', 'error');
            statusElement.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Running...';
            statusElement.className = 'execution-status running';

            const result = await this.pythonEngine.executeCode(cell.code);

            cell.isRunning = false;
            cell.executionCount = result.executionId;
            cell.output = result.output;
            cell.error = result.error;

            // Update cell labels
            labelElement.textContent = `In [${cell.executionCount}]:`;
            outputLabelElement.textContent = `Out [${cell.executionCount}]:`;

            // Update output
            cellElement.classList.remove('executing');
            if (result.success) {
                cellElement.classList.add('success');
                outputElement.className = 'cell-output';
                outputElement.innerHTML = this.formatOutput(result.output);
                statusElement.innerHTML = '<i class="fas fa-check"></i> Completed';
                statusElement.className = 'execution-status success';

                // Show output container only if there's actual output
                if (result.output && result.output.trim()) {
                    outputContainer.style.display = 'block';
                } else {
                    outputContainer.style.display = 'none';
                }
            } else {
                cellElement.classList.add('error');
                outputElement.className = 'cell-output error';
                outputElement.innerHTML = this.formatOutput(result.error);
                statusElement.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Error';
                statusElement.className = 'execution-status error';
                outputContainer.style.display = 'block';
            }

            // Auto-scroll to show the executed cell output
            setTimeout(() => {
                // Get a fresh reference to ensure we have the correct cell element
                const targetCellElement = document.querySelector(`[data-cell-id="${cell.id}"]`);
                if (targetCellElement) {
                    this.scrollToOutput(targetCellElement);
                }
            }, 300); // Slightly longer delay to ensure content is fully rendered

            // Clear status after 4 seconds
            setTimeout(() => {
                statusElement.innerHTML = '';
                statusElement.className = 'execution-status';
                cellElement.classList.remove('success', 'error');
            }, 4000);

        } catch (error) {
            cell.isRunning = false;
            cell.error = error.message;
            cellElement.classList.remove('executing');
            cellElement.classList.add('error');
            outputElement.className = 'cell-output error';
            outputElement.innerHTML = this.formatOutput(error.message);
            statusElement.innerHTML = '<i class="fas fa-times"></i> Error';
            statusElement.className = 'execution-status error';
            outputContainer.style.display = 'block';
            
            // Auto-scroll to show the error output
            setTimeout(() => {
                // Get a fresh reference to ensure we have the correct cell element
                const targetCellElement = document.querySelector(`[data-cell-id="${cell.id}"]`);
                if (targetCellElement) {
                    this.scrollToOutput(targetCellElement);
                }
            }, 300);
        }
    }

    async runAllCells() {
        for (const cell of this.cells) {
            await this.runCell(cell);
            // Small delay between cells
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }

    scrollToOutput(cellElement) {
        const container = this.container; // #notebook-container
        const outputContainer = cellElement.querySelector('.cell-output-container');
        
        // Get the target element to scroll to
        let targetElement;
        if (outputContainer && outputContainer.style.display !== 'none') {
            // Scroll to the output container if it has content
            targetElement = outputContainer;
        } else {
            // Otherwise scroll to the cell itself
            targetElement = cellElement;
        }
        
        // Simple approach: just scroll so the target element is visible
        // This is more reliable than complex centering calculations
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest', // Don't scroll if already visible
            inline: 'nearest'
        });
        
        console.log(`✅ scrollToOutput: Scrolled to element using scrollIntoView`);
    }

    scrollToNewCell(cellElement) {
        const container = this.container; // #notebook-container
        
        // Calculate the position to scroll to the new cell
        const containerHeight = container.clientHeight;
        const cellTop = cellElement.offsetTop;
        const cellHeight = cellElement.offsetHeight;
        
        // Calculate scroll position to show the new cell at the bottom of the viewport
        const idealScrollTop = cellTop + cellHeight - containerHeight + 20; // 20px padding
        
        // Smooth scroll to the calculated position
        container.scrollTo({
            top: Math.max(0, idealScrollTop),
            behavior: 'smooth'
        });
        
        console.log(`Scrolling to new cell: cellTop: ${cellTop}, cellHeight: ${cellHeight}, scrollTo: ${Math.max(0, idealScrollTop)}`);
    }

    deleteCell(cell) {
        if (this.cells.length <= 1) return; // Keep at least one cell

        const cellIndex = this.cells.indexOf(cell);
        if (cellIndex > -1) {
            this.cells.splice(cellIndex, 1);
            const cellElement = document.querySelector(`[data-cell-id="${cell.id}"]`);
            if (cellElement) {
                cellElement.remove();
            }
        }
    }

    moveCellUp(cell) {
        const cellIndex = this.cells.indexOf(cell);
        if (cellIndex > 0) {
            // Swap with previous cell
            [this.cells[cellIndex - 1], this.cells[cellIndex]] =
            [this.cells[cellIndex], this.cells[cellIndex - 1]];
            this.rerenderNotebook();
        }
    }

    moveCellDown(cell) {
        const cellIndex = this.cells.indexOf(cell);
        if (cellIndex < this.cells.length - 1) {
            // Swap with next cell
            [this.cells[cellIndex], this.cells[cellIndex + 1]] =
            [this.cells[cellIndex + 1], this.cells[cellIndex]];
            this.rerenderNotebook();
        }
    }

    rerenderNotebook() {
        this.container.innerHTML = '';
        this.cells.forEach(cell => this.renderCell(cell));
    }

    clearAllOutput() {
        this.cells.forEach(cell => {
            cell.output = '';
            cell.error = null;
            cell.executionCount = null;

            const cellElement = document.querySelector(`[data-cell-id="${cell.id}"]`);
            if (cellElement) {
                const outputContainer = cellElement.querySelector('.cell-output-container');
                outputContainer.style.display = 'none';

                const labelElement = cellElement.querySelector('.cell-label');
                const outputLabelElement = cellElement.querySelector('.cell-output-label');
                labelElement.textContent = 'In []:';
                outputLabelElement.textContent = 'Out []:';
            }
        });
    }

    formatOutput(output) {
        if (!output) return '';

        // Escape HTML and preserve formatting
        const escaped = output
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');

        return `<pre>${escaped}</pre>`;
    }

    exportNotebook() {
        const notebookData = {
            cells: this.cells.map(cell => ({
                code: cell.code,
                output: cell.output,
                error: cell.error
            })),
            timestamp: new Date().toISOString()
        };

        const blob = new Blob([JSON.stringify(notebookData, null, 2)], {
            type: 'application/json'
        });

        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `python-notebook-${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    openInColab() {
        const notebookData = this.pythonEngine.generateColabNotebook(this.cells);

        // Create a blob URL for the notebook
        const blob = new Blob([notebookData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        // Create a download link for the notebook
        const link = document.createElement('a');
        link.href = url;
        link.download = `python-notebook-${Date.now()}.ipynb`;

        // Show instructions to user
        const instructions = `
            <h3>Open in Google Colab</h3>
            <p>To open this notebook in Google Colab:</p>
            <ol>
                <li>Click the download button below to save the notebook file</li>
                <li>Go to <a href="https://colab.research.google.com" target="_blank">Google Colab</a></li>
                <li>Click "Upload" and select the downloaded .ipynb file</li>
                <li>Your notebook will open in Colab with all your code!</li>
            </ol>
            <div style="margin-top: 1rem;">
                <button id="download-colab-notebook" style="
                    background: #f9ab00;
                    color: #333;
                    border: none;
                    padding: 0.75rem 1.5rem;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: bold;
                ">
                    <i class="fas fa-download"></i> Download Notebook for Colab
                </button>
            </div>
            <p style="margin-top: 1rem; font-size: 0.9rem; color: #ccc;">
                Alternatively, you can also copy your code manually from the cells below and paste it into Colab.
            </p>
        `;

        this.showModal('Export to Google Colab', instructions);

        // Add event listener to download button
        setTimeout(() => {
            const downloadBtn = document.getElementById('download-colab-notebook');
            if (downloadBtn) {
                downloadBtn.addEventListener('click', () => {
                    link.click();
                    this.closeModal();
                    URL.revokeObjectURL(url);
                });
            }
        }, 100);
    }

    showModal(title, content) {
        let modal = document.getElementById('notebook-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'notebook-modal';
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

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal();
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
            " onclick="window.closeNotebookModal()">×</button>
            <h2 style="margin-top: 0; color: #ffd700;">${title}</h2>
            ${content}
        `;

        modal.style.display = 'flex';
    }

    closeModal() {
        const modal = document.getElementById('notebook-modal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    loadNotebook(data) {
        console.log('📖 loadNotebook called with data:', !!data);
        this.cells = [];
        this.container.innerHTML = '';

        if (data.cells && data.cells.length > 0) {
            console.log('📋 Loading', data.cells.length, 'saved cells');
            data.cells.forEach(cellData => {
                const cell = this.addCell(cellData.code);
                cell.output = cellData.output || '';
                cell.error = cellData.error || null;
            });
        } else {
            console.log('📝 No saved cells found - notebook will be populated by concept loading');
            // Don't add initial cell here - let the concept system handle it
        }
        console.log('✅ loadNotebook completed. Total cells:', this.cells.length);
    }

    getCellsData() {
        return this.cells.map(cell => ({
            code: cell.code,
            output: cell.output,
            error: cell.error
        }));
    }
}

export { NotebookInterface };