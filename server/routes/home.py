from flask import Flask,Blueprint,jsonify

home_bp = Blueprint('Home',__name__)

@home_bp.route("/")
def home():
    return jsonify(
        {
            "inf" : 'hello world'
        }
    )