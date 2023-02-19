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
    totalPoints = db.Column(db.Integer, default=0)
    
    screens = db.relationship('Screen', secondary=user_to_screenQR, backref='users')
    
class Screen(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60))    
    points = db.Column(db.Integer, default=0)
    # The current string represented by QR code on this screen
    location = db.Column(db.String(120))
    curString = db.Column(db.String(60))    

    description = db.Column(db.String(800))    
    imageURL = db.Column(db.String(800))    


# Generate marshmallow Schemas from your models
class UsersShema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ("id","firstName","lastName", "email", "password", "points", "totalPoints")
class ScreenShema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ("id","email", "password","curString", "points","location", "description", "imageURL")


@event.listens_for(Screen.__table__, 'after_create')
def create_screens(*args, **kwargs):
    db.session.add(Screen(id=1, email="screen1@ucalgary.ca", password="screen1", curString="cLSDMfn3oA)93fS", points = 20, location="Active Living Center",
    description="The active living center has all the resources needed to support any active lifestyle: a workout at the Fitness Centre, lane swimming, squash or racquetball at the Racquet Centre and much more to support your health!",
    imageURL="https://active-living.ucalgary.ca/sites/default/files/styles/ucws_image_desktop/public/2019-09/FitnessCentre_011A0053_F%20web%20sq.jpg?itok=o-jHxOwP"))

    db.session.add(Screen(id=2, email="screen2@ucalgary.ca", password="screen2", curString="cLSDMfn3oA)93fS", points = 10, location="Administration Building",
    description="Originally opened in 1960 and renovated in 2013, this project showed how an update of an old building can achieve new sustainable goals.",
    imageURL="https://asc.ucalgary.ca/wp-content/uploads/84.005_32.42_003.jpg"))

    db.session.add(Screen(id=3, email="screen3@ucalgary.ca", password="screen3", curString="cLSDMfn3oA)93fS", points = 30, location="Calgary Centre for Innovative Technology",
    description="Innovate Calgary is the innovation company of the University of Calgary. From ideation to commercialization, we offer the resources, facilities, and expert guidance you need to bring your innovation to Calgary, Alberta, and beyond.",
    imageURL="https://innovatecalgary.com/wp-content/uploads/2022/08/Item.png"))

    db.session.add(Screen(id=4, email="screen4@ucalgary.ca", password="screen4", curString="cLSDMfn3oA)93fS", points = 10, location="MacEwan Hall",
    description="MacEwan Hall, University of Calgary hosts concerts for a wide range of genres from artists such as dvsn and Dean Lewis, having previously welcomed the likes of Ali Gatie, Wardruna, and DPR Live.",
    imageURL="https://cdn0.weddingwire.ca/vendor/8511/3_2/960/jpeg/ljpuovms_50_18511-1553702827.jpeg"))

    db.session.commit()

@event.listens_for(User.__table__, 'after_create')
def create_users(*args, **kwargs):
    db.session.add(User(id=1, firstName = "Allan", lastName = "Kong", email= "allan.kong@ucalgary.ca", password="allan"))
    db.session.commit()



screen_schema = ScreenShema()
screens_schema = ScreenShema(many=True)

user_schema = UsersShema()
users_schema = UsersShema(many=True)