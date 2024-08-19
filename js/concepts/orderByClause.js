export const orderByClause = {
  title: "Order By Clause",
  content: `
    <div class="topic-content">
      <h3 class="topic-subtitle">Order By Clause</h3>
      <p class="topic-paragraph">The ORDER BY clause in SQL is used to sort the result set in ascending or descending order. It allows you to organize your query results based on one or more columns.</p>
      
      <h4 class="topic-subtitle">Key Points:</h4>
      <ul class="topic-list">
        <li>Sorts results in ascending (ASC) order by default</li>
        <li>Use DESC for descending order</li>
        <li>Can sort by multiple columns</li>
        <li>NULL values are considered the lowest possible value in ascending order</li>
        <li>Can use column positions instead of names (not recommended for readability)</li>
      </ul>
  
      <h4 class="topic-subtitle">Syntax:</h4>
      <pre class="topic-code">
SELECT column1, column2, ...
FROM table_name
ORDER BY column1 [ASC|DESC], column2 [ASC|DESC], ...;
      </pre>
  
      <h4 class="topic-subtitle">Example:</h4>
      <pre class="topic-code">
SELECT name, price
FROM products
ORDER BY price DESC, name ASC;
      </pre>
  
      <p class="topic-paragraph">This query selects product names and prices, sorting first by price in descending order, then by name in ascending order for products with the same price.</p>

      <div class="topic-note">
        <p><strong>Note:</strong> The ORDER BY clause is crucial for presenting data in a meaningful and organized way. It's particularly useful for reports, data analysis, and user interfaces where data needs to be displayed in a specific order. Remember that sorting large datasets can be computationally expensive, so use indexes on frequently sorted columns to improve query performance. Also, be cautious when using ORDER BY with LIMIT, as it can affect which rows are returned in the final result set.</p>
      </div>
    </div>
  `,
  practice: `-- List all sales, ordered by date (most recent first) and then by total price (highest first)
SELECT dates.date, customers.name as customer_name, sales.total_price
FROM sales
JOIN dates ON sales.date_id = dates.id
JOIN customers ON sales.customer_id = customers.id
ORDER BY dates.date DESC, sales.total_price DESC;`
};