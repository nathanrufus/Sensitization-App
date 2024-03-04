from App.models import Comment
from flask import request, jsonify,make_response
from App import db,bcrypt,jwt
from sqlalchemy.exc import SQLAlchemyError
import logging
from flask_jwt_extended import get_jwt_identity,current_user



logging.basicConfig(level=logging.INFO)

def handle_error(e, status_code):
    logging.error(str(e))
    return jsonify({'error' : str(e)}), status_code



def get_comment():
    try:
        user=Comment.query.all()
        return jsonify([user.serialize() for user in user])
    except SQLAlchemyError as e:
        return handle_error(e,500)
    
def getcomment_by_id():
    try:
        user=Comment.query.filter_by(user_id=get_jwt_identity()).first()
        return jsonify(user.serialize()),200
    except SQLAlchemyError as e:
        return handle_error(e,500)    