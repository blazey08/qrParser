import os
from flask import Flask, request, redirect
from decoder import processQR
from database.database import insert_user, delete_user, get_user, check_creds, connect_to_db

app = Flask(__name__)
UPLOAD_FOLDER = os.path.join(os.path.abspath('.'), 'qr')

@app.route('/login', methods=["POST"])
def login_page():
    username = request.values.get("username")
    password = request.values.get("password")

    if check_creds(username, password):
        print("login success")
        return {"valid":True}

    else:
        print("login fail")
        return {"valid":False}

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
        val = get_user(user)
        if val == {}:
            return {"Status":"Error"}
        val["Status"] = "Ok"
        return val

@app.route('/delete/<user>', methods=["DELETE"])
def del_user(user):
    if request.method == "DELETE":
        return delete_user(user)
