from . import db

class User(db.Model):
    __tablename__='users'
    id=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String(100),nullable=False)
    role=db.Column(db.String(100))
    email=db.Column(db.String(100),nullable=False)
    password=db.Column(db.String(100),nullable=False)

    users= db.relationship('Post', backref='posts', lazy=False)
    user_comments= db.relationship('Comment', backref='comments', lazy=False)

    def serialize(self):
        return {
            "id":self.id,
            "name":self.name,
            "email":self.email,
            "role":self.role,
            "password":self.password
        }

class Post(db.Model):
    __tablename__='posts'   
    id=db.Column(db.Integer,primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    name=db.Column(db.String(100))
    email=db.Column(db.String(100))
    photo=db.Column(db.LargeBinary)
    message=db.Column(db.String(500))
    likes=db.Column(db.Integer)

    profiles= db.relationship('Profile' , backref='profiles',lazy=False)

    def serialize(self):
        return {
            "id":self.id,
            "user_id":self.user_id,
            "name":self.name,
            "email":self.email,
            "photo":self.photo,
            "message":self.message,
            "likes":self.likes
        }
class Profile(db.Model):
    __tablename__='profiles'
    id=db.Column(db.Integer,primary_key=True)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'))
    name=db.Column(db.String(100))
    email=db.Column(db.String(100))

    def serialize(self):
        return {
            "id":self.id,
            "post_id":self.post_id,
            "name":self.name,
            "email":self.email
        }

class Comment(db.Model):
    __tablename__='comments'
    id=db.Column(db.Integer,primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    name=db.Column(db.String(100))
    email=db.Column(db.String(100))
    photo=db.Column(db.LargeBinary)
    comment=db.Column(db.String(500))

    def serialize(self):
        return {
            "id":self.id,
            "user_id":self.user_id,
            "name":self.name,
            "email":self.email,
            "photo":self.photo,
            "comment":self.comment
        }
