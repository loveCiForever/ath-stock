from werkzeug.security import generate_password_hash, check_password_hash
from models.users import User
from database.db import db

def register_f (user_name,name,password):
    password_hashcode = generate_password_hash(password)
    new_user = User(user_name=user_name,name=name,password_hashcode=password_hashcode)
    db.session.add(new_user)
    db.session.commit()
    return new_user
    
def login_f (user_name,password):
    user = User.query.filter_by(user_name = user_name).first()
    
    if user and check_password_hash(user.password_hascode,password):
        return user
    else:
        return None
    