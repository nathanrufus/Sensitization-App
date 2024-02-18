from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt

db = SQLAlchemy()
migrate=Migrate()
jwt=JWTManager()
bcrypt=Bcrypt()

def create_app():
    app = Flask(__name__)

    app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///sensitize.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATION']=False
    app.secret_key = 'super secret key'

    Bcrypt(app) 
    db.init_app(app)
    jwt.init_app(app)
    migrate.init_app(app,db)

    from .routes import bp
    app.register_blueprint(bp)
    # from App.api.routes import bp
    # app.register_blueprint(bp)

    with app.app_context():
        db.create_all()

    return app



