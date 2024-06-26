// Create web server
var express = require('express');
var app = express();

// Require the module
var comments = require('./comments');

// Set up the server
app.get('/comments', function(req, res) {
  res.json(comments.getComments());
});

// Start the server
app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
});