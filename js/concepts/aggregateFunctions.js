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

      <h4 class="topic-subtitle">Basic Syntax:</h4>
      <pre class="topic-code">
SELECT aggregate_function(column_name)
FROM table_name
[WHERE condition]
[GROUP BY column_name];
      </pre>

      <h4 class="topic-subtitle">Example:</h4>
      <div class="code-container">
        <button class="copy-btn">Copy</button>
        <pre class="topic-code">
SELECT 
  category,
  COUNT(*) as total_products,
  AVG(price) as average_price,
  MAX(price) as max_price
FROM products
GROUP BY category;
      </pre>
      </div>

      <p class="topic-paragraph">This query summarizes product information by category, showing the count, average price, and maximum price for each category.</p>

      <div class="topic-note">
        <p><strong>Note:</strong> Aggregate functions are powerful tools for data analysis. They allow you to quickly summarize large datasets and extract meaningful insights.</p>
      </div>
    </div>
  `,
  practice: `-- Calculate count of total sales
SELECT 
  COUNT(*) as total_orders
FROM sales;`,
  subConcepts: [
    {
      name: "COUNT",
      query: `-- Count the number of products
SELECT COUNT(*) as total_products
FROM products;`
    },
    {
      name: "SUM",
      query: `-- Calculate the total revenue
SELECT SUM(total_price) as total_revenue
FROM sales;`
    },
    {
      name: "AVG",
      query: `-- Find the average product price
SELECT AVG(price) as average_price
FROM products;`
    },
    {
      name: "MAX",
      query: `-- Find the highest product price
SELECT MAX(price) as highest_price
FROM products;`
    },
    {
      name: "MIN",
      query: `-- Find the lowest product price
SELECT MIN(price) as lowest_price
FROM products;`
    },
    {
      name: "GROUP BY with Aggregates",
      query: `-- Summarize sales by category
SELECT 
  category,
  COUNT(*) as total_sales,
  SUM(total_price) as total_revenue
FROM sales
JOIN products ON sales.product_id = products.id
GROUP BY category;`
    }
  ]
};