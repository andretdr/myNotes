# MariaDB configure

# Configure DB
try:
    conn = mariadb.connect(
        user = "kouki",
        password = "",
        host = "localhost",
        port = 3306,
        database = ""
    )
except mariadb.Error as e:
    print(f"Error connecting to database: {e}")
    sys.exit(1)
