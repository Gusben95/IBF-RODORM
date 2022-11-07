const mysql = require("mysql");
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
const { syncBuiltinESMExports } = require("module");
const jwt = require('jsonwebtoken');

require('dotenv').config();

const PORT = process.env.PORT;
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_PORT = process.env.DB_PORT;

const pool = mysql.createPool({
  connectionLimit: 100,
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
  multipleStatements: false
});

//gör det enklare att hämta i server.js
let db = {}

<<<<<<< Updated upstream
db.getAllUsers = () => {
  return new Promise((resolve, reject)=>{
    pool.query("SELECT * FROM Users", (err, result) => {
      if (err) {
        reject("Could not get all users: SQL ERROR ",err);
      }else {
        resolve(result);
      }
    });
  });
};

=======
>>>>>>> Stashed changes
//create user till sql databasen
db.createUser = (username, hashPassword) => {
  console.log("123")
  return new Promise((resolve, reject) => {
      console.log("inne i create user")
      let sql = "INSERT INTO Users (userId, username, password) VALUES (null, ?, ?);";
      let query = mysql.format(sql, [ username, hashPassword]);
      console.log(query)
      pool.query(query, (err, result) => {
        if (err) {
<<<<<<< Updated upstream
          console.log(err)
          reject("Could not create user: SQL ERROR ", err)
=======
          console.log("Could not create user: SQL ERROR ", err)
          reject(err)
>>>>>>> Stashed changes
        }else{
          resolve(result.insertId) 
        }
      }) 
    })
  }

  //hämtar user från username i sql databasen 
  db.getUserByUsername = (username) => {
    return new Promise((resolve, reject) => {
        console.log("inne i getusers", username)
        let sql = "SELECT * FROM Users WHERE username=?;";
        let query = mysql.format(sql, [username]);
        console.log(query)
        pool.query(query, (err, result) => {
          if (err) {
            console.log(err)
            reject("Could not get user: SQL ERROR ", err)
          }else{
            console.log("databas", result)
            resolve(result) 
          }
        }) 
      })
    } 

    //assignar roll till användare dbquery
db.assignRoleToUser = (username, role) => {
  console.log(123)
  return new Promise((resolve, reject) => {
    let sql = "INSERT INTO UsersWithRoles (userId, roleId) VALUES (?, ?)";
    let query = mysql.format(sql, [username, role]);
    pool.query(query, (err, result) => {
      if (err) {
<<<<<<< Updated upstream
        console.log("what", err)
=======
        console.log(err)
>>>>>>> Stashed changes
        reject("Could not assign role: SQL ERROR ", err);
      } else {
        resolve(result);
        console.log(woho)
      }
    });
  });
};

  /* const getUserByUsername = (account) => {
  let sql = `SELECT password FROM Users WHERE username=?`;
  let query = mysql.format(sql, [account.username]);
  db.query(query, async (err, result)  => { 
    
    if(err){
      console.log(err) }
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
      res.cookie('token', token, { 
        httpOnly: true, 
        secure: true, 
        sameSite: "strict", 
        expires: addMinutes(1440)}); 

      res.status(200).json({username: account.username, accesstoken: token})

    }
    else{console.log("Fel användare/lösenord")}

  }
  }
  )} */




module.exports = db;