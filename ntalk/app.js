var express = require("express");
var index = require("./routes/index");
var users = require("./routes/users");
var app = express();

app.set('views', __dirname + '/views');
app.set("view engine", 'ejs');
app.use(express.static(__dirname + '/public'));


app.get('/',index);
app.get('/usuarios', users.index);

app.listen(3000, () => { console.log("Ntalk no Ar!!")});