from flask import Flask, request, jsonify
from flask_cors import CORS
# from config import Config

app = Flask(__name__)
# app.config.from_object(Config)
CORS(app)

USER = {
    "email": "user@example.com",
    "password": "password123"
}

@app.route('/token', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if email == USER['email'] and password == USER['password']:
        return jsonify({"access_token": "your_access_token_here"}), 200
    else:
        return jsonify({"error": "Invalid credentials"}), 401

if __name__ == '__main__':
    app.run(debug=True)
