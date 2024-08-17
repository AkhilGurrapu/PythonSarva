export const joinOperations = {
    title: "Join Operations",
    content: `
      <h3>Join Operations</h3>
      <p>Join operations in SQL are used to combine rows from two or more tables based on a related column between them. They are essential for querying data across multiple tables in a relational database.</p>
      
      <h4>Key Types of Joins:</h4>
      <ul>
        <li>INNER JOIN: Returns records that have matching values in both tables</li>
        <li>LEFT (OUTER) JOIN: Returns all records from the left table, and matched records from the right table</li>
        <li>RIGHT (OUTER) JOIN: Returns all records from the right table, and matched records from the left table</li>
        <li>FULL (OUTER) JOIN: Returns all records when there is a match in either left or right table</li>
        <li>CROSS JOIN: Returns the Cartesian product of the two tables</li>
      </ul>
  
      <h4>Syntax:</h4>
      <pre>
      SELECT columns
      FROM table1
      JOIN_TYPE table2
      ON table1.column = table2.column;
      </pre>
  
      <h4>Example:</h4>
      <pre>
      SELECT customers.name, sales.total_price
      FROM customers
      INNER JOIN sales ON customers.id = sales.customer_id
      WHERE sales.total_price > 100;
      </pre>
  
      <p>This query joins the customers and sales tables to show customer names for sales over $100.</p>
    `,
    practice: `-- Find all products that have been sold, along with their sale dates
  SELECT products.name, dates.date
  FROM products
  LEFT JOIN sales ON products.id = sales.product_id
  LEFT JOIN dates ON sales.date_id = dates.id
  ORDER BY dates.date DESC;`
  };
  