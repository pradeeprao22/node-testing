const { pool } = require('pg')

const pool = new Pool({
    user: 'pradeeprao',
    database: 'node_app',
    password: '',
    port: 5432,
    host: 'localhost',
})