var express = require('express');
var path = require('path');
var app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// create routes for the admin section
// get an instance of the router

var adminRouter = express.Router();

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