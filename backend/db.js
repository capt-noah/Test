const mysql = require('mysql2')
require('dotenv').config()

const pool = mysql.createConnection({
    host: '213.55.96.152',
    port: 32636,
    user: 'lideta',
    database: 'lideta_db',
    password: 'vuV2hM3hGan7!k#v',
})

const db = pool.promise()

module.exports = db

