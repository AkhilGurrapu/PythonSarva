export const selectStatements = {
    title: "Select Statements",
    content: `
      <h3>Select Statements</h3>
      <p>The SELECT statement is used to retrieve data from one or more tables in a database. It is the most commonly used SQL command and forms the basis of data querying.</p>
      
      <h4>Key Components:</h4>
      <ul>
        <li>SELECT: Specifies which columns to retrieve</li>
        <li>FROM: Specifies the table(s) to query</li>
        <li>WHERE: Filters the rows based on a condition</li>
        <li>GROUP BY: Groups rows with the same values</li>
        <li>HAVING: Filters groups based on a condition</li>
        <li>ORDER BY: Sorts the result set</li>
        <li>LIMIT: Limits the number of rows returned</li>
      </ul>
  
      <h4>Basic Syntax:</h4>
      <pre>
      SELECT column1, column2, ...
      FROM table_name
      WHERE condition;
      </pre>
  
      <h4>Example:</h4>
      <pre>
      SELECT name, price
      FROM products
      WHERE category = 'Electronics' AND price < 500;
      </pre>
  
      <p>This query selects the name and price of all electronics products priced under $500.</p>
    `,
    practice: `-- Select all customers who have made a purchase, along with their total spend
  SELECT customers.name, COUNT(sales.sale_id) as purchase_count, SUM(sales.total_price) as total_spend
  FROM customers
  JOIN sales ON customers.id = sales.customer_id
  GROUP BY customers.id
  HAVING purchase_count > 0
  ORDER BY total_spend DESC;`
  };
  