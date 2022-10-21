// const rateLimit = require('express-rate-limit');
// const jwt = require("jsonwebtoken")
// const helmet = require("helmet");
// const rateLimit = require('express-rate-limit');
// app.use(helmet());

//från lektion 2022-10-20
const database = require("./database")
const jwt = require("jsonwebtoken")


const mysql = require('mysql');
const { request } = require("express");
const express = require("express");
const app = express();
var cors = require('cors');

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
app.use(express.json())
app.use(cors({credentials: true, origin: `http://localhost:3000`}));

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

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
    // kolla om username finns redan
    //bryt ut til andra filen
    // kryptera lösen innan den går in i databas
    let sql = "INSERT INTO Users (userId, username, password) VALUES (null, ?, ?);";
    let query = mysql.format(sql, [account.username, account.password])
    db.query(query, (err, result) => {
      if (err) {
        console.log(err)
      }
      else {
      res.send(result);
      res.statusCode = 200;
    }
    })
  })

app.post('/loginUser', async (req, res) => {
  let account = req.body; 
    console.log(account)
    const result = await database.getUserByUsername(account.username)
    .catch((err) => {
      console.log(err)
      res.send(err)
    })
    console.log(result)
    // kolla om result.password == account.password
    res.send("ok")
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
