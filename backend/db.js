const mysql = require('mysql2')
require('dotenv').config()

const pool = mysql.createConnection({
    host: process.env.HOST || 'localhost',
    user: process.env.DB_USER || 'Noah',
    database: process.env.DATABASE || 'lidetain_',
    password: process.env.PASSWORD || 'rS4ZoAcp!jt%ic43',
})

const db = pool.promise()

module.exports = db

