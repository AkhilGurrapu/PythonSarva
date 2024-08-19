export const pivot = {
  title: "Pivot",
  content: `
    <div class="topic-content">
      <h3 class="topic-subtitle">Pivot</h3>
      <p class="topic-paragraph">Pivoting in SQL involves transforming rows into columns, often used for generating reports or reshaping data for analysis. While not all SQL databases have a built-in PIVOT function, the concept can be implemented using conditional aggregation.</p>
      
      <h4 class="topic-subtitle">Key Points:</h4>
      <ul class="topic-list">
        <li>Useful for creating cross-tabulations of data.</li>
        <li>Often implemented using CASE statements with aggregate functions.</li>
        <li>Can make certain types of reporting queries much simpler.</li>
        <li>The reverse operation (columns to rows) is called "unpivoting".</li>
      </ul>

      <h4 class="topic-subtitle">General Approach:</h4>
      <ol class="topic-list">
        <li>Identify the column that will become multiple columns.</li>
        <li>Use conditional aggregation with CASE statements.</li>
        <li>GROUP BY the remaining columns.</li>
      </ol>

      <h4 class="topic-subtitle">Example:</h4>
      <pre class="topic-code">
SELECT 
  category,
  SUM(CASE WHEN price < 100 THEN 1 ELSE 0 END) as low_price,
  SUM(CASE WHEN price >= 100 AND price < 500 THEN 1 ELSE 0 END) as medium_price,
  SUM(CASE WHEN price >= 500 THEN 1 ELSE 0 END) as high_price
FROM products
GROUP BY category;
      </pre>

      <p class="topic-paragraph">This query pivots product price ranges into columns, showing the count of products in each price range for each category.</p>

      <div class="topic-note">
        <p><strong>Note:</strong> Pivoting is a powerful technique for data transformation and reporting. It's particularly useful when you need to present data in a cross-tabular format or when you're preparing data for analysis in tools that expect a specific layout. However, be aware that pivoted queries can become complex and potentially less performant as the number of pivot columns increases. For frequently used pivot operations, consider creating a view or materialized view to improve query performance and simplify your code.</p>
      </div>
    </div>
  `,
  practice: `-- Pivot sales data to show total sales for each product category by quarter
SELECT 
  dates.year,
  SUM(CASE WHEN dates.quarter = 1 THEN sales.total_price ELSE 0 END) as Q1_sales,
  SUM(CASE WHEN dates.quarter = 2 THEN sales.total_price ELSE 0 END) as Q2_sales,
  SUM(CASE WHEN dates.quarter = 3 THEN sales.total_price ELSE 0 END) as Q3_sales,
  SUM(CASE WHEN dates.quarter = 4 THEN sales.total_price ELSE 0 END) as Q4_sales
FROM sales
JOIN dates ON sales.date_id = dates.id
GROUP BY dates.year
ORDER BY dates.year;`
};