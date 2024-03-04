from ..models import User
from flask import request, jsonify,make_response
from .. import db,bcrypt,jwt
from sqlalchemy.exc import SQLAlchemyError
import logging
from flask_jwt_extended import create_access_token,unset_jwt_cookies


logging.basicConfig(level=logging.INFO)

@jwt.user_lookup_loader
def user_lookup_callback(_jwt_header, jwt_data):
    identity = jwt_data["sub"]
    return User.query.filter_by(id=identity).first()


def handle_error(e, status_code):
    logging.error(str(e))
    return jsonify({'error' : str(e)}), status_code


def get():
    try:
        user=User.query.all()
        return jsonify([user.serialize() for user in user]),200
    except SQLAlchemyError as e:
        return handle_error(e,500)
       
def register_user():
    try:
        data=request.get_json()
        password= data.get('password')   
        email=data.get('email')
        name=data.get('name')


        if not email or not password:
            return jsonify({"error": "Email and password are required"}), 400

        user_exist=User.query.filter_by(email=email).first() is not None
        if user_exist:
            return jsonify({"error":"user already exist"}),409
        hashed_password= bcrypt.generate_password_hash(password)  
        new_user=User(name=name,email=email,password=hashed_password)  
        db.session.add(new_user)
        db.session.commit()

        access_token = create_access_token(identity=new_user.id)
        return make_response(jsonify({'access_token': access_token}), 201)

    except SQLAlchemyError as e:
          return handle_error(e,500) 
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
        
        access_token=create_access_token(identity=user.id)
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

