# Django React Auth system with Redux for state

Userbooks is a web application for secure online book sharing with other people.
The application provides user authentication, account management,
history. The application is built using
the Django web framework and Python programming language, together with a blend of Redux and
a fully running Reactjs front end.

### Installation

1. Clone the repository from GitHub:

```
git clone https://github.com/kaybrian/Userbooks.git

```

2. Enter the backend folder

```
cd backend
```

3: Create a virtual environment and activate it:

```
python -m venv env
source env/bin/activate
```

4: Install the required dependencies:

```
pip install -r requirements.txt
```

5: Create an .env file:

The env file will contain the env variables your applicaiton will use. In particular a emailing system for your applicaiton
in my case i used Mailgun, but feel free to use any any system you want.

```
EMAIL_BACKEND = ************
EMAIL_USE_TLS = True
EMAIL_HOST = ******smtp.mailgun.org******
EMAIL_PORT = 587
EMAIL_HOST_USER = ********
EMAIL_HOST_PASSWORD = ********

```
6: Set up the database:
```
python manage.py migrate
```
7: Run the development server:
```
python manage.py runserver

```

At this point in time, your application is ready to run using the python server.
in order to see your application, check out the development server on
```
http://127.0.0.1:8000/
```


however, some people would love to customise the application using reactjs.
for this the application is also ready to serve you.

in order to get start with the react side,
1 : Navigate back.
```
cd ..
```

2: head over to the cilent side
```
cd cilent
```

3: Install the react dependences
```
npm i
```

4: Run the react development server
```
npm start
```
5: Access the application on the react server
```
http://localhost:3000/
```

using both the python and react development server will give you the same results.

# Contributing

If you would like to contribute to SecureBanking, please follow these steps:

- Fork the repository on GitHub.
- Create a new branch for your changes:
```
git checkout -b feature_branch
```

- Make your changes and test them locally.
- Push your changes to your forked repository:
```
git push origin feature_branch
```
- Submit a pull request to the main repository.
- Wait for feedback and iterate on your changes as needed.


## License
Userbooks is licensed under the MIT License. See the LICENSE file for more information.
