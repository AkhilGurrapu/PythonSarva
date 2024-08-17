export const havingClause = {
  title: "Having Clause",
  content: `
    <h3>Having Clause</h3>
    <p>The HAVING clause is used to specify a search condition for a group or an aggregate. It's often used with GROUP BY to filter grouped results.</p>
    
    <h4>Key Points:</h4>
    <ul>
      <li>HAVING is applied after GROUP BY, while WHERE is applied before.</li>
      <li>Use HAVING with aggregate functions, use WHERE for individual rows.</li>
      <li>HAVING can refer to aggregate functions, which WHERE cannot.</li>
      <li>Improves query readability for conditions on grouped data.</li>
    </ul>

    <h4>Syntax:</h4>
    <pre>
    SELECT column_name, aggregate_function(column_name)
    FROM table_name
    WHERE condition
    GROUP BY column_name
    HAVING condition;
    </pre>

    <h4>Example:</h4>
    <pre>
    SELECT 
      category,
      COUNT(*) as product_count,
      AVG(price) as avg_price
    FROM products
    GROUP BY category
    HAVING COUNT(*) > 5 AND AVG(price) > 100;
    </pre>

    <p>This query groups products by category, then filters to show only categories with more than 5 products and an average price above 100.</p>
  `,
  practice: `-- Find customers who have made more than 3 purchases with a total spend over 1000
SELECT 
  customer_id,
  COUNT(*) as purchase_count,
  SUM(total_price) as total_spend
FROM sales
GROUP BY customer_id
HAVING COUNT(*) > 3 AND SUM(total_price) > 1000;`
};
