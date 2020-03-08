var express = require('express');


var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.get('/', function(req, res) {
    var dados = 
      { "Nome" : "Bruna Jullyeti Viana de Jesus", "Saldo" : "R$20,25" }
      
    ;
  
    res.send(JSON.stringify(dados));
  });

  app.listen(8000, function() {
    console.log('Servidor rodando na porta 8000.');
  });