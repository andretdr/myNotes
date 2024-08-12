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



/////////////////////
// ACID PRINCIPLES
/////////////////////

// ATOMICITY
// All steps to be done sucessfully, or roll back all

// CONSISTENCY
// the total balance across both accounts should remain the same before and after the transfer

// ISOLATION
// all steps can be excuted concurrenly and independant of each other

// DURABILITY
// hardware design to make sure data persists even when system crash



//////////////////
// NORMALISATION
// design database to reduce redundancy
// You gotta know this
//////////////////

// Primary Key
// Relation
// Attribute
// Tuple
// Domain
// Candidate Key
// Superkey - candidate key, or composite columns that create a candidate key
// Foreign Key

// Functional Dependency
// Determinant
// Transitive Dependency
// Partial Dependency

// Normal Forms
  // First Normal Form (1NF)
  // Second Normal Form (2NF)
  // Third Normal Form (3NF)
  // Achieved when a table is in 2NF and all non-key attributes are not transitively dependent on the primary key
  // Boyce-Codd Normal Form (BCNF)
  // Fourth Normal Form (4NF)
  // Fifth Normal Form (5NF)



