export const whereClause = {
  title: "WHERE Clause",
  content: `
  <div class="topic-content">
      <h3 class="topic-subtitle">Where Clause</h3>
      <p class="topic-paragraph">The WHERE clause is used to filter records based on specific conditions. It's a powerful tool for retrieving only the data you need.</p>
      
      <h4 class="topic-subtitle">Key Points:</h4>
      <ul class="topic-list">
        <li>Use comparison operators like =, <, >, <=, >=, <> (not equal).</li>
        <li>Combine conditions with AND, OR, NOT.</li>
        <li>Use IN to check for multiple possible values.</li>
        <li>Use LIKE for pattern matching with wildcards (% and _).</li>
      </ul>

      <h4 class="topic-subtitle">Syntax:</h4>
      <pre class="topic-code">
SELECT column1, column2, ...
FROM table_name
WHERE condition;
      </pre>

      <h4 class="topic-subtitle">Example:</h4>
      <pre class="topic-code">
SELECT name, email
FROM customers
WHERE birth_date > '1990-01-01' AND city = 'New York';
      </pre>

      <p class="topic-paragraph">This selects name and email of customers born after 1990 who live in New York.</p>

      <div class="topic-note">
          <p><strong>Note:</strong> The WHERE clause is essential for efficient data retrieval. It allows you to pinpoint exactly the data you need, reducing the amount of data processed and improving query performance. When using the WHERE clause, consider the following:
          <ul>
              <li>Use appropriate indexes on columns frequently used in WHERE conditions to improve query speed.</li>
              <li>Be cautious with functions in WHERE clauses as they can prevent the use of indexes.</li>
              <li>For complex conditions, consider the order of evaluation (AND before OR) and use parentheses to clarify the logic.</li>
              <li>When working with NULL values, remember to use IS NULL or IS NOT NULL, as NULL doesn't work with standard comparison operators.</li>
          </ul>
          Mastering the WHERE clause is crucial for writing efficient and effective SQL queries.</p>
      </div>
  </div>
  `,
  practice: `SELECT * 
FROM products 
WHERE price > 50;`,
};