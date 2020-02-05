var cientistaDao = require("../models/CientistaDao");

module.exports = class {

    static renderHome(app, request, response) {

        var mongoClient = app.config.dbConect();

        cientistaDao.getCientistas(mongoClient, (resultado) => {
            
            response.render("home", { listac: resultado });
        });


    }

    static listaCientista(app, consulta, response) {

        var mc = app.config.dbConect();

        cientistaDao.getCientista(mc, consulta, (result) => {
            
            response.render("update", { dados: result });
        });

    }

    static salvaCientista(app, dados, response) {

        var mc = app.config.dbConect();

        cientistaDao.novoCientista(mc, dados, () => {
            
            response.redirect("/");
        });

    }


    static atualiza(app, dados, res) {

        var mc = app.config.dbConect();

        cientistaDao.atualizaCientista(mc, dados, () => {
            
            res.redirect("/");
        });
    }

    static deleta(app, consulta, response) {

        var mc = app.config.dbConect();

        cientistaDao.deletaCientista(mc, consulta, () => {
            
            response.redirect("/");                                
        });

    }

}