const express = require('express')
const app = express.Router()
const path = require('path')
const pdf = require('html-pdf')
const ejs = require('ejs')

const dados = []

const views = path.join(__dirname, '/views/')

app.get('/', (req, res) => {res.send(views + 'index')})

app.post('/credentials', (req, res) => {
    dados.push(req.body.data)

    ejs.renderFile('./credentials-pdf.ejs', { dados }, function (err, dados) {
        if(err){
            console.log(err)
        } else {
            console.log("cheguei no create pdf")
            CreatePDF(dados)

        }
    })
})

module.exports = app