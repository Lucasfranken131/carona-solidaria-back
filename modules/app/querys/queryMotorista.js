var DBconnection = require('../../config/sql');
var connection = DBconnection();

const getAllMotoristas = () => {
    return new Promise((resolve, reject) =>{
        const sql = 'SELECT * FROM motoristas';
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

const getOneMotorista = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM motoristas WHERE id_driver = ${id}`;
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

const createMotorista = (name, cpf, email, password, age, sex, phone_number, turn) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO motoristas (name, cpf, email, password, age, sex, phone_number, turn) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
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

const updateMotorista = (id, name, cpf, email, password, age, sex, phone_number, turn) => {
    return new Promise((resolve, reject) => {
    const sql = `UPDATE motoristas SET name = ?, cpf = ?, email = ?, password = ?, age = ?, sex = ?, phone_number = ?, turn = ? WHERE id_driver = ${id}`;
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

const deleteMotorista = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM motoristas WHERE id_driver = ${id}`;
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


module.exports = { getAllMotoristas, getOneMotorista, createMotorista, updateMotorista, deleteMotorista }