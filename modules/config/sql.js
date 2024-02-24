var mysql = require("mysql2");

module.exports = function() {
    return mysql.createConnection({
    host: "localhost",
    user: "root",
    port: "3308",
    password: "",
    database: "carona_solidaria"
})};


