var express = require('express');
var path = require('path');
var app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.route('/login')
  .get(function(req, res) {
    res.send('this is a the login form');
  })
  .post(function(req, res) {
    console.log('processing');
    res.send('processing the login form');
  });

var adminRouter = express.Router();

adminRouter.use(function(req, res, next) { // route middleware that will happen on every request.
  console.log(req.method, req.url);        // log each request to the console
  next();                                  // continue doing what we were doing and go to the route
});

// route middleware to validate :name
adminRouter.param('name', 
  function(req, res, next, name) { 
  console.log(
    'this is where we would do some validation on :name\n',
    'doing name validations on ' + name);
  req.name = name; // once validation is done, save the new item in req.
  next();          // go to the next thing
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