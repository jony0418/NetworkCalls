// File: index.js

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use all routes in the routes directory
app.use(routes);

// Connect to MongoDB
mongoose.connect(db, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
