var http = require("http");
var fs = require("fs");
var url = require("url");

var arr = ['/', "/artigos", "/contato"];

var server = http.createServer((request, response) => {

    response.writeHead(200, { "content-Type": "text/html" });
    var result = url.parse(request.url, true);

    var caminho = result.pathname.toLowerCase();

    if (arr.includes(caminho)) {

        if (caminho == "/") {
            fs.readFile(__dirname + "/artigos.html", (erro, html) => {
                response.end(html);
            })
        }
        else {

            fs.readFile(__dirname + caminho + ".html", (erro, html) => {
                response.end(html);
            });
        }

    }
    else {
        fs.readFile(__dirname + "/erro.html", (erro, html) => {
            response.end(html);
        });
    }
});


server.listen(3000);