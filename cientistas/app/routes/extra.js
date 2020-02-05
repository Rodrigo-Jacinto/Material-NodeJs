module.exports = (app) => {

    app.get("/extra", (req, res) => {

        res.format({
            html: () => {
                res.send("Bem Vindo ao Sistema Cientistas: text/html");
            },

            json: () => {
                var retorno = {
                    body: "Bem Vindo ao Sistema Cientistas: Application/json"
                }
                res.json(retorno);
            }
        });

    });


    app.post("/extra", (req, res) => {

        var dados = req.body;
        res.json(dados);

    });

}