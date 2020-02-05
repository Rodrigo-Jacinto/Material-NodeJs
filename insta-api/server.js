var express = require("express");
var bodyParser = require("body-parser");
var multipart = require("connect-multiparty");
var fs = require("fs");
require('dotenv-safe').load();
var mongoClient = require("mongodb").MongoClient;
var ObjectId = require("mongodb").ObjectId;
const URL_BANCO = "mongodb://localhost:27017";
var jwt = require("jsonwebtoken");


var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(multipart());

app.use(function (req, res, next) {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.set("Vary", "Origin");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header('Access-Control-Allow-Credentials', true);
    //res.set("Content-Type", "multipart/form-data; boundary=something");
    //res.set("Content-Type", "application/json");
    next();
});

function securityCheck(req, response, next) {
    var callerIP = req.connection.remoteAddress;
    (callerIP == "::ffff:127.0.0.1") ? next() : response.status(403).send('<span style="font-weight: bold; font-size:200%;">Você Não tem permissões de acessar o servidor!</span>');
}

function reply404(response) {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.statusMessage = "Rodrigo";
    console.log("reply404: statusCode: " + response.StatusCode);
    response.end('<span style="font-weight: bold; font-size:200%;">ERROR 404 &ndash; Not Found</span>');
}

app.get("/data", (req,res) => {

    mongoClient.connect(URL_BANCO, {useNewUrlParser:true}).then((db)=> {

        var dbo = db.db("cadastro");

        dbo.collection("pessoas").findOne({"nome-cliente":new RegExp(/senhOr/)}, (err, rs)=>{
            if(err) {console.log("Erro: ", err)}
            res.send(rs);
            console.log(rs);
        });


    });



});

/*
app.use((req, res, next) => {

    var url = req.url.split('/');
  
    console.log(process.env.SECRET);
    if(req.url === "/login" || url[1] === "uploads") {
        next();
    }
    else if(req.query.token) {
        jwt.verify(req.query.token, "jacinto", (err, decode) => {

            if(err) {
                res.json({erro: err});
            }
            else {
                req.decoded = decode;
                next();
            }
        });
    }
    else {
        res.status(403).send("<h1>Você Não tem permissão de acessar</h1>");
    }

});
*/
//app.use(securityCheck); 

app.post("/login", (req, res) => {
    
    var login = req.body;
    
    mongoClient.connect(URL_BANCO, { useNewUrlParser: true }).then((database) => {

        var dbo = database.db("instadb");

        dbo.collection("usuario").findOne({ nome: login.nome, senha: Number(login.senha) }, (err, resultado) => {
            
            if(err) {console.log(err);}

            
            if(resultado === null) {

                res.json({
                    sucesso:false
                });

            } else {

                var token = jwt.sign(resultado, "jacinto");
                  res.json({
                      sucesso:true,
                      toke:token
                  });  
            }

         
        });

    });

});


app.get("/publicacao", (req, res) => {

    mongoClient.connect(URL_BANCO, { useNewUrlParser: true }).then((database) => {

        var dbo = database.db("instadb");
        dbo.collection("postagens").find({}).toArray((err, resultado) => {
            res.json(resultado);
            database.close();
        });

    });

});


app.get("/uploads/:nome", (req, res) => {

    fs.readFile("./uploads/" + req.params.nome, (erro, content) => {
        res.writeHead(200);
        res.end(content);
    });

});

app.put("/publicacao/:id", (req, res) => {


    mongoClient.connect(URL_BANCO, { useNewUrlParser: true }).then((db) => {

        var dbo = db.db("instadb");
        dbo.collection("postagens").updateOne({ _id: new ObjectId(req.params.id) }, { $push: req.body }, (err, rec) => {
            if (err) {
                console.log(err);
            }

            dbo.collection("postagens").findOne({ _id: new ObjectId(req.params.id) }, { projection: { comentarios: true, _id: false } }, (err, resultado) => {


                if (err) {
                    console.log(err);
                }
                res.json(resultado);
                console.log(resultado);
                db.close();

            })



        });

    });
});

app.post("/publicacao", (req, res) => {

    var data = new Date();
    var time = data.getTime();

    var nomeImagem = time + "-" + req.files.foto.originalFilename;

    var tituloImagem = req.body.titulo;
    const path_origem = req.files.foto.path;
    const path_destino = './uploads/' + nomeImagem;

    fs.rename(path_origem, path_destino, (err) => {

        if (err) {

            res.status(500).json({ erro: err });
            return;
        }

        else {

            mongoClient.connect(URL_BANCO, { useNewUrlParser: true }).then((database) => {

                var dbo = database.db("instadb");

                dbo.collection("postagens").insertOne({ titulo: tituloImagem, foto: nomeImagem }, (err, records) => {

                    res.json(records);
                    database.close();

                });

            });
        }


    });

});

app.delete("/publicacao/:id", (req, res) => {

    mongoClient.connect(URL_BANCO, { useNewUrlParser: true }).then((database) => {

        var dbo = database.db("instadb");

        dbo.collection("postagens").updateOne({ _id: new ObjectId(req.params.id) }, { $pull: req.body }, (err, records) => {

            if (err) {
                console.log(err);
            }

            dbo.collection("postagens").findOne({ _id: new ObjectId(req.params.id) }, { projection: { comentarios: true, _id: false } }, (err, resultado) => {

                if (err) {
                    console.log(err);
                }
                res.json(resultado);
                console.log(resultado);
                database.close();

            })

        });
    });

});

app.listen(8080, () => {
    console.log("Insta-Api Online!");
});