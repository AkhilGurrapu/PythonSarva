export const cohortAnalysis = {
  title: "Cohort Analysis",
  content: `
    <div class="topic-content">
      <h3 class="topic-subtitle">Cohort Analysis</h3>
      <p class="topic-paragraph">Cohort analysis is a technique used to analyze groups of users who share a common characteristic over a specific period. It's particularly useful for understanding user behavior and retention over time.</p>
      
      <h4 class="topic-subtitle">Key Points:</h4>
      <ul class="topic-list">
        <li>Group users into cohorts based on a shared characteristic (e.g., sign-up date).</li>
        <li>Track behavior of these cohorts over time periods (e.g., months since sign-up).</li>
        <li>Often involves complex SQL with window functions and self-joins.</li>
        <li>Helps in understanding user retention, engagement, and lifetime value.</li>
      </ul>

      <h4 class="topic-subtitle">Common Steps:</h4>
      <ol class="topic-list">
        <li>Identify the cohort for each user (e.g., first purchase month).</li>
        <li>Calculate the time period for each user action relative to their cohort.</li>
        <li>Aggregate data for each cohort and time period.</li>
      </ol>

      <h4 class="topic-subtitle">Example Concept:</h4>
      <pre class="topic-code">
WITH user_cohorts AS (
  SELECT 
    user_id,
    DATE_TRUNC('month', MIN(purchase_date)) AS cohort_month
  FROM purchases
  GROUP BY user_id
),
user_activity AS (
  SELECT 
    uc.user_id,
    uc.cohort_month,
    DATE_TRUNC('month', p.purchase_date) AS activity_month,
    DATE_PART('month', DATE_TRUNC('month', p.purchase_date) - uc.cohort_month) AS months_since_cohort
  FROM user_cohorts uc
  JOIN purchases p ON uc.user_id = p.user_id
)
SELECT 
  cohort_month,
  months_since_cohort,
  COUNT(DISTINCT user_id) AS active_users
FROM user_activity
GROUP BY cohort_month, months_since_cohort
ORDER BY cohort_month, months_since_cohort;
      </pre>

      <p class="topic-paragraph">This example demonstrates how to perform a basic cohort analysis, tracking user activity across different cohorts over time.</p>

      <div class="topic-note">
        <p><strong>Note:</strong> Cohort analysis is a powerful tool for understanding user behavior over time. It can provide insights into user retention, product stickiness, and the long-term value of different user segments. When implementing cohort analysis, pay attention to the choice of cohort definition and time periods, as these can significantly impact the insights derived.</p>
      </div>
    </div>
  `,
  practice: `-- Perform a cohort analysis on customer purchases
WITH first_purchases AS (
  SELECT 
    customer_id,
    MIN(dates.date) AS first_purchase_date
  FROM sales
  JOIN dates ON sales.date_id = dates.id
  GROUP BY customer_id
),
customer_activity AS (
  SELECT 
    fp.customer_id,
    fp.first_purchase_date,
    s.date_id,
    JULIANDAY(dates.date) - JULIANDAY(fp.first_purchase_date) AS days_since_first_purchase
  FROM first_purchases fp
  JOIN sales s ON fp.customer_id = s.customer_id
  JOIN dates ON s.date_id = dates.id
)
SELECT 
  first_purchase_date,
  COUNT(DISTINCT CASE WHEN days_since_first_purchase BETWEEN 0 AND 30 THEN customer_id END) AS month_1,
  COUNT(DISTINCT CASE WHEN days_since_first_purchase BETWEEN 31 AND 60 THEN customer_id END) AS month_2,
  COUNT(DISTINCT CASE WHEN days_since_first_purchase BETWEEN 61 AND 90 THEN customer_id END) AS month_3
FROM customer_activity
GROUP BY first_purchase_date
ORDER BY first_purchase_date;`
};