export const views = {
  title: "Views",
  content: `
    <div class="topic-content">
      <h3 class="topic-subtitle">Views</h3>
      <p class="topic-paragraph">A view in SQL is a virtual table based on the result-set of an SQL statement. It contains rows and columns, just like a real table, but it doesn't store the data itself.</p>
      
      <h4 class="topic-subtitle">Key Points:</h4>
      <ul class="topic-list">
        <li>Simplify complex queries by encapsulating them in a named view.</li>
        <li>Provide an additional layer of security by restricting access to underlying tables.</li>
        <li>Can be queried like a regular table.</li>
        <li>Updates to the underlying tables are reflected in the view.</li>
      </ul>

      <h4 class="topic-subtitle">Syntax:</h4>
      <pre class="topic-code">
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;
      </pre>

      <h4 class="topic-subtitle">Example:</h4>
      <pre class="topic-code">
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

      <p class="topic-paragraph">This creates a view that shows all sales over $1000, including customer and product details. You can then query this view as if it were a table:</p>
      <pre class="topic-code">
SELECT * FROM high_value_sales WHERE product_name LIKE 'Laptop%';
      </pre>

      <div class="topic-note">
        <p><strong>Note:</strong> Views are powerful tools for simplifying complex queries and controlling data access. They can significantly improve code readability and maintenance by encapsulating complex logic into a named object. However, be aware that views can sometimes impact performance, especially if they involve complex joins or aggregations. For frequently accessed data, consider using materialized views (if supported by your database system) which store the query results for faster access. Also, remember that while views can provide a layer of security, they should be used in conjunction with proper database security practices for comprehensive data protection.</p>
      </div>
    </div>
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