from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/main')
def main_page():
    return {{"Hello": 500}}


