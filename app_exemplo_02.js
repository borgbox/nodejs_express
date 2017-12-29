var express = require(`express`);
var app = express();

/**
 * Para rotas com autenticacao
 */
var auth = require('http-auth');

var basic = auth.basic({ realm: `qwerty` },
    function(username, password, callback) {
        callback(username == `admin` && password == `password`);
    }
);
var authMiddleware = auth.connect(basic);

app.get(`/secreta`, authMiddleware, function(req, res) {
    res.send(`
    <html>
         <header>
         </header>
         <body>
             <h1>Secreta</h1>
         </body>
     </html>
     `);
});

//Fim

app.get(`/`, function(req, res) {
    res.send(`
    <html>
         <header>
         </header>
         <body>
             <h1>Home</h1>
         </body>
     </html>
     `);
});

app.get(`/contato`, function(req, res) {
    res.send(`
    <html>
         <header>
         </header>
         <body>
             <h1>Contato</h1>
         </body>
     </html>
     `);
});

app.listen(8000, function() {
    console.log(`Servidor inicializado`);
})