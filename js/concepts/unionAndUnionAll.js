export const unionAndUnionAll = {
  title: "UNION and UNION ALL",
  content: `
    <div class="topic-content">
      <h3 class="topic-subtitle">UNION and UNION ALL</h3>
      <p class="topic-paragraph">UNION and UNION ALL are used to combine the result sets of two or more SELECT statements. They allow you to merge data from different queries or tables.</p>
      
      <h4 class="topic-subtitle">Key Points:</h4>
      <ul class="topic-list">
        <li>UNION removes duplicate rows, while UNION ALL keeps all rows.</li>
        <li>The number and order of columns must be the same in all SELECT statements.</li>
        <li>Data types of corresponding columns should be compatible.</li>
        <li>UNION ALL is faster as it doesn't need to check for duplicates.</li>
      </ul>

      <h4 class="topic-subtitle">Syntax:</h4>
      <pre class="topic-code">
SELECT column1, column2, ... FROM table1
UNION
SELECT column1, column2, ... FROM table2;
      </pre>

      <h4 class="topic-subtitle">Example:</h4>
      <pre class="topic-code">
SELECT name, email FROM customers
UNION
SELECT name, email FROM employees;
      </pre>

      <p class="topic-paragraph">This combines the name and email from both customers and employees tables, removing any duplicates.</p>

      <div class="topic-note">
        <p><strong>Note:</strong> UNION and UNION ALL are powerful tools for combining data from multiple sources. UNION is useful when you need to ensure unique results, but it comes with a performance cost due to the duplicate removal process. UNION ALL, on the other hand, is more efficient as it doesn't remove duplicates, making it a better choice when you know there are no duplicates or when duplicates are acceptable in the result set. When using these operations, be mindful of the column order and data types to ensure accurate results. Also, consider the impact on performance, especially when dealing with large datasets.</p>
      </div>
    </div>
  `,
  practice: `-- Combine the names of all customers and all product names
SELECT name FROM customers
UNION
SELECT name FROM products;`
};