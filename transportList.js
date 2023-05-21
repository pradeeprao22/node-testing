const { pool } = require('./db')

async function transportList() {
    try {
        const res = await pool.query("SELECT * FROM transport")
        console.log(res.rows);
    } catch (error) {
        console.log(error);
    }
}

transportList()




