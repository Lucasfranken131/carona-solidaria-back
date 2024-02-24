var DBconnection = require('../../config/sql');
var connection = DBconnection();

const getAllPassageiros = () => {
    return new Promise((resolve, reject) =>{
        connection.query('SELECT * FROM passageiros', function(error, result) {
            if (error) {
                console.error('Erro ao executar consulta:', error);
                return;
            }
            console.log('Resultado da consulta:', result);
            resolve(result)
        });
    });
};

const getOnePassageiro = (id) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM passageiros WHERE id_passenger = ${id}`, function(error, result) {
            if (error) { 
                console.error('Erro ao executar consulta:', error);
                return;
            }
            console.log('Resultado da consulta:', result);
            resolve(result);
        });
    });
};

const createPassageiro = (name, cpf, email, password, age, sex, phone_number, turn) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO passageiros (name, cpf, email, password, age, sex, phone_number, turn) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        connection.query(sql, [name, cpf, email, password, age, sex, phone_number, turn], function(error, result) {
            if (error) {
                console.error('Erro ao executar consulta:', error);
                console.error('Erro de MySQL:', error.sqlMessage);
                reject(error);
                return;
            }
            resolve({ id: result.insertId });
        });
    });
};


module.exports = { getAllPassageiros, getOnePassageiro, createPassageiro }