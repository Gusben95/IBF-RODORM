const mysql = require("mysql");

require('dotenv').config();

const PORT = process.env.PORT;
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_PORT = process.env.DB_PORT;
const db = mysql.createPool({
  connectionLimit: 100,
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
  multipleStatements: false
});

const getUserByUsername = (username) => {
return new Promise((resolve, reject) => {
    console.log("inne i getusers", username)
    let sql = "SELECT * FROM Users WHERE username=?;";
    let query = mysql.format(sql, [username]);
    console.log(query)
    db.query(query, (err, result) => {
      if (err) {
        console.log(err)
        reject(err)
      }else{
        resolve(result) 
      }
    }) 
  })
}

module.exports = {getUserByUsername}