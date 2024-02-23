var DBconnection = require('../../config/sql');
var connection = DBconnection();

module.exports = function(app) {
    app.get("/perfil", function(req, res) {
        connection.query('SELECT * FROM passageiro', function(error, result) {
            if (error) {
                console.error('Erro ao executar consulta:', error);
                return;
            }
            console.log('Resultado da consulta:', result);
            res.send(result);
        });
    });
};