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
        const sql = `SELECT * FROM chamadas WHERE id_call = ${id}`;
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

const createChamada = (initial_location, final_location, id_driver, id_passenger) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO chamadas () VALUES (?, ?, ?, ?)';
        connection.query(sql, [initial_location, final_location, id_driver, id_passenger], function(error, result) {
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

const updateChamada = (id, initial_location, final_location, id_driver, id_passenger) => {
    return new Promise((resolve, reject) => {
    const sql = `UPDATE chamadas SET initial_location = ?, final_location = ?, id_driver = ?, id_passenger = ? WHERE id_call = ${id}`;
        connection.query(sql, [initial_location, final_location, id_driver, id_passenger], function(error, result) {
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
        const sql = `DELETE FROM chamadas WHERE id_call = ${id}`;
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