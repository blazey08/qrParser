from database import connect_to_db, create_dbTable, insert_user

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

create_dbTable()
for i in initData:
    insert_user(i)
