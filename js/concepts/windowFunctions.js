export const windowFunctions = {
  title: "Window Functions",
  content: `
    <h3>Window Functions</h3>
    <p>Window functions perform calculations across a set of table rows that are somehow related to the current row. They are similar to aggregate functions, but they don't cause rows to become grouped into a single output row.</p>
    
    <h4>Key Points:</h4>
    <ul>
      <li>Operate on a window (set of rows) defined by the OVER clause.</li>
      <li>Common window functions include ROW_NUMBER(), RANK(), DENSE_RANK(), LAG(), LEAD().</li>
      <li>Can use PARTITION BY to divide the result set into partitions.</li>
      <li>ORDER BY within OVER clause determines the order of rows within each partition.</li>
    </ul>

    <h4>Syntax:</h4>
    <pre>
    SELECT column1, column2,
      WINDOW_FUNCTION() OVER (
        [PARTITION BY column1, column2, ...]
        [ORDER BY column3, column4, ...]
      ) AS new_column
    FROM table_name;
    </pre>

    <h4>Example:</h4>
    <pre>
    SELECT 
      name,
      category,
      price,
      ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) as price_rank
    FROM products;
    </pre>

    <p>This query assigns a rank to each product within its category based on price, with the most expensive product in each category ranked 1.</p>
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