export const transactions = {
  title: "Transactions",
  content: `
    <h3>Transactions</h3>
    <p>A transaction in SQL is a sequence of operations performed as a single unit of work. It ensures data integrity by following the ACID properties: Atomicity, Consistency, Isolation, and Durability.</p>
    
    <h4>Key Points:</h4>
    <ul>
      <li>Ensures that all operations within the transaction are completed successfully, or none are.</li>
      <li>Maintains the consistency of the database.</li>
      <li>Provides isolation between concurrent transactions.</li>
      <li>Guarantees that committed transactions are saved permanently.</li>
    </ul>

    <h4>Common Transaction Commands:</h4>
    <ul>
      <li>BEGIN TRANSACTION: Starts a new transaction</li>
      <li>COMMIT: Saves the changes permanently</li>
      <li>ROLLBACK: Undoes the changes if an error occurs</li>
    </ul>

    <h4>Example:</h4>
    <pre>
    BEGIN TRANSACTION;

    UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
    UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;

    COMMIT;
    </pre>

    <p>This transaction transfers $100 from account 1 to account 2. If any part of the transaction fails, the entire transaction is rolled back, ensuring the database remains in a consistent state.</p>
  `,
  practice: `-- Implement a transaction for creating a new sale and updating product inventory
BEGIN TRANSACTION;

INSERT INTO sales (date_id, customer_id, product_id, quantity, total_price)
VALUES (20230817, 1, 1, 2, 199.98);

UPDATE products
SET stock = stock - 2
WHERE id = 1;

COMMIT;

-- Verify the changes
SELECT * FROM sales WHERE date_id = 20230817;
SELECT stock FROM products WHERE id = 1;`
};