var mysql = require("mysql2");

module.exports = function() {
    return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "carona_solidaria"
})};


