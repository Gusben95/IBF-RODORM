const express = require("express");
// const https = require('https');
// const helmet = require("helmet");
// const rateLimit = require('express-rate-limit');

const app = express();
require('dotenv').config();

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
    res.send("Try /getAllUsers or /createUser");
  });

