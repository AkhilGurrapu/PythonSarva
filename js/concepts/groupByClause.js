export const groupByClause = {
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
};