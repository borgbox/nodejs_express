var http = require('http');

var server = http.createServer(function(req, res) {
    var url = req.url;
    console.log(url);

    if (url === `/contato`) {
        res.end(
            `
        <html>
             <header>
             </header>
             <body>
                 <h1>Contato</h1>
             </body>
         </html>
         `);


    } else {
        res.end(`
   <html>
        <header>
        </header>
        <body>
            <h1>Home 2</h1>
        </body>
    </html>
    `);
    }



});

server.listen(8000);