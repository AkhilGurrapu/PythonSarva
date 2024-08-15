export const concepts = [
    {
        title: "SELECT Statements",
        content: `
            <h3>SELECT Statements</h3>
            <p>The SELECT statement is used to retrieve data from one or more tables in a database.</p>
            <h4>Example:</h4>
            <pre>SELECT column1, column2 FROM table_name;</pre>
            <p>This will select column1 and column2 from table_name.</p>
        `,
        practice: "SELECT * FROM users;"
    },
    {
        title: "WHERE Clause",
        content: `
            <h3>WHERE Clause</h3>
            <p>The WHERE clause is used to filter records based on a specified condition.</p>
            <h4>Example:</h4>
            <pre>SELECT * FROM users WHERE age > 18;</pre>
            <p>This will select all columns from the users table where the age is greater than 18.</p>
        `,
        practice: "SELECT * FROM users WHERE age > 25;"
    },
    {
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
        practice: "SELECT users.name, orders.order_date FROM users JOIN orders ON users.id = orders.user_id;"
    },
    {
        title: "Aggregate Functions",
        content: `
            <h3>Aggregate Functions</h3>
            <p>Aggregate functions perform calculations on a set of values and return a single result.</p>
            <h4>Example:</h4>
            <pre>SELECT AVG(price) as average_price FROM products;</pre>
            <p>This will calculate the average price from the products table.</p>
        `,
        practice: "SELECT COUNT(*) as total_users FROM users;"
    },
    {
        title: "GROUP BY Clause",
        content: `
            <h3>GROUP BY Clause</h3>
            <p>The GROUP BY statement groups rows that have the same values in specified columns into summary rows.</p>
            <h4>Example:</h4>
            <pre>SELECT category, COUNT(*) as product_count
FROM products
GROUP BY category;</pre>
            <p>This will count the number of products in each category.</p>
        `,
        practice: "SELECT category, AVG(price) as avg_price FROM products GROUP BY category;"
    }
];

export function showConcept(index) {
    const conceptContent = document.getElementById('concept-content');
    const currentConcept = document.getElementById('current-concept');
    const sqlEditor = document.getElementById('sql-editor');

    const concept = concepts[index];
    conceptContent.innerHTML = concept.content;
    currentConcept.textContent = concept.title;
    sqlEditor.value = concept.practice;
}