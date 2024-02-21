from flask import Blueprint
from App.controller.user_controller import get,register_user,login_user,delete,get_by_id
from App.controller.post_controller import getpost_by_id,get_post
from App.controller.comment_controller import get_comment


from .roles import admin_required,user_required
from App import jwt

bp = Blueprint('bp', __name__)


@bp.route('/')
# @user_required
def home():
    return 'Welcome home lets sensitize'
@bp.route('/users', methods=['GET'])
def get_users():
    return get()
@bp.route('/users/<int:user_id>', methods=['GET'])
def get_usersid(user_id):
    return get_by_id(user_id)
@bp.route('/users/<int:user_id>', methods=['DELETE'])
def delete_users(user_id):
    return delete(user_id)

# post routes

@bp.route('/posts', methods=['GET'])
def get_myposts():
    return get_post()
@bp.route('/users/<int:post_id>', methods=['DELETE'])
def delete_posts(post_id):
    return delete(post_id)

# register users

@bp.route('/register', methods=['POST'])
def reg_user():
    return register_user()
@bp.route('/login', methods=['POST'])
def log_user():
    return login_user()

# comment route
@bp.route('/comments', methods=['GET'])
def get_comments():
    return get_comment()