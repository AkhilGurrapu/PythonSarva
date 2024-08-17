export const createTable = {
  title: "Create Table",
  content: `
    <h3>Create Table</h3>
    <p>The CREATE TABLE statement is used to create a new table in a database. It's a fundamental operation in SQL that defines the structure of your data.</p>
    
    <h4>Key Points:</h4>
    <ul>
      <li>Specify the table name and a list of column definitions.</li>
      <li>Each column needs a name and a data type (e.g., INTEGER, TEXT, DATE).</li>
      <li>You can add constraints like PRIMARY KEY, NOT NULL, or UNIQUE.</li>
      <li>Consider the relationships between tables when designing your schema.</li>
    </ul>

    <h4>Syntax:</h4>
    <pre>
    CREATE TABLE table_name (
      column1 datatype constraints,
      column2 datatype constraints,
      ...
    );
    </pre>

    <h4>Example:</h4>
    <pre>
    CREATE TABLE customers (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT UNIQUE,
      birth_date DATE
    );
    </pre>

    <p>This creates a 'customers' table with an ID, name, email, and birth date. The ID is the primary key, name cannot be null, and email must be unique.</p>
  `,
  practice: `-- Create a table for storing product information
CREATE TABLE new_products (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  price REAL,
  category TEXT
);`
};
