let http = require('http');
let url = require('url');


let server = http.createServer((request, response) => {

    response.writeHead(200, {'content-type':'text/html'});
    let re = url.parse(request.url, true);
    console.log(request);
    console.log(re);
    response.end(re.toString());

});

server.listen(3000, () => {
    console.log("Rodando servidor!!");
});