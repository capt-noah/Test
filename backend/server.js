const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const mysql = require('mysql')
require('dotenv').config()

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, '../frontend/dist')))

console.log('connecting...')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'lideta',
    database: 'lideta_db',
    password: 'vuV2hM3hGan7!k#v',
})

pool.getConnection((error, con) => {
    if (error) {
        console.log('not connected')
        console.log(error)
        return
    }

    console.log('connected')
})

app.post('/api/login', async (req, res) => {
    const {username, password} = req.body
    const [rows] = await db.query(`SELECT * FROM user WHERE username = '${username}' AND password = '${password}'`)

    if (rows.length > 0) res.json({ username: username, password: password, status: 200, message: 'login successful' })
    else res.json({error: 'Invalid Credentials'})


})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'))
})

app.get('/test', (req, res) => {
    res.send('Testing The Server')
})

app.listen(process.env.SERVER_PORT || 3000, () => console.log('listening...'))