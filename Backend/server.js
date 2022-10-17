const express = require("express");
// const helmet = require("helmet");
// const rateLimit = require('express-rate-limit');
const https = require('https');

const PORT = 3001;
const hostname = '127.0.0.1';
const app = express();


// app.use(helmet());
app.use(express.json())


const server = https.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
  });
  
  server.listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
  });




