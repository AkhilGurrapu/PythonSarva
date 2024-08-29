export const introToSQL = {
    title: "Introduction to SQL",
    content: `
        <div class="topic-content">
            <h2 class="topic-title">Welcome to SQL Learner</h2>

            <h3 class="topic-subtitle">What is SQL?</h3>
            <p class="topic-paragraph">SQL (Structured Query Language) is a standard language for managing and manipulating relational databases. It allows you to:</p>
            <ul class="topic-list">
                <li>Retrieve data from databases</li>
                <li>Insert new records</li>
                <li>Update existing records</li>
                <li>Delete records</li>
                <li>Create new databases and tables</li>
                <li>Set permissions on tables, procedures, and views</li>
            </ul>

            <h3 class="topic-subtitle">Why Learn SQL?</h3>
            <p class="topic-paragraph">SQL is essential for:</p>
            <ul class="topic-list">
                <li>Data analysts and scientists for data manipulation and analysis</li>
                <li>Backend developers for managing application data</li>
                <li>Database administrators for maintaining and optimizing databases</li>
                <li>Business intelligence professionals for creating reports and dashboards</li>
            </ul>

            <h3 class="topic-subtitle">Database Schema and Data Model</h3>
            <p class="topic-paragraph">In this app, you'll be working with a sample database that includes the following tables:</p>
            <ul class="topic-list">
                <li>Customers: Information about individual customers</li>
                <li>Products: Details of products available for sale</li>
                <li>Stores: Information about different store locations</li>
                <li>Dates: A date dimension table for time-based analysis</li>
                <li>Sales: Transaction data linking customers, products, stores, and dates</li>
            </ul>
            <p class="topic-paragraph">You can view the complete schema by clicking on the "Database Schema" button within "Schema", which shows detailed information about each table and its columns.</p>

            <h3 class="topic-subtitle">Entity-Relationship Diagram (ERD)</h3>
            <p class="topic-paragraph">The ERD provides a visual representation of the database structure, showing how different tables are related. Key features of our ERD include:</p>
            <ul class="topic-list">
                <li>Tables represented as rectangles with column details</li>
                <li>Primary keys (PK) indicated with a 🔑 symbol</li>
                <li>Foreign keys (FK) indicated with a 🔗 symbol</li>
                <li>Relationships between tables shown as dotted lines</li>
            </ul>
            <p class="topic-paragraph">You can view the ERD by clicking on the "Model View" button. This diagram helps in understanding table relationships and designing complex queries.</p>

            <h3 class="topic-subtitle">How to Use This App</h3>
            <p class="topic-paragraph">This SQL Learner app is designed to help you learn SQL interactively:</p>
            <ol class="topic-list">
                <li><span class="topic-highlight">Concepts:</span> Each page introduces a SQL concept with explanations and examples.</li>
                <li><span class="topic-highlight">Practice:</span> Use the SQL editor to write and run queries on our sample database.</li>
                <li><span class="topic-highlight">Results:</span> See the output of your queries instantly in the results area.</li>
                <li><span class="topic-highlight">Schema:</span> View the database schema by clicking on "Schema" on top right to understand table structures.</li>
                <li><span class="topic-highlight">ERD:</span> Explore the Entity-Relationship Diagram to visualize table relationships.</li>
                <li><span class="topic-highlight">Navigation:</span> Use the sidebar to jump between different SQL topics.</li>
            </ol>

            <p class="topic-paragraph">Start with basic SELECT statements and progress through more advanced topics. Use the schema and ERD to help you construct more complex queries as you advance.</p>
            
            <p class="topic-centered topic-highlight">Happy learning!</p>
        </div>
    `,
    practice: `-- Try your first SQL query:
SELECT * FROM customers LIMIT 5;`
};