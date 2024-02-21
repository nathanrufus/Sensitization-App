# from flask import Flask
# from flask_sqlalchemy import SQLAlchemy
from App import create_app

app=create_app()
# db = SQLAlchemy()


# app = Flask(__name__)

# app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///sensitize.db'
# db.init_app(app)

if __name__=='__main__':
    app.run(debug=True)