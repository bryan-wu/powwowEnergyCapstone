# powwowEnergyCapstone

To run frontend:

```
cd frontend

npm install

npm start
```

To run backend, you need to install pipenv

These instructions assume that default python is python3. If the default is python2, then you need to run using pip3 and python3.

```
pip install pipenv

pipenv shell
```

Do all of this from within the pipenv shell:
```
pip install django

pip install djangorestframework 

pip install django-cors-headers

cd backend

python manage.py runserver
```

Type ```exit``` to exit the shell

To add a new model, start the pipenv shell and run the following:
```
cd backend

python manage.py startapp model_name_here
```


[Link to tutorial](https://scotch.io/tutorials/build-a-to-do-application-using-django-and-react)
