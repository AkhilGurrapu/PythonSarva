class PythonEngine {
    constructor() {
        this.pyodide = null;
        this.isLoading = false;
        this.isLoaded = false;
        this.packages = new Set();
        this.executionCount = 0;
    }

    async initialize() {
        if (this.isLoaded) return this.pyodide;
        if (this.isLoading) {
            // Wait for existing load to complete
            while (this.isLoading) {
                await new Promise(resolve => setTimeout(resolve, 100));
            }
            return this.pyodide;
        }

        this.isLoading = true;
        this.showLoadingOverlay();

        try {
            // Load Pyodide
            this.pyodide = await loadPyodide({
                indexURL: "https://cdn.jsdelivr.net/pyodide/v0.28.2/full/",
                fullStdLib: false
            });

            // Install commonly used packages
            await this.installCommonPackages();

            // Set up Python environment
            await this.setupPythonEnvironment();

            this.isLoaded = true;
            this.hideLoadingOverlay();

            console.log("Python environment initialized successfully");
            return this.pyodide;

        } catch (error) {
            console.error("Failed to initialize Python:", error);
            this.hideLoadingOverlay();
            this.showError("Failed to load Python environment. Please refresh the page.");
            throw error;
        } finally {
            this.isLoading = false;
        }
    }

    async installCommonPackages() {
        const commonPackages = [
            'numpy',
            'pandas',
            'matplotlib',
            'micropip'
        ];

        try {
            await this.pyodide.loadPackage(commonPackages);
            commonPackages.forEach(pkg => this.packages.add(pkg));
            console.log("Common packages installed:", commonPackages);
        } catch (error) {
            console.warn("Some common packages failed to install:", error);
        }
    }

    async setupPythonEnvironment() {
        // Set up Python environment with helpful imports and settings
        await this.pyodide.runPython(`
import sys
import io
from contextlib import redirect_stdout, redirect_stderr
import traceback
import warnings
warnings.filterwarnings('ignore')

# Create a custom output capture system
class OutputCapture:
    def __init__(self):
        self.stdout = io.StringIO()
        self.stderr = io.StringIO()
        self.output = ""
        self.error = ""

    def capture(self, code):
        self.stdout = io.StringIO()
        self.stderr = io.StringIO()
        self.output = ""
        self.error = ""

        try:
            with redirect_stdout(self.stdout), redirect_stderr(self.stderr):
                # Handle both expressions and statements
                try:
                    # Try to evaluate as expression first
                    result = eval(code, globals())
                    if result is not None:
                        print(repr(result))
                except SyntaxError:
                    # If it's not an expression, execute as statement
                    exec(code, globals())

            self.output = self.stdout.getvalue()
            return True, self.output

        except Exception as e:
            self.error = traceback.format_exc()
            return False, self.error

# Global output capturer
_output_capture = OutputCapture()

def run_code(code):
    """Execute Python code and return result"""
    return _output_capture.capture(code)
        `);
    }

    async executeCode(code, options = {}) {
        if (!this.isLoaded) {
            await this.initialize();
        }

        this.executionCount += 1;
        const executionId = this.executionCount;

        try {
            // Clean the code
            const cleanCode = code.trim();
            if (!cleanCode) {
                return { success: true, output: '', error: null, executionId };
            }

            // Execute the code using our Python wrapper
            const result = await this.pyodide.runPython(`run_code(${JSON.stringify(cleanCode)})`);
            const [success, output] = result.toJs();

            if (success) {
                return {
                    success: true,
                    output: output || '',
                    error: null,
                    executionId
                };
            } else {
                return {
                    success: false,
                    output: '',
                    error: output,
                    executionId
                };
            }

        } catch (error) {
            console.error("Execution error:", error);
            return {
                success: false,
                output: '',
                error: error.message || 'Unknown execution error',
                executionId
            };
        }
    }

    async installPackage(packageName) {
        if (!this.isLoaded) {
            await this.initialize();
        }

        try {
            // Try installing with micropip first
            await this.pyodide.runPython(`
import micropip
await micropip.install("${packageName}")
            `);

            this.packages.add(packageName);
            return { success: true, message: `Package '${packageName}' installed successfully` };

        } catch (error) {
            try {
                // Fallback to loadPackage for built-in packages
                await this.pyodide.loadPackage([packageName]);
                this.packages.add(packageName);
                return { success: true, message: `Package '${packageName}' loaded successfully` };

            } catch (fallbackError) {
                console.error(`Failed to install package ${packageName}:`, fallbackError);
                return {
                    success: false,
                    message: `Failed to install '${packageName}': ${fallbackError.message}`
                };
            }
        }
    }

    getInstalledPackages() {
        return Array.from(this.packages);
    }

    async getAvailablePackages() {
        // Return a list of commonly available packages
        return [
            'numpy', 'pandas', 'matplotlib', 'scipy', 'scikit-learn',
            'requests', 'beautifulsoup4', 'pillow', 'sympy', 'networkx',
            'bokeh', 'altair', 'plotly', 'seaborn', 'statsmodels',
            'pytz', 'dateutil', 'regex', 'pyyaml', 'toml', 'lxml'
        ];
    }

    async reset() {
        if (this.pyodide) {
            try {
                // Reset the Python environment by clearing user variables
                await this.pyodide.runPython(`
# Clear all user-defined variables but preserve system components
preserved_names = {
    'run_code', '_output_capture', 'OutputCapture', 'io', 'sys',
    'traceback', 'warnings', 'redirect_stdout', 'redirect_stderr', 'contextlib'
}

# Get current globals before clearing
current_globals = dict(globals())

# Clear user variables
for name in list(current_globals.keys()):
    if not name.startswith('__') and name not in preserved_names:
        try:
            del globals()[name]
        except:
            pass

# Ensure all essential components are still available
try:
    # Test if our components still work
    if '_output_capture' in globals() and hasattr(_output_capture, 'capture'):
        # Reset the output capture
        _output_capture.stdout = io.StringIO()
        _output_capture.stderr = io.StringIO() 
        _output_capture.output = ""
        _output_capture.error = ""
    else:
        # Recreate if something went wrong
        raise Exception("OutputCapture missing")
        
except:
    # Reinitialize everything if there was an issue
    import sys
    import io
    from contextlib import redirect_stdout, redirect_stderr
    import traceback
    import warnings
    
    class OutputCapture:
        def __init__(self):
            self.stdout = io.StringIO()
            self.stderr = io.StringIO()
            self.output = ""
            self.error = ""

        def capture(self, code):
            self.stdout = io.StringIO()
            self.stderr = io.StringIO()
            self.output = ""
            self.error = ""

            try:
                with redirect_stdout(self.stdout), redirect_stderr(self.stderr):
                    try:
                        result = eval(code, globals())
                        if result is not None:
                            print(repr(result))
                    except SyntaxError:
                        exec(code, globals())

                self.output = self.stdout.getvalue()
                return True, self.output

            except Exception as e:
                self.error = traceback.format_exc()
                return False, self.error

    _output_capture = OutputCapture()

    def run_code(code):
        return _output_capture.capture(code)

print("Python environment reset successfully")
                `);
            } catch (error) {
                console.error('Reset failed:', error);
                // If reset fails completely, reinitialize the entire Python environment
                try {
                    await this.setupPythonEnvironment();
                } catch (reinitError) {
                    console.error('Reinit failed:', reinitError);
                }
            }
        }
        this.executionCount = 0;
    }

    showLoadingOverlay() {
        const overlay = document.getElementById('loading-overlay');
        if (overlay) {
            overlay.classList.remove('hidden');
        }
    }

    hideLoadingOverlay() {
        const overlay = document.getElementById('loading-overlay');
        if (overlay) {
            overlay.classList.add('hidden');
        }
    }

    showError(message) {
        // Create a simple error display
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #4a0e0e;
            color: #ff6b6b;
            padding: 1rem 2rem;
            border-radius: 8px;
            border: 1px solid #ff6b6b;
            z-index: 10000;
            font-family: monospace;
        `;
        errorDiv.textContent = message;
        document.body.appendChild(errorDiv);

        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.parentNode.removeChild(errorDiv);
            }
        }, 5000);
    }

    // Export notebook content for Google Colab
    generateColabNotebook(cells) {
        const notebook = {
            "nbformat": 4,
            "nbformat_minor": 0,
            "metadata": {
                "colab": {
                    "provenance": []
                },
                "kernelspec": {
                    "name": "python3",
                    "display_name": "Python 3"
                },
                "language_info": {
                    "name": "python"
                }
            },
            "cells": cells.map(cell => ({
                "cell_type": "code",
                "source": [cell.code],
                "metadata": {},
                "execution_count": null,
                "outputs": []
            }))
        };

        return JSON.stringify(notebook, null, 2);
    }
}

// Export for use in other modules
export { PythonEngine };