from ..models import Post
from flask import request, jsonify,make_response
from .. import db,bcrypt
from sqlalchemy.exc import SQLAlchemyError
import logging
from flask_jwt_extended import jwt_required,get_jwt_identity



logging.basicConfig(level=logging.INFO)

def handle_error(e, status_code):
    logging.error(str(e))
    return jsonify({'error' : str(e)}), status_code
def create_post():
    try:
        data=request.get_json()
        if 'name' not in data or 'email' not in data or 'message' not in data or 'likes' not in data:
            return handle_error('Missing data fields', 400)
        newpost=Post(name=data["name"],email=data["email"],message=data["message"],likes=data["likes"])
        db.session.add(newpost)
        db.session.commit()
        return jsonify (newpost.serialize()),200
    except SQLAlchemyError as e:
        handle_error(e,500)
def get_post():
    try:
        user=Post.query.all()
        return jsonify([user.serialize() for user in user])
    except SQLAlchemyError as e:
        return handle_error(e,500)

def getpost_by_id(post_id):
    try:
        user=Post.query.filter_by(id=post_id).first()
        return jsonify(user.serialize()),200
    except SQLAlchemyError as e:
        return handle_error(e,500)
       
def delete_poat(user_id):
    try:
        user=Post.query.filter_by(id=user_id).first()
        db.session.delete(user)
        db.session.commit()
        return jsonify({"message":"deleted successfully"}),200
    except SQLAlchemyError as e:
        return handle_error(e,500)    
