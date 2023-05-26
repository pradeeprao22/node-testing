// Removed Code
// const { Pool } = require("pg");

// const pool = new Pool({
//     user: 'pradeeprao',
//     database: 'node_app',
//     password: '',
//     port: 5432,
//     host: 'localhost',
// })

// module.exports = { pool };
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('node_app', 'pradeeprao', '', {
     host: 'localhost',
     dialect: 'postgres'
});

sequelize.sync().then(()=>{
   console.log('Database synced');
}).catch((err) =>{
  console.error('Error syncing database', err);
});

module.exports = { sequelize } 