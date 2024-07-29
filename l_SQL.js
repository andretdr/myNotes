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
values 	(1, John, Doe, john.doe@example.com, 2020-01-15, Sales, 50000.00),
		(2, Jane, Smith, jane.smith@example.com, 2019-03-20, Marketing, 55000.00)
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



