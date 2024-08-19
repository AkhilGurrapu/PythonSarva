export const customerSegmentation = {
  title: "Customer Segmentation",
  content: `
    <div class="topic-content">
      <h3 class="topic-subtitle">Customer Segmentation</h3>
      <p class="topic-paragraph">Customer segmentation is the practice of dividing a customer base into groups of individuals that are similar in specific ways relevant to marketing, such as age, gender, interests, and spending habits.</p>
      
      <h4 class="topic-subtitle">Key Points:</h4>
      <ul class="topic-list">
        <li>Helps in targeted marketing and personalized services</li>
        <li>Can be based on demographic, behavioral, or value-based criteria</li>
        <li>Involves analyzing customer data across various dimensions</li>
        <li>Often uses techniques like RFM (Recency, Frequency, Monetary) analysis</li>
      </ul>

      <h4 class="topic-subtitle">Example: RFM Analysis Query</h4>
      <pre class="topic-code">
WITH rfm_data AS (
  SELECT 
    customer_id,
    MAX(dates.date) as last_purchase_date,
    COUNT(DISTINCT sales.sale_id) as frequency,
    SUM(sales.total_price) as monetary
  FROM sales
  JOIN dates ON sales.date_id = dates.id
  GROUP BY customer_id
),
rfm_scores AS (
  SELECT 
    *,
    NTILE(4) OVER (ORDER BY last_purchase_date DESC) as recency_score,
    NTILE(4) OVER (ORDER BY frequency) as frequency_score,
    NTILE(4) OVER (ORDER BY monetary) as monetary_score
  FROM rfm_data
)
SELECT 
  customer_id,
  recency_score,
  frequency_score,
  monetary_score,
  (recency_score + frequency_score + monetary_score) / 3.0 as avg_score,
  CASE 
    WHEN (recency_score + frequency_score + monetary_score) / 3.0 >= 3.5 THEN 'Best Customers'
    WHEN (recency_score + frequency_score + monetary_score) / 3.0 >= 2.5 THEN 'Loyal Customers'
    WHEN (recency_score + frequency_score + monetary_score) / 3.0 >= 1.5 THEN 'Potential Churners'
    ELSE 'Lost Customers'
  END as customer_segment
FROM rfm_scores;
      </pre>

      <p class="topic-paragraph">This query performs an RFM analysis to segment customers based on their recent purchase activity, purchase frequency, and total spend.</p>

      <div class="topic-note">
        <p><strong>Note:</strong> Customer segmentation is a powerful tool for businesses to understand their customer base better. By using SQL to perform segmentation analysis, you can uncover valuable insights about customer behavior and preferences. This information can be used to tailor marketing strategies, improve customer retention, and increase overall customer lifetime value.</p>
      </div>
    </div>
  `,
  practice: `-- Segment customers based on their average order value
WITH customer_aov AS (
  SELECT 
    customer_id,
    AVG(total_price) as avg_order_value
  FROM sales
  GROUP BY customer_id
)
SELECT 
  CASE 
    WHEN avg_order_value >= 1000 THEN 'High Value'
    WHEN avg_order_value >= 500 THEN 'Medium Value'
    ELSE 'Low Value'
  END as customer_segment,
  COUNT(*) as segment_size,
  AVG(avg_order_value) as segment_avg_order_value
FROM customer_aov
GROUP BY 
  CASE 
    WHEN avg_order_value >= 1000 THEN 'High Value'
    WHEN avg_order_value >= 500 THEN 'Medium Value'
    ELSE 'Low Value'
  END;`
};