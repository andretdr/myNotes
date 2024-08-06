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




