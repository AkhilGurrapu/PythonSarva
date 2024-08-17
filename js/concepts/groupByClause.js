export const groupByClause = {
    title: "GROUP BY Clause",
    content: `
        <h3>GROUP BY Clause</h3>
        <p>The GROUP BY statement groups rows that have the same values in specified columns into summary rows.</p>
        <h4>Example:</h4>
        <pre>SELECT name, AVG(price) as avg_price FROM products GROUP BY name;;</pre>
        <p>This will count the number of products in each name group.</p>
    `,
    practice: `SELECT name, AVG(price) as avg_price
FROM products
GROUP BY name;`,
};