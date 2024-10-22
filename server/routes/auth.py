from flask import Blueprint, jsonify, request,session
from models.users import User
from utils.service_auth import register_f,login_f
#login
auth_bp = Blueprint('auth', __name__)
@auth_bp.route("/api/login", methods=["POST"])
def login():
    data = request.json
    user_name = data.get('user_name')
    password = data.get('password')
    user_temp = login_f(user_name=user_name, password=password)
    if user_temp:
        session['user_id'] = user_temp.user_id
        session['user_name'] = user_temp.user_name
        return jsonify({"message": "Login successful", "user_name": user_temp.user_name, "user_id": user_temp.user_id}), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401
@auth_bp.route("/api/register", methods=["POST"])
def register():
    data = request.json
    name = data.get("name")
    user_name = data.get("user_name")
    password = data.get("password")
    
    if name and user_name and password:
        new_user = register_f(user_name=user_name, name=name, password=password)
        if new_user:
            return jsonify({"message": "User registered successfully"}), 201
        else:
            return jsonify({"message": "Registration failed"}), 400
    else:
        return jsonify({"message": "Invalid input data"}), 400
