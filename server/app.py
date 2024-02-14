
from App import create_app
from App.controller.user_controller import get,register_user,login_user

app=create_app()




@app.route('/')
def home():
    return 'Welcome home lets sensitize'

@app.route('/users', methods=['GET'])
def get_users():
    return get()
@app.route('/register', methods=['POST'])
def reg_user():
    return register_user()
@app.route('/login', methods=['POST'])
def log_user():
    return login_user()



if __name__=='__main__':
    app.run(debug=True)