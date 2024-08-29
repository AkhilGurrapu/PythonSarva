export const joinOperations = {
  title: "Join Operations",
  content: `
    <div class="topic-content">
      <h3 class="topic-subtitle">Join Operations</h3>
      <p class="topic-paragraph">Join operations in SQL are used to combine rows from two or more tables based on a related column between them. They are essential for querying data across multiple tables in a relational database.</p>
      
      <h4 class="topic-subtitle">Key Types of Joins:</h4>
      <ul class="topic-list">
        <li>INNER JOIN: Returns records that have matching values in both tables</li>
        <li>LEFT (OUTER) JOIN: Returns all records from the left table, and matched records from the right table</li>
        <li>RIGHT (OUTER) JOIN: Returns all records from the right table, and matched records from the left table</li>
        <li>FULL (OUTER) JOIN: Returns all records when there is a match in either left or right table</li>
        <li>CROSS JOIN: Returns the Cartesian product of the two tables</li>
      </ul>
  
      <h4 class="topic-subtitle">Syntax:</h4>
      <pre class="topic-code">
SELECT columns
FROM table1
JOIN_TYPE table2
ON table1.column = table2.column;
      </pre>
  
      <h4 class="topic-subtitle">Example:</h4>
      <div class="code-container">
        <button class="copy-btn">Copy</button>
        <pre class="topic-code">
SELECT customers.name, sales.total_price
FROM customers
INNER JOIN sales ON customers.id = sales.customer_id
WHERE sales.total_price > 100;
        </pre>
      </div>
  
      <p class="topic-paragraph">This query joins the customers and sales tables to show customer names for sales over $100.</p>

      <div class="topic-note">
        <p><strong>Note:</strong> Understanding different types of joins is crucial for efficiently querying relational databases. The choice of join type can significantly affect your query results and performance. Always consider the relationships between your tables and the data you need when selecting a join type. Remember that joins can be resource-intensive operations, especially on large datasets, so optimize your queries and use indexes where appropriate.</p>
      </div>
    </div>
  `,
  practice: `-- Find all products that have been sold, along with their sale dates
SELECT products.name, dates.date
FROM products
LEFT JOIN sales ON products.id = sales.product_id
LEFT JOIN dates ON sales.date_id = dates.id
ORDER BY dates.date DESC;`, 
subConcepts: [
  {
      name: "Inner Join",
      query: `-- Inner Join Example
-- Find all customers and their sales (if any)
SELECT 
    customers.name,
    customers.email
FROM 
    customers
INNER JOIN sales ON customers.id = sales.customer_id
ORDER BY 
    customers.name;`
  },
  {
      name: "Left Join",
      query: `-- Left Join Example
-- Show all products and their sales (if any)
SELECT 
    products.name AS product_name,
    products.category,
    sales.quantity,
    sales.total_price
FROM 
    products
LEFT JOIN sales ON products.id = sales.product_id
ORDER BY 
    products.name;`
  },
  {
      name: "Right Join",
      query: `-- Right Join Example
SELECT 
    stores.name AS store_name,
    products.name AS product_name,
    products.category
FROM 
    stores
RIGHT JOIN products
LIMIT 20;`
  }
]
};