let mongoClient = require('mongodb');

module.exports = () => {

    return {
        mongoCliente: mongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }),
        bancoNome: 'ntaskdb'

    }
}