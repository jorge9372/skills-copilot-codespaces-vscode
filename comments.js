// create web server 
const express = require('express');
const app = express();
const port = 3000;

// create a route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

// create a route for the about page
app.get('/about', (req, res) => {
  res.send('Welcome to the about page!');
});

// create a route for the contact page
app.get('/contact', (req, res) => {
  res.send('Welcome to the contact page!');
});

// tell the app to listen on port 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
