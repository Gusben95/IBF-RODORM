
const database = require("./database")
const bodyParser = require('body-parser');
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
app.use(cookie())
app.use(express.urlencoded({
  extended: true
}))
app.use(cors({
  credentials: true , 
  origin: ["http://localhost:3000"]
}));
app.use(express.json())



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
  });
})

/* app.post("/api/register", jwtvalidator, async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const rolename = req.body.role;
  let password = req.body.password;

  try {
    if (!username || !password || !email) {
      console.log("fyll i fälten");
      return res.sendStatus(400);
    }

    const checkUser = await db.getUsersByEmail(email);
    if (checkUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userId = await db.createUser({
      username: username,
      hashedPassword: hashedPassword,
      email: email,
    });
    //get role id by rolename
    const role = await db.getRoleByRolename(rolename);
    //assign role to user
    await db.assignRoleToUser(role.roleId, userId);

    res.status(200).json({
      username: username,
      email: email,
      role: role.rolename,
    });
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
}); */


app.post('/loginUser', async (req, res) => {
  
    let account = req.body; 
    console.log(account)
    database.getUserByUsername(account)
    
  
  })





/* app.post('/logoutUser', async (req, res) => {
  if (req.session.loggedin) {
    req.session.loggedin = false;
    res.redirect('/');
    console.log("logged out")
}else{
  // Not logged in
  res.redirect('/');
  console.log("Not logged in")
}
}) */

    




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









