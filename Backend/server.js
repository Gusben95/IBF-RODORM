// const rateLimit = require('express-rate-limit');
// const jwt = require("jsonwebtoken")
// const helmet = require("helmet");
// const rateLimit = require('express-rate-limit');
// app.use(helmet());
const mysql = require('mysql');
const { request } = require("express");
const express = require("express");
const app = express();
var cors = require('cors')
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
app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
app.use(express.json())

const server = ((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
  });
  
  app.listen(PORT,  () => {
    console.log(`Server running at 127.0.0.1:${PORT}/`);
  });

  app.get('/', (req, res) => {
    res.statusCode = 200;
    res.send("Try /getAllUsers or /createUser");
  });

  app.post('/createUser', (req, res) => {
    let account = req.body; 
    console.log(account)
    db.query(`INSERT INTO Users (username, password) VALUES (${account.USERNAME}, ${ account.PASSWORD})`, (err, result) => {
      if (err) {
        console.log(err)
      }
      else {
      res.send(result);
      res.statusCode = 200;
    }
    })
  })










//   Login limiter
// ***********************  FUNKTIONELL KOD AVSTÄNGD UNDER UTVÄCKLINGSFAS *************************
// Förhindrar upprepade loginförsök från samma IP-Address
// const repeatedLoginlimiter = rateLimit({
// 	windowMs: 10 * 60 * 1000,
// 	max: 5,
// 	standardHeaders: true,
// 	legacyHeaders: false,
// })
