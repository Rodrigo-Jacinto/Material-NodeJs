var express = require("express");
var consign = require("consign");
var bodyparser = require("body-parser");
var app = express();
app.set("view engine", "ejs");
app.set("views", "./app/views");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

consign().include("app/routes").then("config/dbConect.js").into(app);

// Trata erros de status
app.use((req, res, next) => {

    res.status(404).send("Página não encontrada");
    next();

});

//Trata erros internos do servidor
app.use((err, req, res, next) => {

        res.status(500).send("desculpe houve um error no servidor");
        next();
});

module.exports = app;