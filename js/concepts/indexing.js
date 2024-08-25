export const indexing = {
  title: "Indexing",
  content: `
    <div class="topic-content">
      <h3 class="topic-subtitle">Indexing</h3>
      <p class="topic-paragraph">An index in a database is like a table of contents in a book. It helps the database find information quickly without having to look through every single row of a table.</p>
      
      <h4 class="topic-subtitle">Key Points:</h4>
      <ul class="topic-list">
        <li>Speeds up data retrieval, especially for large tables.</li>
        <li>Particularly useful for columns often used in WHERE clauses.</li>
        <li>Takes up some extra storage space.</li>
        <li>Can slow down data insertion and updates slightly.</li>
      </ul>

      <h4 class="topic-subtitle">How It Works:</h4>
      <p class="topic-paragraph">Imagine our sales table has thousands of rows. Without an index, to find all sales for a specific date, the database would need to check every single row. This is like reading an entire book to find one piece of information.</p>
      
      <p class="topic-paragraph">When we add an index, the database creates a separate structure that's sorted by the indexed column. It's like adding a table of contents to our book. Now, when we search for a specific date, the database can quickly find the right "page" in our data.</p>

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
-- Create an index on the date_id column of the sales table
CREATE INDEX idx_sales_date ON sales(date_id);

-- Now, queries using date_id will be faster
SELECT * FROM sales WHERE date_id = 20230615;
      </pre>

      <p class="topic-paragraph">After creating this index, when we run a query that filters by date_id, the database uses the index to quickly find the relevant rows, instead of scanning the entire table.</p>

      <div class="topic-note">
        <p><strong>Note:</strong> While indexes speed up data retrieval, they do require extra storage and can slow down data insertion and updates. It's important to create indexes thoughtfully, focusing on columns that are frequently used in search conditions.</p>
      </div>


      <div class="topic-note">
        <p><strong>Note:</strong>EXPLAIN QUERY PLAN to show how the execution plan changes with the index in place. You should see that it now uses the index, which is typically faster, especially for larger datasets.</p>
      </div>



    </div>
  `,
  practice: `
-- Create an index on the date_id column of the sales table
CREATE INDEX idx_sales_date ON sales(date_id);

-- Now run a query that will use this index
EXPLAIN QUERY PLAN
SELECT * FROM sales 
WHERE date_id BETWEEN 20230101 AND 20230131;
  `
};