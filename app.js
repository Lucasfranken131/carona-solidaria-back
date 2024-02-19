var express = require('express');
var app = express();

app.get("/", function(req, res) {
    res.render("home.ejs");
});

app.get("/profile", function(req, res) {
    res.render("profile/profile.ejs");
});

app.get("/chamada", function(req, res) {
    res.render("chamada/chamada.ejs");
});

app.listen(3001, function() {
    console.log("Servidor rodando com express")
});