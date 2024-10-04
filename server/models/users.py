from database.db import db

class User(db.Model):
    user_id = db.Column(db.Integer,primary_key = True, autoincrement=True)
    user_name = db.Column(db.String(100))
    name = db.Column(db.String(100))
    password_hashcode = db.Column(db.String(128))

    def __init__(self,user_name,name,password_hashcode) :
        self.user_name = user_name
        self.name = name
        self.password_hashcode = password_hashcode
