var DBconnection = require('../../config/sql');
var connection = DBconnection();

const getAllChamadas = () => {
    return new Promise((resolve, reject) =>{
        const sql = 'SELECT * FROM chamadas';
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

const getOneChamada = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM chamadas WHERE id_passenger = ${id}`;
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

const createChamada = (name, cpf, email, password, age, sex, phone_number, turn) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO chamadas (name, cpf, email, password, age, sex, phone_number, turn) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
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

const updateChamada = (id, name, cpf, email, password, age, sex, phone_number, turn) => {
    return new Promise((resolve, reject) => {
    const sql = `UPDATE chamadas SET name = ?, cpf = ?, email = ?, password = ?, age = ?, sex = ?, phone_number = ?, turn = ? WHERE id_passenger = ${id}`;
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

const deleteChamada = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM chamadas WHERE id_passenger = ${id}`;
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


module.exports = { getAllChamadas, getOneChamada, createChamada, updateChamada, deleteChamada }