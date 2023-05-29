// external modules
const express = require("express")

const sequelize = require("./db");
const User = require("./models/user");

const transportRoutes = require('./routes/transportRoutes')
const userRoutes = require('./routes/userRoutes')

const path = require("path")

const app = express();

(async () => {
    try {
      await sequelize.sync({ force: false });
      console.log('Models synchronized with the database.');
    } catch (error) {
      console.error('Error synchronizing models:', error);
    }
})();

app.use('/', transportRoutes)
app.use('/users', userRoutes)
// const port = process.env.PORT || "8000";

// Middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: false }));

// Middleware for serving static files
app.use(express.static('public'));

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(3000, ()=> {
    console.log(`Node API is running on 3000`)
})

// ...


  
  // ...