from random import choice as rc, randint as ri
from app import app,db
from faker import Faker
from App.models import Comment,Profile,Post,User


fake=Faker()


with app.app_context():

    User.query.delete()
    for i in range(20):
        result=[]
        roles=["admin","user"]
        new_user=User(
            name=fake.name(),
            email=fake.email(),
            password=fake.password(),
            role=rc(roles)
        )
        result.append(new_user)
        db.session.add_all(result)
        db.session.commit()
    Post.query.delete()
    for i in range(20):
        result=[]
        new_user=Post(
            name=fake.name(),
            email=fake.email(),
            message=fake.sentence(),
            likes=ri(0, 50),
            user_id=ri(0,23)
        )
        result.append(new_user)
        db.session.add_all(result)
        db.session.commit()

    Comment.query.delete()
    for i in range(20):
        result=[]
        new_user=Comment(
            name=fake.name(),
            email=fake.email(),
            comment=fake.sentence(),
            user_id=ri(0,23)
        )
        result.append(new_user)
        db.session.add_all(result)
        db.session.commit()

    Profile.query.delete()
    for i in range(20):
        result=[]
        new_user=Profile(
            name=fake.name(),
            email=fake.email(),
            post_id=ri(0,23)
        )
        result.append(new_user)
        db.session.add_all(result)
        db.session.commit()