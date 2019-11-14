# powwowEnergyCapstone


```
$ cd prod_server
$ pip3 install virtualenv
$ source venv/bin/activate
```
Do all of this from within the virtualenv shell:
```
$ pip3 install Flask
$ pip3 install flask_sqlalchemy
$ pip3 install flask_script
$ pip3 install flask-cors
$ pip3 install flask_migrate
$ pip3 install psycopg2-binary
$ export APP_SETTINGS=config.DevelopmentConfig
$ export DATABASE_URL=postgresql://localhost/db1
$ python3 manage.py runserver
```

Type ```deactivate``` to exit the shell

NOTE: In order to run the server, these exports must be executed each time the virtualenv shell is activated.
```
$ export APP_SETTINGS="config.DevelopmentConfig"
$ export DATABASE_URL="postgresql://localhost/db1"
```

frontend packages: 
```
npm install react-bootstrap --save-dev
npm install --save react-router-dom
npm install --save google-map-react
```

[Link to tutorial](https://scotch.io/tutorials/build-a-to-do-application-using-django-and-react)
