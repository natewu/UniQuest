from flask import current_app,jsonify,request
from app import create_app,db
from models import User, users_schema,user_schema, Screen, screen_schema, screens_schema

from qrCodeManager import RepeatTimer,QRcodeManager
# Create an application instance
app = create_app()


with app.app_context():
	db.create_all()

q = QRcodeManager()
def minuteUpdate():
	with app.app_context():
		q.updateAllQRCodes()


@app.route("/users", methods=["GET"], strict_slashes=False)
def users():

	users = User.query.all()
	
	results = users_schema.dump(users)

	return jsonify(results)

@app.route("/screens", methods=["GET"], strict_slashes=False)
def screens():

	screens = Screen.query.all()
	
	results = screens_schema.dump(screens)

	return jsonify(results)

@app.route("/user", methods=["GET"], strict_slashes=False)
def user():
	user = User.query.first()
	#🃏
	results = user_schema.dump(user.__dict__)
	
	return jsonify(results)

# turn the id to the string of the QR code
@app.route("/getQR", methods=["GET"], strict_slashes=False)
def getQRStringFromID():
	content = request.args
	screen = Screen.query.get(content.get("id"))
	return jsonify(screen.curString)

# turn the id to the name of the QR code
@app.route("/getName", methods=["GET"], strict_slashes=False)
def getLocationNameFromID():
	content = request.args
	screen = Screen.query.get(content.get("id"))
	return jsonify(screen.location)

# turn the id to the points of the QR code
@app.route("/getPoints", methods=["GET"], strict_slashes=False)
def getPointsFromID():
	content = request.args
	screen = Screen.query.get(content.get("id"))
	return jsonify(screen.points)

# turn the id to the points of the QR code
@app.route("/getPointsFromUser", methods=["GET"], strict_slashes=False)
def getPointsFromUserID():
	content = request.args
	user = User.query.get(content.get("id"))
	return jsonify(user.points)


# Route for to check if QR code is valid. If it is, increment by right number of points
@app.route("/validQR", methods=["POST"], strict_slashes=False)
def validQR():
	screens = Screen.query.all()
	content = request.form
	for screen in screens:
		screenData = screen_schema.dump(screen.__dict__)
		if content["string"] == screenData["curString"]:
			user = User.query.first()
			if screen not in user.screens:
				user.points += screen.points
				user.totalPoints += screen.points
				user.screens.append(screen)	
				for screen2 in screens:
					if screen2.id != screen.id and screen2 not in user.screens:
						db.session.commit()
						return {'valid': "Good job!", "points": str(screen.points), "description":screen.description, "imageURL":screen.imageURL}
				
				user.points += 50
				user.totalPoints += 50
				db.session.commit()
				return {'valid': "Good job!", "points": str(screen.points + 50) + " for finishing this day's", "description":screen.description, "imageURL":screen.imageURL}
			else:
				return {'valid': "You already scanned this :)"}
	return {'valid': ""}

@app.route("/purchase", methods=["POST"], strict_slashes=False)
def purchase():
	user = User.query.first()
	content = request.form
	if user.points >= int(content["points"]):
		user.points -= int(content["points"])
	db.session.commit()
	return {"points": user.points}


'''
@app.route("/articles", methods=["GET"], strict_slashes=False)
def articles():

	articles = Articles.query.all()
	
	results = articles_schema.dump(articles)

	return jsonify(results)


@app.route("/eyewear", methods=["GET", "POST"], strict_slashes=False)
def eyewear():
	eyewear = EyeWear.query.all()
	for glass in eyewear:
		glassDict = glass.__dict__
		print(glassDict)
	if request.method == "GET":
		eyewear = EyeWear.query.all()
		
		results = eyewears_schema.dump(eyewear)
		print(results)
		print(jsonify(results))
		return jsonify(results)
	else:
		eyewear = EyeWear.query.all()
		glassDictList = []
		for glass in eyewear:
			glassDict = glass.__dict__
			eye1 = EyeWearInformation(glassDict["sphereLeft"],glassDict["sphereRight"],glassDict["ipdLeft"] + glassDict["ipdRight"],glassDict["lens"],glassDict["bridge"],glassDict["temple"])
			eye2 = EyeWearInformation(request.form["sphereLeft"],request.form["sphereRight"],request.form["ipdLeft"] + request.form["ipdRight"],request.form["lens"],request.form["bridge"],request.form["temple"])
			glassDict["similarity"] = SimilarityOfEyewear(eye1, eye2)
			glassDictList.append(glassDict)
			print(glassDict)
		print(glassDictList)
		return jsonify(glassDictList)

@app.route("/posts", methods=["GET"], strict_slashes=False)
def posts():
	#🐔
	posts = Post.query.all()
	print(posts[0].__dict__)
	
	results = posts_schema.dump(posts)
	print(results)
	return (Post.query.first().description)
'''
if __name__ == "__main__":
	#start minute timer
	timer = RepeatTimer(2, minuteUpdate)
	#keep this code for the thread to be killed:
	timer.daemon = True
	timer.start()
	
	app.run(debug=True)
