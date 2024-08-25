export const caseStatement = {
  title: "Case Statement",
  content: `
    <div class="topic-content">
      <h3 class="topic-subtitle">Case Statement</h3>
      <p class="topic-paragraph">The CASE statement is used to add conditional logic to a SQL query. It allows you to specify different results based on conditions, similar to if-then-else statements in programming languages.</p>
      
      <h4 class="topic-subtitle">Key Points:</h4>
      <ul class="topic-list">
        <li>Can be used in SELECT, WHERE, and ORDER BY clauses.</li>
        <li>Two forms: simple CASE and searched CASE.</li>
        <li>Each WHEN condition is tested in order until a true condition is found.</li>
        <li>If no condition is true and there's no ELSE clause, it returns NULL.</li>
      </ul>

      <h4 class="topic-subtitle">Syntax:</h4>
      <pre class="topic-code">
CASE
  WHEN condition1 THEN result1
  WHEN condition2 THEN result2
  ...
  ELSE result_else
END
      </pre>

      <h4 class="topic-subtitle">Example:</h4>
      <pre class="topic-code">
SELECT 
  name,
  price,
  CASE 
    WHEN price < 100 THEN 'Budget'
    WHEN price >= 100 AND price < 500 THEN 'Mid-range'
    ELSE 'Premium'
  END AS price_category
FROM products;
      </pre>

      <p class="topic-paragraph">This query categorizes products into 'Budget', 'Mid-range', or 'Premium' based on their price.</p>

      <div class="topic-note">
        <p><strong>Note:</strong> The CASE statement is a powerful tool for data transformation and categorization directly within your SQL queries. It can significantly simplify complex logical operations on your data.</p>
      </div>
    </div>
  `,
  practice: `-- Categorize individual sales based on their total price
SELECT 
  sale_id,
  total_price,
  CASE
    WHEN total_price < 100 THEN 'Low Value Sale'
    WHEN total_price >= 100 AND total_price < 500 THEN 'Medium Value Sale'
    ELSE 'High Value Sale'
  END AS sale_category
FROM sales
ORDER BY total_price DESC
LIMIT 10;`
};