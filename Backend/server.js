
const database = require("./database")
const cookie = require("cookie-parser")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const {comparePassword} = require('./Utils/bcrypt')
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
app.use(cookie())
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

  app.post('/createUser', async (req, res) => {

    let account = req.body; 
    let password = req.body.password; 
    let hashPassword = await bcrypt.hash(password ,10); 
    let sql = "INSERT INTO Users (userId, username, password) VALUES (null, ?, ?);";
    let query = mysql.format(sql, [account.username, hashPassword])
    db.query(query, (err, result) => {
      if (err) {
        console.log(err)
      }
      else {
      res.send(result);
      res.statusCode = 200;
    }
    })
  });
const addMinutes = (minutes, date = new Date()) => {   return new Date(date.setMinutes(date.getMinutes() + minutes)); };
app.post('/loginUser', async (req, res) => {
  
    let account = req.body; 
    console.log(account)
    let sql = `SELECT password FROM Users WHERE username=?`;
    let query = mysql.format(sql, [account.username]);
    db.query(query, async (err, result)  => { 
      
      if(err){
        console.log(err)
        
      }
      if(result.length <= 0) {

        console.log(result)  
        console.log("User does not exist")
      }
     else {
      const match = await comparePassword(account.password, result[0].password)
      if(match) {
        console.log("Du är inloggad")
        let token = jwt.sign({username: account.username},
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: '24h' // expires in 24 hours

          }
        );
       
        res.cookie('token', token, { httpOnly: true, secure: true, sameSite: "strict", expires: addMinutes(1440) }).
        status(200).json({username: account.username, accesstoken: token})

      }
      else{console.log("Fel användare/lösenord")}

    }
  })
})

    




    // if (storedpass.length > 0) {
    //   const result = await comparePassword(account.password, res[0].password)
    // }
    
    // const result = await database.getUserByUsername(account.username)
    
  //   .catch((err) => {
  //     console.log(err)
  //     res.send(err)
  //   })
  //   console.log(result)
  //   // kolla om result.password == account.password
  //   res.send("ok")
  // })









