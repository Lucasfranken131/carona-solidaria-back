module.exports = function(app) {
    app.get("/chamada", function(req, res) {
        res.render("chamada/chamada");
    });
};