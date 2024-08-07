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

select * from borrowers
where extract(year from registration_date) = 2024

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

/////////////////////
// Create Table
/////////////////////
// not null, UNIQUE, PRIMARY KEY

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

// example
select first_name || ' ' || last_name as full_name, salary 
from employees
where department != 'IT' and salary between 45000 and 55000;

select *
	from employees
where email like '%@%'
and email not like '%-%';

// Order of operations
// https://www.postgresql.org/docs/current/sql-select.html

// Operator Precedence
1. :: (PostgreSQL-style typecast)
2. [ ]  (array element selection)
3. . (table/ column name separator)
4. - (unary minus - i.e. the “negative sign” of a number)
5. ^ (exponentiation)
6. *,/,% (multiplication, division, modulo)
7. +, - (addition, subtraction)
8. Comparison operators (<, >, =, etc.)
9. NOT
10. AND
11. OR

// UPDATE
////////////
// IIREVERSIBLE

UPDATE table_name
SET column1 = value1, column2 = value2,...
WHERE condition;

UPDATE products
SET price = price * 1.1, last_updated = CURRENT_TIMESTAMP
WHERE category = 'Electronics';

UPDATE products
SET stock = stock - 1
WHERE id = 123
RETURNING id, name, stock;

// DELETE
//////////

DELETE FROM table_name
WHERE condition;

DELETE FROM employees WHERE id = 1;

DELETE FROM employees WHERE department = 'Sales';

DELETE FROM employees;

// ORDERBY
/////////////

SELECT column1, column2, ...
FROM table_name
ORDER BY column1 [ASC|DESC], column2 [ASC|DESC], ...;

SELECT name, age 
FROM users 
ORDER BY age;

SELECT name, age 
FROM users 
ORDER BY age DESC;

SELECT name, age 
FROM users 
ORDER BY age ASC, name DESC;

SELECT name FROM users ORDER BY LENGTH(name) DESC;

// LIMITING
////////////
// Truncating with LIMIT

SELECT column1, column2, ...
FROM table_name
LIMIT number_of_rows;

SELECT *
FROM employees
LIMIT 5;

SELECT name, salary
FROM employees
ORDER BY salary DESC
LIMIT 3;

// offset from the top, how many items
SELECT *
FROM products
LIMIT 10 OFFSET 20;

Select *
from employees
order by salary desc 
limit 2
offset 2;

///////////////////
// group by
// USING AGGREGATE FUNCTIONS
/////////////////


SELECT column1, column2, aggregate_function(column3)
FROM table_name
GROUP BY column1, column2;

// example
// for performing some form of aggregation on data
CREATE TABLE sales (
  id SERIAL PRIMARY KEY,
  product VARCHAR(50),
  category VARCHAR(50),
  amount DECIMAL(10,2)
);

INSERT INTO sales (product, category, amount) VALUES
('Laptop', 'Electronics', 1200),
('Smartphone', 'Electronics', 800),
('Desk', 'Furniture', 350),
('Chair', 'Furniture', 150),
('Tablet', 'Electronics', 500);

SELECT category, SUM(amount) as total_sales
FROM sales
GROUP BY category;

  category   | total_sales
-------------+-------------
 Electronics |     2500.00
 Furniture   |      500.00


// example
// because you group them, you need to do some kind of aggregatin function

// this doesnt work
select *
from employees
group by department;

// need to do some aggregation
select department, AVG(salary) as avg_salary
from employees
group by department;

// HAVING
/////////////
// CONDITIONAL, smiliar to WHERE, but for GROUPS
// WHERE is based on table
// HAVING applies to group

SELECT column1, aggregate_function(column2)
FROM table_name
GROUP BY column1
HAVING condition;

SELECT category, SUM(amount) as total_sales
FROM sales
GROUP BY category
HAVING SUM(amount) > 1000;

// WHERE comes before GROUP BY (i.e. before grouping and aggregation)
SELECT category, SUM(amount) as total_sales
FROM sales
WHERE amount > 100
GROUP BY category;

// HAVING comes after GROUP BY (i.e. after grouping and aggregation)
SELECT category, SUM(amount) as total_sales
FROM sales
GROUP BY category
HAVING SUM(amount) > 1000;

// Find departments where the average salary is greater than $52,000.
select department, AVG(salary) as avg_salary
from employees
group by department
having avg(salary) > 52000;

// Find the average salary of employees in departments other than HR, but only for departments with less than 3 employees.
select department, AVG(salary) as avg_salary
from employees
where department != 'HR'


//////////
// JOIN
//////////

// Inner Join
// ONLY INTERSECTIONS are returned
/////////////////////////////////////////

SELECT columns
FROM table1 
INNER JOIN table2
ON table1.column = table2.column;

// USING ALIAS
SELECT t1.order_id, t1.phone, t2.contact
FROM table1 t1
INNER JOIN table2 t2
ON t1.column = t2.column;
// inner join the prikey w the foreignkey

// more then 2 tables
select e.first_name || ' ' || e.last_name as fullname, t.territory_description 
from employees e
inner join employee_territories et 
on e.employee_id = et.employee_id 
inner join territories t 
on et.territory_id = t.territory_id 


// LEFT Join
// INTERSECTIONS AND all of left (primary table) is returned.
// considers empty entries from left, no intersections
// A LEFT JOIN returns all rows from the left table, and the matched rows from the right table. 
// If there's no match, NULL values are returned for columns from the right table.
/////////////////////////////////////////

select *
from customers c // THIS IS THE LEFT TABLE for the LEFT join
left join orders o on c.customer_id = o.customer_id 

// more than 2 tables
select *
from employees e 
left join employee_territories et on e.employee_id = et.employee_id 
left join territories t on et.territory_id = t.territory_id 

// RIGHT JOIN
///////////////////

select *
from products p // THIS IS THE LEFT TABLE for the RIGHT join
right join categories c on c.category_id = p.category_id // C is the RIGHT TABLE


// Full join
// UNION
// A FULL JOIN returns all rows when there is a match in either the left or right table. 
// If there's no match, NULL values are returned for columns from the table without a match.
///////////////////////////////////////////////////////////////////////////

select *
from orders o
full join order_details od on o.order.id = od.order_id


// CROSS JOIN
// A CROSS JOIN is used to produce a Cartesian product of two tables. 
// This means that each row from the first table is combined with every row from the second table.
/////////////////

SELECT p.product_name, c.colour_name
FROM products p
CROSS JOIN colours c;


///////////////////
// SUBQUERY
///////////////////

SELECT column1, column2, ...
FROM table1
WHERE column_name operator (SELECT column_name FROM table2 WHERE condition);


// Find all employees who have processed more orders than the average number of orders processed by all employees.
// finding the average here using sub query

select e.first_name || ' ' || e.last_name as full_name, count(o.order_id) as total_orders
from employees e 
inner join orders o ON e.employee_id = o.employee_id 
group by e.employee_id 
having count(o.order_id) > (
	select AVG(order_count)
	from (
		select count(o.order_id) as order_count
		from orders o 
		group by o.employee_id 
	) as avg_order
)


/////////////////////////
// WINDOW FUNCTION
/////////////////////////

// A window function always has two components:
// 1. Function
//     - ROW_NUMBER() etc.
// 2. Window
//     - How do you want to be viewing your data when you are applying your function
//     - OVER(…)

// Common window functions:

// Ranking functions: ROW_NUMBER(), RANK(), DENSE_RANK()
// Offset functions: LAG(), LEAD()
// Aggregate functions: SUM(), AVG(), COUNT(), etc.
// First/ last value: FIRST_VALUE(), LAST_VALUE()

SELECT 
  sale_date,
  amount,
  SUM(amount) OVER (
    ORDER BY sale_date
  ) AS running_total
FROM sales;

SELECT
  product_name,
  price,
  LAG(price) OVER (ORDER BY price) AS prev_price,
  price - LAG(price) OVER (ORDER BY price) AS price_diff
FROM products;

select e.employee_id, count(o.order_id), rank() over (order by count(o.order_id) desc) as rank
from employees e 
left join orders o on e.employee_id = o.employee_id 
group by e.employee_id 


// We can use window functions to compute a running total of sales amount for each region, 
// with the running total calculated within the frame of the current row and the preceding 6 rows (i.e. a 7-row window):

SELECT 
    sales_date,
    region,
    amount,
    SUM(amount) OVER (
        PARTITION BY region 
        ORDER BY sales_date 
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) AS running_total
FROM 
    sales
ORDER BY 
    region, sales_date;


//////////////////////////////////////////////////////////////////
// CTE to create a table, give it a name for use w subqueries
///////////////////////////////////////////////////////////////////


WITH cte_name AS (
    -- CTE query definition
    SELECT column1, column2
    FROM table_name
    WHERE condition
)
-- Main query that uses the CTE
SELECT column1, column2
FROM cte_name
WHERE another_condition;


group by department
having count(*) < 3;

