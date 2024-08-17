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
    practice: "SELECT * FROM customers;",
    script: `
        function generateQuery() {
            const selector = document.getElementById('column-selector');
            const selectedColumns = Array.from(selector.selectedOptions).map(option => option.value);
            const query = selectedColumns.length > 0 
                ? \`SELECT \${selectedColumns.join(', ')} FROM customers;\`
                : 'SELECT * FROM customers;';
            document.getElementById('generated-query').textContent = query;
        }
    `
};