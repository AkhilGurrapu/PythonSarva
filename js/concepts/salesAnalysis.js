export const salesAnalysis = {
  title: "Sales Analysis",
  content: `
    <h3>Sales Analysis</h3>
    <p>Sales analysis involves examining sales data to evaluate the performance of a business. SQL provides powerful tools for aggregating and analyzing sales data.</p>
    
    <h4>Key Aspects of Sales Analysis:</h4>
    <ul>
      <li>Total Revenue: Sum of all sales</li>
      <li>Average Order Value: Total revenue divided by number of orders</li>
      <li>Sales Trends: How sales change over time</li>
      <li>Top Selling Products: Products with the highest sales volume or revenue</li>
      <li>Customer Segmentation: Analyzing sales by customer groups</li>
    </ul>

    <h4>Example Query:</h4>
    <pre>
    SELECT 
      dates.year,
      dates.month,
      SUM(sales.total_price) as total_revenue,
      COUNT(DISTINCT sales.sale_id) as num_orders,
      SUM(sales.total_price) / COUNT(DISTINCT sales.sale_id) as avg_order_value,
      SUM(CASE WHEN products.category = 'Electronics' THEN sales.total_price ELSE 0 END) as electronics_revenue
    FROM sales
    JOIN dates ON sales.date_id = dates.id
    JOIN products ON sales.product_id = products.id
    GROUP BY dates.year, dates.month
    ORDER BY dates.year, dates.month;
    </pre>

    <p>This query provides a monthly sales summary including total revenue, number of orders, average order value, and revenue from a specific category (Electronics).</p>
  `,
  practice: `-- Identify top 5 customers by total spend
SELECT 
  customers.name,
  SUM(sales.total_price) as total_spend,
  COUNT(DISTINCT sales.sale_id) as num_purchases,
  SUM(sales.total_price) / COUNT(DISTINCT sales.sale_id) as avg_purchase_value
FROM sales
JOIN customers ON sales.customer_id = customers.id
GROUP BY customers.id
ORDER BY total_spend DESC
LIMIT 5;`
};