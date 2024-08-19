export const windowFunctions = {
  title: "Window Functions",
  content: `
    <div class="topic-content">
      <h3 class="topic-subtitle">Window Functions</h3>
      <p class="topic-paragraph">Window functions perform calculations across a set of table rows that are somehow related to the current row. They are similar to aggregate functions, but they don't cause rows to become grouped into a single output row.</p>
      
      <h4 class="topic-subtitle">Key Points:</h4>
      <ul class="topic-list">
        <li>Operate on a window (set of rows) defined by the OVER clause.</li>
        <li>Common window functions include ROW_NUMBER(), RANK(), DENSE_RANK(), LAG(), LEAD().</li>
        <li>Can use PARTITION BY to divide the result set into partitions.</li>
        <li>ORDER BY within OVER clause determines the order of rows within each partition.</li>
      </ul>

      <h4 class="topic-subtitle">Syntax:</h4>
      <pre class="topic-code">
SELECT column1, column2,
  WINDOW_FUNCTION() OVER (
    [PARTITION BY column1, column2, ...]
    [ORDER BY column3, column4, ...]
  ) AS new_column
FROM table_name;
      </pre>

      <h4 class="topic-subtitle">Example:</h4>
      <pre class="topic-code">
SELECT 
  name,
  category,
  price,
  ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) as price_rank
FROM products;
      </pre>

      <p class="topic-paragraph">This query assigns a rank to each product within its category based on price, with the most expensive product in each category ranked 1.</p>

      <div class="topic-note">
        <p><strong>Note:</strong> Window functions are powerful tools for advanced data analysis in SQL. They allow you to perform calculations across a set of rows while still returning a value for each row, enabling complex analytical queries that would be difficult or impossible with standard SQL operations. Some key considerations when using window functions:
        <ul>
          <li>Performance: Window functions can be computationally intensive, especially on large datasets. Use them judiciously and consider indexing strategies to optimize performance.</li>
          <li>Framing: The ROWS or RANGE clause can be used to define a frame within the partition, allowing for operations like moving averages or running totals.</li>
          <li>Compatibility: Not all database systems support all window functions. Check your specific database's documentation for supported functions and syntax.</li>
          <li>Combinations: Window functions can often be combined with other SQL features like CTEs or subqueries for even more powerful analysis.</li>
        </ul>
        Mastering window functions can greatly enhance your ability to perform complex data analysis directly in SQL.</p>
      </div>
    </div>
  `,
  practice: `-- Calculate a moving average of sales over the last 3 days
SELECT 
  dates.date,
  SUM(sales.total_price) as daily_sales,
  AVG(SUM(sales.total_price)) OVER (
    ORDER BY dates.date
    ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
  ) as moving_avg_3day
FROM sales
JOIN dates ON sales.date_id = dates.id
GROUP BY dates.date
ORDER BY dates.date;`
};