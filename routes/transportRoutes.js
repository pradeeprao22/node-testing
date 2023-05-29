const express = require('express');
const router = express.Router();
const { Sequelize } = require('sequelize')
const sequelize = require("../db");

// Define the "Record" model
const Transport = sequelize.define('Transport', {
   name: {
     type: Sequelize.STRING,
   },
   type: {
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
router.get('/transports', async(req, res)=> {
    try {
      const transports = await Transport.findAll();
      console.log(transports)
      res.render('index', { transports })  
    } catch(err){
      console.error('Error retriving transports', err);
      res.status(500).send('Error retrieving transports')
    }
});

// POST the transport
router.post('/transport', async(req, res)=> {
    const { name, type, createdAt, updatedAt } = req.body;
    try {
      await Transport.create({ name, type, createdAt, updatedAt });
      res.redirect('/transports')
    } catch(err){
      console.error('Error retriving transports', err);
      res.status(500).send('Error retrieving transports');
    }
});

// Export the router object
module.exports = router;


