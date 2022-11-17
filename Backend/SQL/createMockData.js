const mysql = require("mysql");
const bcrypt = require("bcrypt");

require("dotenv").config();
const mockPlayers = require("./players.json")

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_PORT = process.env.DB_PORT;

// establish connection to database
const pool = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
  insecureAuth: true,
  multipleStatements: true,
});
//Create roles

//Hårdkoda lösenord
const pwdHashed = bcrypt.hashSync("password", 10);

pool.connect(async (err, connection) => {
  console.log("RUNNING CREATE MOCKDATA SCRIPT");
  let userRoles = `
INSERT INTO Roles (roleId, rolename) VALUES (1000, "User");
INSERT INTO Roles (roleId, rolename) VALUES (2000, "Admin");
INSERT INTO Roles (roleId, rolename) VALUES (3000, "BIGBOSS");
`;

  //detta är som att klicka på blixten i mySQL, skapa våra roller
  pool.query(userRoles, async (err) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log("ROLES CREATED!");
  });

  /* let users = `INSERT INTO Users (userId, username, password) VALUES (null, username, password);` */

  let users = `
INSERT INTO Users (userId, username, password) VALUES (null, "User", "${pwdHashed}");
INSERT INTO Users (userId, username, password) VALUES (null, "Admin", "${pwdHashed}");
INSERT INTO Users (userId, username, password) VALUES (null, "BigBoss", "${pwdHashed}");
`;

  pool.query(users, async (err) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log("Users CREATED!");
  });

  let usersWithRolesMock = `
INSERT INTO UsersWithRoles (UserId, RoleId) VALUES (1, 1000);

INSERT INTO UsersWithRoles (UserId, RoleId) VALUES (2, 2000);

INSERT INTO UsersWithRoles (UserId, RoleId) VALUES (3, 3000);
`;

  pool.query(usersWithRolesMock, async (err) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log("UsersWithRolesMock CREATED!");
  });

  

  mockPlayers.forEach(async (Players, index) => {
    let insertPlayers = `
  INSERT INTO Players (playersId, position, playername, playerinformation, images) 
  VALUES (null, "${Players.position}", "${Players.playername}", 
  "${Players.playerinformation}", "${Players.images}");
  `;
    await pool.query(insertPlayers, (err, result) => {
      if (err) {
        console.log("ERROR ADDING MOCK Players", err);
        process.exit(1);
      }
      console.log(`Players ${index} inserted`);
    });
  });
});
