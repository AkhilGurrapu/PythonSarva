export const commonTableExpressions = {
  title: "Common Table Expressions (CTEs)",
  content: `
    <h3>Common Table Expressions (CTEs)</h3>
    <p>Common Table Expressions, or CTEs, provide a way to write auxiliary statements for use in a larger query. They act like temporary named result sets that exist only for the duration of the query.</p>
    
    <h4>Key Points:</h4>
    <ul>
      <li>Defined using WITH clause at the beginning of a SELECT, INSERT, UPDATE, DELETE, or MERGE statement.</li>
      <li>Can reference other CTEs defined in the same WITH clause.</li>
      <li>Improve readability by breaking down complex queries into simpler, named parts.</li>
      <li>Can be recursive, allowing for hierarchical or tree-structured data queries.</li>
    </ul>

    <h4>Syntax:</h4>
    <pre>
    WITH cte_name AS (
      SELECT ...
    )
    SELECT ... FROM cte_name;
    </pre>

    <h4>Example:</h4>
    <pre>
    WITH high_value_products AS (
      SELECT id, name, price
      FROM products
      WHERE price > 1000
    )
    SELECT name, price
    FROM high_value_products
    WHERE price < 2000;
    </pre>

    <p>This query first defines a CTE named 'high_value_products' that selects products priced over 1000. The main query then uses this CTE to further filter products priced under 2000.</p>
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
