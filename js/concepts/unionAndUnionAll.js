export const unionAndUnionAll = {
  title: "UNION and UNION ALL",
  content: `
    <h3>UNION and UNION ALL</h3>
    <p>UNION and UNION ALL are used to combine the result sets of two or more SELECT statements. They allow you to merge data from different queries or tables.</p>
    
    <h4>Key Points:</h4>
    <ul>
      <li>UNION removes duplicate rows, while UNION ALL keeps all rows.</li>
      <li>The number and order of columns must be the same in all SELECT statements.</li>
      <li>Data types of corresponding columns should be compatible.</li>
      <li>UNION ALL is faster as it doesn't need to check for duplicates.</li>
    </ul>

    <h4>Syntax:</h4>
    <pre>
    SELECT column1, column2, ... FROM table1
    UNION
    SELECT column1, column2, ... FROM table2;
    </pre>

    <h4>Example:</h4>
    <pre>
    SELECT name, email FROM customers
    UNION
    SELECT name, email FROM employees;
    </pre>

    <p>This combines the name and email from both customers and employees tables, removing any duplicates.</p>
  `,
  practice: `-- Combine the names of all customers and all product names
SELECT name FROM customers
UNION
SELECT name FROM products;`
};