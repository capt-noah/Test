const mysql = require('mysql2')
require('dotenv').config()

const pool = mysql.createConnection({
    host: 'mysql-db02.remote:',
    port: '32636',
    user: 'lideta',
    database: 'lideta_db',
    password: 'vuV2hM3hGan7!k#v',
})

const db = pool.promise()

module.exports = db

