export const whereClause = {
    title: "WHERE Clause",
    content: `
    <h3>Where Clause</h3>
    <p>The WHERE clause is used to filter records based on specific conditions. It's a powerful tool for retrieving only the data you need.</p>
    
    <h4>Key Points:</h4>
    <ul>
      <li>Use comparison operators like =, <, >, <=, >=, <> (not equal).</li>
      <li>Combine conditions with AND, OR, NOT.</li>
      <li>Use IN to check for multiple possible values.</li>
      <li>Use LIKE for pattern matching with wildcards (% and _).</li>
    </ul>

    <h4>Syntax:</h4>
    <pre>
    SELECT column1, column2, ...
    FROM table_name
    WHERE condition;
    </pre>

    <h4>Example:</h4>
    <pre>
    SELECT name, email
    FROM customers
    WHERE birth_date > '1990-01-01' AND city = 'New York';
    </pre>

    <p>This selects name and email of customers born after 1990 who live in New York.</p>
  `,
    practice: `SELECT * 
FROM products 
WHERE price > 50;`,
};