export const selectStatements = {
  title: "Select Statements",
  content: `
      <div class="topic-content">
          <h3 class="topic-subtitle">SELECT Statements</h3>
          <p class="topic-paragraph">The SELECT statement is used to retrieve data from one or more tables in a database.</p>
          
          <h4 class="topic-subtitle">Basic Syntax:</h4>
          <pre class="topic-code">SELECT column1, column2, ... FROM table_name;</pre>
          <p class="topic-paragraph">This will select specified columns from the table.</p>
          
          <h4 class="topic-subtitle">Advanced Usage:</h4>
          <ul class="topic-list">
              <li>Use * to select all columns: <code>SELECT * FROM table_name;</code></li>
              <li>Use DISTINCT to select unique values: <code>SELECT DISTINCT column FROM table_name;</code></li>
              <li>Use AS to alias columns: <code>SELECT column AS alias FROM table_name;</code></li>
          </ul>
          
          <h4 class="topic-subtitle">Example:</h4>
          <pre class="topic-code">
SELECT name, price
FROM products;
          </pre>
          
          <p class="topic-paragraph">This query selects the name and price of all products</p>

          <div class="topic-note">
              <p><strong>Note:</strong> SELECT statements are the foundation of data retrieval in SQL. While they may seem simple, mastering SELECT statements is crucial for effective database querying. Remember to consider performance when selecting data, especially from large tables. Using specific column names instead of SELECT * can improve query efficiency. Also, be mindful of the order of clauses in a SELECT statement (SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY) as this can affect both the query's validity and its performance.</p>
          </div>
      </div>
  `,
  practice: `-- Select name, email, city, state from the customers table
SELECT name, email, city, state 
FROM customers`
};