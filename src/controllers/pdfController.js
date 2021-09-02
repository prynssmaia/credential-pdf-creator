const pdf = require('html-pdf')

function CreatePDF(html) {
    pdf.create(html,{}).toFile('./credentials.pdf'), function (err, res) {
        if(err) {
            console.log("ERRO")
        } else {
            console.log(res)
        }
    }
}

module.exports = CreatePDF