var express = require(`express`);
var app = express();

//var teste = require('./modulo_externo');

//console.log(teste());

//Permite utilização de ejs
app.set('view engine', 'ejs');

// /**
//  * Para rotas com autenticacao
//  */
// var auth = require('http-auth');

// var basic = auth.basic({ realm: `qwerty` },
//     function(username, password, callback) {
//         callback(username == `admin` && password == `password`);
//     }
// );
// var authMiddleware = auth.connect(basic);

// app.get(`/secreta`, authMiddleware, function(req, res) {
//     res.send(`
//     <html>
//          <header>
//          </header>
//          <body>
//              <h1>Secreta</h1>
//          </body>
//      </html>
//      `);
// });

//Fim

app.get(`/`, function(req, res) {
    res.render('sites/home');
});

app.get(`/contato`, function(req, res) {
    res.render('sites/contato');
});

app.listen(8080, function() {
    console.log(`Servidor inicializado`);
})