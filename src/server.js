const express = require('express')
const app = express()

const port = 3001

app.listen(port, () => console.log(`Rodando em http://localhost:${port}`))


app.get('/', (req, res) =>{
    res.send("Essa é a primeira rota criada com o express")
})