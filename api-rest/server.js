var express = require("express"), bodyParser = require("body-parser");
var mongoClient = require("mongodb").MongoClient;
var ObjectID = require("mongodb").ObjectID;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 8080;

app.listen(port);

console.log("Api Rest rodando na porta:", port);


app.get('/cientista', (req, res) => {

    mongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true }).then((db) => {

        var dbo = db.db("dbcientistas");
        dbo.collection("cientista").find().toArray((err, re) => {

            if (err) {
                res.json(err);
            }

            else {
                res.json(re);
            }
            db.close();
        });

    });

})

app.post("/cientista", (req, res) => {

    res.setHeader();

    mongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true }).then((db) => {

        var dbo = db.db("dbcientistas");

        var dados = req.body;

        console.log(dados);

        dbo.collection("cientista").insertOne(dados, (err, resultado) => {

            if (err) {
                res.json(err);
            }
            else {
                res.json(resultado);
            }
            db.close();
        });

    });

});


app.get("/cientista/:id", (req, res) => {

    mongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true }).then((db) => {


        var dbo = db.db("dbcientistas");
        dbo.collection("cientista").find(new ObjectID(req.params.id)).toArray((err, re) => {

            if (err) {
                res.json(err);
            }

            else {
                res.json(re);
            }
            db.close();
        });

    });

});

app.get("/cientista/pesquisa/:nome", (req, res) => {


    mongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true }).then((db) => {


        var dbo = db.db("dbcientistas");
        dbo.collection("cientista").find({nome:req.params.nome}).toArray((err, re) => {

            if (err) {
                res.json(err);
            }

            else {
                res.json(re);
            }
            db.close();
        });

    });

});


app.put("/cientista/:id", (req, res) => {

    mongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true }).then((db) => {

        var dbo = db.db("dbcientistas");
        var dados = req.body;

        dbo.collection("cientista").updateOne({ _id: new ObjectID(req.params.id) }, { $set: dados }, (err, records) => {
            res.json(records);
            db.close();
        });

    });

});

app.delete("/cientista", (req, res) => {

    mongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true }).then((db) => {

        var dbo = db.db("dbcientistas");

        dbo.collection("cientista").deleteOne({ _id: new ObjectID(req.body.id) }, (err, records) => {

            res.json(records);
            db.close();
        });

    });


});