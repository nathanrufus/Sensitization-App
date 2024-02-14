from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


db = SQLAlchemy()
migrate=Migrate()
def create_app():
    app = Flask(__name__)

    app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///sensitize.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATION']=False


    db.init_app(app)
    migrate = Migrate(app, db)


    # from .routes import bp
    # app.register_blueprint(bp)
    
    with app.app_context():
        db.create_all()

    return app