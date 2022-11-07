const mysql = require('mysql');

require('dotenv').config();

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_PORT = process.env.DB_PORT;

// establish connection to database
const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  insecureAuth: true,
  multipleStatements: true 
});
//Create roles 

//Hårdkoda lösenord 
const pwdHashed = bcrypt.hashSync("password", 10)

db.connect(async (err, connection) => {
  console.log('RUNNING CREATE MOCKDATA SCRIPT');
let userRoles = `
INSERT INTO Roles (roleId, rolename) VALUES (1000, "User");
INSERT INTO Roles (roleId, rolename) VALUES (2000, "Admin");
INSERT INTO Roles (roleId, rolename) VALUES (3000, "BIGBOSS");
`;

//detta är som att klicka på blixten i mySQL, skapa våra roller 
db.query(userRoles, async (err) => {
    if (err) {
      console.log(err)
      process.exit(1);
    }
    console.log('ROLES CREATED!');
})

let users = `INSERT INTO Users (userId, username, password) VALUES (null, username, password);`

let user = `
INSERT INTO Users (userId, username, password) VALUES (null, "User", "${pwdHashed}");
` 
let userAdmin = `
INSERT INTO Users (userId, username, password) VALUES (null, "Admin", "${pwdHashed}");
`
let userBigBoss = `
INSERT INTO Users (userId, username, password) VALUES (null, "BigBoss", "${pwdHashed}");
`

db.query(user, async (err) => {
    if (err) {
      console.log(err)
      process.exit(1);
    }
    console.log('User CREATED!');
})
db.query(userAdmin, async (err) => {
    if (err) {
      console.log(err)
      process.exit(1);
    }
    console.log('Admin CREATED!');
})
db.query(userBigBoss, async (err) => {
    if (err) {
      console.log(err)
      process.exit(1);
    }
    console.log('BigBoss CREATED!');
})
let usersWithRolesMock = `
INSERT INTO UsersWithRoles (UserId, RoleId) VALUES (1, 1000);
INSERT INTO UsersWithRoles (UserId, RoleId) VALUES (2, 1000);
INSERT INTO UsersWithRoles (UserId, RoleId) VALUES (2, 2000);
INSERT INTO UsersWithRoles (UserId, RoleId) VALUES (3, 1000);
INSERT INTO UsersWithRoles (UserId, RoleId) VALUES (3, 2000);
INSERT INTO UsersWithRoles (UserId, RoleId) VALUES (3, 3000);`
})