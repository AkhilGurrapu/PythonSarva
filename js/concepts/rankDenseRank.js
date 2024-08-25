export const rankDenseRank = {
    title: "RANK() vs DENSE_RANK()",
    content: `
      <div class="topic-content">
        <h3 class="topic-subtitle">RANK() vs DENSE_RANK()</h3>
        <p class="topic-paragraph">RANK() and DENSE_RANK() are window functions used to assign rankings to rows within a result set. The main difference lies in how they handle ties.</p>
        
        <h4 class="topic-subtitle">Key Points:</h4>
        <ul class="topic-list">
          <li>RANK() leaves gaps in the ranking when there are ties.</li>
          <li>DENSE_RANK() does not leave gaps in the ranking.</li>
          <li>Both functions give the same rank to tied values.</li>
          <li>RANK() is useful when you want to know the actual position including gaps.</li>
          <li>DENSE_RANK() is useful when you want consecutive rankings without gaps.</li>
        </ul>
  
        <h4 class="topic-subtitle">Example:</h4>
        <pre class="topic-code">
  SELECT 
    customer_id,
    total_price,
    RANK() OVER (ORDER BY total_price DESC) as price_rank,
    DENSE_RANK() OVER (ORDER BY total_price DESC) as price_dense_rank
  FROM sales
  ORDER BY total_price DESC
  LIMIT 10;
        </pre>
  
        <p class="topic-paragraph">This query ranks customers based on their purchase amount. If two customers have the same total_price:</p>
        <ul>
          <li>RANK() will give them the same rank, but the next rank will skip a number.</li>
          <li>DENSE_RANK() will give them the same rank, and the next rank will be the next consecutive number.</li>
        </ul>
  
        <div class="topic-note">
          <p><strong>Note:</strong> The choice between RANK() and DENSE_RANK() depends on your specific use case. Use RANK() when you need to know the actual position including gaps (like in competitions where ties result in skipped positions). Use DENSE_RANK() when you want a continuous ranking without gaps (like for top N lists where you want exactly N items regardless of ties).</p>
        </div>
      </div>
    `,
    practice: `
  -- Compare RANK() and DENSE_RANK() for customer sales
  SELECT 
    customer_id,
    total_price,
    RANK() OVER (ORDER BY total_price DESC) as price_rank,
    DENSE_RANK() OVER (ORDER BY total_price DESC) as price_dense_rank
  FROM sales
  ORDER BY total_price DESC
  LIMIT 10;
    `
  };