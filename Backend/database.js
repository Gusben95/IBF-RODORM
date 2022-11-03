const mysql = require("mysql");
const bcrypt = require('bcrypt');
const {comparePassword} = require('./Utils/bcrypt')

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

const createUser = (createUsers) => {
  return new Promise((resolve, reject) => {
      console.log("inne i createuser", createUsers)
      let sql = "INSERT INTO Users (userId, username, password) VALUES (null, ?, ?);";
      let query = mysql.format(sql, [ username, password]);
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

  const addMinutes = (minutes, date = new Date()) => {   return new Date(date.setMinutes(date.getMinutes() + minutes)); };
  const getUserByUsername = (account) => {
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
  )}
/* const getUserByUsername = (username) => {
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
} */

const assignRoleToUser = (roleId, userId) => {
  return new Promise((resolve, reject) => {
    let sql = "INSERT into UsersWithRoles (userId, roleId) VALUES (?, ?)";
    let query = mysql.format(sql, [userId, roleId]);
    pool.query(query, (err, result) => {
      if (err) {
        console.log(err)
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};


module.exports = {createUser, getUserByUsername, assignRoleToUser}