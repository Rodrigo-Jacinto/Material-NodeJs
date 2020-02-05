var http = require("http");
var corpo_buffer = {};

url = {
    hostname:"localhost",
    port: 80,
    path:"/extra",
    method:"post",
    headers: {
        'Accpet': "application/json",
        //'Content-type':"application/x-www-form-urlencoded"
        "Content-type":"application/json"
    }
}

//'Content-type':"application/x-www-form-urlencoded"
var html = "nome=Rodrigo";

// "Content-type":"application/json"
var str_json = {nome:"Rodrigo"};

var request = http.request(url, (response) => {

    response.on("data", (pedaco) => {
        corpo_buffer = pedaco;
    })

    response.on("end", () => {
        var resposta = JSON.parse(corpo_buffer);
        console.log(resposta);
    });

});

request.write(JSON.stringify(str_json));
request.end();