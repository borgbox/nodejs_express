module.exports = function () {
    var express = require(`express`);
    var app = express();
    var bodyParser = require('body-parser');
    var expressValidator = require('express-validator');

    app.use(bodyParser.json()); // support json encoded bodies
    app.use(bodyParser.urlencoded({
        extended: true
    }));// support encoded bodies

    //Biblioteca para validações em geral
    app.use(expressValidator());

    //Permite utilização de ejs
    app.set('view engine', 'ejs');
    //Configura em qual diretório estarão as views
    app.set('views', './app/views')

    //recebendo a função customizada que vai setar as rotas
    //require('../app/routes/web')(app); 
    var rotas = require('../app/routes/web');
    rotas(app);

    app.listen(8080, function () {
        console.log(`Servidor inicializado`);
    });

};