export const joinOperations = {
    title: "JOIN Operations",
    content: `
        <h3>JOIN Operations</h3>
        <p>JOIN clauses are used to combine rows from two or more tables based on a related column between them.</p>
        <h4>Example:</h4>
        <pre>SELECT users.name, orders.order_date
FROM users
JOIN orders ON users.id = orders.user_id;</pre>
        <p>This will select the name from the users table and the order_date from the orders table, joining the tables on the user_id.</p>
    `,
    practice: "SELECT customers.name, sales.sale_id, sales.quantity FROM customers JOIN sales ON customers.id = sales.customer_id;"
};