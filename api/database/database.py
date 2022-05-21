import sqlite3, os
from pathlib import Path
from sqlite3 import dbapi2
from tkinter import N

parent = os.getcwd()
dbPath = os.path.join(parent, "database.db")

# Path for testing of the database functions
# dbPath = os.path.join(os.path.dirname(os.getcwd()), "database.db")

# Connect to DB
def connect_to_db():
    print(dbPath)
    conn = sqlite3.connect(dbPath)
    return conn

# Create table
def create_dbTable():
    conn = connect_to_db()

    try:
        with open('schema.sql') as f:
            conn.executescript(f.read())
            conn.commit()
        print("Create profiles tables successfully")
    except Exception as e:
        print(e)
        print("Table creation failed")
    finally:
        conn.close()

# Insert user
def insert_user(user):
    inserted_user = {}
    try:
        conn = connect_to_db()
        cur = conn.cursor()
        cur.execute("INSERT INTO profiles (username, age, occupation, phoneNumber) VALUES (?,?,?,?)",
                    (user["username"], user["age"], user["occupation"], user["phoneNumber"]))
        conn.commit()
        inserted_user = get_user_by_id(cur.lastrowid)

    except Exception as e:
        print("Failed: ", e)
        conn.rollback()
    finally:
        conn.close()

    return inserted_user

# Convert row object to dictionary
def row_to_dict(row):
    user = {}
    user["id"] = row["id"]
    user["username"] = row["username"]
    user["age"] = row["age"]
    user["occupation"] = row["occupation"]
    user["phoneNumber"] = row["phoneNumber"]
    return user

# Get user id
def get_user_by_id(uid):
    try:
        conn = connect_to_db()
        conn.row_factory = sqlite3.Row
        cur = conn.cursor()
        cur.execute("SELECT * FROM profiles WHERE id = ?", (uid,))
        row = cur.fetchone()
        user = row_to_dict(row)

    except Exception as e:
        print(e)
        user = {}
    return user

# Get user id given name
def get_user(name):
    try: 
        print(name)
        conn = connect_to_db()
        conn.row_factory = sqlite3.Row
        cur = conn.cursor()
        cur.execute("SELECT * FROM profiles WHERE username = ?", (name,))
        row = cur.fetchone()
        user = row_to_dict(row)

    except Exception as e:
        print(e)
        user = {}

    return user

# Delete user
def delete_user(name):
    message = {}

    try:
        conn = connect_to_db()
        cur = conn.cursor()
        cur.execute("DELETE FROM profiles WHERE username = ?", (name,))
        conn.commit()
        message['status'] = "User deleted succesfully"
    except Exception as e:
        print(e)
        conn.rollback()
        message['status'] = "Cannot delete user"

    return message
