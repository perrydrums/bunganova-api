/**
 * @file BungaNova app.js
 */
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = mongoose.connect('mongodb://localhost/bunganova', { useMongoClient: true });
let app = express();

const User = new require('./models/userModel');
const userRouter = require('./routers/userRouter.js')(User);

const Product = new require('./models/productModel');
const productRouter = require('./routers/productRouter.js')(Product);

// User.create({
//   username: 'perryjanssen',
//   password: '12345678',
//   fullName: 'Perry Janssen',
//   email: 'psperryjanssen2@gmail.com',
// });

/**
 * Set HTTP headers
 */
app.use(function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods' , 'POST, GET, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Content-Type', 'application/json');
  res.header('Accept', 'application/json');

  if (!req.accepts('application/json')) {
    return res.status(400).send({ "error": "Unsupported format!" });
  }

  next();
});

let port = process.env.PORT || 80;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/users', userRouter);

app.get('/', function(req, res) {
  res.send({
    'message': 'Welcome to the BungaNova webservice!',
    'users': 'Access the user API via /api/users',
    'products': 'Access the products API via /api/products',
    'usages': 'Access the consumed products API via /api/usages',
  });
});

app.listen(port, function(){
  console.log('Running on PORT: ' + port);
});
