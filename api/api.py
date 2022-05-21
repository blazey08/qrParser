import os
from flask import Flask, request, redirect
from decoder import processQR
from database.database import insert_user, delete_user, get_user, get_user_by_id

app = Flask(__name__)
UPLOAD_FOLDER = os.path.join(os.path.abspath('.'), 'qr')

@app.route('/login', methods=["POST"])
def login_page():
    username = request.values.get("username")
    password = request.values.get("password")

    if username == "admin"  or username == "user":
        print("login success")
        return {"status":200, "token":"test"}

    else:
        print("login fail")
        return {"status":404}

    

@app.route('/upload', methods = ["POST"])
def add_user():
    if request.method == "POST":
        image = request.files['file']
        imgPath = os.path.join(UPLOAD_FOLDER, image.filename)
        image.save(imgPath)
        insert_user(processQR(imgPath))
        return {"Ack":"Data for {} successfully processed".format(image.filename)}

@app.route('/search/<user>', methods = ["GET"])
def find_user(user):
    if request.method == "GET":
        return get_user(user)

@app.route('/delete/<user>', methods=["DELETE"])
def del_user(user):
    if request.method == "DELETE":
        return delete_user(user)
