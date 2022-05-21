import sqlite3

# Connect to DB
def connect_to_db():
    conn = sqlite3.connect('../database.db')
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
        cur.execute("INSERT INTO profiles (username, age, occupation, phoneNumber) VALUES (?, ?,?,?)",
                    (user['username'], user['age'], user['occupation'], user['phoneNumber']))
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

# Get user
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

# Delete user
def delete_user(uid):
    message = {}
    print("hi")

    try:
        conn = connect_to_db()
        conn.execute("DELETE FROM profiles where id = ?", (uid,))
        conn.commit()
        message['status'] = "User deleted succesfully"
    except Exception as e:
        print(e)
        conn.rollback()
        message['status'] = "Cannot delete user"

    return message
