//let mongoc = require('mongodb');

//let mongocliente = mongoc.connect('mongodb://localhost:27017', { useNewUrlParser: true });
let msg = "Consign Executou isso";

module.exports = function x(app) {
    console.log(msg);
} 















/*
mongocliente.then((database) => {

    // Insere no 
    let schema = [{ nome: 'Neymar', idade: 26 }, { nome: 'Julio Cesar', idade: '39' }];

    let dbo = database.db('mongot');
    dbo.collection('pessoas').insertMany(schema, (erro, result) => {
        console.log(result);
    });
});
*/

/*
mongocliente.then((datab) => {

    let dbo = datab.db('mongot');
    dbo.collection('pessoas').findOne({"nome":/NEYmAr/i}, (erro, result) => {

        console.log(result);
        datab.close();

    });

    dbo.collection('pessoas').find({'nome':/^o/i}).toArray((erro, result) => {

        console.log(result);
        datab.close();

    });

});
*/
/*
mongocliente.then(datab => {

    let dbo = datab.db('mongot');
    dbo.collection('pessoas').updateOne({ 'nome': /Neymar/i }, { $set: { 'nome': 'Bebeto Jr' } }, (erro, result) => {
        console.log(result.result);
        dbo.collection('pessoas').find({ 'nome': /bebeto/i }).toArray((erro, resultado) => {
            console.log(resultado);

        });
        datab.close();
    });

});
*/

/*
mongocliente.then(datab => {

    let dbo = datab.db("mongot");
    colecaoPessoas = dbo.collection('pessoas');


    colecaoPessoas.updateOne({ '_id': mongoc.ObjectID('5cc5f5d54082ca0350966f13')}, { $pull: { 'times': 'Corithians' } });


    listaItens(colecaoPessoas, datab);



});

function listaItens(collection_name, datab) {

    collection_name.distinct('idade', (erro, result) => {

        console.table(result);

        datab.close();
    });

}

*/