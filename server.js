
// import { sequelize } from "./db";
const { Sequelize } = require('sequelize')

// external modules
const express = require("express")

const transportRoutes = require('./routes/transportRoutes')

const path = require("path")

const app = express();

app.use('/', transportRoutes)
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




