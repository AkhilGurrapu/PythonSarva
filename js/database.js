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
        -- Users table
        CREATE TABLE users (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            age INTEGER,
            registration_date DATE
        );
        INSERT INTO users (name, email, age, registration_date) VALUES 
            ('John Doe', 'john@example.com', 30, '2023-01-01'),
            ('Jane Smith', 'jane@example.com', 25, '2023-02-15'),
            ('Bob Johnson', 'bob@example.com', 35, '2023-03-10'),
            ('Alice Brown', 'alice@example.com', 28, '2023-04-20'),
            ('Charlie Davis', 'charlie@example.com', 42, '2023-05-05'),
            ('Eva Wilson', 'eva@example.com', 31, '2023-06-12'),
            ('Frank Miller', 'frank@example.com', 39, '2023-07-18'),
            ('Grace Lee', 'grace@example.com', 27, '2023-08-22'),
            ('Henry Taylor', 'henry@example.com', 45, '2023-09-30'),
            ('Ivy Chen', 'ivy@example.com', 33, '2023-10-05');
        
        
        -- Categories table
        CREATE TABLE categories (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL UNIQUE
        );
        INSERT INTO categories (name) VALUES 
            ('Electronics'),
            ('Clothing'),
            ('Home & Garden'),
            ('Books'),
            ('Sports & Outdoors'),
            ('Toys & Games'),
            ('Beauty & Personal Care'),
            ('Automotive'),
            ('Pet Supplies'),
            ('Food & Grocery');
        
        -- Products table
        CREATE TABLE products (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            description TEXT,
            price REAL NOT NULL,
            category_id INTEGER,
            stock_quantity INTEGER DEFAULT 0,
            FOREIGN KEY (category_id) REFERENCES categories(id)
        );
        INSERT INTO products (name, description, price, category_id, stock_quantity) VALUES 
            ('Laptop', '15-inch, 512GB SSD, 16GB RAM', 999.99, 1, 50),
            ('Smartphone', '6.1-inch, 128GB Storage', 599.99, 1, 100),
            ('T-shirt', 'Cotton, Various Colors', 19.99, 2, 200),
            ('Garden Hose', '50ft Expandable Hose', 34.99, 3, 30),
            ('Novel', 'Bestselling Fiction', 14.99, 4, 75),
            ('Tennis Racket', 'Professional Grade', 89.99, 5, 25),
            ('Wireless Earbuds', 'Noise-cancelling, 24h battery', 129.99, 1, 80),
            ('Jeans', 'Slim Fit, Dark Blue', 49.99, 2, 150),
            ('Coffee Maker', '12-cup Programmable', 79.99, 3, 40),
            ('Cookbook', 'International Cuisines', 24.99, 4, 60),
            ('Yoga Mat', 'Non-slip, Eco-friendly', 29.99, 5, 100),
            ('Board Game', 'Strategy Game for 2-6 Players', 39.99, 6, 35),
            ('Face Cream', 'Anti-aging, 50ml', 59.99, 7, 90),
            ('Car Phone Mount', 'Universal Fit', 19.99, 8, 120),
            ('Dog Bed', 'Large, Machine Washable', 44.99, 9, 50),
            ('Organic Tea', 'Assorted Flavors, 100 Bags', 15.99, 10, 80);
        
        -- Orders table
        CREATE TABLE orders (
            id INTEGER PRIMARY KEY,
            user_id INTEGER,
            order_date DATE,
            total_amount REAL,
            status TEXT,
            FOREIGN KEY (user_id) REFERENCES users(id)
        );
       INSERT INTO orders (user_id, order_date, total_amount, status) VALUES 
            (1, '2023-06-01', 1019.98, 'Completed'),
            (2, '2023-06-15', 634.98, 'Shipped'),
            (3, '2023-07-01', 124.97, 'Processing'),
            (4, '2023-07-10', 599.99, 'Completed'),
            (5, '2023-07-20', 54.98, 'Shipped'),
            (6, '2023-08-05', 149.98, 'Completed'),
            (7, '2023-08-12', 89.99, 'Processing'),
            (8, '2023-09-01', 209.97, 'Shipped'),
            (9, '2023-09-15', 79.99, 'Completed'),
            (10, '2023-09-20', 44.98, 'Processing'),
            (1, '2023-10-01', 159.98, 'Shipped'),
            (3, '2023-10-10', 129.99, 'Completed'),
            (5, '2023-10-20', 69.98, 'Processing'),
            (7, '2023-11-01', 104.97, 'Shipped'),
            (9, '2023-11-10', 39.99, 'Completed');
        
        -- Reviews table
        CREATE TABLE reviews (
            id INTEGER PRIMARY KEY,
            product_id INTEGER,
            user_id INTEGER,
            rating INTEGER CHECK(rating >= 1 AND rating <= 5),
            comment TEXT,
            review_date DATE,
            FOREIGN KEY (product_id) REFERENCES products(id),
            FOREIGN KEY (user_id) REFERENCES users(id)
        );
        INSERT INTO reviews (product_id, user_id, rating, comment, review_date) VALUES 
            (1, 1, 5, 'Great laptop, very fast!', '2023-06-10'),
            (2, 2, 4, 'Good phone, but battery life could be better', '2023-06-20'),
            (3, 3, 5, 'Comfortable t-shirt, will buy again', '2023-07-05'),
            (4, 4, 3, 'Hose is okay, but a bit short for my needs', '2023-07-15'),
            (5, 5, 5, 'Couldn''t put this book down!', '2023-07-25');
    `);
}
export function runQuery(query) {
    return db.exec(query);
}

export function getSchemaInfo() {
    const tables = db.exec("SELECT name FROM sqlite_master WHERE type='table'");
    const schema = {};

    tables[0].values.forEach(([tableName]) => {
        const tableInfo = db.exec(`PRAGMA table_info(${tableName})`);
        schema[tableName] = tableInfo[0].values.map(column => ({
            name: column[1],
            type: column[2],
            notNull: column[3] === 1,
            primaryKey: column[5] === 1
        }));
    });

    return schema;
}

