// databse is a collection of schema
// schema is layout of tables
// tables make rows n columns

// data types
///////////////
// https://www.postgresql.org/docs/current/datatype.html

// number
///////////
// SMALLINT: 2-byte integer (-32,768 to 32,767)
// INTEGER: 4-byte integer (-2,147,483,648 to 2,147,483,647)
// BIGINT: 8-byte integer (-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)

// Auto-incrementing integers (usually for primary keys):
//////////////////////////////////////////////////////////
// SMALLSERIAL: 2-byte auto-incrementing integer
// SERIAL: 4-byte auto-incrementing integer
// BIGSERIAL: 8-byte auto-incrementing integer

// Floating-point types:
//////////////////////////
// REAL: 4-byte floating-point number
// DOUBLE PRECISION: 8-byte floating-point number

// Arbitrary precision types:
///////////////////////////////
// NUMERIC(precision, scale) or DECIMAL(precision, scale): Exact numeric with user-specified precision
// The precision is the total number of digits
// The scale is the number of digits in the fraction part

// Character Types
//////////////////
// CHARACTER(n) or CHAR(n): Fixed-length string, padded with spaces
// VARCHAR(n): Variable-length string with a limit // USE THIS W LIMITS INSTEAD OF TEXT
// TEXT: Variable-length string without limit

// Boolean Type
/////////////////
// BOOLEAN: Stores true/ false values

// Date/Time Types
//////////////////////
// DATE: Date (no time of day)
// TIME: Time of day (no date)
// TIMESTAMP: Date and time
// INTERVAL: Time interval

// Binary Data Type
/////////////////////
// BYTEA: Binary data ("byte array")

// Other Types
////////////////

// UUID: Universally Unique Identifiers
// JSON and JSONB: JSON data
// ARRAY: Stores arrays of other data types
// HSTORE: Stores key-value pairs
// Geometric types (e.g. POINT, LINE, CIRCLE)
// Network address types (e.g. INET, CIDR)
// Enumerated types (ENUM)


// Create Table
CREATE TABLE table_name (
    column1 datatype PRIMARY KEY,
    column2 datatype,
    ...
);

// Primary Key
// Composite Pri Key
// combining keys to create a unique key


// Insertion
INSERT INTO users (first_name, last_name, email)
VALUES ('Mark', 'Wilson', 'mark@example.com')
RETURNING id, first_name, last_name;


insert into employees(employee_id, first_name, last_name, email, hire_date, department, salary)
values 	(1, 'John', 'Doe', 'john.doe@example.com', TO_DATE('2020-01-15', 'YYYY-MM-DD'), 'Sales', 50000.00),
	(2, 'Jane', 'Smith', 'jane.smith@example.com', TO_DATE('2019-03-20', 'YYYY-MM-DD'), 'Marketing', 55000.00)
returning employee_id;

insert into employees (employee_id, first_name, last_name, email, hire_date, department, salary)
values 
    (1, 'John', 'Doe', 'john.doe@example.com', '2020-01-15', 'Sales', 50000.00),
    (2, 'Jane', 'Smith', 'jane.smith@example.com', '2019-03-20', 'Marketing', 55000.00),
    (3, 'Mike', 'Johnson', 'mike.johnson@example.com', '2021-05-10', 'IT', 60000.00),
    (4, 'Emily', 'Brown', 'emily.brown@example.com', '2018-11-01', 'HR', 52000.00),
    (5, 'David', 'Lee', 'david.lee@example.com', '2022-02-28', 'Sales', 48000.00)
returning employee_id;

// Select
SELECT * FROM table_name
SELECT town, zip FROM cities;

// Calculated Columns
////////////////////////
Postgres can calulate simple things
// AS gives us a new column name for the combined columns
- Addition (+): SELECT price + tax AS total_price FROM products;
- Subtraction (-): SELECT revenue - expenses AS profit FROM financials;
- Multiplication (*): SELECT quantity * unit_price AS line_total FROM orders;
- Division (/): SELECT total_distance / total_time AS average_speed FROM trips;
- Exponentiation (^): SELECT base ^ exponent AS power_result FROM math_operations;
- Square Root (|/): SELECT |/ area AS side_length FROM squares;
- Cube Root (||/): SELECT ||/ volume AS side_length FROM cubes;
- Factorial (!): SELECT 5! AS factorial_5; (calculates 5 factorial)
- Absolute Value (@): SELECT @ temperature AS abs_temperature FROM weather_data;
- Modulo/Remainder (%): SELECT order_id % 10 AS order_group FROM orders;

select  column_a + column_b as column_sum,
	column_a - column_b as column_minus
from table_a

// CANNOT DO THIS
SELECT
	price * (1 + tax_rate) AS price_with_tax,
	// price_with_tax is not created yet
	ROUND(price_with_tax, 2) AS rounded_price_with_tax
FROM products;

// this
SELECT 
  price * (1 + tax_rate) AS price_with_tax,
  ROUND(price * (1 + tax_rate), 2) AS rounded_price_with_tax
FROM products;

// EXAMPLE
select employee_id, first_name, last_name, salary, salary*1.1 as increased_salary
from employees

// EXAMPLE
select employee_id, first_name, last_name, salary, 
	ROUND(salary/260, 2) as daily_rate, 
	ROUND(salary/52, 2) as weekly_rate, 
	ROUND(salary/12, 2) as monthly_rate
from employees;

// ADDITIONAL OPERATIONS
//////////////////////////


SELECT 'Hei' || ' Coders' AS result;
-- Result: 'Hei Coders'

SELECT 'Heicoders' || '.com' AS result;
-- Result: 'Heicoders.com'

SELECT 'h' || 'e' || 'i' AS result;
-- Result: 'hei'

SELECT CONCAT('h', 3, 'i', 'coders', '.', 'com');
-- Result: 'h3icoders.com'

SELECT CONCAT('h', 3, 'i', 'coders', NULL, '.', 'com');
-- Result: 'h3icoders.com' (Note: NULL values are ignored)

SELECT LOWER('HEICODERS');
-- Result: 'heicoders'

SELECT LOWER(column_name) FROM table_name;

SELECT UPPER('heicoders');
-- Result: 'HEICODERS'

SELECT UPPER(column_name) FROM table_name;

SELECT LENGTH('heicoders');
-- Result: 9

// example
select employee_id , (first_name || ' ' || last_name) as full_name, upper(department)
from employees;


// CONDITIONAL
//////////////////

SELECT column1, column2 FROM table_name WHERE condition;
// compare equality
SELECT * FROM employees WHERE department = 'IT' AND salary > 60000;

// not equal
// <> !=

// ADVANCED FILTERING
//////////////////////

// IN
SELECT *
FROM products
WHERE category IN ('Electronics', 'Computers', 'Accessories');

SELECT *
FROM customers
WHERE country NOT IN ('USA', 'Canada', 'Mexico');

// BETWEEN
SELECT *
FROM orders
WHERE order_date BETWEEN '2023-01-01' AND '2023-12-31';

// LIKE
SELECT * FROM employee WHERE name LIKE 'J%'

// NULL
SELECT *
FROM contacts
WHERE phone_number IS NULL;

// COMBINED
SELECT * FROM employees 
WHERE department = 'Sales' 
  AND salary > 50000 
  AND hire_date >= '2022-01-01';

SELECT * FROM products 
WHERE category = 'Electronics' 
   OR category = 'Computers' 
   OR price > 1000;

SELECT * FROM products 
WHERE (category = 'Electronics' OR category = 'Appliances') 
  AND price BETWEEN 100 AND 500 
  AND stock > 0;

SELECT * FROM employees 
WHERE department IN ('Sales', 'Marketing', 'Customer Service') 
  AND salary > 40000 
  AND hire_date >= '2021-01-01';

SELECT * FROM orders 
WHERE (status = 'Pending' OR status = 'Processing') 
  AND total_amount > 500 
  AND customer_id IN (SELECT id FROM premium_customers) 
  AND order_date BETWEEN '2023-01-01' AND '2023-12-31';

