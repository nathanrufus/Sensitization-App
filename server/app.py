
from App import create_app

app=create_app()




@app.route('/')
def home():
    return 'Welcome home lets sensitize'

if __name__=='__main__':
    app.run(debug=True)