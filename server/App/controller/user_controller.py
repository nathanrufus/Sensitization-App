from App.models import User
from flask import request, jsonify,make_response
from App import db,bcrypt
from sqlalchemy.exc import SQLAlchemyError
import logging
from flask_jwt_extended import create_access_token,unset_jwt_cookies


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
        role=data['role']

        user_exist=User.query.filter_by(email=email).first() is not None
        if user_exist:
            return jsonify({'error':'user exist'}),409
        hashed_password= bcrypt.generate_password_hash(password)  
        new_user=User(name=name,email=email,password=hashed_password,role=role)
        db.session.add(new_user)
        db.session.commit()

        return jsonify({
            "name":new_user.name,
            "email":new_user.email,
            "role":new_user.role,
            # "password":new_user.password
        })
    except SQLAlchemyError as e:
        handle_error(e,500)
def get_by_id(user_id):
    try:
        user=User.query.filter_by(id=user_id).first()
        return jsonify(user.serialize()),200
    except SQLAlchemyError as e:
        return handle_error(e,500)
       
def delete(user_id):
    try:
        user=User.query.filter_by(id=user_id).first()
        db.session.delete(user)
        db.session.commit()
        return jsonify({"message":"deleted successfully"}),200
    except SQLAlchemyError as e:
        return handle_error(e,500)    

def login_user():
    try:
        data=request.get_json()
        password= data['password'] 
        email=data['email'] 

        user=User.query.filter_by(email=email).first() 

        if user is None:
            return jsonify({"error":"unauthorized"}),401 
        if not bcrypt.check_password_hash(user.password,password):
            return jsonify({"error":"unauthorized"}),401 
        
        access_token=create_access_token(identity=email)
        return jsonify({"access_token":access_token})
    

    except SQLAlchemyError as e:
        handle_error(e,500)           
def logout():
    try:
        response = jsonify({"msg": "Logout successful"})
        unset_jwt_cookies(response)
        return response, 200
    except SQLAlchemyError as e:
        return handle_error(e,500)            

