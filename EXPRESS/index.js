const express = require("express");// importando o spress
const app = express(); // iniciando o exprpess



app.get("/", function (req, res) { //criando a rota
    res.send("Bem vindo!"); //devolvendo a resposta, pode ser até uma pagina json, arquivo...

});
//pode criar varias rotas

app.get("/blog/:artigo?",function(req, res){

    var artigo = req.params.artigo;

    if(artigo){
        res.send("<h2>Artigo:" + artigo + " </h2>");
    }else{
        res.send("<h3>Bem vindo ao meu Blog</h3>");
    }
})

app.get("/canal/youtube", function (req, res) { //criando a rota
    var canal = req.query["canal"];
    if(canal){
        resd.send(canal);
    } else {
        res.send("Nenhum canal fornecido")
    }
    
});

app.listen(4000,function(erro) {
    if (erro) {
        console.log("Ocorreu um erro");
    } else {
        console.log("Servidor iniciado com sucesso");
    }
})
