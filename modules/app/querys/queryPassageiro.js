var DBconnection = require('../../config/sql');
var connection = DBconnection();

const getAllPassageiros = () => {
    connection.query('SELECT * FROM passageiro', function(error, result) {
        if (error) {
            console.error('Erro ao executar consulta:', error);
            return;
        }
        console.log('Resultado da consulta:', result);
        res.send(result);
    });
};

const getOnePassageiro = () => {
    connection.query('', function(error, result) {

    });
};

module.exports = { getAllPassageiros }