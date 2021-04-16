const express = require("express");// importando o spress
const app = express(); // iniciando o exprpess

app.get("/", function (req, res) {
    
});


app.listen(4000,function(erro) {
    if (erro) {
        console.log("Ocorreu um erro");
    } else {
        console.log("Servidor iniciado com sucesso");
    }
})