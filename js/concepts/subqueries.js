export const subqueries = {
  title: "Subqueries",
  content: `
    <div class="topic-content">
      <h3 class="topic-subtitle">Subqueries</h3>
      <p class="topic-paragraph">A subquery is a query nested inside another query. It allows you to use the result of one query as part of another query, enabling more complex data retrieval and manipulation.</p>
      
      <h4 class="topic-subtitle">Key Points:</h4>
      <ul class="topic-list">
        <li>Can be used in SELECT, FROM, WHERE, and HAVING clauses.</li>
        <li>Can return a single value, a row, a column, or a table.</li>
        <li>Inner query executes first, then the outer query.</li>
        <li>Useful for complex comparisons and data transformations.</li>
      </ul>

      <h4 class="topic-subtitle">Types of Subqueries:</h4>
      <ol class="topic-list">
        <li>Scalar subquery: Returns a single value.</li>
        <li>Row subquery: Returns a single row.</li>
        <li>Column subquery: Returns a single column.</li>
        <li>Table subquery: Returns a result set that can be used like a table.</li>
      </ol>

      <h4 class="topic-subtitle">Example:</h4>
      <pre class="topic-code">
SELECT name, price
FROM products
WHERE price > (SELECT AVG(price) FROM products);
      </pre>

      <p class="topic-paragraph">This query selects products with a price higher than the average price of all products. The subquery (SELECT AVG(price) FROM products) calculates the average price, which is then used in the main query's WHERE clause.</p>

      <div class="topic-note">
        <p><strong>Note:</strong> Subqueries are powerful tools for creating complex queries and can often simplify queries that would otherwise require complex joins or multiple separate queries. However, they can also impact query performance, especially when used in the WHERE clause of a large table. When using subqueries, consider their placement and whether they need to be executed for each row of the outer query. In some cases, joins or common table expressions (CTEs) might be more efficient alternatives. Always test the performance of queries with subqueries, particularly on large datasets.</p>
      </div>
    </div>
  `,
  practice: `-- Find customers who have made a purchase larger than the average purchase
SELECT name, email
FROM customers
WHERE id IN (
  SELECT customer_id
  FROM sales
  WHERE total_price > (SELECT AVG(total_price) FROM sales)
);`
};