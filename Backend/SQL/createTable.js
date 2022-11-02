
const mysql = require('mysql');

require('dotenv').config();

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_PORT = process.env.DB_PORT;
// Establish connection to database server
const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
});

// CREATE TABLES

db.connect(async (err, connection) => {
  console.log('RUNNING CREATE TABLE SCRIPT');
  let createUsersTable = `CREATE TABLE IF NOT EXISTS Users (
    userId int NOT NULL AUTO_INCREMENT, 
    username varchar(45) NOT NULL, 
    password varchar(100) NOT NULL, 
    PRIMARY KEY (userId)) 
    ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
    `;
  let createRolesTable = `CREATE TABLE IF NOT EXISTS Roles (
    roleId int NOT NULL AUTO_INCREMENT,
    rolename varchar(45) NOT NULL,
    PRIMARY KEY (roleId)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    `;

  let createUsersWithRoleTable = `CREATE TABLE IF NOT EXISTS UsersWithRoles (
    userId int NOT NULL,
    roleId int NOT NULL,
    CONSTRAINT FK_Role FOREIGN KEY (roleId) REFERENCES Roles(roleId),
    CONSTRAINT FK_User FOREIGN KEY (userId) REFERENCES Users(userId)
    ) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    `;

    //auto-increment är att man itne behöver specifiera id 
    //255 standard, hur många tecken
    //Not NUll är att det inte får vara inget
    //kan använda firebase för integrera och få in bilder, blopstore
    //altertable, PlayersTable, add column_name datatype:, kan lägga in urlen,
    //admin bör kunna ta bort spelare, delete isf, finns i sql 
    //ha


  let createPlayersTable = `CREATE TABLE IF NOT EXISTS Players(
    id int NOT NULL AUTO_INCREMENT,
    position varchar(255) NOT NULL,
    playername varchar(255) NOT NULL,
    playerinformation varchar(255),
    PRIMARY KEY (id)
  ) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
  `;

  db.query(createUsersTable, async (err) => {
    if (err) {
      console.log(err)
      console.log(err)
      process.exit(1);
    }
    console.log('TABLE CREATED!');
    db.query(createRolesTable, async (err) => {
      if (err) {
        console.log(err)
        process.exit(1);
      }
      console.log('TABLE CREATED!');
      db.query(createUsersWithRoleTable, async (err) => {
        if (err) {
          console.log(err)
          process.exit(1);
        }
        console.log('TABLE CREATED!');

        db.query(createPlayersTable, async (err) => {
          if (err) {
            console.log(err)
            process.exit(1);
          }
          console.log('TABLE CREATED!');
          process.exit(0);
        });
      });
    });
  });
});