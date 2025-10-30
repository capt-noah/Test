const mysql = require('mysql2')
require('dotenv').config()

const pool = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.DB_PORT,
})

const db = pool.promise()

module.exports = db

