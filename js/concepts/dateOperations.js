export const dateOperations = {
  title: "Date Operations",
  content: `
    <h3>Date Operations</h3>
    <p>SQL provides various functions and operators to work with date and time data. These operations are crucial for time-based analysis and reporting.</p>
    
    <h4>Key Points:</h4>
    <ul>
      <li>Date formats can vary between database systems.</li>
      <li>Common operations include extraction (e.g., year, month, day), addition, and subtraction.</li>
      <li>Date comparisons are frequently used in WHERE clauses.</li>
      <li>Many databases support interval data types for date arithmetic.</li>
    </ul>

    <h4>Common Date Functions (may vary by database):</h4>
    <ul>
      <li>EXTRACT(): Extracts parts of a date</li>
      <li>DATE_TRUNC(): Truncates a timestamp to a specified precision</li>
      <li>DATEADD() or +: Adds an interval to a date</li>
      <li>DATEDIFF(): Calculates the difference between two dates</li>
    </ul>

    <h4>Example:</h4>
    <pre>
    SELECT 
      order_date,
      EXTRACT(YEAR FROM order_date) AS year,
      EXTRACT(MONTH FROM order_date) AS month,
      EXTRACT(DAY FROM order_date) AS day,
      DATE_TRUNC('month', order_date) AS month_start,
      order_date + INTERVAL '7 days' AS due_date,
      DATEDIFF(day, order_date, CURRENT_DATE) AS days_since_order
    FROM orders;
    </pre>

    <p>This example demonstrates various date operations including extraction, truncation, addition, and difference calculation.</p>
  `,
  practice: `-- Query to analyze sales by day of week
SELECT 
  dates.day_of_week,
  COUNT(*) as num_sales,
  SUM(sales.total_price) as total_revenue
FROM sales
JOIN dates ON sales.date_id = dates.id
GROUP BY dates.day_of_week
ORDER BY num_sales DESC;`
};
