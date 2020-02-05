var express = require("express");
var consign = require("consign");
var bodyParser = require("body-parser");
var expressV = require("express-validator");

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressV());
app.use(express.static("./app/public"));

// INCLUI OS ARQUIVOS JS DENTRO DA PASTA ROUTES, e cria caminho para acessar conexao com o BD
consign()
.include("app/routes")
.then("config/dbconect.js")
.into(app);

module.exports = app;