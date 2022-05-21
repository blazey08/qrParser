import os
from flask import Flask, request
from decoder import processQR

app = Flask(__name__)
UPLOAD_FOLDER = os.path.join(os.path.abspath('.'), 'qr')

@app.route('/main')
def main_page():
    return {{"Hello": 500}}

@app.route('/upload', methods = ["POST"])
def upload_page():
    if request.method == "POST":
        image = request.files['file']
        imgPath = os.path.join(UPLOAD_FOLDER, image.filename)
        image.save(imgPath)
        processQR(imgPath)
        return {"Ack":"Data for {} successfully received".format(image.filename)}