export const aggregateFunctions = {
  title: "Aggregate Functions",
  content: `
    <div class="topic-content">
      <h3 class="topic-subtitle">Aggregate Functions</h3>
      <p class="topic-paragraph">Aggregate functions perform calculations on a set of values and return a single result. They are essential for data analysis and summarization in SQL.</p>
      
      <h4 class="topic-subtitle">Key Points:</h4>
      <ul class="topic-list">
        <li>Common aggregate functions include COUNT, SUM, AVG, MAX, and MIN.</li>
        <li>They are often used with GROUP BY to summarize data by categories.</li>
        <li>Can be combined with DISTINCT to operate on unique values only.</li>
        <li>NULL values are typically ignored (except in COUNT(*)).</li>
      </ul>

      <h4 class="topic-subtitle">Syntax:</h4>
      <pre class="topic-code">
SELECT aggregate_function(column_name)
FROM table_name
[WHERE condition]
[GROUP BY column_name];
      </pre>

      <h4 class="topic-subtitle">Example:</h4>
      <pre class="topic-code">
SELECT 
  category,
  COUNT(*) as total_products,
  AVG(price) as average_price,
  MAX(price) as max_price
FROM products
GROUP BY category;
      </pre>

      <p class="topic-paragraph">This query summarizes product information by category, showing the count, average price, and maximum price for each category.</p>

      <div class="topic-note">
        <p><strong>Note:</strong> Aggregate functions are powerful tools for data analysis. They allow you to quickly summarize large datasets and extract meaningful insights.</p>
      </div>
    </div>
  `,
  practice: `-- Calculate total sales and average order value
SELECT 
  COUNT(*) as total_orders,
  SUM(total_price) as total_sales,
  AVG(total_price) as average_order_value
FROM sales;`
};