export const recursiveQueries = {
  title: "Recursive Queries",
  content: `
    <h3>Recursive Queries</h3>
    <p>Recursive queries in SQL are used to query hierarchical or tree-structured data. They are implemented using Common Table Expressions (CTEs) with a UNION ALL between the base case and the recursive case.</p>
    
    <h4>Key Points:</h4>
    <ul>
      <li>Useful for traversing trees or graphs in databases.</li>
      <li>Consists of an anchor member (base case) and a recursive member.</li>
      <li>The recursive member references the CTE itself.</li>
      <li>Must have a termination condition to avoid infinite loops.</li>
    </ul>

    <h4>Syntax:</h4>
    <pre>
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

    <h4>Example:</h4>
    <pre>
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

    <p>This query retrieves all subordinates in an organizational hierarchy starting from employee_id 1.</p>
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
