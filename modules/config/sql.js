var mysql = require("mysql2");

module.exports = function() {
    return mysql.createConnection({
    host: "localhost",
    user: "root",
    port: "3306",
    password: "",
    database: "carona_solidaria"
})};


