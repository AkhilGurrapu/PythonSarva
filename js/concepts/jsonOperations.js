export const jsonOperations = {
  title: "JSON Operations",
  content: `
    <h3>JSON Operations</h3>
    <p>Many modern SQL databases support JSON (JavaScript Object Notation) data type and provide functions to query and manipulate JSON data directly in SQL.</p>
    
    <h4>Key Points:</h4>
    <ul>
      <li>Allows storing semi-structured data in relational databases.</li>
      <li>Provides flexibility for handling changing data structures.</li>
      <li>Supports complex queries on nested JSON structures.</li>
      <li>Functions for JSON operations vary between database systems.</li>
    </ul>

    <h4>Common JSON Functions (PostgreSQL syntax):</h4>
    <ul>
      <li>->> : Extracts JSON object field as text</li>
      <li>->  : Extracts JSON object field as JSON</li>
      <li>jsonb_array_elements : Expands a JSON array to a set of JSON values</li>
    </ul>

    <h4>Example:</h4>
    <pre>
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      data JSONB
    );

    INSERT INTO users (data) VALUES 
    ('{"name": "John Doe", "age": 30, "interests": ["SQL", "Python", "Data Science"]}');

    SELECT data->>'name' as name, data->>'age' as age
    FROM users
    WHERE data->>'age' = '30';
    </pre>

    <p>This example demonstrates creating a table with a JSON column, inserting JSON data, and querying specific fields from the JSON.</p>
  `,
  practice: `-- Assuming we have a JSON column in our products table for additional attributes
ALTER TABLE products ADD COLUMN attributes JSONB;

UPDATE products SET attributes = '{"color": "black", "weight": 0.5, "dimensions": {"length": 6, "width": 3, "height": 0.5}}' WHERE id = 1;

-- Query to find products with a specific attribute
SELECT name, attributes->>'color' as color
FROM products
WHERE attributes->>'color' = 'black';`
};