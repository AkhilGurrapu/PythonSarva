export const commonTableExpressions = {
  title: "Common Table Expressions (CTEs)",
  content: `
    <div class="topic-content">
      <h3 class="topic-subtitle">Common Table Expressions (CTEs)</h3>
      <p class="topic-paragraph">Common Table Expressions, or CTEs, provide a way to write auxiliary statements for use in a larger query. They act like temporary named result sets that exist only for the duration of the query.</p>
      
      <h4 class="topic-subtitle">Key Points:</h4>
      <ul class="topic-list">
        <li>Defined using WITH clause at the beginning of a SELECT, INSERT, UPDATE, DELETE, or MERGE statement.</li>
        <li>Can reference other CTEs defined in the same WITH clause.</li>
        <li>Improve readability by breaking down complex queries into simpler, named parts.</li>
        <li>Can be recursive, allowing for hierarchical or tree-structured data queries.</li>
      </ul>

      <h4 class="topic-subtitle">Syntax:</h4>
      <pre class="topic-code">
WITH cte_name AS (
  SELECT ...
)
SELECT ... FROM cte_name;
      </pre>

      <h4 class="topic-subtitle">Example:</h4>
      <pre class="topic-code">
WITH high_value_products AS (
  SELECT id, name, price
  FROM products
  WHERE price > 1000
)
SELECT name, price
FROM high_value_products
WHERE price < 2000;
      </pre>

      <p class="topic-paragraph">This query first defines a CTE named 'high_value_products' that selects products priced over 1000. The main query then uses this CTE to further filter products priced under 2000.</p>

      <div class="topic-note">
        <p><strong>Note:</strong> CTEs are particularly useful for improving the structure and readability of complex queries. They allow you to break down a large query into smaller, more manageable pieces, making it easier to understand and maintain. CTEs can also be used to simplify recursive queries, which are powerful for working with hierarchical data.</p>
      </div>
    </div>
  `,
  practice: `-- Use a CTE to find customers who have made purchases in all stores
WITH customer_stores AS (
  SELECT customer_id, COUNT(DISTINCT store_id) as stores_visited
  FROM sales
  GROUP BY customer_id
)
SELECT c.name, c.email
FROM customers c
JOIN customer_stores cs ON c.id = cs.customer_id
WHERE cs.stores_visited = (SELECT COUNT(*) FROM stores);`
};