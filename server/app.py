from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


db=SQLAlchemy()
app=Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///sensitize.db'
app.config['SQLALCHEMY_TRACK_MODIFICATION']=False

db.init_app(app)
migrate = Migrate(app, db)

@app.route('/')
def home():
    return 'Welcome home lets sensitize'

if __name__=='__main__':
    app.run(debug=True)