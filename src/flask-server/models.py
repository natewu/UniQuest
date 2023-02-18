from app import db,ma
from datetime import datetime
from sqlalchemy import event


user_to_screenQR = db.Table('user_to_screenQR',
                    db.Column('user_id', db.Integer, db.ForeignKey('user.id')),
                    db.Column('screen_id', db.Integer, db.ForeignKey('screen.id'))
                    )
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    firstName = db.Column(db.String(20), nullable=False)
    lastName = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60))    
    points = db.Column(db.Integer, default=0)
    
    screens = db.relationship('Screen', secondary=user_to_screenQR, backref='users')
    
class Screen(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60))    
    points = db.Column(db.Integer, default=0)
    # The current string represented by QR code on this screen
    curString = db.Column(db.String(60))    


# Generate marshmallow Schemas from your models
class UsersShema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ("id","firstName","lastName", "email", "password", "points")
class ScreenShema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ("id","email", "password","curString", "points")


@event.listens_for(Screen.__table__, 'after_create')
def create_screens(*args, **kwargs):
    db.session.add(Screen(id=1, email="screen1@ucalgary.ca", password="screen1", curString="cLSDMfn3oA)93fS"))
    db.session.commit()

@event.listens_for(User.__table__, 'after_create')
def create_users(*args, **kwargs):
    db.session.add(User(id=1, firstName = "Allan", lastName = "Kong", email= "allan.kong@ucalgary.ca", password="allan"))
    db.session.commit()



screen_schema = ScreenShema()
screens_schema = ScreenShema(many=True)

user_schema = UsersShema()
users_schema = UsersShema(many=True)