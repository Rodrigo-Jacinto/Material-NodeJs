var http = require("http");
var fs = require("fs");


var server = http.createServer((request, response) => {

    fs.readFile(__dirname + "/index.html", (erro, html) => {
        response.writeHead(200, { "content-Type": "text/html" });
        response.write(html);
        response.end();
    })

});

server.listen(3000);