const express = require('express')
const routes = require('./routes')
const path = require('path')
const app = express()

app.use(express.static('public'))
app.use(express.static(path.join(__dirname, '/views')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)
app.set('view engine', 'ejs')

const port = 3001

app.listen(port, () => console.log(`Rodando em http://localhost:${port}`))


