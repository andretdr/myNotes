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
    column1 datatype,
    column2 datatype,
    ...
);

// Primary Key
// Composite Pri Key
// combining keys to create a unique key

