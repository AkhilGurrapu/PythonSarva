export const views = {
  title: "Views",
  content: `
    <h3>Views</h3>
    <p>A view in SQL is a virtual table based on the result-set of an SQL statement. It contains rows and columns, just like a real table, but it doesn't store the data itself.</p>
    
    <h4>Key Points:</h4>
    <ul>
      <li>Simplify complex queries by encapsulating them in a named view.</li>
      <li>Provide an additional layer of security by restricting access to underlying tables.</li>
      <li>Can be queried like a regular table.</li>
      <li>Updates to the underlying tables are reflected in the view.</li>
    </ul>

    <h4>Syntax:</h4>
    <pre>
    CREATE VIEW view_name AS
    SELECT column1, column2, ...
    FROM table_name
    WHERE condition;
    </pre>

    <h4>Example:</h4>
    <pre>
    CREATE VIEW high_value_sales AS
    SELECT 
      c.name as customer_name,
      p.name as product_name,
      s.total_price
    FROM sales s
    JOIN customers c ON s.customer_id = c.id
    JOIN products p ON s.product_id = p.id
    WHERE s.total_price > 1000;
    </pre>

    <p>This creates a view that shows all sales over $1000, including customer and product details. You can then query this view as if it were a table:</p>
    <pre>
    SELECT * FROM high_value_sales WHERE product_name LIKE 'Laptop%';
    </pre>
  `,
  practice: `-- Create a view for monthly sales summary and query it
CREATE VIEW monthly_sales_summary AS
SELECT 
  dates.year,
  dates.month,
  SUM(sales.total_price) as total_sales,
  COUNT(DISTINCT sales.customer_id) as unique_customers
FROM sales
JOIN dates ON sales.date_id = dates.id
GROUP BY dates.year, dates.month;

-- Now query the view
SELECT * FROM monthly_sales_summary WHERE total_sales > 10000;`
};
