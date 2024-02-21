from App.models import Comment
from flask import request, jsonify,make_response
from App import db,bcrypt
from sqlalchemy.exc import SQLAlchemyError
import logging


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