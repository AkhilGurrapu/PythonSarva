export const createTable = {
  title: "Create Table",
  content: `
    <div class="topic-content">
      <h3 class="topic-subtitle">Create Table</h3>
      <p class="topic-paragraph">The CREATE TABLE statement is used to create a new table in a database. It's a fundamental operation in SQL that defines the structure of your data.</p>
      
      <h4 class="topic-subtitle">Key Points:</h4>
      <ul class="topic-list">
        <li>Specify the table name and a list of column definitions.</li>
        <li>Each column needs a name and a data type (e.g., INTEGER, TEXT, DATE).</li>
        <li>You can add constraints like PRIMARY KEY, NOT NULL, or UNIQUE.</li>
        <li>Consider the relationships between tables when designing your schema.</li>
      </ul>

      <h4 class="topic-subtitle">Syntax:</h4>
      <pre class="topic-code">
CREATE TABLE table_name (
  column1 datatype constraints,
  column2 datatype constraints,
  ...
);
      </pre>

      <h4 class="topic-subtitle">Example:</h4>
      <pre class="topic-code">
CREATE TABLE customers (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE,
  birth_date DATE
);
      </pre>

      <p class="topic-paragraph">This creates a 'customers' table with an ID, name, email, and birth date. The ID is the primary key, name cannot be null, and email must be unique.</p>

      <div class="topic-note">
        <p><strong>Note:</strong> When creating tables, it's important to carefully consider your data model. Think about the types of data you'll be storing, the relationships between different entities, and any constraints that should be enforced. A well-designed table structure can significantly impact the efficiency and maintainability of your database.</p>
      </div>
      <div class="topic-note">
           <p><strong>Note:</strong> The PRAGMA table_info() statement is a SQLite-specific command that returns information about the columns in a table, including their names, types, and constraints. This will display the structure of the table even when it's empty, showing you the column names, types, and other properties.<p>
      </div>
    </div>
  `,
  practice: `-- Create a table for storing product information
CREATE TABLE new_products (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  price REAL,
  category TEXT
);

PRAGMA table_info(new_products);`
};