const mysql = require('mysql2')
require('dotenv').config()

const pool = mysql.createConnection({
    host: 'localhost',
    port: 32636,
    user: 'lideta',
    database: 'lideta_db',
    password: '$b3V296wi',
})

const db = pool.promise()

module.exports = db

