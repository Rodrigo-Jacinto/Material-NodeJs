var app = require("./config/server");
//var rotaHome = require("./app/routes/home");
//var rotaForm = require("./app/routes/formulario");
//var rotaNoticia = require("./app/routes/noticias");

//rotaHome(app);
//rotaForm(app);
//rotaNoticia(app);

app.listen(3000, () => {
    console.log("Servidor com Express Rodando!!");
});

