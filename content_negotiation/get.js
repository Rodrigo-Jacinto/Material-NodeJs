var http = require("http");

var url = {
    hostname: "localhost",
    port: 80,
    path: "/extra",
    headers: {
        Accept: "application/json"
    }
}

var corpo_buffer = {};

http.get(url, (response) => {

    response.on("data", (pedaco) => {
        corpo_buffer = pedaco;
    });

    response.on("end", () => {

        var json = JSON.parse(corpo_buffer);
        console.log(json.body);
        //Mostra o status da aplicação
        console.log(response.statusCode);
    });

});