var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './modules/app/views');

module.exports = app;