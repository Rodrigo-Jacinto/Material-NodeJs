let consign = require("consign");

app = {};
consign().include('db').into(app);

console.log(app);