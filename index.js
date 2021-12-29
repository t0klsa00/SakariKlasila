const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const path = require('path')
const cors = require('cors')
app.use(cors())

const db_model = require('./db_model')

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
    res.setHeader('Allow-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers')
    next()
})

// routes ..

app.get('/getProjects', (req, res) => {
    db_model.getProjects()
    .then(response => {
        res.status(200).send(response)
    })
    .catch(error => {
        res.status(500).send(error)
    })
})