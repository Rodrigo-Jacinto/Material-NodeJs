var http = require('http');

//CONFIGURANDO UM SERVIDOR LOCAL HTTP
var server = http.createServer((request, response) => {

    response.writeHead(200, {"content-Type": "text/html"});
    response.write("<h1>Olá MUNDO!!</h1>");
    response.end();

});

// SUBINDO ESSE SERVIDOR NA PORTA 3000 -> localhost:3000
 server.listen(3000, () => {
     console.log("Serve Rodando!");
 });