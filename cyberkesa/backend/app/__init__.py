from flask import Flask
from .models import db
from .routes import app

def create_app():
    app = Flask(__name__)
    app.config.from_object('app.config.Config')
    db.init_app(app)
    return app
