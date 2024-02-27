from App.models import Post
from flask import request, jsonify,make_response
from App import db,bcrypt
from sqlalchemy.exc import SQLAlchemyError
import logging
from flask_jwt_extended import jwt_required,get_jwt_identity



logging.basicConfig(level=logging.INFO)

def handle_error(e, status_code):
    logging.error(str(e))
    return jsonify({'error' : str(e)}), status_code
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
