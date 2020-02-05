let express = require('express');
let consign = require('consign');

let app = express();
consign().include('db.js').then('libs/middlewares.js').then('models').then('routes').then('libs/boot.js').into(app);
