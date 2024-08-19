export const jsonOperations = {
  title: "JSON Operations",
  content: `
    <div class="topic-content">
      <h3 class="topic-subtitle">JSON Operations</h3>
      <p class="topic-paragraph">Many modern SQL databases support JSON (JavaScript Object Notation) data type and provide functions to query and manipulate JSON data directly in SQL.</p>
      
      <h4 class="topic-subtitle">Key Points:</h4>
      <ul class="topic-list">
        <li>Allows storing semi-structured data in relational databases.</li>
        <li>Provides flexibility for handling changing data structures.</li>
        <li>Supports complex queries on nested JSON structures.</li>
        <li>Functions for JSON operations vary between database systems.</li>
      </ul>

      <h4 class="topic-subtitle">Common JSON Functions (PostgreSQL syntax):</h4>
      <ul class="topic-list">
        <li>->> : Extracts JSON object field as text</li>
        <li>->  : Extracts JSON object field as JSON</li>
        <li>jsonb_array_elements : Expands a JSON array to a set of JSON values</li>
      </ul>

      <h4 class="topic-subtitle">Example:</h4>
      <pre class="topic-code">
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

      <p class="topic-paragraph">This example demonstrates creating a table with a JSON column, inserting JSON data, and querying specific fields from the JSON.</p>

      <div class="topic-note">
        <p><strong>Note:</strong> JSON operations in SQL provide a powerful way to work with semi-structured data within a relational database. This capability is particularly useful in scenarios where data structures may evolve over time or when dealing with data from NoSQL sources. However, it's important to balance the flexibility of JSON with the performance benefits of structured data. For frequently accessed or queried fields, consider normalizing them into separate columns for better query performance and indexing capabilities.</p>
      </div>
    </div>
  `,
  practice: `-- Assuming we have a JSON column in our products table for additional attributes
ALTER TABLE products ADD COLUMN attributes JSONB;

UPDATE products SET attributes = '{"color": "black", "weight": 0.5, "dimensions": {"length": 6, "width": 3, "height": 0.5}}' WHERE id = 1;

-- Query to find products with a specific attribute
SELECT name, attributes->>'color' as color
FROM products
WHERE attributes->>'color' = 'black';`
};