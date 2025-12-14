const mysql = require('mysql')
require('dotenv').config()

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'lideta',
    database: 'lideta_db',
    password: 'vuV2hM3hGan7!k#v',
})

const db = pool.promise()

module.exports = db

