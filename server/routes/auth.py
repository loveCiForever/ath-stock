from flask import Blueprint, jsonify, redirect,render_template, request,session, url_for,flash
from models.users import User
from utils.service_auth import register_f,login_f
#login
auth_bp = Blueprint('auth', __name__)
@auth_bp.route("/login",methods = ["POST","GET"])
def login():
    if request.method == "POST":
        user_name = request.form['user_name']
        password = request.form['password']
        
        user_temp = login_f(user_name=user_name,password=password)
        
        if user_temp:
            
            session['user_id'] = user_temp.user_id
            session['user_name'] = user_temp.user_name
            
            return redirect(url_for('user.userpage',name = user_name))
        else:
            flash('Thông tin đăng nhập không chính xác!')
    return render_template('login.html')

@auth_bp.route("/register",methods = ["POST","GET"])
def register():
    if request.method == "POST":
        name = request.form["name"]
        user_name = request.form["user_name"]
        password = request.form["password"]
        if  name and user_name and password and password == password:
            new_user = register_f(user_name=user_name,name=name,password=password)
            if new_user:
                return jsonify({"message": "User registered successfully"}), 201
            else:
                return jsonify({"message": "Registration failed"}), 400
    return render_template("register.html")
