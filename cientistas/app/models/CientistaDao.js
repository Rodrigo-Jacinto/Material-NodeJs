var ObjectId = require("mongodb").ObjectId;

module.exports = class {

    static getCientistas(mc, func) {

        mc.then((database) => {

            var dbo = database.db("dbcientistas");

            dbo.collection("cientista").find().toArray((erro, resultado) => {
                func(resultado);
                database.close();
            });
        }).catch((err) => {
            console.log(err);
        })

    }

    static getCientista(mc, consulta, func) {

        mc.then((database) => {

            var dbo = database.db("dbcientistas");

            var filtro = { "_id": new ObjectId(consulta) };

            dbo.collection("cientista").find(filtro).toArray((err, result) => {

                if (err) { console.log(err); }
                func(result);
                database.close();
            });

        }).catch((err) => {
            console.log(err);
        })
    }

    static novoCientista(mc, dados, func) {

        mc.then((database) => {

            var dbo = database.db("dbcientistas");

            dbo.collection("cientista").insertOne(dados, function (err, res) {

                func();
                database.close();
            });

        }).catch((err) => {
            console.log(err);
        })

    }

    static atualizaCientista(mc, dados, func) {

        mc.then((db) => {


            var filtro = { "_id": new ObjectId(dados._id) };
            var set = { "$set": { "nome": dados.nome, "biografia": dados.biografia } };

            var dbo = db.db("dbcientistas");

            dbo.collection("cientista").updateOne(filtro, set, (err, result) => {

                func();
                db.close();
            });

        }).catch((err) => {
            console.log(err);
        })
    }

    static deletaCientista(mc, consulta, func) {
        
        mc.then((db) => {

            var dbo = db.db("dbcientistas");

            dbo.collection("cientista").deleteOne({ "_id": new ObjectId(consulta) }, (err, result) => {

                func();
                db.close();
            });

        }).catch((err) => {
            console.log(err);
        })

    }

}