var DBconnection = require('../../config/sql');
var connection = DBconnection();

const getAllUsuarios = () => {
    return new Promise((resolve, reject) =>{
        const sql = 'SELECT * FROM usuarios';
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

const getOneUsuario = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM usuarios WHERE id_user = ${id}`;
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

const Login = (email, password) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM usuarios WHERE email = ${email} AND password = ${password}`;
        connection.query(sql,  function (error, result) {
            if (error) {
                console.error('Erro ao executar consulta:', error);
                console.error('Erro de MySQL:', error.sqlMessage);
                reject(error);
                return;
            }
            resolve(result);
        });
    });
}

const createUsuario = (name, cpf, email, password, age, sex, phone_number, turn, car_model, plate, user_type) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO usuarios (name, cpf, email, password, age, sex, phone_number, turn, car_model, plate, user_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        connection.query(sql, [name, cpf, email, password, age, sex, phone_number, turn, car_model, plate, user_type], function(error, result) {
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

const updateUsuario = (id, name, cpf, email, password, age, sex, phone_number, turn, car_model, plate, user_type) => {
    return new Promise((resolve, reject) => {
    const sql = `UPDATE usuarios SET name = ?, cpf = ?, email = ?, password = ?, age = ?, sex = ?, phone_number = ?, turn = ?, car_model = ?, plate = ?, user_type = ? WHERE id_user = ${id}`;
        connection.query(sql, [name, cpf, email, password, age, sex, phone_number, turn, car_model, plate, user_type], function(error, result) {
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

const deleteUsuario = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM usuarios WHERE id_user = ${id}`;
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


module.exports = { getAllUsuarios, getOneUsuario, Login, createUsuario, updateUsuario, deleteUsuario }