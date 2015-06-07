var express = require('express');
var path = require('path');
var app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// create routes for the admin section
// get an instance of the router

var adminRouter = express.Router();

// route middleware that will happen on every request.
adminRouter.use(function(req, res, next) {
  
  // log each request to the console
  console.log(req.method, req.url);

  // continue doing what we were doing and go to the route
  next();
});

adminRouter
  .get('/', function(req, res) {
    res.send('I am the dashboard');
  })
  .get('/users', function(req, res) {
    res.send('I show all the users!');
  });

app.use('/admin', adminRouter);

app.listen(1337);
console.log('http://localhost:1337');