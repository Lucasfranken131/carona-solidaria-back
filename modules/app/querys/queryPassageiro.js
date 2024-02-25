var DBconnection = require('../../config/sql');
var connection = DBconnection();

const getAllPassageiros = () => {
    return new Promise((resolve, reject) =>{
        const sql = 'SELECT * FROM passageiros';
        connection.query(sql, function(error, result) {
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
        const sql = `SELECT * FROM passageiros WHERE id_passenger = ${id}`;
        connection.query(sql, function(error, result) {
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

const updatePassageiro = (id, name, cpf, email, password, age, sex, phone_number, turn) => {
    return new Promise((resolve, reject) => {
    const sql = `UPDATE passageiros SET name = ?, cpf = ?, email = ?, password = ?, age = ?, sex = ?, phone_number = ?, turn = ? WHERE id_passenger = ${id}`;
        connection.query(sql, [name, cpf, email, password, age, sex, phone_number, turn], function(error, result) {
            if (error) {
                console.error('Erro ao executar consulta:', error);
                console.error('Erro de MySQL:', error.sqlMessage);
                reject(error);
                return;
            }
            resolve(result);
        });
    });
};

const deletePassageiro = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM passageiros WHERE id_passenger = ${id}`;
        connection.query(sql, function(error, result) {
            if (error) {
                console.error('Erro ao executar consulta:', error);
                console.error('Erro de MySQL:', error.sqlMessage);
                reject(error);
                return;
            }
            resolve(result);
        });
    });
};


module.exports = { getAllPassageiros, getOnePassageiro, createPassageiro, updatePassageiro, deletePassageiro }