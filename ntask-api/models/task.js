module.exports = app => {

    return {
        findAll(params, callback) {
            return callback([
                { titulo: 'Compras de Roupa' },
                { titulo: 'Conserto do PC' }
            ]);
        }
    }

 
}