let mysql = require("mysql2");

let HOST = process.env.HOST;
let USER = process.env.USER;
let PASSWORD = process.env.PASSWORD;
let DataBase = process.env.DataBase;

let connection = mysql.createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DataBase,
});

module.exports = connection;
