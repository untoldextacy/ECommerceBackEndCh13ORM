const express = require('express');
const routes = require('./routes'); // Ensure this points to your routes

// import sequelize connection
const { Sequelize } = require('sequelize');

// Create a new instance of Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
});

// Test the database connection
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

const app = express();
const PORT = process.env.PORT || 3003;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the routes
app.use(routes);

// Sync sequelize models to the database and then start the server
sequelize.sync({ force: false }) 
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
