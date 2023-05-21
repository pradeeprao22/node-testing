// #index file
console.log('Hello');

//Database Connection
const { pool } = require("./db")

// external modules
const express = require("express")
const path = require("path")


const app = express();
// const port = process.env.PORT || "8000";

app.listen(3000, ()=> {
    console.log(`Node API is running on 3000`)
})


// # define routes 
app.get('/', (req, res) => {
    res.send('Hello Node API')
})