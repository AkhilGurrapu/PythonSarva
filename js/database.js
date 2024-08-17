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
        -- Customers table
CREATE TABLE customers (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    birth_date DATE,
    city TEXT,
    state TEXT,
    country TEXT
);

INSERT INTO customers (id, name, email, birth_date, city, state, country) VALUES 
    (1, 'John Doe', 'john.doe@datsarva.com', '1990-05-15', 'New York', 'NY', 'USA'),
    (2, 'Jane Smith', 'jane.smith@datsarva.com', '1988-09-22', 'Los Angeles', 'CA', 'USA'),
    (3, 'Robert Johnson', 'robert.johnson@datsarva.com', '1985-12-10', 'Chicago', 'IL', 'USA'),
    (4, 'Emily Brown', 'emily.brown@datsarva.com', '1992-03-30', 'Houston', 'TX', 'USA'),
    (5, 'Michael Davis', 'michael.davis@datsarva.com', '1980-07-18', 'Phoenix', 'AZ', 'USA'),
    (6, 'Sarah Wilson', 'sarah.wilson@datsarva.com', '1995-01-05', 'Seattle', 'WA', 'USA'),
    (7, 'David Martinez', 'david.martinez@datsarva.com', '1987-11-30', 'Miami', 'FL', 'USA'),
    (8, 'Jennifer Taylor', 'jennifer.taylor@datsarva.com', '1993-06-12', 'Boston', 'MA', 'USA'),
    (9, 'Christopher Anderson', 'chris.anderson@datsarva.com', '1982-04-25', 'San Francisco', 'CA', 'USA'),
    (10, 'Lisa Thomas', 'lisa.thomas@datsarva.com', '1991-08-08', 'Denver', 'CO', 'USA'),
    (11, 'Mark Jackson', 'mark.jackson@datsarva.com', '1989-02-14', 'Atlanta', 'GA', 'USA'),
    (12, 'Elizabeth White', 'elizabeth.white@datsarva.com', '1994-10-20', 'Dallas', 'TX', 'USA'),
    (13, 'James Harris', 'james.harris@datsarva.com', '1986-07-07', 'Portland', 'OR', 'USA'),
    (14, 'Mary Clark', 'mary.clark@datsarva.com', '1983-12-01', 'Las Vegas', 'NV', 'USA'),
    (15, 'Daniel Lewis', 'daniel.lewis@datsarva.com', '1997-03-18', 'Nashville', 'TN', 'USA');

-- Products table
CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    brand TEXT,
    price REAL NOT NULL
);

INSERT INTO products (id, name, category, brand, price) VALUES 
    (1, 'Smartphone X', 'Electronics', 'TechCo', 450.00),
    (2, 'Laptop Pro', 'Electronics', 'CompuTech', 900.00),
    (3, 'Cotton T-shirt', 'Apparel', 'FashionBrand', 5.00),
    (4, 'Running Shoes', 'Footwear', 'SportyGear', 40.00),
    (5, 'Coffee Maker', 'Home Appliances', 'HomeCo', 35.00),
    (6, 'Wireless Earbuds', 'Electronics', 'AudioTech', 70.00),
    (7, 'Yoga Mat', 'Sports & Outdoors', 'FitLife', 10.00),
    (8, 'Blender', 'Home Appliances', 'KitchenPro', 25.00),
    (9, 'Denim Jeans', 'Apparel', 'FashionBrand', 20.00),
    (10, 'Smart Watch', 'Electronics', 'TechCo', 100.00),
    (11, 'Backpack', 'Accessories', 'TravelGear', 15.00),
    (12, 'Table Lamp', 'Home Decor', 'LightCo', 12.00),
    (13, 'Protein Powder', 'Health & Wellness', 'NutriTech', 10.00),
    (14, 'Sunglasses', 'Accessories', 'VisionStyle', 30.00),
    (15, 'Electric Toothbrush', 'Personal Care', 'DentalTech', 25.00);

-- Stores table
CREATE TABLE stores (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    city TEXT,
    state TEXT,
    country TEXT
);

INSERT INTO stores (id, name, city, state, country) VALUES 
    (1, 'Downtown Store', 'New York', 'NY', 'USA'),
    (2, 'West Coast Shop', 'Los Angeles', 'CA', 'USA'),
    (3, 'Midwest Outlet', 'Chicago', 'IL', 'USA'),
    (4, 'Southern Branch', 'Houston', 'TX', 'USA'),
    (5, 'Desert Location', 'Phoenix', 'AZ', 'USA'),
    (6, 'Pacific Northwest', 'Seattle', 'WA', 'USA'),
    (7, 'Sunshine State', 'Miami', 'FL', 'USA'),
    (8, 'New England Corner', 'Boston', 'MA', 'USA'),
    (9, 'Bay Area Spot', 'San Francisco', 'CA', 'USA'),
    (10, 'Mountain High', 'Denver', 'CO', 'USA');

-- Dates table
CREATE TABLE dates (
    id INTEGER PRIMARY KEY,
    date DATE UNIQUE,
    day_of_week TEXT,
    day_of_month INTEGER,
    month INTEGER,
    quarter INTEGER,
    year INTEGER
);

INSERT INTO dates (id, date, day_of_week, day_of_month, month, quarter, year) VALUES 
    (20230601, '2023-06-01', 'Thursday', 1, 6, 2, 2023),
    (20230615, '2023-06-15', 'Thursday', 15, 6, 2, 2023),
    (20230701, '2023-07-01', 'Saturday', 1, 7, 3, 2023),
    (20230710, '2023-07-10', 'Monday', 10, 7, 3, 2023),
    (20230720, '2023-07-20', 'Thursday', 20, 7, 3, 2023),
    (20230805, '2023-08-05', 'Saturday', 5, 8, 3, 2023),
    (20230818, '2023-08-18', 'Friday', 18, 8, 3, 2023),
    (20230902, '2023-09-02', 'Saturday', 2, 9, 3, 2023),
    (20230915, '2023-09-15', 'Friday', 15, 9, 3, 2023),
    (20231001, '2023-10-01', 'Sunday', 1, 10, 4, 2023),
    (20231020, '2023-10-20', 'Friday', 20, 10, 4, 2023),
    (20231105, '2023-11-05', 'Sunday', 5, 11, 4, 2023),
    (20231122, '2023-11-22', 'Wednesday', 22, 11, 4, 2023),
    (20231210, '2023-12-10', 'Sunday', 10, 12, 4, 2023),
    (20231228, '2023-12-28', 'Thursday', 28, 12, 4, 2023);

-- Sales table
CREATE TABLE sales (
    sale_id INTEGER PRIMARY KEY,
    date_id INTEGER,
    customer_id INTEGER,
    product_id INTEGER,
    store_id INTEGER,
    quantity INTEGER,
    total_price REAL,
    discount REAL,
    FOREIGN KEY (date_id) REFERENCES dates(id),
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (store_id) REFERENCES stores(id)
);

INSERT INTO sales (sale_id, date_id, customer_id, product_id, store_id, quantity, total_price, discount) VALUES 
    (1, 20230601, 1, 1, 1, 1, 699.99, 0.00),
    (2, 20230615, 2, 2, 2, 1, 1234.99, 65.00),
    (3, 20230701, 3, 3, 3, 5, 94.95, 5.00),
    (4, 20230710, 4, 4, 4, 1, 85.49, 4.50),
    (5, 20230720, 5, 5, 5, 2, 151.98, 8.00),
    (6, 20230805, 6, 6, 6, 1, 129.99, 0.00),
    (7, 20230818, 7, 7, 7, 3, 84.97, 5.00),
    (8, 20230902, 8, 8, 8, 1, 59.99, 0.00),
    (9, 20230915, 9, 9, 9, 2, 94.98, 5.00),
    (10, 20231001, 10, 10, 10, 1, 189.99, 10.00),
    (11, 20231020, 11, 11, 1, 1, 39.99, 0.00),
    (12, 20231105, 12, 12, 2, 2, 69.98, 0.00),
    (13, 20231122, 13, 13, 3, 3, 83.97, 6.00),
    (14, 20231210, 14, 14, 4, 1, 75.99, 4.00),
    (15, 20231228, 15, 15, 5, 1, 69.99, 0.00),
    (16, 20230710, 1, 5, 1, 1, 79.99, 0.00),
    (17, 20230805, 2, 7, 2, 2, 57.98, 2.00),
    (18, 20230915, 3, 10, 3, 1, 189.99, 10.00),
    (19, 20231001, 4, 3, 4, 3, 56.97, 3.00),
    (20, 20231122, 5, 8, 5, 1, 59.99, 0.00);
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
        const foreignKeyInfo = db.exec(`PRAGMA foreign_key_list(${tableName})`);
        
        const foreignKeys = new Set(foreignKeyInfo[0]?.values.map(fk => fk[3]) || []);

        schema[tableName] = tableInfo[0].values.map(column => ({
            name: column[1],
            type: column[2],
            notNull: column[3] === 1,
            primaryKey: column[5] === 1,
            foreignKey: foreignKeys.has(column[1])
        }));
    });

    return schema;
}

