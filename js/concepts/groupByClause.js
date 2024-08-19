export const groupByClause = {
  title: "Group By Clause",
  content: `
    <div class="topic-content">
      <h3 class="topic-subtitle">Group By Clause</h3>
      <p class="topic-paragraph">The GROUP BY clause in SQL is used to group rows that have the same values in specified columns. It is often used with aggregate functions to perform calculations on each group of rows.</p>
      
      <h4 class="topic-subtitle">Key Points:</h4>
      <ul class="topic-list">
        <li>Groups rows with the same values in the specified columns</li>
        <li>Often used with aggregate functions like COUNT(), SUM(), AVG(), etc.</li>
        <li>All columns in the SELECT statement must either be in the GROUP BY clause or be used with an aggregate function</li>
        <li>Can be used with HAVING clause to filter groups based on a condition</li>
      </ul>
  
      <h4 class="topic-subtitle">Syntax:</h4>
      <pre class="topic-code">
SELECT column1, aggregate_function(column2)
FROM table
GROUP BY column1;
      </pre>
  
      <h4 class="topic-subtitle">Example:</h4>
      <pre class="topic-code">
SELECT category, COUNT(*) as product_count, AVG(price) as average_price
FROM products
GROUP BY category;
      </pre>
  
      <p class="topic-paragraph">This query groups products by category and calculates the count and average price for each category.</p>

      <div class="topic-note">
        <p><strong>Note:</strong> The GROUP BY clause is powerful for summarizing and analyzing data. It's especially useful for generating reports and deriving insights from large datasets. Remember to use the HAVING clause when you need to filter based on the results of aggregate functions applied to groups.</p>
      </div>
    </div>
  `,
  practice: `-- Calculate total sales for each customer
SELECT customers.name, SUM(sales.total_price) as total_purchases
FROM customers
LEFT JOIN sales ON customers.id = sales.customer_id
GROUP BY customers.id
ORDER BY total_purchases DESC;`
};