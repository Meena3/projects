from flask import Flask
from flask import request,jsonify,make_response
from flask_cors import CORS
from flask_mysqldb import MySQL
import hashlib
import json
import os
import jwt
import math
import datetime
app = Flask(__name__,static_url_path = '/static')
CORS(app)

app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = "Mysql"
app.config["MYSQL_DB"] = "video"
app.config["MYSQL_CURSOR"] = "DictCursor"
mysql = MySQL(app)


def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    return hash.hexdigest()

def generate_salt():
    salt = os.urandom(16)
    return salt.hex()

# login
@app.route('/login' ,methods = ['POST'])
def login():
    email = request.json["email"]
    password = request.json["password"]
    salt = generate_salt()
    password_hash = md5_hash(password+salt)
    cursor = mysql.connection.cursor()
    cursor.execute(
        """insert into users(email,salt,password_hash)
        values(%s,%s,%s)""",[email,salt,password_hash]
    )
    mysql.connection.commit()
    cursor.close()
    return {"message":"Success"}

# video upload
@app.route('/upload_video' ,methods = ['POST'])
def upload_video():
    video_title = request.headers.get("video_title")
    description = request.headers.get("description")
    tags = request.headers.get("tags")
    category = request.headers.get("category")
    if request.method == 'POST':
        f = request.files['video_location']
        location = "static/img/" + f.filename
        f.save(location)
    cursor = mysql.connection.cursor()
    cursor.execute(
        """insert into video_details(video_title,description,video_location,tags,category)
        values(%s,%s,%s,%s,%s)""",(video_title,description,location,tags,category)
    )
    mysql.connection.commit()
    cursor.close()
    return {"message":"Success"}

# get videos
@app.route('/all_videos')
def allVideos():
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ select * from video_details"""
    )
    result = cursor.fetchall()
    cursor.close()
    items = []
    for item in result:
        items.append(item)
    return json.dumps(items)