export const selectStatements = {
    title: "Select Statements",
    content: `
        <h3>SELECT Statements</h3>
        <p>The SELECT statement is used to retrieve data from one or more tables in a database.</p>
        <h4>Basic Syntax:</h4>
        <pre>SELECT column1, column2, ... FROM table_name;</pre>
        <p>This will select specified columns from the table.</p>
        <h4>Advanced Usage:</h4>
        <ul>
            <li>Use * to select all columns: <code>SELECT * FROM table_name;</code></li>
            <li>Use DISTINCT to select unique values: <code>SELECT DISTINCT column FROM table_name;</code></li>
            <li>Use AS to alias columns: <code>SELECT column AS alias FROM table_name;</code></li>
        </ul>
      <h4>Example:</h4>
      <pre>
      SELECT name, price
      FROM products;
      </pre>
  
      <p>This query selects the name and price of all products</p>
    `,
    practice: `-- Select name, email, city, state from the customers table
  SELECT name, email, city, state 
  FROM customers`
  };
  