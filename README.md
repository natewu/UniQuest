# Calgary-Hacks-2023

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