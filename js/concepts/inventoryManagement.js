export const inventoryManagement = {
  title: "Inventory Management",
  content: `
    <h3>Inventory Management</h3>
    <p>Inventory management in SQL involves tracking stock levels, analyzing product movement, and identifying potential stockouts or overstock situations.</p>
    
    <h4>Key Aspects:</h4>
    <ul>
      <li>Stock Level Tracking: Monitoring current inventory for each product</li>
      <li>Reorder Point Analysis: Identifying when to reorder products</li>
      <li>Turnover Rate: How quickly inventory is sold and replaced</li>
      <li>Product Performance: Analyzing which products are selling well or poorly</li>
    </ul>

    <h4>Example Query:</h4>
    <pre>
    WITH product_sales AS (
      SELECT 
        product_id,
        SUM(quantity) as total_sold,
        MAX(dates.date) as last_sale_date
      FROM sales
      JOIN dates ON sales.date_id = dates.id
      WHERE dates.date >= DATE_SUB(CURRENT_DATE, INTERVAL 30 DAY)
      GROUP BY product_id
    )
    SELECT 
      p.id,
      p.name,
      p.stock as current_stock,
      COALESCE(ps.total_sold, 0) as sold_last_30_days,
      p.stock - COALESCE(ps.total_sold, 0) as projected_stock,
      CASE 
        WHEN p.stock - COALESCE(ps.total_sold, 0) < 10 THEN 'Reorder'
        WHEN p.stock - COALESCE(ps.total_sold, 0) > 100 THEN 'Overstocked'
        ELSE 'OK'
      END as stock_status
    FROM products p
    LEFT JOIN product_sales ps ON p.id = ps.product_id
    ORDER BY stock_status, projected_stock;
    </pre>

    <p>This query provides an inventory status report, showing current stock, recent sales, projected stock, and recommending actions based on stock levels.</p>
  `,
  practice: `-- Calculate inventory turnover rate
WITH annual_sales AS (
  SELECT 
    product_id,
    SUM(quantity) as total_quantity_sold
  FROM sales
  JOIN dates ON sales.date_id = dates.id
  WHERE dates.date >= DATE_SUB(CURRENT_DATE, INTERVAL 1 YEAR)
  GROUP BY product_id
)
SELECT 
  p.id,
  p.name,
  p.stock as current_stock,
  COALESCE(a.total_quantity_sold, 0) as annual_sales,
  CASE 
    WHEN p.stock > 0 THEN COALESCE(a.total_quantity_sold, 0) / p.stock
    ELSE NULL
  END as turnover_rate
FROM products p
LEFT JOIN annual_sales a ON p.id = a.product_id
ORDER BY turnover_rate DESC NULLS LAST;`
};
