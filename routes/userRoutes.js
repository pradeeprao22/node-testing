const express = require('express');
const router = express.Router();
const { Sequelize } = require('sequelize')
const sequelize = require("../db");

// Define the "Record" model
const User = sequelize.define('User', {
   firstName: {
     type: Sequelize.STRING,
   },
   lastName: {
     type: Sequelize.STRING,
   },
   password: {
    type: Sequelize.STRING,
   },
   createdAt: {
     type: Sequelize.DATE,
   },
   updatedAt: {
     type: Sequelize.DATE,
   },
});

// GET the all transports
router.get('/users', async(req, res)=> {
    try {
      const users = await User.findAll();
      console.log(users)
      res.render('index', { users })  
    } catch(err){
      console.error('Error retriving transports', err);
      res.status(500).send('Error retrieving transports')
    }
});

// POST the user
router.post('/user', async(req, res)=> {
    const { firstName, lastName, password, createdAt, updatedAt } = req.body;
    try {
      await User.create({ firstName, lastName, password, createdAt, updatedAt });
      res.redirect('/users')
    } catch(err){
      console.error('Error retriving users', err);
      res.status(500).send('Error retrieving users');
    }
});

// Export the router object
module.exports = router;