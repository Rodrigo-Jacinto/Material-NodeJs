var NoticiasController = require("../controller/NoticiasController");

module.exports = function (app) {

    app.get("/noticias", (request, response) => {
        NoticiasController.renderNoticias(app, request, response);
    });


    app.get('/noticia', (request, response) => {
        NoticiasController.renderNoticia(app, request, response);

    });


}