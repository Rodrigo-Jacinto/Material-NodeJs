var MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017";

var mc = () => { 
  return MongoClient.connect(url, { useNewUrlParser: true });
}

module.exports = function() {
  return mc;
}