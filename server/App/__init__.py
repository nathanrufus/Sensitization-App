from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from datetime import timedelta
import secrets




db = SQLAlchemy()
migrate=Migrate()
jwt=JWTManager()
bcrypt=Bcrypt()

def create_app():
    app = Flask(__name__)
    CORS(app)

    jwt_secret_key = secrets.token_urlsafe(32)
    flask_secret_key = secrets.token_urlsafe(16)

    app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///sensitize.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATION']=False
    app.secret_key = 'super secret key'

    # app.config['SECRET_KEY'] = flask_secret_key
    app.config['JWT_SECRET_KEY'] = jwt_secret_key
    app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(days=7)
    app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(days=30)


    Bcrypt(app) 
    db.init_app(app)
    jwt.init_app(app)
    migrate.init_app(app,db)

    from .routes import bp
    app.register_blueprint(bp)
    
    with app.app_context():
        db.create_all()

    return app



