var cientistaController = require("../controller/CientistaController");

module.exports = function (app) {

    app.get("/", (request, response) => {
        cientistaController.renderHome(app, request, response);
    });

    app.post("/salvac", (request, response) => {

        var dados = request.body;
        cientistaController.salvaCientista(app, dados, response);
        
    });

    
    app.get("/atualiza", (req, res) => {

        cientistaController.listaCientista(app, req.query.id, res)
         
    });


    app.post("/atualiza/cientista", (req, res) => {

        var dados = req.body;
       cientistaController.atualiza(app, dados, res);

    });

    app.get("/deleta", (req, res) => {

        cientistaController.deleta(app, req.query.id, res);

    });

}