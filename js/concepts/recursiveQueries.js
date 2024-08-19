export const recursiveQueries = {
  title: "Recursive Queries",
  content: `
    <div class="topic-content">
      <h3 class="topic-subtitle">Recursive Queries</h3>
      <p class="topic-paragraph">Recursive queries in SQL are used to query hierarchical or tree-structured data. They are implemented using Common Table Expressions (CTEs) with a UNION ALL between the base case and the recursive case.</p>
      
      <h4 class="topic-subtitle">Key Points:</h4>
      <ul class="topic-list">
        <li>Useful for traversing trees or graphs in databases.</li>
        <li>Consists of an anchor member (base case) and a recursive member.</li>
        <li>The recursive member references the CTE itself.</li>
        <li>Must have a termination condition to avoid infinite loops.</li>
      </ul>

      <h4 class="topic-subtitle">Syntax:</h4>
      <pre class="topic-code">
WITH RECURSIVE cte_name AS (
  -- Anchor member
  SELECT ... 
  UNION ALL
  -- Recursive member
  SELECT ... 
  FROM cte_name
  WHERE ...
)
SELECT * FROM cte_name;
      </pre>

      <h4 class="topic-subtitle">Example:</h4>
      <pre class="topic-code">
WITH RECURSIVE subordinates AS (
  -- Anchor member
  SELECT employee_id, name, manager_id
  FROM employees
  WHERE employee_id = 1
  UNION ALL
  -- Recursive member
  SELECT e.employee_id, e.name, e.manager_id
  FROM employees e
  INNER JOIN subordinates s ON s.employee_id = e.manager_id
)
SELECT * FROM subordinates;
      </pre>

      <p class="topic-paragraph">This query retrieves all subordinates in an organizational hierarchy starting from employee_id 1.</p>

      <div class="topic-note">
        <p><strong>Note:</strong> Recursive queries are powerful tools for working with hierarchical data structures in SQL. They're particularly useful for tasks like traversing organizational charts, analyzing bill of materials, or exploring network relationships. However, recursive queries can be complex and potentially resource-intensive, especially for deep hierarchies. It's important to ensure that your recursive queries have a proper termination condition to prevent infinite loops. Also, consider the depth of recursion and the size of your dataset when using these queries, as they can impact performance for very large or deeply nested structures.</p>
      </div>
    </div>
  `,
  practice: `-- Create a recursive query to generate a date series
WITH RECURSIVE date_series AS (
  SELECT MIN(dates.date) as date FROM dates
  UNION ALL
  SELECT date(date, '+1 day')
  FROM date_series
  WHERE date < (SELECT MAX(dates.date) FROM dates)
)
SELECT date FROM date_series;`
};