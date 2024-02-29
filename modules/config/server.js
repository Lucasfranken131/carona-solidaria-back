var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './modules/app/views');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

module.exports = app;