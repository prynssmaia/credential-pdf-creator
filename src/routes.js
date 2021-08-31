const express = require('express')
const app = express.Router()
const path = require('path')

const views = path.join(__dirname, '/views/')

app.get('/', (req, res) =>{res.send(views + 'index')})

module.exports = app