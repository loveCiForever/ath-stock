from flask import Flask,Blueprint,jsonify

home_bp = Blueprint('Home',__name__)

@home_bp.route("/")
def home():
    return jsonify(
        {
            "inf" : 'hello world'
        }
    )
    
@home_bp.route('/api/posts', methods=['GET'])
def get_post():
    return