module.exports = app => {

    app.listen(app.get('port'), () => {
        console.log('Rodando Ntask-api na porta:', app.get('port'));
    });
    
}