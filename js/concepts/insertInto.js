export const insertInto = {
  title: "Insert Into",
  content: `
    <div class="topic-content">
      <h3 class="topic-subtitle">Insert Into</h3>
      <p class="topic-paragraph">The INSERT INTO statement is used to add new records to a table. It's how you populate your database with data.</p>
      
      <h4 class="topic-subtitle">Key Points:</h4>
      <ul class="topic-list">
        <li>Specify the table name and the columns you're inserting data into.</li>
        <li>Provide the values in the same order as the columns.</li>
        <li>You can insert multiple rows in a single statement.</li>
        <li>Ensure the data types match the column definitions.</li>
      </ul>

      <h4 class="topic-subtitle">Syntax:</h4>
      <pre class="topic-code">
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
      </pre>

      <h4 class="topic-subtitle">Example:</h4>
      <pre class="topic-code">
INSERT INTO customers (name, email, birth_date)
VALUES ('John Doe', 'john@example.com', '1990-01-15');
      </pre>

      <p class="topic-paragraph">This inserts a new customer record. Note that we didn't specify the 'id' column, assuming it's an auto-incrementing primary key.</p>

      <div class="topic-note">
        <p><strong>Note:</strong> When inserting data, it's important to consider data integrity. Ensure that your INSERT statements respect any constraints (like NOT NULL or UNIQUE) defined on the table. For bulk inserts, consider using batch operations or COPY commands (in databases that support them) for better performance. Always be cautious when inserting data into production databases, and consider using transactions for complex insert operations to maintain data consistency.</p>
      </div>
    </div>
  `,
  practice: `-- Insert a new product into the products table
INSERT INTO new_products (id, name, price, category)
VALUES (1, 'Laptop', 999.99, 'Electronics');

-- View the new inserted values in the new_products table
SELECT * FROM new_products;`
};