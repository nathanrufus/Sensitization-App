from flask import Blueprint
from App.controller.user_controller import get,register_user,login_user
from flask_jwt_extended import jwt_required
from App import jwt

bp = Blueprint('bp', __name__)


@bp.route('/')
@jwt_required()
def home():
    return 'Welcome home lets sensitize'
@bp.route('/users', methods=['GET'])
def get_users():
    return get()
@bp.route('/register', methods=['POST'])
def reg_user():
    return register_user()
@bp.route('/login', methods=['POST'])
def log_user():
    return login_user()