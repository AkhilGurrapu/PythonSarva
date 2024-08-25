export const transactions = {
  title: "Transactions",
  content: `
    <div class="topic-content">
      <h3 class="topic-subtitle">Transactions</h3>
      <p class="topic-paragraph">A transaction in SQL is a sequence of operations performed as a single unit of work. It ensures data integrity by following the ACID properties: Atomicity, Consistency, Isolation, and Durability.</p>
      
      <h4 class="topic-subtitle">Key Points:</h4>
      <ul class="topic-list">
        <li>Ensures that all operations within the transaction are completed successfully, or none are.</li>
        <li>Maintains the consistency of the database.</li>
        <li>Provides isolation between concurrent transactions.</li>
        <li>Guarantees that committed transactions are saved permanently.</li>
      </ul>

      <h4 class="topic-subtitle">Common Transaction Commands:</h4>
      <ul class="topic-list">
        <li>BEGIN TRANSACTION: Starts a new transaction</li>
        <li>COMMIT: Saves the changes permanently</li>
        <li>ROLLBACK: Undoes the changes if an error occurs</li>
      </ul>

      <h4 class="topic-subtitle">Example:</h4>
      <pre class="topic-code">
BEGIN TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;

COMMIT;
      </pre>

      <p class="topic-paragraph">This transaction transfers $100 from account 1 to account 2. If any part of the transaction fails, the entire transaction is rolled back, ensuring the database remains in a consistent state.</p>

      <div class="topic-note">
        <p><strong>Note:</strong> Transactions are crucial for maintaining data integrity in multi-user database environments. They prevent issues like lost updates, dirty reads, and inconsistent analyses. However, long-running transactions can impact system performance by holding locks for extended periods. It's important to keep transactions as short as possible and only include operations that must be executed atomically. Also, be aware of different transaction isolation levels provided by your database system, as they offer different trade-offs between consistency and concurrency.</p>
      </div>
    </div>
  `,
  practice: `-- Implement a transaction for inserting new row into sales and updating product category
BEGIN TRANSACTION;

-- Add a new sale
INSERT INTO sales (date_id, customer_id, product_id, store_id, quantity, total_price, discount)
VALUES (20240817, 1, 1, 1, 2, 39.98, 0);

-- Update the product (let's pretend we're updating a quantity)
UPDATE products
SET category = "Elect"  -- Just an example, not actually updating quantity
WHERE id = 1;

commit;

SELECT * FROM sales WHERE date_id == 20240817;

SELECT * FROM products WHERE id = 1;
`
};