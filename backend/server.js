// const express = require('express')
import express from 'express'
const app = express()
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()
// const cors = require('cors')
// const path = require('path')
// const mysql = require('mysql2')
// require('dotenv').config()

import pool from './db.js'

import { fileURLToPath } from 'url'

// Convert ES module URL to __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, '../frontend/dist')))

console.log('connecting...')

// const pool = mysql.createPool({
//     connectionLimit: 10,
//     host: 'localhost',
//     port: 3306,
//     user: 'lideta',
//     database: 'lideta_db',
//     password: 'vuV2hM3hGan7!k#v',
// })

// pool.getConnection((error, con) => {
//     if (error) {
//         console.log('not connected')
//         console.log(error)
//         return
//     }

//     console.log('connected')
// })

app.post('/api/login', async (req, res) => {
    const {username, password} = req.body
    const [rows] = await db.query(`SELECT * FROM user WHERE username = '${username}' AND password = '${password}'`)

    if (rows.length > 0) res.json({ username: username, password: password, status: 200, message: 'login successful' })
    else res.json({error: 'Invalid Credentials'})


})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'))
})

app.get('/test', async(req, res) => {
    const response = await pool`SELECT * FROM complaints`

    res.json(response)
})

app.listen( 3000, () => console.log('listening...'))