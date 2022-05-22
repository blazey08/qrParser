from database.database import create_dbTable, insert_user, add_account

# Seeding data
initData = [{
    "username": "Jake",
    "age": 50,
    "occupation": "Doctor",
    "phoneNumber": 87225335
},
{
    "username": "Selena",
    "age": 25,
    "occupation": "Guitarist",
    "phoneNumber": 90225455
},
{
    "username": "Leo",
    "age": 30,
    "occupation": "Engineer",
    "phoneNumber": 87235567
}] 

# Create tables
create_dbTable()

# Add user accounts
add_account("admin", "admin")
add_account("user", "user")

# Populate db with data
for i in initData:
    insert_user(i)
