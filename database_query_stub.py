import psycopg2
import os
from getpass import getpass
# https://pynative.com/python-postgresql-tutorial/
user = os.environ.get('USER')
host = os.environ.get('HOST')
password = os.environ.get('PASSWORD')
try:
    connection = psycopg2.connect(user=user,
                                  password=password,
                                  host=host,
                                  port="8001",
                                  database="powwow")

    cursor = connection.cursor()
    # Print PostgreSQL Connection properties
    print(connection.get_dsn_parameters(), "\n")

    # Print PostgreSQL version
    cursor.execute("SELECT version();")
    record = cursor.fetchone()
    print("You are connected to - ", record, "\n")

except (Exception, psycopg2.Error) as error:
    print("Error while connecting to PostgreSQL", error)
finally:
    #closing database connection.
        if(connection):
            cursor.close()
            connection.close()
            print("PostgreSQL connection is closed")
