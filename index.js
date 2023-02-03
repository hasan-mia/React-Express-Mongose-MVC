/* eslint-disable no-undef */
require("dotenv").config() 
const express = require('express')
const app = express()
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const authRoute = require("./routes/api/v1/auth.route")
const userRoute = require("./routes/api/v1/user.route")

// Middleware
app.use(cors())
app.use(express.json())
app.use(morgan('common'))
app.use(helmet())
app.use(express.static("public"))

// Port
const port = process.env.PORT || 5000 || 6000 || 9000

// ===================================//
//      Connect TO MONGOODB           //
//====================================//
const dbUrl = process.env.DATABASE_URL;
const dbConnect = async () => {
 try {
  await mongoose.connect(dbUrl, () => {
    console.log("Connect to MongoDB");
  })
 } catch (error) {
  console.log(error)
 }
  return dbConnect();
}
dbConnect()


// ===================================//
//        SERVER / API ROUTES         //
//====================================//
// apiRoute()
app.use('/api/v1/auth', authRoute)  // authentication route
app.use('/api/v1/user', userRoute)  // user route


// ===================================//
//       CIENT / FRONT-END ROUTE      //
//====================================//
if (process.env.NODE_ENV == 'production') {
  app.use(express.static('views'));
  const path = require("path");
  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'views', 'build', 'index.html'));
  });
}

if (process.env.NODE_ENV == 'development') {
  app.use(express.static('views'));
  const path = require("path");
  app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'views', 'src', 'index.js'));
  });
}


// ===================================//
//            404 ROUTES              //
//====================================//
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});
