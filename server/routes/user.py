from flask import Blueprint,  session, redirect, url_for,jsonify

user_bp = Blueprint('user', __name__)
@user_bp.route("/user")
def userpage():
    if 'user_id' in session:
        user_name = session['user_name']
        return jsonify (
            {
                jsonify({'user_name': user_name})
            }
        )
    else:
        return redirect(url_for('auth.login'))