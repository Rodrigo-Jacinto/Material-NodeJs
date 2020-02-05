var NoticiaDAO = require("../models/NoticiaDAO");

module.exports = class AdminController {

    static renderForm(app, request, response) {
        response.render("admin/form_add_noticia");
    }

    static salvaNoticia(app, request, response) {

        var dados = request.body;
        var conexao = app.config.dbconect();
    
        NoticiaDAO.salvaNoticia(conexao, dados,() => {
            response.redirect("/noticias");
        });

    }

} 