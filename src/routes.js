const express = require('express')
const app = express.Router()
const path = require('path')
const pdf = require('html-pdf')
const ejs = require('ejs')
const CreatePDF = require('./controllers/pdfController')

const dados = []

const views = path.join(__dirname, '/views/')

app.get('/', (req, res) => res.render(views + 'index', { dados }))
app.get('/teste', (req, res) => res.render(views + 'layout', { dados }))
app.get('/download', (req, res) => {
    res.type('pdf')
    res.download('./credentials.pdf')
})

app.post('/pdf', (req, res) => { 
    infos = {
        county: req.body.county,
        datas: req.body.data
    }

    dados.push(infos)


    ejs.renderFile(path.join(__dirname, 'views', 'layout.ejs'), { infos }, (err, dados) => {
        if(err) {
            console.log(err)
        } else {
            CreatePDF(dados)
            res.redirect('/download')
        }
    })
})


module.exports = app