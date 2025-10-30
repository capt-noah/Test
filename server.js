const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./db.js')
require('dotenv').config()

app.use(express.json())
app.use(cors())

app.post('/api/login', async (req, res) => {
    const {username, password} = req.body
    const [rows] = await db.query(`SELECT * FROM user WHERE username = '${username}' AND password = '${password}'`)

    if (rows.length > 0) res.json({ username: username, password: password, status: 200, message: 'login successful' })
    else res.json({error: 'Invalid Credentials'})


})

app.get('/', (req, res) => {
    res.send('test')
})

app.listen(process.env.SERVER_PORT, () => console.log('listening...'))