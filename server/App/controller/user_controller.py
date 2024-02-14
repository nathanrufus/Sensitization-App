from App.models import User
from flask import request, jsonify
from App import db
from sqlalchemy.exc import SQLAlchemyError
import logging

logging.basicConfig(level=logging.INFO)

def handle_error(e, status_code):
    logging.error(str(e))
    return jsonify({'error' : str(e)}), status_code

def get():
    try:
        user=User.query.all()
        return jsonify([user.serialize() for user in user])
    except SQLAlchemyError as e:
        return handle_error(e,500)
def register_user():
    try:
        data=request.get_json()
        name=data['name']
        email=data['email']
        password=data['password']
        user_exist=User.query.filter_by(email=email).first() is not None
        if user_exist:
            return jsonify({'error':'user exist'}),409
        new_user=User(name=name,email=email,password=password)
        db.session.add(new_user)
        db.session.commit()

        return jsonify({
            "name":new_user.name,
            "email":new_user.email,
            "password":new_user.password
        })
    except SQLAlchemyError as e:
        handle_error(e,500)

def login_user():
    try:
        data=request.get_json()
        password= data['password'] 
        email=data['email'] 

        user=User.query.filter_by(email=email).first() 
        userpass=User.query.filter_by(password=password).first() 

        if user is None:
            return jsonify({"error":"unauthorized"}),401 
        if userpass is None:
            return jsonify({"error":"unauthorized"}),401 
        
        # if not bcrypt.check_password_hash(user.password,password):
        #     return jsonify({"error":"unauthorized"}),401 
        return jsonify({"message":"Successfully logged in"})
    except SQLAlchemyError as e:
        handle_error(e,500)           