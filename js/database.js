let db;

export async function initializeDB() {
    const SQL = await initSqlJs({
        locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`
    });
    db = new SQL.Database();
    setupDatabase();
}

function setupDatabase() {
    db.run(`
        CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, age INTEGER);
        INSERT INTO users (name, age) VALUES ('John Doe', 30), ('Jane Smith', 25), ('Bob Johnson', 35);
        
        CREATE TABLE products (id INTEGER PRIMARY KEY, name TEXT, price REAL, category TEXT);
        INSERT INTO products (name, price, category) VALUES 
            ('Laptop', 999.99, 'Electronics'),
            ('Smartphone', 599.99, 'Electronics'),
            ('Desk Chair', 199.99, 'Furniture');
        
        CREATE TABLE orders (id INTEGER PRIMARY KEY, user_id INTEGER, order_date TEXT);
        INSERT INTO orders (user_id, order_date) VALUES 
            (1, '2023-01-15'),
            (2, '2023-02-01'),
            (3, '2023-02-15');
    `);
}

export function runQuery(query) {
    return db.exec(query);
}