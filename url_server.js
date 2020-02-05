var http = require("http");
var url = require("url");

var server = http.createServer((request, response) => {

    response.writeHead(200, { "content-Type": "text/html" });
    var result = url.parse(request.url, true);
    response.write("<h1>Query String</h1>");

    for (var key in result.query) {
        response.write("<h2>" + key + ":" + result.query[key] + "</h2>");
    }

    response.end();

});

server.listen(3000);
