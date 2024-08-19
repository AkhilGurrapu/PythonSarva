export const indexing = {
  title: "Indexing",
  content: `
    <div class="topic-content">
      <h3 class="topic-subtitle">Indexing</h3>
      <p class="topic-paragraph">An index in a database is a data structure that improves the speed of data retrieval operations on a database table. It works similarly to an index in a book, allowing the database to find data quickly without scanning the entire table.</p>
      
      <h4 class="topic-subtitle">Key Points:</h4>
      <ul class="topic-list">
        <li>Speeds up SELECT queries and WHERE clauses.</li>
        <li>Slows down data insertion, updating, and deletion operations.</li>
        <li>Takes up additional storage space.</li>
        <li>Should be created on columns that are frequently used in search conditions.</li>
      </ul>

      <h4 class="topic-subtitle">Types of Indexes:</h4>
      <ol class="topic-list">
        <li>Single-column indexes</li>
        <li>Composite indexes (multi-column)</li>
        <li>Unique indexes</li>
        <li>Full-text indexes</li>
      </ol>

      <h4 class="topic-subtitle">Syntax:</h4>
      <pre class="topic-code">
CREATE INDEX index_name
ON table_name (column1, column2, ...);
      </pre>

      <h4 class="topic-subtitle">Example:</h4>
      <pre class="topic-code">
CREATE INDEX idx_customer_email ON customers(email);
      </pre>

      <p class="topic-paragraph">This creates an index on the email column of the customers table. Subsequent queries that search by email will be much faster:</p>
      <pre class="topic-code">
SELECT * FROM customers WHERE email = 'example@email.com';
      </pre>
      <p class="topic-paragraph">This query will now use the index to quickly find the matching row(s).</p>

      <div class="topic-note">
        <p><strong>Note:</strong> While indexes can significantly improve query performance, they should be used judiciously. Over-indexing can lead to decreased performance for write operations and increased storage requirements. Always consider the trade-offs between read and write performance when deciding to create an index. It's also important to regularly analyze and maintain your indexes to ensure optimal performance.</p>
      </div>
    </div>
  `,
  practice: `-- Create an index on the date_id column of the sales table
CREATE INDEX idx_sales_date ON sales(date_id);

-- Now run a query that will use this index
EXPLAIN QUERY PLAN
SELECT * FROM sales 
WHERE date_id BETWEEN 20230101 AND 20230131;`
};