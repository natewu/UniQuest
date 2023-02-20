# UniQuest

# Backend (src/flask-server)
```
python -m pip install flask_migrate
python -m pip install flask_marshmallow
python -m pip install flask_cors
python server.py
```

# Frontend (root folder)
```
npm i
npm start
```

# When you pull any database changes on backend
Delete the "database.db" file in src/flask-server and RERUN "python server.py".

This will re-migrate the database schema and initialize any default database values from models.py

# About
### Considering the on-campus experience
UniQuest is a QR scavenger hunt game/application that incentivizes students to travel to different places around the university campus, learning about its importance in their student life, while gaining points that can be used to explore new activities offered by the university.

Universities use their existing screens across campus to display QR codes, and these locations are given to students so they can try to scan them all in a day.

Using rolling QR codes, universities can provide rewards to students without worrying about being exploited by pictures.

### Inspiration
What if we could make university students excited about exploring their campus in a guided and rewarding way?

Students typically start their careers at university being thrown into an overwhelming pile of resources from various organizations. As the frenzy from orientation and frosh Week settles, they move into a regular routine of attending classes and a new normal. More often than not, the places and resources around campus that they spend time at are the same places that they remembered from their first few days.

University Students are unfamiliar with the campus buildings and their functions Hence, they are not utilizing all the resources around the school to their full potential We want students to be active around school by also moving around, especially on campus, in the same environment that they spend so much of their busy days.

### Usage
Universities simply use the university side of our website to display QR codes on their own screens. The QR codes can be scanned by the student side app that pops up a dialog box displaying information about the place.
