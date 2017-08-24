// configure web server to serve up files in source directory
var express = require('express');
var path = require('path'); // reference to path
var open = require('open'); // open site in browser

var port = 3000;
var app = express(); // create an instance of express and set to the variable app

// inform express the route to handle
// any references to the root should be hadled by the anonymous function
// that takes a request and a response
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
  // __dirname gets the directory name currently running in
  // join the path to the source directory
});

// listen on the port defined above with express
app.listen(port, function(err) {
  if (err) {
    console.log(err); // logout error
  } else {
    open('http://localhost:' + port); // open URL in browser with port specified
  }
});
