var express = require('express');


var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.get('/', function(req, res) {
    var dados = 
      { "Nome" : "Bruna Jullyeti Viana de Jesus", "Saldo" : "R$20,25" };
  
    res.send(JSON.stringify(dados));
  });

  app.get('/contas', function(req, res) {
    var contas = 
      {  Energia : 80,
      Água : 62.50 };
      
    
      res.send(JSON.stringify(contas));
  });

  app.get('/alimentar', function(req, res) {
    var gastos = 
      { Fev : '67%',
        Mar: '38%'};
      
    
      res.send(JSON.stringify(gastos));
  });
  app.listen(8001, function() {
    console.log('Servidor rodando na porta 8001.');
  });