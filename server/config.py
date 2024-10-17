import os 
from dotenv import load_dotenv
from os import path
from flask_sqlalchemy import SQLAlchemy
load_dotenv()

class Config:
	SECRET_KEY = os.getenv('SECRET_KEY')
	BASEDIR = os.path.abspath(os.path.dirname(__file__))
	SQLALCHEMY_TRACK_MODIFICATIONS = False
	SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL')
	DEBUG = os.getenv('DEBUG') or True
	PORT = os.getenv('PORT')
