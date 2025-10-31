const mysql = require('mysql2')
require('dotenv').config()

const pool = mysql.createConnection({
    host: process.env.HOST || 'mysql-db02.remote',
    user: process.env.DB_USER || 'Noah',
    database: process.env.DATABASE || 'lidetain_',
    password: process.env.PASSWORD || 'rS4ZoAcp!jt%ic43',
    port: process.env.DB_PORT || 32636,
})

const db = pool.promise()

module.exports = db

