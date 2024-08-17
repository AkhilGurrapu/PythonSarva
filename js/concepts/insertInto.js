export const insertInto = {
  title: "Insert Into",
  content: `
    <h3>Insert Into</h3>
    <p>The INSERT INTO statement is used to add new records to a table. It's how you populate your database with data.</p>
    
    <h4>Key Points:</h4>
    <ul>
      <li>Specify the table name and the columns you're inserting data into.</li>
      <li>Provide the values in the same order as the columns.</li>
      <li>You can insert multiple rows in a single statement.</li>
      <li>Ensure the data types match the column definitions.</li>
    </ul>

    <h4>Syntax:</h4>
    <pre>
    INSERT INTO table_name (column1, column2, column3, ...)
    VALUES (value1, value2, value3, ...);
    </pre>

    <h4>Example:</h4>
    <pre>
    INSERT INTO customers (name, email, birth_date)
    VALUES ('John Doe', 'john@example.com', '1990-01-15');
    </pre>

    <p>This inserts a new customer record. Note that we didn't specify the 'id' column, assuming it's an auto-incrementing primary key.</p>
  `,
  practice: `-- Insert a new product into the products table
INSERT INTO products (name, price, category)
VALUES ('Laptop', 999.99, 'Electronics');`
};