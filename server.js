var express = require('express');
var path = require('path');
var app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// create routes for the admin section
// get an instance of the router

var adminRouter = express.Router();


adminRouter.use(function(req, res, next) { // route middleware that will happen on every request.
  console.log(req.method, req.url);        // log each request to the console
  next();                                  // continue doing what we were doing and go to the route
});

adminRouter
  .get('/', function(req, res) {
    res.send('I am the dashboard');
  })
  .get('/users', function(req, res) {
    res.send('I show all the users!');
  })
  .get('/users/:name', function(req, res) {
    res.send('hello ' + req.params.name);
  });

app.use('/admin', adminRouter);

app.listen(1337);
console.log('http://localhost:1337');