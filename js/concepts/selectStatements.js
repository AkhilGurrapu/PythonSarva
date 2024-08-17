export const selectStatements = {
    title: "SELECT Statements",
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
    `,
    practice: `SELECT name, email    
FROM customers;`,
};