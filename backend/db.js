// const mysql = require('mysql')
// require('dotenv').config()

import dotenv from 'dotenv'
dotenv.config()
import postgres from 'postgres'

// const pool = mysql.createPool({
//     connectionLimit: 10,
//     host: 'localhost',
//     user: 'lideta',
//     database: 'lideta_db',
//     password: 'vuV2hM3hGan7!k#v',
// })

// const db = pool.promise()

// module.exports = db

const pool = postgres(process.env.DATABASE_URL, { ssl: 'require' })

export default pool