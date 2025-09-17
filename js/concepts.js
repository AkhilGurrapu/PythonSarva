const pythonConcepts = [
    {
        title: "Python Basics",
        level: "Basic",
        description: "Start your Python journey with fundamental concepts and syntax",
        estimatedTime: "2-3 hours",
        subConcepts: [
            {
                title: "What is Python & Installation",
                content: `
                    <h3>Welcome to Python! 🐍</h3>
                    <p>Python is a powerful, high-level programming language created by Guido van Rossum in 1991.
                    It's designed to be readable, simple, and versatile.</p>

                    <h4>Why Choose Python?</h4>
                    <ul>
                        <li><strong>Beginner-Friendly:</strong> Clear, readable syntax that resembles English</li>
                        <li><strong>Versatile:</strong> Web development, data science, AI, automation, game development</li>
                        <li><strong>Huge Ecosystem:</strong> 400,000+ packages on PyPI</li>
                        <li><strong>Active Community:</strong> Millions of developers worldwide</li>
                        <li><strong>High Demand:</strong> One of the most sought-after programming languages</li>
                    </ul>

                    <h4>Python Applications:</h4>
                    <ul>
                        <li>🌐 <strong>Web Development:</strong> Django, Flask, FastAPI</li>
                        <li>📊 <strong>Data Science:</strong> NumPy, Pandas, Matplotlib</li>
                        <li>🤖 <strong>AI/ML:</strong> TensorFlow, PyTorch, scikit-learn</li>
                        <li>🔧 <strong>Automation:</strong> Scripts, testing, DevOps</li>
                        <li>🎮 <strong>Game Development:</strong> Pygame, Panda3D</li>
                    </ul>
                `,
                exampleCode: `# Your first Python program!
print("Hello, Python World! 🐍")
print("Welcome to your programming journey!")

# Let's explore what makes Python special
print("\\n=== Python Features Demo ===")

# Clean, readable syntax
message = "Python is awesome!"
print(f"Message: {message}")

# Dynamic typing - no need to declare variable types
name = "Alice"
age = 25
height = 5.6
is_programmer = True

print(f"\\nName: {name}")
print(f"Age: {age}")
print(f"Height: {height}ft")
print(f"Is programmer: {is_programmer}")

# Python's philosophy
import this  # Try this in the terminal!`
            },
            {
                title: "Python Syntax & REPL",
                content: `
                    <h3>Python Syntax Fundamentals</h3>
                    <p>Python's syntax is designed to be intuitive and readable. Let's master the basics!</p>

                    <h4>🔥 Key Syntax Rules:</h4>
                    <ul>
                        <li><strong>Indentation Matters:</strong> Python uses indentation (4 spaces) instead of braces {}</li>
                        <li><strong>Case Sensitive:</strong> 'Variable' and 'variable' are different</li>
                        <li><strong>No Semicolons:</strong> Line breaks end statements</li>
                        <li><strong>Comments:</strong> Use # for single-line, ''' ''' for multi-line</li>
                    </ul>

                    <h4>REPL (Read-Eval-Print Loop):</h4>
                    <p>Python's interactive shell lets you test code immediately!</p>

                    <h4>Python Keywords (Reserved Words):</h4>
                    <code>and, as, assert, break, class, continue, def, del, elif, else, except,
                    finally, for, from, global, if, import, in, is, lambda, nonlocal, not,
                    or, pass, raise, return, try, while, with, yield</code>
                `,
                exampleCode: `# 1. BASIC SYNTAX EXAMPLES

# Variables (no declaration needed!)
student_name = "John Doe"
student_age = 20
student_gpa = 3.8

# Python is case-sensitive
Name = "Different variable"
name = "Another different variable"

print(f"student_name: {student_name}")
print(f"Name: {Name}")
print(f"name: {name}")

# 2. INDENTATION EXAMPLE
print("\\n=== Indentation Demo ===")
if student_gpa > 3.5:
    print("Great job!")  # 4 spaces indentation
    if student_gpa > 3.8:
        print("Dean's list!")  # 8 spaces for nested block
    print("Keep it up!")
else:
    print("Study harder!")

# 3. MULTIPLE ASSIGNMENT
x, y, z = 10, 20, 30
print(f"\\nMultiple assignment: x={x}, y={y}, z={z}")

# Chain assignment
a = b = c = 100
print(f"Chain assignment: a={a}, b={b}, c={c}")

# 4. LINE CONTINUATION
total = 1 + 2 + 3 + \\
        4 + 5 + 6
print(f"\\nLine continuation result: {total}")

# 5. COMMENTS
# Single line comment

"""
Multi-line comment
Can span multiple lines
Great for documentation
"""

print("\\n🎉 Syntax basics completed!")`
            },
            {
                title: "Comments & Documentation",
                content: `
                    <h3>Comments & Documentation Best Practices</h3>
                    <p>Good documentation makes your code readable and maintainable. Learn Python's commenting conventions!</p>

                    <h4>Types of Comments:</h4>
                    <ul>
                        <li><strong>Single-line:</strong> # This is a comment</li>
                        <li><strong>Multi-line:</strong> """ or ''' for multiple lines</li>
                        <li><strong>Docstrings:</strong> Function/class documentation</li>
                        <li><strong>Inline:</strong> Comments on the same line as code</li>
                    </ul>

                    <h4>PEP 8 Comment Guidelines:</h4>
                    <ul>
                        <li>Comments should be complete sentences</li>
                        <li>Use clear, concise language</li>
                        <li>Update comments when code changes</li>
                        <li>Avoid obvious comments</li>
                    </ul>

                    <h4>Docstring Conventions:</h4>
                    <p>Follow PEP 257 for docstring standards</p>
                `,
                exampleCode: `# 1. SINGLE-LINE COMMENTS
# This is a single-line comment
print("Hello World")  # Inline comment

# TODO: Add error handling here
# FIXME: This logic needs revision
# NOTE: This is important information

# 2. MULTI-LINE COMMENTS
"""
This is a multi-line comment.
It can span multiple lines and is often used
for detailed explanations or temporarily
disabling code blocks.
"""

# 3. DOCSTRINGS (Function Documentation)
def calculate_area(length, width):
    """
    Calculate the area of a rectangle.

    Args:
        length (float): The length of the rectangle
        width (float): The width of the rectangle

    Returns:
        float: The area of the rectangle

    Example:
        >>> calculate_area(5, 3)
        15.0
    """
    return length * width

# 4. CLASS DOCSTRINGS
class Student:
    """
    A class to represent a student.

    Attributes:
        name (str): The student's name
        age (int): The student's age
        grades (list): List of student's grades
    """

    def __init__(self, name, age):
        """Initialize a new student."""
        self.name = name
        self.age = age
        self.grades = []

# 5. MODULE DOCSTRING (at the top of file)
"""
This module contains examples of Python commenting best practices.

It demonstrates various types of comments including:
- Single-line comments
- Multi-line comments
- Docstrings for functions and classes
- Inline documentation
"""

# Testing our function
area = calculate_area(10, 5)
print(f"Area of rectangle: {area}")

# Access docstring
print(f"\\nFunction docstring:")
print(calculate_area.__doc__)`
            },
            {
                title: "Variables & Naming Conventions",
                content: `
                    <h3>Variables & Naming Conventions</h3>
                    <p>Learn how to create and name variables following Python best practices (PEP 8).</p>

                    <h4>Variable Naming Rules:</h4>
                    <ul>
                        <li><strong>Must start with:</strong> Letter (a-z, A-Z) or underscore (_)</li>
                        <li><strong>Can contain:</strong> Letters, numbers, underscores</li>
                        <li><strong>Cannot start with:</strong> Numbers</li>
                        <li><strong>Case sensitive:</strong> age and Age are different</li>
                        <li><strong>Cannot use:</strong> Python keywords</li>
                    </ul>

                    <h4>PEP 8 Naming Conventions:</h4>
                    <ul>
                        <li><strong>Variables/Functions:</strong> snake_case (user_name, get_data)</li>
                        <li><strong>Constants:</strong> UPPER_CASE (MAX_SIZE, PI)</li>
                        <li><strong>Classes:</strong> PascalCase (MyClass, StudentRecord)</li>
                        <li><strong>Private:</strong> _leading_underscore</li>
                        <li><strong>Special:</strong> __dunder__ (double underscore)</li>
                    </ul>

                    <h4>Variable Types:</h4>
                    <p>Python uses dynamic typing - variables can hold different types!</p>
                `,
                exampleCode: `# 1. VALID VARIABLE NAMES
user_name = "Alice"          # snake_case (recommended)
age = 25                     # simple lowercase
_private_var = "hidden"      # private variable
counter1 = 0                 # numbers allowed (not at start)
MAX_CONNECTIONS = 100        # constant
is_valid = True              # boolean flag

print(f"User: {user_name}, Age: {age}")

# 2. INVALID VARIABLE NAMES (commented out - would cause errors)
# 2nd_name = "Bob"       # Can't start with number
# user-name = "Charlie"  # Can't use hyphens
# class = "Python"       # Can't use keywords
# @symbol = "value"      # Can't use special symbols

# 3. CASE SENSITIVITY DEMO
name = "lowercase"
Name = "Capitalized"
NAME = "UPPERCASE"

print(f"\\n=== Case Sensitivity ===")
print(f"name: {name}")
print(f"Name: {Name}")
print(f"NAME: {NAME}")

# 4. MULTIPLE VARIABLE ASSIGNMENT
# Tuple unpacking
first_name, last_name = "John", "Doe"
x, y, z = 1, 2, 3

# Same value to multiple variables
a = b = c = 10

print(f"\\n=== Multiple Assignment ===")
print(f"Name: {first_name} {last_name}")
print(f"Coordinates: x={x}, y={y}, z={z}")
print(f"Same values: a={a}, b={b}, c={c}")

# 5. VARIABLE SWAPPING (Python magic!)
a, b = 100, 200
print(f"\\nBefore swap: a={a}, b={b}")

a, b = b, a  # Swap without temporary variable!
print(f"After swap: a={a}, b={b}")

# 6. DYNAMIC TYPING DEMO
dynamic_var = "I'm a string"
print(f"\\nVariable as string: {dynamic_var} (type: {type(dynamic_var).__name__})")

dynamic_var = 42
print(f"Same variable as int: {dynamic_var} (type: {type(dynamic_var).__name__})")

dynamic_var = [1, 2, 3]
print(f"Same variable as list: {dynamic_var} (type: {type(dynamic_var).__name__})")

# 7. NAMING BEST PRACTICES
# Good names (descriptive)
student_count = 30
total_price = 99.99
is_authenticated = False
user_email_address = "user@example.com"

# Avoid (not descriptive)
# n = 30          # What does 'n' represent?
# tp = 99.99      # What is 'tp'?
# flag = False    # What kind of flag?

print(f"\\n✅ Good variable naming practices completed!")`
            }
        ]
    },
    {
        title: "Data Types & Variables",
        level: "Basic",
        description: "Master Python's built-in data types and learn how to work with variables effectively",
        estimatedTime: "3-4 hours",
        subConcepts: [
            {
                title: "Numbers (int, float, complex)",
                content: `
                    <h3>Python Numeric Data Types 📊</h3>
                    <p>Python supports three main numeric types, each designed for different mathematical operations.</p>

                    <h4>📈 Numeric Types:</h4>
                    <ul>
                        <li><strong>int:</strong> Whole numbers, unlimited precision (1, 42, -100)</li>
                        <li><strong>float:</strong> Decimal numbers, IEEE 754 double precision (3.14, -2.5)</li>
                        <li><strong>complex:</strong> Complex numbers with real and imaginary parts (3+4j)</li>
                    </ul>

                    <h4>🔢 Number Systems:</h4>
                    <ul>
                        <li><strong>Binary:</strong> 0b1010 (base 2)</li>
                        <li><strong>Octal:</strong> 0o755 (base 8)</li>
                        <li><strong>Hexadecimal:</strong> 0xFF (base 16)</li>
                    </ul>

                    <h4>⚡ Built-in Functions:</h4>
                    <p><code>abs(), round(), pow(), min(), max(), sum(), divmod()</code></p>
                `,
                exampleCode: `# 1. INTEGER EXAMPLES
# Basic integers
positive_int = 42
negative_int = -17
zero = 0
big_number = 123456789012345678901234567890  # Unlimited precision!

print(f"Positive: {positive_int}")
print(f"Negative: {negative_int}")
print(f"Big number: {big_number}")

# Different number systems
binary = 0b1010      # Binary (10 in decimal)
octal = 0o755        # Octal (493 in decimal)
hexadecimal = 0xFF   # Hexadecimal (255 in decimal)

print(f"\\nNumber systems:")
print(f"Binary 0b1010 = {binary}")
print(f"Octal 0o755 = {octal}")
print(f"Hex 0xFF = {hexadecimal}")

# 2. FLOAT EXAMPLES
pi = 3.14159265359
scientific = 1.5e-4  # Scientific notation: 0.00015
infinity = float('inf')
not_a_number = float('nan')

print(f"\\nFloats:")
print(f"Pi: {pi}")
print(f"Scientific: {scientific}")
print(f"Infinity: {infinity}")
print(f"NaN: {not_a_number}")

# 3. COMPLEX NUMBERS
complex1 = 3 + 4j
complex2 = complex(1, 2)  # Alternative creation
real_part = complex1.real
imag_part = complex1.imag

print(f"\\nComplex numbers:")
print(f"Complex1: {complex1}")
print(f"Complex2: {complex2}")
print(f"Real part: {real_part}")
print(f"Imaginary part: {imag_part}")

# 4. MATHEMATICAL OPERATIONS
a, b = 15, 4
print(f"\\nMath operations with {a} and {b}:")
print(f"Addition: {a} + {b} = {a + b}")
print(f"Subtraction: {a} - {b} = {a - b}")
print(f"Multiplication: {a} * {b} = {a * b}")
print(f"Division: {a} / {b} = {a / b}")
print(f"Floor division: {a} // {b} = {a // b}")
print(f"Modulus: {a} % {b} = {a % b}")
print(f"Exponentiation: {a} ** {b} = {a ** b}")

# 5. BUILT-IN FUNCTIONS
numbers = [3.7, -2.1, 5.9, -1.2, 8.5]
print(f"\\nNumbers: {numbers}")
print(f"Absolute values: {[abs(x) for x in numbers]}")
print(f"Rounded: {[round(x) for x in numbers]}")
print(f"Sum: {sum(numbers)}")
print(f"Min: {min(numbers)}")
print(f"Max: {max(numbers)}")

# Divmod - division and remainder in one go
quotient, remainder = divmod(17, 5)
print(f"\\n17 ÷ 5 = {quotient} remainder {remainder}")`
            },
            {
                title: "Strings & String Methods",
                content: `
                    <h3>Python Strings - Text Processing Powerhouse! 📝</h3>
                    <p>Strings are immutable sequences of Unicode characters. Master string manipulation for text processing!</p>

                    <h4>🎯 String Creation:</h4>
                    <ul>
                        <li><strong>Single quotes:</strong> 'Hello'</li>
                        <li><strong>Double quotes:</strong> "World"</li>
                        <li><strong>Triple quotes:</strong> '''Multi-line''' or """Multi-line"""</li>
                        <li><strong>Raw strings:</strong> r"C:\\Users\\name" (no escape processing)</li>
                    </ul>

                    <h4>🔧 Essential String Methods:</h4>
                    <ul>
                        <li><code>.upper(), .lower(), .title(), .capitalize()</code> - Case conversion</li>
                        <li><code>.strip(), .lstrip(), .rstrip()</code> - Whitespace removal</li>
                        <li><code>.replace(), .translate()</code> - Text replacement</li>
                        <li><code>.split(), .join()</code> - String splitting and joining</li>
                        <li><code>.find(), .index(), .count()</code> - Searching</li>
                        <li><code>.startswith(), .endswith()</code> - Pattern matching</li>
                    </ul>

                    <h4>💫 String Formatting:</h4>
                    <p>f-strings (Python 3.6+), .format(), and % formatting</p>
                `,
                exampleCode: `# 1. STRING CREATION METHODS
single_quote = 'Hello, Python!'
double_quote = "Welcome to programming!"
triple_quote = """This is a
multi-line string that
can span several lines"""

raw_string = r"C:\\Users\\Documents\\file.txt"  # Raw string
unicode_string = "Hello 🐍 Python! αβγ"

print("String Creation:")
print(f"Single: {single_quote}")
print(f"Double: {double_quote}")
print(f"Triple: {triple_quote}")
print(f"Raw: {raw_string}")
print(f"Unicode: {unicode_string}")

# 2. CASE CONVERSION METHODS
text = "python programming"
print(f"\\nCase Conversion:")
print(f"Original: '{text}'")
print(f"Upper: '{text.upper()}'")
print(f"Lower: '{text.lower()}'")
print(f"Title: '{text.title()}'")
print(f"Capitalize: '{text.capitalize()}'")
print(f"Swapcase: '{text.swapcase()}'")

# 3. WHITESPACE AND CLEANING
messy_text = "   Python Programming   \\n\\t"
print(f"\\nWhitespace Handling:")
print(f"Original: '{messy_text}'")
print(f"Strip: '{messy_text.strip()}'")
print(f"Left strip: '{messy_text.lstrip()}'")
print(f"Right strip: '{messy_text.rstrip()}'")

# 4. STRING SEARCHING AND CHECKING
sentence = "Python is amazing for data science and web development"
print(f"\\nString Analysis:")
print(f"Length: {len(sentence)}")
print(f"Count 'a': {sentence.count('a')}")
print(f"Find 'data': {sentence.find('data')}")
print(f"Starts with 'Python': {sentence.startswith('Python')}")
print(f"Ends with 'development': {sentence.endswith('development')}")
print(f"Is alphabetic: {'Python'.isalpha()}")
print(f"Is digit: {'123'.isdigit()}")
print(f"Is alphanumeric: {'Python3'.isalnum()}")

# 5. STRING SPLITTING AND JOINING
data = "apple,banana,orange,grape"
fruits = data.split(',')
print(f"\\nSplit and Join:")
print(f"Original: {data}")
print(f"Split: {fruits}")
print(f"Join with ' | ': {' | '.join(fruits)}")

# Split on whitespace and lines
multiline = "Line 1\\nLine 2\\nLine 3"
lines = multiline.splitlines()
print(f"Lines: {lines}")

# 6. STRING REPLACEMENT
original = "I love Java programming"
replaced = original.replace("Java", "Python")
print(f"\\nReplacement:")
print(f"Original: {original}")
print(f"Replaced: {replaced}")

# Multiple replacements
text_to_fix = "Hello World World"
fixed = text_to_fix.replace("World", "Python", 1)  # Replace only first occurrence
print(f"Fixed (first only): {fixed}")

# 7. STRING FORMATTING (Modern Python)
name = "Alice"
age = 28
salary = 75000.50

# f-strings (recommended)
print(f"\\nString Formatting:")
print(f"Hi, I'm {name}, {age} years old, earning \\$" + "{salary:,.2f}")

# Format with padding and alignment
print(f"Name: {name:>10}")  # Right aligned, width 10
print(f"Age:  {age:>10}")
print(f"Salary: {salary:>10.2f}")

# .format() method
print("Hi, I'm {}, {} years old".format(name, age))
print("Hi, I'm {name}, {age} years old".format(name=name, age=age))

# 8. STRING INDEXING AND SLICING
word = "Python"
print(f"\\nString Indexing:")
print(f"Word: {word}")
print(f"First char: {word[0]}")
print(f"Last char: {word[-1]}")
print(f"First 3: {word[:3]}")
print(f"Last 3: {word[-3:]}")
print(f"Every 2nd: {word[::2]}")
print(f"Reversed: {word[::-1]}")

# 9. ESCAPE CHARACTERS
escaped = "Line 1\\nLine 2\\tTabbed\\\\Backslash\\"Quote\\""
print(f"\\nEscape characters:")
print(escaped)

print("\\n🎉 String mastery completed!")`
            },
            {
                title: "Booleans & None",
                content: `
                    <h3>Boolean Logic & None Type 🔄</h3>
                    <p>Master Boolean operations and Python's special None type for logical programming!</p>

                    <h4>✅ Boolean Basics:</h4>
                    <ul>
                        <li><strong>True:</strong> Represents logical truth</li>
                        <li><strong>False:</strong> Represents logical falsehood</li>
                        <li><strong>Case sensitive:</strong> Must be capitalized</li>
                    </ul>

                    <h4>🔍 Truthiness in Python:</h4>
                    <ul>
                        <li><strong>Falsy values:</strong> False, None, 0, 0.0, "", [], {}, set()</li>
                        <li><strong>Truthy values:</strong> Everything else!</li>
                    </ul>

                    <h4>🧠 Logical Operators:</h4>
                    <ul>
                        <li><strong>and:</strong> True if both operands are True</li>
                        <li><strong>or:</strong> True if at least one operand is True</li>
                        <li><strong>not:</strong> Inverts the boolean value</li>
                    </ul>

                    <h4>❓ None Type:</h4>
                    <p>Represents the absence of a value or null state</p>
                `,
                exampleCode: `# 1. BASIC BOOLEAN VALUES
is_python_awesome = True
is_difficult = False

print(f"Python is awesome: {is_python_awesome}")
print(f"Python is difficult: {is_difficult}")
print(f"Type of True: {type(True)}")

# 2. BOOLEAN OPERATIONS
a, b = True, False
print(f"\\nBoolean Operations:")
print(f"a = {a}, b = {b}")
print(f"a and b = {a and b}")
print(f"a or b = {a or b}")
print(f"not a = {not a}")
print(f"not b = {not b}")

# 3. TRUTHINESS TESTING
print(f"\\nTruthiness Testing:")

# Falsy values
falsy_values = [False, None, 0, 0.0, "", [], {}, set()]
for value in falsy_values:
    print(f"{repr(value):>10} is {'truthy' if value else 'falsy'}")

# Truthy values
truthy_values = [True, 1, "hello", [1, 2], {"key": "value"}]
for value in truthy_values:
    print(f"{repr(value):>15} is {'truthy' if value else 'falsy'}")

# 4. LOGICAL OPERATORS WITH DIFFERENT TYPES
print(f"\\nLogical Operators with Mixed Types:")
print(f"5 and 'hello' = {5 and 'hello'}")  # Returns 'hello' (last truthy)
print(f"0 and 'hello' = {0 and 'hello'}")  # Returns 0 (first falsy)
print(f"0 or 'hello' = {0 or 'hello'}")    # Returns 'hello' (first truthy)
print(f"'' or [] or 'default' = {'' or [] or 'default'}")

# 5. NONE TYPE
result = None
user_input = None

print(f"\\nNone Type:")
print(f"result = {result}")
print(f"Type of None: {type(None)}")
print(f"result is None: {result is None}")
print(f"result == None: {result == None}")  # Use 'is' instead!

# Function returning None
def greet():
    print("Hello!")
    # No return statement = returns None

returned_value = greet()
print(f"Function returned: {returned_value}")

# 6. PRACTICAL BOOLEAN USAGE
age = 20
has_license = True
has_car = False

can_drive = age >= 18 and has_license
should_uber = not has_car or not can_drive

print(f"\\nPractical Example:")
print(f"Age: {age}, Has license: {has_license}, Has car: {has_car}")
print(f"Can drive: {can_drive}")
print(f"Should use Uber: {should_uber}")

# 7. BOOLEAN CONVERSION
print(f"\\nBoolean Conversion:")
print(f"bool(1): {bool(1)}")
print(f"bool(0): {bool(0)}")
print(f"bool('hello'): {bool('hello')}")
print(f"bool(''): {bool('')}")
print(f"bool([]): {bool([])}")
print(f"bool([1, 2]): {bool([1, 2])}")

# 8. CHAINED COMPARISONS
x = 5
print(f"\\nChained Comparisons:")
print(f"1 < {x} < 10: {1 < x < 10}")
print(f"10 < {x} < 20: {10 < x < 20}")
print(f"{x} == 5 == 5: {x == 5 == 5}")

# 9. IDENTITY VS EQUALITY
list1 = [1, 2, 3]
list2 = [1, 2, 3]
list3 = list1

print(f"\\nIdentity vs Equality:")
print(f"list1 == list2: {list1 == list2}")  # Equal values
print(f"list1 is list2: {list1 is list2}")  # Different objects
print(f"list1 is list3: {list1 is list3}")  # Same object

# None should always use 'is'
value = None
print(f"value is None: {value is None}")     # Correct
print(f"value == None: {value == None}")     # Works but not recommended

print("\\n🎯 Boolean and None mastery completed!")`
            },
            {
                title: "Type Conversion & Checking",
                content: `
                    <h3>Type Conversion & Type Checking 🔄</h3>
                    <p>Learn to convert between data types and check types dynamically in Python!</p>

                    <h4>🔄 Type Conversion Functions:</h4>
                    <ul>
                        <li><strong>int():</strong> Convert to integer</li>
                        <li><strong>float():</strong> Convert to floating point</li>
                        <li><strong>str():</strong> Convert to string</li>
                        <li><strong>bool():</strong> Convert to boolean</li>
                        <li><strong>list(), tuple(), set():</strong> Convert to collections</li>
                    </ul>

                    <h4>🔍 Type Checking:</h4>
                    <ul>
                        <li><strong>type():</strong> Get exact type of object</li>
                        <li><strong>isinstance():</strong> Check if object is instance of type</li>
                        <li><strong>hasattr():</strong> Check if object has attribute</li>
                    </ul>

                    <h4>⚠️ Conversion Errors:</h4>
                    <p>Invalid conversions raise ValueError or TypeError</p>
                `,
                exampleCode: `# 1. BASIC TYPE CONVERSIONS
print("=== Basic Type Conversions ===")

# String to numbers
str_int = "42"
str_float = "3.14"
str_bool = "True"

print(f"String '{str_int}' to int: {int(str_int)}")
print(f"String '{str_float}' to float: {float(str_float)}")
print(f"String to bool: {bool(str_bool)}")  # Non-empty string = True

# Numbers to string
num_int = 100
num_float = 99.99

print(f"Int {num_int} to string: '{str(num_int)}'")
print(f"Float {num_float} to string: '{str(num_float)}'")

# Boolean conversions
print(f"Int 1 to bool: {bool(1)}")
print(f"Int 0 to bool: {bool(0)}")
print(f"Bool True to int: {int(True)}")
print(f"Bool False to int: {int(False)}")

# 2. ADVANCED CONVERSIONS
print(f"\\n=== Advanced Conversions ===")

# List/Tuple/Set conversions
original_list = [1, 2, 3, 2, 1]
converted_tuple = tuple(original_list)
converted_set = set(original_list)  # Removes duplicates
back_to_list = list(converted_set)

print(f"List: {original_list}")
print(f"To tuple: {converted_tuple}")
print(f"To set: {converted_set}")
print(f"Back to list: {back_to_list}")

# String to list
text = "hello"
char_list = list(text)
print(f"String '{text}' to list: {char_list}")

# Join list back to string
joined = ''.join(char_list)
print(f"List back to string: '{joined}'")

# 3. TYPE CHECKING
print(f"\\n=== Type Checking ===")

values = [42, 3.14, "hello", True, [1, 2, 3], None]

for value in values:
    print(f"{str(value):>10} | type: {type(value).__name__:>10} | isinstance int: {isinstance(value, int)}")

# Multiple type checking
def describe_type(value):
    if isinstance(value, bool):  # Check bool before int (bool is subclass of int)
        return "Boolean"
    elif isinstance(value, int):
        return "Integer"
    elif isinstance(value, float):
        return "Float"
    elif isinstance(value, str):
        return "String"
    elif isinstance(value, (list, tuple)):  # Check multiple types
        return "Sequence"
    else:
        return "Other"

print(f"\\nType Description:")
for value in values:
    print(f"{str(value):>10} -> {describe_type(value)}")

# 4. SAFE CONVERSIONS WITH ERROR HANDLING
print(f"\\n=== Safe Conversions ===")

def safe_int_conversion(value):
    try:
        return int(value)
    except (ValueError, TypeError):
        return None

test_values = ["42", "3.14", "hello", None, [1, 2]]
for value in test_values:
    result = safe_int_conversion(value)
    print(f"Convert {repr(value):>10} to int: {result}")

# 5. NUMERIC BASE CONVERSIONS
print(f"\\n=== Base Conversions ===")

number = 255

# Convert to different bases
binary = bin(number)
octal = oct(number)
hexadecimal = hex(number)

print(f"Decimal {number}:")
print(f"  Binary: {binary}")
print(f"  Octal: {octal}")
print(f"  Hexadecimal: {hexadecimal}")

# Convert back to decimal
print(f"\\nBack to decimal:")
print(f"  Binary '0b11111111': {int('0b11111111', 2)}")
print(f"  Octal '0o377': {int('0o377', 8)}")
print(f"  Hex '0xff': {int('0xff', 16)}")

# 6. CHECKING ATTRIBUTES AND CAPABILITIES
print(f"\\n=== Attribute Checking ===")

class MyClass:
    def __init__(self):
        self.attribute = "I exist!"

    def method(self):
        return "I'm a method!"

obj = MyClass()
test_str = "hello"

print(f"Object has 'attribute': {hasattr(obj, 'attribute')}")
print(f"Object has 'nonexistent': {hasattr(obj, 'nonexistent')}")
print(f"String has 'upper': {hasattr(test_str, 'upper')}")
print(f"String has 'nonexistent': {hasattr(test_str, 'nonexistent')}")

# 7. PRACTICAL EXAMPLE: USER INPUT VALIDATION
print(f"\\n=== Input Validation Example ===")

def get_age_from_input(user_input):
    """Convert user input to valid age or return error message."""
    try:
        age = int(user_input)
        if 0 <= age <= 150:
            return age, "Valid"
        else:
            return None, "Age must be between 0 and 150"
    except ValueError:
        return None, f"'{user_input}' is not a valid number"

# Test different inputs
test_inputs = ["25", "abc", "150", "-5", "200", "25.5"]
for input_val in test_inputs:
    age, message = get_age_from_input(input_val)
    print(f"Input '{input_val}': Age={age}, Message='{message}'")

print("\\n🔄 Type conversion mastery completed!")`
            }
        ]
    },
    {
        title: "Operators",
        level: "Basic",
        description: "Master all Python operators for mathematical, logical, and comparison operations",
        estimatedTime: "2-3 hours",
        subConcepts: [
            {
                title: "Arithmetic Operators",
                content: `
                    <h3>Arithmetic Operators in Python 🧮</h3>
                    <p>Python provides a comprehensive set of arithmetic operators for mathematical calculations.</p>

                    <h4>🔢 Basic Arithmetic Operators:</h4>
                    <ul>
                        <li><strong>+</strong> Addition</li>
                        <li><strong>-</strong> Subtraction</li>
                        <li><strong>*</strong> Multiplication</li>
                        <li><strong>/</strong> Division (float result)</li>
                        <li><strong>//</strong> Floor Division (integer result)</li>
                        <li><strong>%</strong> Modulus (remainder)</li>
                        <li><strong>**</strong> Exponentiation (power)</li>
                    </ul>

                    <h4>✨ Special Features:</h4>
                    <ul>
                        <li>Works with different numeric types</li>
                        <li>String concatenation with +</li>
                        <li>String/list repetition with *</li>
                        <li>Operator precedence follows mathematical rules</li>
                    </ul>
                `,
                exampleCode: `# 1. BASIC ARITHMETIC OPERATIONS
a, b = 17, 5
print(f"Working with a = {a} and b = {b}")
print(f"Addition: {a} + {b} = {a + b}")
print(f"Subtraction: {a} - {b} = {a - b}")
print(f"Multiplication: {a} * {b} = {a * b}")
print(f"Division: {a} / {b} = {a / b}")
print(f"Floor Division: {a} // {b} = {a // b}")
print(f"Modulus: {a} % {b} = {a % b}")
print(f"Exponentiation: {a} ** {b} = {a ** b}")

# 2. MIXED TYPE OPERATIONS
print(f"\\n=== Mixed Type Operations ===")
int_num = 10
float_num = 3.5

print(f"int + float: {int_num} + {float_num} = {int_num + float_num}")
print(f"int / int: 10 / 3 = {10 / 3}")
print(f"int // int: 10 // 3 = {10 // 3}")

# 3. STRING OPERATIONS
print(f"\\n=== String Operations ===")
str1 = "Hello"
str2 = "World"

print(f"Concatenation: '{str1}' + ' ' + '{str2}' = '{str1 + ' ' + str2}'")
print(f"Repetition: '{str1}' * 3 = '{str1 * 3}'")

# List operations
list1 = [1, 2, 3]
list2 = [4, 5, 6]
print(f"List concatenation: {list1} + {list2} = {list1 + list2}")
print(f"List repetition: {list1} * 2 = {list1 * 2}")

# 4. OPERATOR PRECEDENCE
print(f"\\n=== Operator Precedence ===")
result1 = 2 + 3 * 4       # Multiplication first
result2 = (2 + 3) * 4     # Parentheses first
result3 = 2 ** 3 * 4      # Exponentiation first
result4 = 2 * 3 ** 2      # Exponentiation before multiplication

print(f"2 + 3 * 4 = {result1}")
print(f"(2 + 3) * 4 = {result2}")
print(f"2 ** 3 * 4 = {result3}")
print(f"2 * 3 ** 2 = {result4}")

# 5. PRACTICAL EXAMPLES
print(f"\\n=== Practical Examples ===")

# Calculate compound interest
principal = 1000
rate = 0.05  # 5%
time = 3

compound_interest = principal * (1 + rate) ** time
print(f"Compound Interest: \\$${'{'}principal{'}'} at ${'{'} rate*100 {'}'}% for ${'{'}time{'}'} years = \\$" + "${'{'} compound_interest:.2f {'}'}")

# Calculate circle area and circumference
import math
radius = 5
area = math.pi * radius ** 2
circumference = 2 * math.pi * radius

print(f"Circle with radius {radius}:")
print(f"  Area: {area:.2f}")
print(f"  Circumference: {circumference:.2f}")

# Time conversion
total_seconds = 7265
hours = total_seconds // 3600
minutes = (total_seconds % 3600) // 60
seconds = total_seconds % 60

print(f"\\nTime conversion: {total_seconds} seconds")
print(f"  = {hours} hours, {minutes} minutes, {seconds} seconds")

# 6. MODULUS PRACTICAL USES
print(f"\\n=== Modulus Practical Uses ===")

# Check if number is even or odd
numbers = [12, 15, 20, 33, 44]
for num in numbers:
    if num % 2 == 0:
        print(f"{num} is even")
    else:
        print(f"{num} is odd")

# Check divisibility
number = 24
for divisor in [2, 3, 4, 5, 6]:
    if number % divisor == 0:
        print(f"{number} is divisible by {divisor}")

print("\\n🧮 Arithmetic operators mastered!")`
            },
            {
                title: "Comparison Operators",
                content: `
                    <h3>Comparison Operators 📊</h3>
                    <p>Compare values and create conditional logic with Python's comparison operators.</p>

                    <h4>⚖️ Comparison Operators:</h4>
                    <ul>
                        <li><strong>==</strong> Equal to</li>
                        <li><strong>!=</strong> Not equal to</li>
                        <li><strong>&lt;</strong> Less than</li>
                        <li><strong>&gt;</strong> Greater than</li>
                        <li><strong>&lt;=</strong> Less than or equal to</li>
                        <li><strong>&gt;=</strong> Greater than or equal to</li>
                    </ul>

                    <h4>🔍 Identity Operators:</h4>
                    <ul>
                        <li><strong>is</strong> Same object identity</li>
                        <li><strong>is not</strong> Different object identity</li>
                    </ul>

                    <h4>📝 Membership Operators:</h4>
                    <ul>
                        <li><strong>in</strong> Item is in sequence</li>
                        <li><strong>not in</strong> Item is not in sequence</li>
                    </ul>
                `,
                exampleCode: `# 1. BASIC COMPARISONS
print("=== Basic Comparisons ===")
a, b = 10, 20

print(f"a = {a}, b = {b}")
print(f"a == b: {a == b}")
print(f"a != b: {a != b}")
print(f"a < b: {a < b}")
print(f"a > b: {a > b}")
print(f"a <= b: {a <= b}")
print(f"a >= b: {a >= b}")

# 2. STRING COMPARISONS
print(f"\\n=== String Comparisons ===")
str1, str2 = "apple", "banana"

print(f"'{str1}' == '{str2}': {str1 == str2}")
print(f"'{str1}' < '{str2}': {str1 < str2}")  # Lexicographic order
print(f"'{str1}' > '{str2}': {str1 > str2}")

# Case sensitivity
print(f"'Apple' == 'apple': {'Apple' == 'apple'}")
print(f"'Apple'.lower() == 'apple': {'Apple'.lower() == 'apple'}")

# 3. CHAINED COMPARISONS
print(f"\\n=== Chained Comparisons ===")
x = 15

print(f"x = {x}")
print(f"10 < x < 20: {10 < x < 20}")
print(f"10 < x < 15: {10 < x < 15}")
print(f"15 <= x <= 25: {15 <= x <= 25}")

# Multiple comparisons
age = 25
print(f"\\nAge eligibility (age = {age}):")
print(f"Can vote (18 <= age): {18 <= age}")
print(f"Adult (18 <= age < 65): {18 <= age < 65}")
print(f"Senior discount (age >= 65): {age >= 65}")

# 4. IDENTITY OPERATORS (is vs ==)
print(f"\\n=== Identity vs Equality ===")

# Numbers (small integers are cached)
a = 100
b = 100
c = 1000
d = 1000

print(f"a = {a}, b = {b}")
print(f"a == b: {a == b}")
print(f"a is b: {a is b}")  # Same object for small numbers

print(f"\\nc = {c}, d = {d}")
print(f"c == d: {c == d}")
print(f"c is d: {c is d}")  # Different objects for large numbers

# Lists
list1 = [1, 2, 3]
list2 = [1, 2, 3]
list3 = list1

print(f"\\nlist1 = {list1}")
print(f"list2 = {list2}")
print(f"list1 == list2: {list1 == list2}")  # Same values
print(f"list1 is list2: {list1 is list2}")  # Different objects
print(f"list1 is list3: {list1 is list3}")  # Same object

# None should always use 'is'
value = None
print(f"\\nvalue = {value}")
print(f"value is None: {value is None}")     # Correct way
print(f"value == None: {value == None}")     # Works but not recommended

# 5. MEMBERSHIP OPERATORS
print(f"\\n=== Membership Operators ===")

# Lists
fruits = ['apple', 'banana', 'orange']
print(f"Fruits: {fruits}")
print(f"'apple' in fruits: {'apple' in fruits}")
print(f"'grape' in fruits: {'grape' in fruits}")
print(f"'grape' not in fruits: {'grape' not in fruits}")

# Strings
sentence = "Python is awesome"
print(f"\\nSentence: '{sentence}'")
print(f"'Python' in sentence: {'Python' in sentence}")
print(f"'Java' in sentence: {'Java' in sentence}")
print(f"'is' in sentence: {'is' in sentence}")

# Dictionaries (checks keys)
person = {'name': 'Alice', 'age': 30}
print(f"\\nPerson: {person}")
print(f"'name' in person: {'name' in person}")
print(f"'email' in person: {'email' in person}")
print(f"'Alice' in person: {'Alice' in person}")  # Not in keys!

# Check values in dictionary
print(f"'Alice' in person.values(): {'Alice' in person.values()}")

# 6. PRACTICAL COMPARISON EXAMPLES
print(f"\\n=== Practical Examples ===")

# Grade calculator
def get_letter_grade(score):
    if score >= 90:
        return 'A'
    elif score >= 80:
        return 'B'
    elif score >= 70:
        return 'C'
    elif score >= 60:
        return 'D'
    else:
        return 'F'

scores = [95, 87, 76, 65, 45]
for score in scores:
    grade = get_letter_grade(score)
    print(f"Score {score}: Grade {grade}")

# Password validation
def validate_password(password):
    conditions = {
        'length': len(password) >= 8,
        'has_upper': any(c.isupper() for c in password),
        'has_lower': any(c.islower() for c in password),
        'has_digit': any(c.isdigit() for c in password),
        'has_special': any(c in '!@#$%^&*()' for c in password)
    }

    print(f"\\nPassword '{password}' validation:")
    for condition, passed in conditions.items():
        status = "✅" if passed else "❌"
        print(f"  {condition}: {status}")

    return all(conditions.values())

passwords = ["password", "Password1", "MySecure123!", "abc"]
for pwd in passwords:
    is_valid = validate_password(pwd)
    print(f"  Overall: {'Valid' if is_valid else 'Invalid'}\\n")

print("📊 Comparison operators mastered!")`
            },
            {
                title: "Logical Operators",
                content: `
                    <h3>Logical Operators & Boolean Logic 🧠</h3>
                    <p>Master logical operations to create complex conditional statements and decision-making logic.</p>

                    <h4>🔗 Logical Operators:</h4>
                    <ul>
                        <li><strong>and</strong> - True if both operands are True</li>
                        <li><strong>or</strong> - True if at least one operand is True</li>
                        <li><strong>not</strong> - Inverts the boolean value</li>
                    </ul>

                    <h4>⚡ Short-Circuit Evaluation:</h4>
                    <ul>
                        <li><strong>and</strong> - Stops at first False</li>
                        <li><strong>or</strong> - Stops at first True</li>
                        <li>Returns the actual value, not always True/False</li>
                    </ul>

                    <h4>📊 Truth Tables:</h4>
                    <p>Understanding all possible combinations of logical operations</p>
                `,
                exampleCode: `# 1. BASIC LOGICAL OPERATIONS
print("=== Basic Logical Operations ===")

# Truth table for AND
print("AND Truth Table:")
print(f"True and True = {True and True}")
print(f"True and False = {True and False}")
print(f"False and True = {False and True}")
print(f"False and False = {False and False}")

print(f"\\nOR Truth Table:")
print(f"True or True = {True or True}")
print(f"True or False = {True or False}")
print(f"False or True = {False or True}")
print(f"False or False = {False or False}")

print(f"\\nNOT Operation:")
print(f"not True = {not True}")
print(f"not False = {not False}")

# 2. PRACTICAL LOGICAL OPERATIONS
print(f"\\n=== Practical Examples ===")

age = 25
has_license = True
has_insurance = True
has_car = False

# Complex conditions
can_drive_legally = age >= 18 and has_license and has_insurance
can_rent_car = age >= 21 and has_license
needs_uber = not has_car or not can_drive_legally

print(f"Driver Profile: Age {age}")
print(f"  Has license: {has_license}")
print(f"  Has insurance: {has_insurance}")
print(f"  Has car: {has_car}")
print(f"\\nDecisions:")
print(f"  Can drive legally: {can_drive_legally}")
print(f"  Can rent car: {can_rent_car}")
print(f"  Needs Uber: {needs_uber}")

# 3. SHORT-CIRCUIT EVALUATION
print(f"\\n=== Short-Circuit Evaluation ===")

def expensive_function():
    print("  -> Expensive function called!")
    return True

def cheap_function():
    print("  -> Cheap function called!")
    return False

print("Testing AND with False first (short-circuit):")
result = False and expensive_function()  # expensive_function not called
print(f"Result: {result}")

print(f"\\nTesting AND with True first (both called):")
result = True and expensive_function()
print(f"Result: {result}")

print(f"\\nTesting OR with True first (short-circuit):")
result = True or expensive_function()  # expensive_function not called
print(f"Result: {result}")

# 4. LOGICAL OPERATORS WITH NON-BOOLEAN VALUES
print(f"\\n=== Logical Operators with Non-Boolean Values ===")

# 'and' returns first falsy value or last value
print("AND with non-boolean values:")
print(f"5 and 'hello': {5 and 'hello'}")      # Returns 'hello'
print(f"0 and 'hello': {0 and 'hello'}")      # Returns 0 (falsy)
print(f"'' and 'hello': {'' and 'hello'}")    # Returns '' (falsy)
print(f"'hi' and 42: {'hi' and 42}")          # Returns 42

# 'or' returns first truthy value or last value
print(f"\\nOR with non-boolean values:")
print(f"5 or 'hello': {5 or 'hello'}")        # Returns 5 (first truthy)
print(f"0 or 'hello': {0 or 'hello'}")        # Returns 'hello' (first truthy)
print(f"'' or []: {'' or []}")                # Returns [] (last value)
print(f"None or 0 or 'default': {None or 0 or 'default'}")  # Returns 'default'

# 5. COMPLEX LOGICAL EXPRESSIONS
print(f"\\n=== Complex Logical Expressions ===")

# Weather decision system
temperature = 75
is_sunny = True
is_weekend = True
has_plans = False

perfect_day = (
    temperature > 70 and
    temperature < 85 and
    is_sunny and
    (is_weekend or not has_plans)
)

print(f"Weather conditions:")
print(f"  Temperature: {temperature}°F")
print(f"  Sunny: {is_sunny}")
print(f"  Weekend: {is_weekend}")
print(f"  Has plans: {has_plans}")
print(f"  Perfect day for outdoor activities: {perfect_day}")

# 6. OPERATOR PRECEDENCE
print(f"\\n=== Operator Precedence ===")

# not has highest precedence, then and, then or
a, b, c = True, False, True

result1 = a or b and c      # Same as: a or (b and c)
result2 = (a or b) and c    # Different grouping
result3 = not a or b        # Same as: (not a) or b
result4 = not (a or b)      # Different grouping

print(f"a = {a}, b = {b}, c = {c}")
print(f"a or b and c = {result1}")
print(f"(a or b) and c = {result2}")
print(f"not a or b = {result3}")
print(f"not (a or b) = {result4}")

# 7. PRACTICAL APPLICATION: FORM VALIDATION
print(f"\\n=== Form Validation Example ===")

def validate_user_registration(username, email, password, age, terms_accepted):
    """Validate user registration with multiple conditions."""

    valid_username = username and len(username) >= 3 and username.isalnum()
    valid_email = email and '@' in email and '.' in email.split('@')[1]
    valid_password = password and len(password) >= 8
    valid_age = age is not None and 13 <= age <= 120
    valid_terms = terms_accepted is True

    # All conditions must be true
    is_valid = (
        valid_username and
        valid_email and
        valid_password and
        valid_age and
        valid_terms
    )

    print(f"Registration validation:")
    print(f"  Username '{username}': {'✅' if valid_username else '❌'}")
    print(f"  Email '{email}': {'✅' if valid_email else '❌'}")
    print(f"  Password: {'✅' if valid_password else '❌'}")
    print(f"  Age {age}: {'✅' if valid_age else '❌'}")
    print(f"  Terms accepted: {'✅' if valid_terms else '❌'}")
    print(f"  Overall: {'Valid ✅' if is_valid else 'Invalid ❌'}")

    return is_valid

# Test cases
test_cases = [
    ("john123", "john@email.com", "password123", 25, True),
    ("jo", "invalid-email", "123", 12, False),
    ("alice", "alice@domain.com", "securepass", 30, True)
]

for username, email, password, age, terms in test_cases:
    validate_user_registration(username, email, password, age, terms)
    print()

print("🧠 Logical operators mastered!")`
            },
            {
                title: "Assignment & Bitwise Operators",
                content: `
                    <h3>Assignment & Bitwise Operators ⚡</h3>
                    <p>Learn advanced assignment operators and bitwise operations for efficient programming.</p>

                    <h4>📝 Assignment Operators:</h4>
                    <ul>
                        <li><strong>=</strong> Simple assignment</li>
                        <li><strong>+=</strong> Add and assign</li>
                        <li><strong>-=</strong> Subtract and assign</li>
                        <li><strong>*=</strong> Multiply and assign</li>
                        <li><strong>/=</strong> Divide and assign</li>
                        <li><strong>//=</strong> Floor divide and assign</li>
                        <li><strong>%=</strong> Modulus and assign</li>
                        <li><strong>**=</strong> Power and assign</li>
                    </ul>

                    <h4>🔢 Bitwise Operators:</h4>
                    <ul>
                        <li><strong>&</strong> AND</li>
                        <li><strong>|</strong> OR</li>
                        <li><strong>^</strong> XOR (exclusive or)</li>
                        <li><strong>~</strong> NOT (complement)</li>
                        <li><strong>&lt;&lt;</strong> Left shift</li>
                        <li><strong>&gt;&gt;</strong> Right shift</li>
                    </ul>
                `,
                exampleCode: `# 1. ASSIGNMENT OPERATORS
print("=== Assignment Operators ===")

# Basic assignment
x = 10
print(f"Initial x = {x}")

# Compound assignments
x += 5    # x = x + 5
print(f"After x += 5: x = {x}")

x -= 3    # x = x - 3
print(f"After x -= 3: x = {x}")

x *= 2    # x = x * 2
print(f"After x *= 2: x = {x}")

x /= 4    # x = x / 4
print(f"After x /= 4: x = {x}")

# More assignment operators
y = 17
print(f"\\nStarting with y = {y}")

y //= 3   # Floor division
print(f"After y //= 3: y = {y}")

y %= 3    # Modulus
print(f"After y %= 3: y = {y}")

y **= 4   # Exponentiation
print(f"After y **= 4: y = {y}")

# 2. STRING AND LIST ASSIGNMENT OPERATORS
print(f"\\n=== String and List Assignment ===")

# String concatenation
message = "Hello"
message += " World"
message += "!"
print(f"String concatenation: '{message}'")

# List extension
numbers = [1, 2, 3]
numbers += [4, 5, 6]
print(f"List extension: {numbers}")

numbers *= 2  # Repeat the list
print(f"List repetition: {numbers}")

# 3. BITWISE OPERATORS - BASICS
print(f"\\n=== Bitwise Operators ===")

a = 60  # 111100 in binary
b = 13  # 001101 in binary

print(f"a = {a} (binary: {bin(a)})")
print(f"b = {b} (binary: {bin(b)})")

print(f"\\nBitwise operations:")
print(f"a & b (AND): {a & b} (binary: {bin(a & b)})")
print(f"a | b (OR): {a | b} (binary: {bin(a | b)})")
print(f"a ^ b (XOR): {a ^ b} (binary: {bin(a ^ b)})")
print(f"~a (NOT): {~a} (binary: {bin(~a & 0xFF)})")  # Mask to show 8 bits

# 4. BIT SHIFTING
print(f"\\n=== Bit Shifting ===")

num = 8  # 1000 in binary
print(f"Starting with num = {num} (binary: {bin(num)})")

left_shifted = num << 2   # Shift left by 2 positions
right_shifted = num >> 1  # Shift right by 1 position

print(f"num << 2 = {left_shifted} (binary: {bin(left_shifted)})")
print(f"num >> 1 = {right_shifted} (binary: {bin(right_shifted)})")

print(f"\\nShift effects:")
print(f"Left shift by n ≈ multiply by 2^n: 8 << 2 = 8 * 2^2 = {8 * (2**2)}")
print(f"Right shift by n ≈ divide by 2^n: 8 >> 1 = 8 / 2^1 = {8 // (2**1)}")

# 5. PRACTICAL BITWISE APPLICATIONS
print(f"\\n=== Practical Bitwise Applications ===")

# Flags and permissions (similar to file permissions)
READ = 1     # 001
WRITE = 2    # 010
EXECUTE = 4  # 100

# Combine permissions
permissions = READ | WRITE  # 011 (binary)
print(f"Permissions: READ={READ}, WRITE={WRITE}, EXECUTE={EXECUTE}")
print(f"Combined READ|WRITE: {permissions} (binary: {bin(permissions)})")

# Check permissions
has_read = bool(permissions & READ)
has_write = bool(permissions & WRITE)
has_execute = bool(permissions & EXECUTE)

print(f"\\nPermission check:")
print(f"Has READ: {has_read}")
print(f"Has write: {has_write}")
print(f"Has execute: {has_execute}")

# Add execute permission
permissions |= EXECUTE
print(f"\\nAfter adding EXECUTE: {permissions} (binary: {bin(permissions)})")

# Remove write permission
permissions &= ~WRITE  # Use NOT to create mask, then AND
print(f"After removing WRITE: {permissions} (binary: {bin(permissions)})")

# 6. TOGGLE AND SWAP TRICKS
print(f"\\n=== Bitwise Tricks ===")

# Toggle bits
value = 5  # 101
mask = 3   # 011

print(f"Original value: {value} (binary: {bin(value)})")
toggled = value ^ mask
print(f"After toggle with {mask}: {toggled} (binary: {bin(toggled)})")
toggled_back = toggled ^ mask
print(f"Toggle back: {toggled_back} (binary: {bin(toggled_back)})")

# XOR swap (without temporary variable)
x, y = 25, 30
print(f"\\nXOR swap: x={x}, y={y}")

x = x ^ y
y = x ^ y
x = x ^ y

print(f"After XOR swap: x={x}, y={y}")

# 7. BIT MANIPULATION FUNCTIONS
print(f"\\n=== Bit Manipulation Functions ===")

def get_bit(number, position):
    """Get the bit at the specified position."""
    return (number >> position) & 1

def set_bit(number, position):
    """Set the bit at the specified position to 1."""
    return number | (1 << position)

def clear_bit(number, position):
    """Clear the bit at the specified position (set to 0)."""
    return number & ~(1 << position)

def toggle_bit(number, position):
    """Toggle the bit at the specified position."""
    return number ^ (1 << position)

# Test bit manipulation functions
test_number = 10  # 1010 in binary
print(f"Test number: {test_number} (binary: {bin(test_number)})")

for pos in range(4):
    bit = get_bit(test_number, pos)
    print(f"Bit at position {pos}: {bit}")

# Modify bits
modified = set_bit(test_number, 0)     # Set bit 0
modified = clear_bit(modified, 3)      # Clear bit 3
modified = toggle_bit(modified, 2)     # Toggle bit 2

print(f"\\nAfter modifications: {modified} (binary: {bin(modified)})")

# 8. PERFORMANCE COMPARISON
print(f"\\n=== Performance Examples ===")

# Fast check if number is even (bit 0 is 0)
def is_even_bitwise(n):
    return (n & 1) == 0

# Fast multiply/divide by powers of 2
def multiply_by_8(n):
    return n << 3  # Shift left by 3 (2^3 = 8)

def divide_by_4(n):
    return n >> 2  # Shift right by 2 (2^2 = 4)

test_numbers = [10, 15, 32, 100]
for num in test_numbers:
    print(f"\\nNumber: {num}")
    print(f"  Even (bitwise): {is_even_bitwise(num)}")
    print(f"  × 8 (shift): {multiply_by_8(num)}")
    print(f"  ÷ 4 (shift): {divide_by_4(num)}")

print("\\n⚡ Assignment and bitwise operators mastered!")`
            }
        ]
    },
    {
        title: "Control Flow",
        level: "Basic",
        description: "Master conditional statements, loops, and program flow control",
        estimatedTime: "4-5 hours",
        subConcepts: [
            {
                title: "If Statements & Conditionals",
                content: `
                    <h3>Conditional Statements 🔀</h3>
                    <p>Make decisions in your code with if, elif, and else statements!</p>

                    <h4>🎯 Conditional Structure:</h4>
                    <ul>
                        <li><strong>if:</strong> Execute code if condition is True</li>
                        <li><strong>elif:</strong> Check additional conditions</li>
                        <li><strong>else:</strong> Execute if no conditions are True</li>
                    </ul>

                    <h4>⚡ Key Features:</h4>
                    <ul>
                        <li>Indentation defines code blocks</li>
                        <li>Multiple elif statements allowed</li>
                        <li>Nested conditionals supported</li>
                        <li>Ternary operator for simple cases</li>
                    </ul>`,
                exampleCode: `# 1. BASIC IF STATEMENTS
age = 18
if age >= 18:
    print("You can vote!")
    print("Welcome to adulthood!")
else:
    print("Too young to vote")
    print("Wait until you're 18")

# 2. IF-ELIF-ELSE CHAIN
score = 85
if score >= 90:
    grade = "A"
    print("Excellent work!")
elif score >= 80:
    grade = "B"
    print("Good job!")
elif score >= 70:
    grade = "C"
    print("Not bad!")
elif score >= 60:
    grade = "D"
    print("You passed!")
else:
    grade = "F"
    print("Need to study more!")

print(f"Your grade: {grade}")

# 3. NESTED CONDITIONS
weather = "sunny"
temperature = 75

if weather == "sunny":
    if temperature > 70:
        print("Perfect beach weather!")
    elif temperature > 50:
        print("Nice day for a walk!")
    else:
        print("Sunny but cold!")
else:
    print("Not sunny today")

# 4. TERNARY OPERATOR (ONE-LINE IF)
age = 20
status = "adult" if age >= 18 else "minor"
print(f"Status: {status}")

# Multiple ternary
x = 10
result = "positive" if x > 0 else "negative" if x < 0 else "zero"
print(f"Number is {result}")

print("🔀 Conditionals mastered!")`
            },
            {
                title: "Loops - For & While",
                content: `
                    <h3>Loops in Python 🔄</h3>
                    <p>Automate repetitive tasks with Python's powerful looping constructs!</p>

                    <h4>🔁 Loop Types:</h4>
                    <ul>
                        <li><strong>for:</strong> Iterate over sequences (lists, ranges, strings)</li>
                        <li><strong>while:</strong> Continue while condition is True</li>
                        <li><strong>nested:</strong> Loops within loops</li>
                    </ul>

                    <h4>🎛️ Loop Control:</h4>
                    <ul>
                        <li><strong>break:</strong> Exit the loop early</li>
                        <li><strong>continue:</strong> Skip to next iteration</li>
                        <li><strong>else:</strong> Execute when loop completes normally</li>
                        <li><strong>pass:</strong> Placeholder (do nothing)</li>
                    </ul>`,
                exampleCode: `# 1. FOR LOOPS WITH RANGE
print("=== For Loops with Range ===")
for i in range(5):
    print(f"Count: {i}")

# Range with start, stop, step
for i in range(2, 10, 2):
    print(f"Even number: {i}")

# 2. FOR LOOPS WITH SEQUENCES
print("\\n=== For Loops with Lists ===")
fruits = ["apple", "banana", "orange", "grape"]
for fruit in fruits:
    print(f"I like {fruit}")

# With index using enumerate
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# 3. STRING ITERATION
print("\\n=== String Iteration ===")
message = "Python"
for char in message:
    print(f"Character: {char}")

# 4. WHILE LOOPS
print("\\n=== While Loops ===")
countdown = 5
while countdown > 0:
    print(f"Countdown: {countdown}")
    countdown -= 1
print("Blast off! 🚀")

# 5. LOOP CONTROL STATEMENTS
print("\\n=== Loop Control ===")
for num in range(1, 11):
    if num == 5:
        continue  # Skip 5
    if num == 8:
        break     # Stop at 8
    print(f"Number: {num}")

# 6. NESTED LOOPS
print("\\n=== Nested Loops ===")
for i in range(1, 4):
    for j in range(1, 4):
        print(f"({i},{j})", end=" ")
    print()  # New line

# 7. LOOP WITH ELSE
print("\\n=== Loop with Else ===")
for i in range(5):
    print(i)
else:
    print("Loop completed normally")

# Search with break (else won't execute)
numbers = [1, 2, 3, 4, 5]
search_for = 3
for num in numbers:
    if num == search_for:
        print(f"Found {search_for}!")
        break
else:
    print(f"{search_for} not found")

print("🔄 Loops mastered!")`
            }
        ]
    }
];

// Additional intermediate and advanced topics would go here, but for now let's focus on essential sections

// Data Structures section (Lists, Tuples, Dictionaries, Sets)
const intermediateTopics = [
    {
        title: "Data Structures",
        level: "Intermediate",
        description: "Master Python's built-in collections: lists, tuples, dictionaries, and sets",
        estimatedTime: "5-6 hours",
        subConcepts: [
            {
                title: "Lists & List Comprehensions",
                content: `
                    <h3>Lists - Dynamic Arrays 📋</h3>
                    <p>Lists are ordered, mutable collections perfect for storing sequences of items.</p>

                    <h4>🔧 Key Operations:</h4>
                    <ul>
                        <li><strong>Creation:</strong> [1, 2, 3] or list()</li>
                        <li><strong>Access:</strong> list[index], list[start:end]</li>
                        <li><strong>Modification:</strong> append, insert, remove, pop</li>
                        <li><strong>Advanced:</strong> List comprehensions, sorting, filtering</li>
                    </ul>`,
                exampleCode: `# 1. LIST CREATION AND BASIC OPERATIONS
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]
print(f"Numbers: {numbers}")
print(f"Mixed: {mixed}")

# 2. LIST METHODS
fruits = ["apple", "banana"]
fruits.append("orange")
fruits.insert(1, "kiwi")
fruits.extend(["grape", "mango"])
print(f"Fruits: {fruits}")

# 3. LIST COMPREHENSIONS
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]
words = ["hello", "world", "python"]
upper_words = [word.upper() for word in words]

print(f"Squares: {squares}")
print(f"Evens: {evens}")
print(f"Upper words: {upper_words}")

# 4. ADVANCED LIST OPERATIONS
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
print(f"Original: {numbers}")
print(f"Sorted: {sorted(numbers)}")
print(f"Reversed: {numbers[::-1]}")
print(f"Max: {max(numbers)}, Min: {min(numbers)}")

print("📋 Lists mastered!")`
            }
        ]
    },
    {
        title: "Functions & Modules",
        level: "Intermediate",
        description: "Create reusable code with functions and organize code with modules",
        estimatedTime: "4-5 hours",
        subConcepts: [
            {
                title: "Function Fundamentals",
                content: `
                    <h3>Functions - Reusable Code Blocks 🔧</h3>
                    <p>Functions help organize code, avoid repetition, and create modular programs.</p>

                    <h4>🎯 Function Features:</h4>
                    <ul>
                        <li><strong>Definition:</strong> def function_name(parameters)</li>
                        <li><strong>Parameters:</strong> Positional, keyword, default values</li>
                        <li><strong>Return:</strong> Return values to caller</li>
                        <li><strong>Scope:</strong> Local vs global variables</li>
                    </ul>`,
                exampleCode: `# 1. BASIC FUNCTION DEFINITION
def greet(name):
    """Greet a person by name."""
    return f"Hello, {name}!"

result = greet("Alice")
print(result)

# 2. FUNCTION WITH MULTIPLE PARAMETERS
def calculate_area(length, width, height=1):
    """Calculate area or volume."""
    if height == 1:
        return length * width  # Area
    else:
        return length * width * height  # Volume

area = calculate_area(10, 5)
volume = calculate_area(10, 5, 3)
print(f"Area: {area}, Volume: {volume}")

# 3. FUNCTION WITH *ARGS AND **KWARGS
def flexible_function(*args, **kwargs):
    """Demonstrate flexible arguments."""
    print(f"Args: {args}")
    print(f"Kwargs: {kwargs}")

flexible_function(1, 2, 3, name="Python", version=3.9)

# 4. LAMBDA FUNCTIONS
square = lambda x: x ** 2
print(f"Square of 5: {square(5)}")

# Using with built-in functions
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
print(f"Squared: {squared}")

print("🔧 Functions mastered!")`
            }
        ]
    }
];

// Advanced topics
const advancedTopics = [
    {
        title: "Object-Oriented Programming",
        level: "Advanced",
        description: "Master classes, objects, inheritance, and OOP principles",
        estimatedTime: "8-10 hours",
        subConcepts: [
            {
                title: "Classes & Objects",
                content: `
                    <h3>Object-Oriented Programming 🏗️</h3>
                    <p>Create custom data types and organize code using OOP principles.</p>

                    <h4>🧱 OOP Concepts:</h4>
                    <ul>
                        <li><strong>Classes:</strong> Blueprints for objects</li>
                        <li><strong>Objects:</strong> Instances of classes</li>
                        <li><strong>Attributes:</strong> Object properties</li>
                        <li><strong>Methods:</strong> Object behaviors</li>
                    </ul>`,
                exampleCode: `# 1. BASIC CLASS DEFINITION
class Dog:
    """A simple dog class."""

    # Class attribute (shared by all instances)
    species = "Canis familiaris"

    def __init__(self, name, breed, age):
        """Initialize a new dog."""
        self.name = name      # Instance attribute
        self.breed = breed    # Instance attribute
        self.age = age        # Instance attribute

    def bark(self):
        """Make the dog bark."""
        return f"{self.name} says Woof!"

    def get_info(self):
        """Get dog information."""
        return f"{self.name} is a {self.age} year old {self.breed}"

# 2. CREATING OBJECTS
dog1 = Dog("Buddy", "Golden Retriever", 3)
dog2 = Dog("Lucy", "Poodle", 5)

print(dog1.bark())
print(dog1.get_info())
print(dog2.get_info())

# 3. CLASS INHERITANCE
class ServiceDog(Dog):
    """A service dog that inherits from Dog."""

    def __init__(self, name, breed, age, service_type):
        super().__init__(name, breed, age)  # Call parent __init__
        self.service_type = service_type

    def perform_service(self):
        """Perform service dog duties."""
        return f"{self.name} is providing {self.service_type} service"

service_dog = ServiceDog("Max", "German Shepherd", 4, "guide")
print(service_dog.bark())          # Inherited method
print(service_dog.perform_service())  # New method

print("🏗️ OOP fundamentals learned!")`
            }
        ]
    }
];

// Combine all topics
pythonConcepts.push(...intermediateTopics, ...advancedTopics);

// Make these globally accessible for notebook refresh
window.pythonConcepts = pythonConcepts;
let currentConceptIndex = 0;
let currentSubConceptIndex = 0;
window.currentConceptIndex = currentConceptIndex;
window.currentSubConceptIndex = currentSubConceptIndex;

// Progress tracking
let userProgress = {
    completedConcepts: new Set(),
    completedSubConcepts: new Set(),
    totalTimeSpent: 0,
    lastAccessed: Date.now(),
    conceptStartTime: null
};

// Load progress from localStorage
function loadProgress() {
    try {
        const saved = localStorage.getItem('python-learner-progress');
        if (saved) {
            const data = JSON.parse(saved);
            userProgress.completedConcepts = new Set(data.completedConcepts || []);
            userProgress.completedSubConcepts = new Set(data.completedSubConcepts || []);
            userProgress.totalTimeSpent = data.totalTimeSpent || 0;
            userProgress.lastAccessed = data.lastAccessed || Date.now();
        }
    } catch (error) {
        console.error('Failed to load progress:', error);
    }
}

// Save progress to localStorage
function saveProgress() {
    try {
        const data = {
            completedConcepts: Array.from(userProgress.completedConcepts),
            completedSubConcepts: Array.from(userProgress.completedSubConcepts),
            totalTimeSpent: userProgress.totalTimeSpent,
            lastAccessed: Date.now()
        };
        localStorage.setItem('python-learner-progress', JSON.stringify(data));
    } catch (error) {
        console.error('Failed to save progress:', error);
    }
}

// Mark concept as completed
function markConceptCompleted(conceptIndex, subConceptIndex) {
    const conceptId = `${conceptIndex}`;
    const subConceptId = `${conceptIndex}-${subConceptIndex}`;

    userProgress.completedSubConcepts.add(subConceptId);

    // Check if all sub-concepts in this concept are completed
    const concept = pythonConcepts[conceptIndex];
    if (concept) {
        const allSubConceptsCompleted = concept.subConcepts.every((_, index) =>
            userProgress.completedSubConcepts.has(`${conceptIndex}-${index}`)
        );

        if (allSubConceptsCompleted) {
            userProgress.completedConcepts.add(conceptId);
        }
    }

    saveProgress();
    updateProgressDisplay();
}

// Update progress display
function updateProgressDisplay() {
    const totalConcepts = pythonConcepts.length;
    const totalSubConcepts = pythonConcepts.reduce((sum, concept) => sum + concept.subConcepts.length, 0);
    const completedConcepts = userProgress.completedConcepts.size;
    const completedSubConcepts = userProgress.completedSubConcepts.size;

    // Update progress bar if it exists
    const progressBar = document.querySelector('.progress-fill');
    if (progressBar) {
        const percentage = (completedSubConcepts / totalSubConcepts) * 100;
        progressBar.style.width = `${percentage}%`;
    }

    // Update progress text if it exists
    const progressText = document.querySelector('.progress-text');
    if (progressText) {
        progressText.textContent = `${completedSubConcepts}/${totalSubConcepts} topics completed`;
    }

    // Update concept completion status in sidebar
    updateSidebarProgress();
}

function showConcept(conceptIndex, subConceptIndex = 0) {
    try {
        console.log('showConcept called with:', { conceptIndex, subConceptIndex });
        
        // Track time spent on previous concept
        if (userProgress.conceptStartTime) {
            const timeSpent = Date.now() - userProgress.conceptStartTime;
            userProgress.totalTimeSpent += timeSpent;
            saveProgress();
        }

        // Start timing for new concept
        userProgress.conceptStartTime = Date.now();

        currentConceptIndex = conceptIndex;
        currentSubConceptIndex = subConceptIndex;

        // Update global references for notebook refresh
        window.currentConceptIndex = currentConceptIndex;
        window.currentSubConceptIndex = currentSubConceptIndex;

        const concept = pythonConcepts[conceptIndex];
        if (!concept) {
            console.error('Concept not found at index:', conceptIndex);
            // Show fallback content
            const contentArea = document.getElementById('concept-content');
            if (contentArea) {
                contentArea.innerHTML = `
                    <div class="error-message">
                        <h3>⚠️ Content Loading Error</h3>
                        <p>The requested concept could not be found. Please try refreshing the page or selecting another topic.</p>
                        <button onclick="location.reload()" class="btn primary">Refresh Page</button>
                    </div>
                `;
            }
            return;
        }

        console.log('Found concept:', concept.title);

        // Update concept title
        const conceptTitle = document.getElementById('current-concept');
        if (conceptTitle) {
            conceptTitle.textContent = concept.title;
        }

        // Show concept content
        const contentArea = document.getElementById('concept-content');
        if (!contentArea) {
            console.error('Content area not found');
            return;
        }

        const subConcept = concept.subConcepts[subConceptIndex];
        if (!subConcept) {
            console.error('Sub-concept not found at index:', subConceptIndex);
            contentArea.innerHTML = `
                <div class="error-message">
                    <h3>⚠️ Topic Not Found</h3>
                    <p>The requested topic could not be found in "${concept.title}".</p>
                    <button onclick="showConcept(${conceptIndex}, 0)" class="btn primary">Go to First Topic</button>
                </div>
            `;
            return;
        }

        console.log('Found sub-concept:', subConcept.title);

        const isCompleted = userProgress.completedSubConcepts.has(`${conceptIndex}-${subConceptIndex}`);
        const completionBadge = isCompleted ?
            '<span class="completion-badge completed"><i class="fas fa-check-circle"></i> Completed</span>' :
            '<span class="completion-badge"><i class="far fa-circle"></i> Not Started</span>';

        contentArea.innerHTML = `
            <div class="concept-header-info">
                <div class="concept-meta">
                    <div class="level-info">
                        <span class="level-badge ${concept.level.toLowerCase()}">${concept.level}</span>
                        <span class="time-estimate">
                            <i class="fas fa-clock"></i> ${concept.estimatedTime}
                        </span>
                        ${completionBadge}
                    </div>
                    <div class="concept-description">
                        <p>${concept.description}</p>
                    </div>
                </div>
            </div>

            <div class="subconcept-content">
                <div class="subconcept-header">
                    <h2>${subConcept.title}</h2>
                    <div class="subconcept-actions">
                        <button class="mark-complete-btn ${isCompleted ? 'completed' : ''}"
                                onclick="markConceptCompleted(${conceptIndex}, ${subConceptIndex})">
                            <i class="fas ${isCompleted ? 'fa-check-circle' : 'fa-circle'}"></i>
                            ${isCompleted ? 'Completed' : 'Mark Complete'}
                        </button>
                    </div>
                </div>

                <div class="explanation-section">
                    ${subConcept.content}
                </div>

                ${subConcept.exampleCode ? `
                    <div class="code-example">
                        <div class="code-header">
                            <div class="code-language">
                                Python Example
                            </div>
                            <button class="copy-btn" data-code="${subConcept.exampleCode.replace(/"/g, '&quot;')}">
                                <i class="fas fa-copy"></i> Copy Code
                            </button>
                        </div>
                        <div class="code-content">${subConcept.exampleCode}</div>
                    </div>
                ` : ''}

                <div class="concept-nav">
                    <button class="nav-btn" onclick="navigateConcept(-1)" ${conceptIndex === 0 && subConceptIndex === 0 ? 'disabled' : ''}>
                        <i class="fas fa-arrow-left"></i> Previous
                    </button>

                    <div class="concept-progress-info">
                        <span class="progress-indicator">
                            Topic ${subConceptIndex + 1} of ${concept.subConcepts.length}
                        </span>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${((subConceptIndex + 1) / concept.subConcepts.length) * 100}%"></div>
                        </div>
                    </div>

                    <button class="nav-btn" onclick="navigateConcept(1)" ${conceptIndex === pythonConcepts.length - 1 && subConceptIndex === pythonConcepts[pythonConcepts.length - 1].subConcepts.length - 1 ? 'disabled' : ''}>
                        Next <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        `;

        console.log('Content populated successfully');

        // Setup copy button event listeners
        setupCopyButtonListeners();

        // Update sub-concept buttons
        updateSubConceptButtons(concept);

        // Update navigation buttons
        updateNavigationButtons();

        // Refresh notebook with current concept examples
        if (window.notebookInterface && typeof window.notebookInterface.refreshWithCurrentConcept === 'function') {
            window.notebookInterface.refreshWithCurrentConcept();
        }

    } catch (error) {
        console.error('Error in showConcept:', error);
        const contentArea = document.getElementById('concept-content');
        if (contentArea) {
            contentArea.innerHTML = `
                <div class="error-message">
                    <h3>⚠️ Error Loading Content</h3>
                    <p>There was an error loading the concept content: ${error.message}</p>
                    <p>Please refresh the page or try another topic.</p>
                    <button onclick="location.reload()" class="btn primary">Refresh Page</button>
                    <details style="margin-top: 10px;">
                        <summary>Technical Details</summary>
                        <pre style="background: #f5f5f5; padding: 10px; margin-top: 10px; overflow-x: auto;">
conceptIndex: ${conceptIndex}
subConceptIndex: ${subConceptIndex}
error: ${error.stack}
                        </pre>
                    </details>
                </div>
            `;
        }
    }
}

function updateSubConceptButtons(concept) {
    const container = document.getElementById('sub-concept-buttons');
    container.innerHTML = '';

    concept.subConcepts.forEach((subConcept, index) => {
        const button = document.createElement('button');
        button.className = 'sub-concept-btn';
        button.textContent = subConcept.title;

        if (index === currentSubConceptIndex) {
            button.classList.add('active');
        }

        button.addEventListener('click', () => {
            showConcept(currentConceptIndex, index);
        });

        container.appendChild(button);
    });
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-concept');
    const nextBtn = document.getElementById('next-concept');

    // Enable/disable previous button
    prevBtn.disabled = currentConceptIndex === 0 && currentSubConceptIndex === 0;

    // Enable/disable next button
    const isLastConcept = currentConceptIndex === pythonConcepts.length - 1;
    const isLastSubConcept = currentSubConceptIndex === pythonConcepts[currentConceptIndex].subConcepts.length - 1;
    nextBtn.disabled = isLastConcept && isLastSubConcept;
}

function navigateConcept(direction) {
    if (direction === 1) {
        // Next
        const currentConcept = pythonConcepts[currentConceptIndex];
        if (currentSubConceptIndex < currentConcept.subConcepts.length - 1) {
            // Next sub-concept
            showConcept(currentConceptIndex, currentSubConceptIndex + 1);
        } else if (currentConceptIndex < pythonConcepts.length - 1) {
            // Next concept, first sub-concept
            showConcept(currentConceptIndex + 1, 0);
        }
    } else {
        // Previous
        if (currentSubConceptIndex > 0) {
            // Previous sub-concept
            showConcept(currentConceptIndex, currentSubConceptIndex - 1);
        } else if (currentConceptIndex > 0) {
            // Previous concept, last sub-concept
            const prevConcept = pythonConcepts[currentConceptIndex - 1];
            showConcept(currentConceptIndex - 1, prevConcept.subConcepts.length - 1);
        }
    }
}

// Update sidebar progress indicators
function updateSidebarProgress() {
    const topicList = document.getElementById('topic-list');
    if (!topicList) return;

    const sections = topicList.querySelectorAll('.topic-section');
    sections.forEach((section, conceptIndex) => {
        const concept = pythonConcepts[conceptIndex];
        if (!concept) return;

        const isConceptCompleted = userProgress.completedConcepts.has(`${conceptIndex}`);
        const completedSubConcepts = concept.subConcepts.filter((_, subIndex) =>
            userProgress.completedSubConcepts.has(`${conceptIndex}-${subIndex}`)
        ).length;

        // Update concept header progress
        const header = section.querySelector('.topic-header');
        if (header) {
            if (isConceptCompleted) {
                header.classList.add('completed');
            } else {
                header.classList.remove('completed');
            }

            // Update progress indicator in header
            let progressIndicator = header.querySelector('.concept-progress-indicator');
            if (!progressIndicator) {
                progressIndicator = document.createElement('div');
                progressIndicator.className = 'concept-progress-indicator';
                header.querySelector('.topic-meta').appendChild(progressIndicator);
            }

            progressIndicator.innerHTML = `
                <span class="progress-fraction">${completedSubConcepts}/${concept.subConcepts.length}</span>
                <div class="mini-progress-bar">
                    <div class="mini-progress-fill" style="width: ${(completedSubConcepts / concept.subConcepts.length) * 100}%"></div>
                </div>
            `;
        }

        // Update sub-concept buttons
        const subConceptButtons = section.querySelectorAll('.sub-concept-btn');
        subConceptButtons.forEach((btn, subIndex) => {
            const isCompleted = userProgress.completedSubConcepts.has(`${conceptIndex}-${subIndex}`);
            if (isCompleted) {
                btn.classList.add('completed');
                btn.innerHTML = `<i class="fas fa-check-circle"></i> ${btn.textContent.replace(/^✓\s*/, '')}`;
            } else {
                btn.classList.remove('completed');
                btn.innerHTML = btn.textContent.replace(/^✓\s*/, '');
            }
        });
    });
}

function populateTopicList() {
    console.log('populateTopicList called');
    const topicList = document.getElementById('topic-list');
    
    if (!topicList) {
        console.error('topic-list element not found!');
        return;
    }
    
    if (!pythonConcepts || pythonConcepts.length === 0) {
        console.error('pythonConcepts is empty or undefined:', pythonConcepts);
        return;
    }
    
    console.log(`Found ${pythonConcepts.length} concepts to populate`);
    topicList.innerHTML = '';

    pythonConcepts.forEach((concept, conceptIndex) => {
        console.log(`Processing concept ${conceptIndex}: ${concept.title}`);
        
        const isConceptCompleted = userProgress.completedConcepts.has(`${conceptIndex}`);
        const completedSubConcepts = concept.subConcepts.filter((_, subIndex) =>
            userProgress.completedSubConcepts.has(`${conceptIndex}-${subIndex}`)
        ).length;

        // Create topic section
        const topicSection = document.createElement('div');
        topicSection.className = `topic-section ${conceptIndex === currentConceptIndex ? 'expanded' : ''}`;

        // Create header
        const header = document.createElement('div');
        header.className = `topic-header ${isConceptCompleted ? 'completed' : ''}`;
        header.innerHTML = `
            <div class="topic-title">
                ${concept.title}
                ${isConceptCompleted ? '<i class="fas fa-medal completion-medal"></i>' : ''}
            </div>
            <div class="topic-meta">
                <span class="level-badge ${concept.level.toLowerCase()}">${concept.level}</span>
                <span class="time-estimate">
                    <i class="fas fa-clock"></i> ${concept.estimatedTime}
                </span>
                <div class="concept-progress-indicator">
                    <span class="progress-fraction">${completedSubConcepts}/${concept.subConcepts.length}</span>
                    <div class="mini-progress-bar">
                        <div class="mini-progress-fill" style="width: ${(completedSubConcepts / concept.subConcepts.length) * 100}%"></div>
                    </div>
                </div>
                <div class="expand-indicator">
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
        `;

        // Add click handler for expansion
        header.addEventListener('click', () => {
            topicSection.classList.toggle('expanded');
        });

        // Create sub-concepts container
        const subConceptsContainer = document.createElement('div');
        subConceptsContainer.className = 'sub-concepts-container';

        const subConceptsList = document.createElement('ul');
        subConceptsList.className = 'sub-concepts-list';

        concept.subConcepts.forEach((subConcept, subIndex) => {
            const isCompleted = userProgress.completedSubConcepts.has(`${conceptIndex}-${subIndex}`);
            const isActive = conceptIndex === currentConceptIndex && subIndex === currentSubConceptIndex;

            const subItem = document.createElement('li');
            subItem.className = 'sub-concept-item';

            const subButton = document.createElement('button');
            subButton.className = `sub-concept-btn ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
            subButton.innerHTML = `
                ${isCompleted ? '<i class="fas fa-check-circle"></i>' : '<i class="far fa-circle"></i>'}
                ${subConcept.title}
            `;

            subButton.addEventListener('click', () => {
                showConcept(conceptIndex, subIndex);
                closeSidebars();
            });

            subItem.appendChild(subButton);
            subConceptsList.appendChild(subItem);
        });

        subConceptsContainer.appendChild(subConceptsList);

        // Assemble the topic section
        topicSection.appendChild(header);
        topicSection.appendChild(subConceptsContainer);

        // Add to main list
        const listItem = document.createElement('li');
        listItem.appendChild(topicSection);
        topicList.appendChild(listItem);
    });

    console.log(`Successfully populated ${pythonConcepts.length} topics in sidebar`);

    // Load progress and update display
    loadProgress();
    updateProgressDisplay();
    
    console.log('populateTopicList completed');
}

function copyToClipboard(button, code) {
    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        button.classList.add('copied');

        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy code:', err);
    });
}

function setupCopyButtonListeners() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const code = button.getAttribute('data-code').replace(/&quot;/g, '"');
            copyToClipboard(button, code);
        });
    });
}

// Sidebar toggle functions
function toggleTopicsSidebar() {
    const sidebar = document.getElementById('topics-sidebar');
    const overlay = document.querySelector('.overlay');

    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
}

function togglePackagesSidebar() {
    const sidebar = document.getElementById('packages-sidebar');
    const overlay = document.querySelector('.overlay');

    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
}

function closeSidebars() {
    const sidebars = document.querySelectorAll('.sidebar');
    const overlay = document.querySelector('.overlay');

    sidebars.forEach(sidebar => sidebar.classList.remove('open'));
    overlay.classList.remove('active');
}

export {
    pythonConcepts,
    showConcept,
    navigateConcept,
    populateTopicList,
    toggleTopicsSidebar,
    togglePackagesSidebar,
    closeSidebars,
    copyToClipboard,
    currentConceptIndex,
    currentSubConceptIndex,
    loadProgress,
    saveProgress,
    markConceptCompleted,
    updateProgressDisplay,
    updateSidebarProgress,
    userProgress
};