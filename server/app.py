from flask import Flask
from flask_cors import CORS
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

CORS(app)

def create_app():
    from routes.home import home_bp
    from routes.auth import auth_bp
    from routes.user import user_bp
    
    app.register_blueprint(home_bp)
    app.register_blueprint(auth_bp)
    app.register_blueprint(user_bp)
    return app


if __name__ == '__main__':
    create_app()
    app.run(debug=app.config['DEBUG'],port=app.config['PORT']) 