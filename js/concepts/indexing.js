export const indexing = {
  title: "Indexing",
  content: `
    <h3>Indexing</h3>
    <p>An index in a database is a data structure that improves the speed of data retrieval operations on a database table. It works similarly to an index in a book, allowing the database to find data quickly without scanning the entire table.</p>
    
    <h4>Key Points:</h4>
    <ul>
      <li>Speeds up SELECT queries and WHERE clauses.</li>
      <li>Slows down data insertion, updating, and deletion operations.</li>
      <li>Takes up additional storage space.</li>
      <li>Should be created on columns that are frequently used in search conditions.</li>
    </ul>

    <h4>Types of Indexes:</h4>
    <ol>
      <li>Single-column indexes</li>
      <li>Composite indexes (multi-column)</li>
      <li>Unique indexes</li>
      <li>Full-text indexes</li>
    </ol>

    <h4>Syntax:</h4>
    <pre>
    CREATE INDEX index_name
    ON table_name (column1, column2, ...);
    </pre>

    <h4>Example:</h4>
    <pre>
    CREATE INDEX idx_customer_email ON customers(email);
    </pre>

    <p>This creates an index on the email column of the customers table. Subsequent queries that search by email will be much faster:</p>
    <pre>
    SELECT * FROM customers WHERE email = 'example@email.com';
    </pre>
    <p>This query will now use the index to quickly find the matching row(s).</p>
  `,
  practice: `-- Create an index on the date_id column of the sales table
CREATE INDEX idx_sales_date ON sales(date_id);

-- Now run a query that will use this index
EXPLAIN QUERY PLAN
SELECT * FROM sales 
WHERE date_id BETWEEN 20230101 AND 20230131;`
};