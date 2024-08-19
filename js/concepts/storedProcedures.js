export const storedProcedures = {
  title: "Stored Procedures",
  content: `
    <div class="topic-content">
      <h3 class="topic-subtitle">Stored Procedures</h3>
      <p class="topic-paragraph">A stored procedure is a prepared SQL code that you can save and reuse. Instead of writing the same SQL statements multiple times, you can call the stored procedure.</p>
      
      <h4 class="topic-subtitle">Key Points:</h4>
      <ul class="topic-list">
        <li>Increases database security by limiting direct table access.</li>
        <li>Reduces network traffic for complex operations.</li>
        <li>Can be parameterized for flexibility.</li>
        <li>Supports modular application design.</li>
      </ul>

      <h4 class="topic-subtitle">Syntax (may vary by database system):</h4>
      <pre class="topic-code">
CREATE PROCEDURE procedure_name
(parameter1 datatype, parameter2 datatype, ...)
BEGIN
  -- SQL statements
END;
      </pre>

      <h4 class="topic-subtitle">Example:</h4>
      <pre class="topic-code">
CREATE PROCEDURE GetCustomerOrders
(IN customerID INT)
BEGIN
  SELECT o.order_id, o.order_date, p.product_name, od.quantity
  FROM orders o
  JOIN order_details od ON o.order_id = od.order_id
  JOIN products p ON od.product_id = p.product_id
  WHERE o.customer_id = customerID;
END;

-- To call the procedure:
CALL GetCustomerOrders(1);
      </pre>

      <p class="topic-paragraph">This stored procedure retrieves all orders for a given customer ID, including product details and quantities.</p>

      <div class="topic-note">
        <p><strong>Note:</strong> Stored procedures are powerful tools for encapsulating complex logic and improving database performance. They can significantly reduce network traffic in client-server environments by allowing multiple SQL statements to be executed in a single call. However, they can also make application logic less transparent and harder to debug if overused. When designing stored procedures, consider aspects like error handling, transaction management, and parameter validation. Also, be aware that the exact syntax and capabilities of stored procedures can vary between different database management systems.</p>
      </div>
    </div>
  `,
  practice: `-- Create a stored procedure to update product prices by a percentage
CREATE PROCEDURE UpdateProductPrices
(IN category_name VARCHAR(50), IN price_increase_percent DECIMAL(5,2))
BEGIN
  UPDATE products
  SET price = price * (1 + price_increase_percent / 100)
  WHERE category = category_name;
  
  SELECT * FROM products WHERE category = category_name;
END;

-- Call the stored procedure
CALL UpdateProductPrices('Electronics', 5.00);`
};