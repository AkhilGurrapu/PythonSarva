export const marketBasketAnalysis = {
  title: "Market Basket Analysis",
  content: `
  <div class="topic-content">
    <h3 class="topic-subtitle">Market Basket Analysis</h3>
    <p class="topic-paragraph">Market basket analysis helps identify products that are often purchased together, which can be used for product placement and promotional strategies.</p>
    
    <h4 class="topic-subtitle">Example:</h4>
    <pre class="topic-code">
WITH product_pairs AS (
SELECT 
  s1.product_id as product1_id,
  s2.product_id as product2_id,
  COUNT(*) as pair_count
FROM sales s1
JOIN sales s2 ON s1.sale_id = s2.sale_id AND s1.product_id < s2.product_id
GROUP BY s1.product_id, s2.product_id
)
SELECT 
p1.name as product1_name,
p2.name as product2_name,
pp.pair_count,
pp.pair_count * 100.0 / (SELECT COUNT(DISTINCT sale_id) FROM sales) as percentage_of_sales
FROM product_pairs pp
JOIN products p1 ON pp.product1_id = p1.id
JOIN products p2 ON pp.product2_id = p2.id
ORDER BY pp.pair_count DESC
LIMIT 10;
    </pre>
    
    <p class="topic-paragraph">This query identifies the top 10 product pairs that are most frequently purchased together.</p>

    <div class="topic-note">
      <p><strong>Note:</strong> Market Basket Analysis is a powerful technique in retail analytics. It can reveal valuable insights about customer purchasing behavior, which can be used to optimize store layouts, create targeted promotions, and improve cross-selling strategies. When implementing this analysis, consider factors like seasonality and promotions that might influence purchasing patterns. Also, be aware that for large datasets, this type of analysis can be computationally intensive, so optimization techniques like indexing and partitioning may be necessary for efficient queries.</p>
    </div>
  </div>
  `,
  practice: `-- Find products that are often purchased with a specific product (e.g., product_id = 1)
WITH co_purchases AS (
SELECT 
  s2.product_id,
  COUNT(*) as co_purchase_count
FROM sales s1
JOIN sales s2 ON s1.sale_id = s2.sale_id AND s1.product_id != s2.product_id
WHERE s1.product_id = 1
GROUP BY s2.product_id
)
SELECT 
p.name,
cp.co_purchase_count,
cp.co_purchase_count * 100.0 / (SELECT COUNT(*) FROM sales WHERE product_id = 1) as percentage
FROM co_purchases cp
JOIN products p ON cp.product_id = p.id
ORDER BY cp.co_purchase_count DESC
LIMIT 5;`,
};