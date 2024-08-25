export const havingClause = {
  title: "Having Clause",
  content: `
    <div class="topic-content">
      <h3 class="topic-subtitle">Having Clause</h3>
      <p class="topic-paragraph">The HAVING clause is used to specify a search condition for a group or an aggregate. It's often used with GROUP BY to filter grouped results.</p>
      
      <h4 class="topic-subtitle">Key Points:</h4>
      <ul class="topic-list">
        <li>HAVING is applied after GROUP BY, while WHERE is applied before.</li>
        <li>Use HAVING with aggregate functions, use WHERE for individual rows.</li>
        <li>HAVING can refer to aggregate functions, which WHERE cannot.</li>
        <li>Improves query readability for conditions on grouped data.</li>
      </ul>

      <h4 class="topic-subtitle">Syntax:</h4>
      <pre class="topic-code">
SELECT column_name, aggregate_function(column_name)
FROM table_name
WHERE condition
GROUP BY column_name
HAVING condition;
      </pre>

      <h4 class="topic-subtitle">Example:</h4>
      <pre class="topic-code">
SELECT 
  category,
  COUNT(*) as product_count,
  AVG(price) as avg_price
FROM products
GROUP BY category
HAVING COUNT(*) > 5 AND AVG(price) > 100;
      </pre>

      <p class="topic-paragraph">This query groups products by category, then filters to show only categories with more than 5 products and an average price above 100.</p>

      <div class="topic-note">
        <p><strong>Note:</strong> The HAVING clause is crucial when you need to filter results based on aggregate functions. While WHERE filters individual rows before they are grouped, HAVING filters the groups after aggregation. This makes HAVING particularly useful for complex analytical queries where you need to apply conditions to grouped or aggregated data.</p>
      </div>
    </div>
  `,
  practice: `-- Find customers who have made more than 1 purchase
-- and calculate their total spend
SELECT 
  customer_id,
  COUNT(*) as purchase_count,
  SUM(total_price) as total_spend
FROM sales
GROUP BY customer_id
HAVING COUNT(*) > 1
ORDER BY total_spend DESC;`
};
