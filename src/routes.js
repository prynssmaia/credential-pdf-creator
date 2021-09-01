const express = require('express')
const app = express.Router()
const path = require('path')
const pdf = require('html-pdf')
const ejs = require('ejs')

const dados = []

const views = path.join(__dirname, '/views/')

app.get('/', (req, res) => res.render(views + 'index', { dados }))
app.post('/pdf', (req, res) => 
    dados.push({
        county: req.body.county,
        data: req.body.data
    })
)


module.exports = app