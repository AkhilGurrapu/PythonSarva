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
  
  export const groupByClause = {
    title: "Group By Clause",
    content: `
      <h3>Group By Clause</h3>
      <p>The GROUP BY clause in SQL is used to group rows that have the same values in specified columns. It is often used with aggregate functions to perform calculations on each group of rows.</p>
      
      <h4>Key Points:</h4>
      <ul>
        <li>Groups rows with the same values in the specified columns</li>
        <li>Often used with aggregate functions like COUNT(), SUM(), AVG(), etc.</li>
        <li>All columns in the SELECT statement must either be in the GROUP BY clause or be used with an aggregate function</li>
        <li>Can be used with HAVING clause to filter groups based on a condition</li>
      </ul>
  
      <h4>Syntax:</h4>
      <pre>
      SELECT column1, aggregate_function(column2)
      FROM table
      GROUP BY column1;
      </pre>
  
      <h4>Example:</h4>
      <pre>
      SELECT category, COUNT(*) as product_count, AVG(price) as average_price
      FROM products
      GROUP BY category;
      </pre>
  
      <p>This query groups products by category and calculates the count and average price for each category.</p>
    `,
    practice: `-- Calculate total sales for each customer
  SELECT customers.name, SUM(sales.total_price) as total_purchases
  FROM customers
  LEFT JOIN sales ON customers.id = sales.customer_id
  GROUP BY customers.id
  ORDER BY total_purchases DESC;`
  };