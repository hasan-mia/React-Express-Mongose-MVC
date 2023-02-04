## REMVC Pattern with REACT, EXPRESS and MONGOSE
REMVC is a react express mongose MVC Pattern Project. Where you can start your project with just one command.This is the opensource project.So, fork & give star the project. you can also contribute this project for better perfomance and more easier to develpoed a mern project.

### Folder Stracture
###### index
###### config
###### ______connection.js
###### controllers
###### ______AuthController.js
###### middleware
###### ______verifyJWT
###### ______limiter
###### models
###### _____User.js
###### public
###### ______index.html
###### ______404.html
###### routes
###### ________api
###### ___________v1
###### _______________auth.route.js
###### views
###### ______public
###### ______src
###### _________app.js
###### _________index.js
###### _________index.css
###### _________auth
###### _________backend
###### _________frontend
###### _________layout
###### _________routes
###### _________store
###### .env

#### Uses tools for server / rest api
##### bcrypt
##### express
##### express-rate-limit
##### helmet
##### jsonwebtoken
##### mongoose
##### morgan
##### nodemon
##### helmet
##### require-stack

### Uses tools for cient/frontend
##### react
##### react router dom
##### splidejs
##### rsuitjs
##### tailwind

### ENV Setup and change value
#### NODE_ENV=development
#### DATABASE_URL=mongodb+srv://database:password@cluster0.ngw4z7m.mongodb.net/?retryWrites=true&w=majority
#### ACCESS_TOKEN_SECRET="YmAb0fJLyOVdX5jWL4rRJc3CN41ZA1b/J8QRYaTGC4C/yR34b7lTEQDmlZKVJEO1gnHbV=="

### Generate secret totken
openssl rand -base64 128

### Install Dependencies
yarn 
or
npm install

### Serve with at http://localhost:5000
yarn server
or
npm run server

### Client with at http://localhost:3000
cd views (To go views directory and run)

yarn start
or
npm start

### build for production with minification
yarn build
or
npm run build

### Authentication API reference

#### Register a new User 
http://localhost:5000/api/v1/auth/register
Method: POST
Body: 
{
  "username": "example",
  "email": "example@example.com",
  "password": "123456"
}
Response: 
{
  "success": true,
  "message": "Register successfully",
  "user": {
    "username": "example",
    "email": "example@example.com",
    "password": "$2b$10$gWTnSx344U0OHNekYWte8sGYeet7vUAvQMzf9MYaYGJGJmXKIITbdAD.",
    "profilePicture": "",
    "coverPicture": "",
    "followers": [],
    "followings": [],
    "isAdmin": false,
    "_id": "63dd4c8e69db19249b457fa535",
    "createdAt": "2023-02-03T18:03:58.918Z",
    "updatedAt": "2023-02-03T18:03:58.918Z",
    "__v": 0
  }
}

### Login User 
http://localhost:5000/api/v1/auth/login
Method: POST
Body: 
{
  "username": "example",
  "password": "123456"
}
or
{
  "email": "example@example.com",
  "password": "123456"
}

Response: 
{
  "success": true,
  "message": "login success",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2RkMzlhYzFiNjQ3NjYxZWNmYTIyNWEiLCJ1c2VybmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NzU1MDU1NTR9.FlGkO2Hk2NEQJdO9sa1FyHSS07z0dgTbIT8s7kXwBCQ"
}

### user info by id
http://localhost:5000/api/v1/auth/user/63dd39ac1b647661ecfa225a

body:
{
  "userId": "63dd39ac1b647661ecfa225a"
}

Response:
{
  "success": true,
  "message": "user found successfully",
  "data": {
    "_id": "63dd39ac1b647661ecfa225a",
    "username": "example",
    "email": "example@example.com",
    "profilePicture": "",
    "coverPicture": "",
    "followers": [],
    "followings": [],
    "isAdmin": false,
    "createdAt": "2023-02-03T16:43:24.460Z",
    "__v": 0
  }
}
