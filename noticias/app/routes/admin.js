var AdminController = require("../controller/AdminController");

module.exports = function (app) {
    app.get("/formulario", (request, response) => {
        AdminController.renderForm(app, request, response);
    });

    app.post("/noticias/salvar", (request, response) => {
        AdminController.salvaNoticia(app, request, response);
    })
}