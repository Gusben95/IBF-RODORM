const express = require("express");
const rateLimit = require('express-rate-limit');
const jwt = require("jsonwebtoken")
// const helmet = require("helmet");
// const rateLimit = require('express-rate-limit');
const app = express();
require('dotenv').config();
const test = "en test sak"
const PORT = process.env.PORT;
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_PORT = process.env.DB_PORT;

// app.use(helmet());
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


  app.get('/createUser', async (req, res) => {
    let account = req.body; 

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
