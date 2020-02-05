var http = require("http");

var server = http.createServer((request, response) => {

    response.writeHead(200, { 'content-Type': 'text/html' });

    if (request.url == "/") {
        response.write('<h1>Pagina Principal</h1>');
    }

    else if (request.url == "/bemvindo") {
        response.write('<h2>Seja Bem vindo ao Node JS</h2>');
    }

    else {
        response.write("Pagina Nao encontrada !");
    }
    response.end();
});

server.listen(3000);