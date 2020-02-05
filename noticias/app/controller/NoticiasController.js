var NoticiaDAO = require("../models/NoticiaDAO");

module.exports = class NoticiasController {

    static renderNoticias(app, request, response) {
        var conexao = app.config.dbconect();

        NoticiaDAO.getNoticias(conexao, (erro, result) => {
            response.render("noticias/noticias.ejs", { noticias: result });
        });
    }

    static renderNoticia(app, request, response) {
        
        var conexao = app.config.dbconect();

        NoticiaDAO.getNoticia(conexao, (erro, resultado) => {

            response.render("noticias/noticia.ejs", { noticia: resultado });

        });

    }



}