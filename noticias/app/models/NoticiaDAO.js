module.exports = class NoticiaDAO {

    static getNoticias(conexao, callback) {
        conexao.query("SELECT * FROM noticia", callback);
    }

    static getNoticia(conexao, callback) {
        conexao.query("SELECT * FROM noticia where id = 2", callback);
    }

    static salvaNoticia(conexao, dados, callback) {

        conexao.query("INSERT INTO noticia SET ?", dados, callback);
    }

}

