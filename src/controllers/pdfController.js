const pdf = require('html-pdf')

function CreatePDF(dados) {
    pdf.create(dados,{}).toFile('./credentials.pdf'), function (err, res) {
        if(err) {
            console.log("Temos erro")
        } else {
            console.log(res)
        }
    }
}

module.exports = CreatePDF