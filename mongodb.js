
// URL DE CONEXAO COM O BANCO
const url = "mongodb://localhost:27017";

//CONECTA COM O BANCO INFORMANDO A URL, E RETORNANDO UM PROMISE
MongoClient.connect(url, { useNewUrlParser: true }).then(function (db) {

//especifíca o nome do banco a ser usado
  var dbo = db.db("dbcientistas");

  //especifíca o nome da collection, e metodo para operação do banco
  dbo.collection("cientista").find({}).forEach(function (json) {
    console.log(json);
  });

  db.close();

}).catch(function (err) {
  
    console.log(err)
});

//Passando a função de Callback no metódo connect
MongoClient.connect(url, { useNewUrlParser: true }, function (db) {

    var dbo = db.db("dbcientistas");

    dbo.collection("cientista").find({}).forEach(function (json, resut) {
      console.log(json);
    });

    db.close();
    
  });