/////////////////////////
// DATABADE DESIGN
/////////////////////////

// Primary Key a column or set of columns in a table that uniquely identifies each row in that table.

// Foreign Key references primary key from another table
// can be duplicate

CREATE TABLE students ( 
  student_id SERIAL PRIMARY KEY,
  player_name TEXT
);

CREATE TABLE tests ( 
   subject_id SERIAL,
   subject_name text,
   highestStudent_id integer REFERENCES students // use REFERENCES as foreign key
);

// ANOTHER WAY OF DOING, specifying specifically the student_id column
CREATE TABLE tests ( 
   subject_id SERIAL,
   subject_name text,
   highestStudent_id integer REFERENCES students (student_id)
);

// Out of line
CREATE TABLE tests ( 
  subject_id SERIAL,
  subject_name text,
  highestStudent_id integer, 
  constraint fk_tests_students
     foreign key (highestStudent_id) 
     REFERENCES students (student_id)
);

// ALTER TABLE
/////////////////
CREATE TABLE tests (
  subject_id SERIAL,
  subject_name text,
  highestStudent_id integer
);
// alter AFTER the table is created
ALTER TABLE tests
    add constraint fk_tests_students
    foreign key (highestStudent_id)
    REFERENCES students (student_id);


/////////////////////////
// RELATIONSHIP
/////////////////////////

// 1:1
/////////
CREATE TABLE students (
    student_id integer PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE student_details (
    student_id integer PRIMARY KEY,
    address VARCHAR(200),
    phone_number VARCHAR(20) UNIQUE,
    FOREIGN KEY (student_id) REFERENCES students(student_id)
);

// student_id is both the primary key in student_details and a foreign key referencing students
// foreign key needs to be unique
// only possible w 1:1 relationships

// 1:many
///////////
CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(100)
);

CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    name VARCHAR(100),
    department_id INT, // NOT unique, can have duplicates
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);
// foreign key NOT unique, can have duplicates

// many:1
///////////
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    order_date DATE,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
// foreign key NOT unique, can have duplicates
// same as 1:many, just see it from the other entity

many:many
CREATE TABLE books (
    book_id INT PRIMARY KEY,
    title VARCHAR(200)
);

CREATE TABLE authors (
    author_id INT PRIMARY KEY,
    name VARCHAR(100)
);

// create joining table
CREATE TABLE book_authors (
    book_id INT,
    author_id INT,
    PRIMARY KEY (book_id, author_id),
    FOREIGN KEY (book_id) REFERENCES books(book_id),
    FOREIGN KEY (author_id) REFERENCES authors(author_id)
);

// if not using PRIMARY KEY (foreignkey, foreignkey), use UNIQUE to enforce uniqueness
CREATE TABLE book_authors (
    id SERIAL PRIMARY KEY,
    book_id INT,
    author_id INT,
    FOREIGN KEY (book_id) REFERENCES books(book_id),
    FOREIGN KEY (author_id) REFERENCES authors(author_id),
    UNIQUE (book_id, author_id)
);

////////////////////////////////////////////
// ER Diagram Entity-Relationship Diagram
////////////////////////////////////////////
////////////////////////////////////////////


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


