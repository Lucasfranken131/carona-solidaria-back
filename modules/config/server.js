var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './modules/app/views');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

module.exports = app;