export const subqueries = {
  title: "Subqueries",
  content: `
    <h3>Subqueries</h3>
    <p>A subquery is a query nested inside another query. It allows you to use the result of one query as part of another query, enabling more complex data retrieval and manipulation.</p>
    
    <h4>Key Points:</h4>
    <ul>
      <li>Can be used in SELECT, FROM, WHERE, and HAVING clauses.</li>
      <li>Can return a single value, a row, a column, or a table.</li>
      <li>Inner query executes first, then the outer query.</li>
      <li>Useful for complex comparisons and data transformations.</li>
    </ul>

    <h4>Types of Subqueries:</h4>
    <ol>
      <li>Scalar subquery: Returns a single value.</li>
      <li>Row subquery: Returns a single row.</li>
      <li>Column subquery: Returns a single column.</li>
      <li>Table subquery: Returns a result set that can be used like a table.</li>
    </ol>

    <h4>Example:</h4>
    <pre>
    SELECT name, price
    FROM products
    WHERE price > (SELECT AVG(price) FROM products);
    </pre>

    <p>This query selects products with a price higher than the average price of all products. The subquery (SELECT AVG(price) FROM products) calculates the average price, which is then used in the main query's WHERE clause.</p>
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