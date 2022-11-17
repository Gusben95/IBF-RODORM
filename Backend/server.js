const logger = require("./logger/winston");
const mysql = require("mysql");

const bodyParser = require("body-parser");
const cookie = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const express = require("express");
var cors = require("cors");
const {
  checkTokenAll,
  checkTokenAdminBoss,
  checkTokenBoss,
} = require("./middleware/jwt");
 const { pingLimiter } = require ("./middleware/ratelimit");
const rateLimit = require("express-rate-limit"); 


const db = require("./database");
const { comparePassword, hashPassword } = require("./Utils/bcrypt");
require("dotenv").config();
const { request } = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
app.use(cookie());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);
app.use(express.json());

/* app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
}) */

const server = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
};

app.listen(PORT, () => {
  console.log(`Server running at 127.0.0.1:${PORT}/`);
});

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.send("Try /getAllUsers or /createUser");
});

//skapa användare,asdasdasdda
//innerhåller: ej skapa likadana konton. Assign roll till användare.

app.post("/createUser", pingLimiter, async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let hashPassword = await bcrypt.hash(password, 10);

  if (!username || !password) {
    res
      .status(400)
      .json({ message: "Username or password missing in request" });
    return;
  }

  const userExists = await db.getUserByUsername(username).catch((err) => {
    res
      .status(400)
      .json({ message: "Error getting user to check if already exists " });
  });
  console.log("server.js", userExists);
  if (userExists.length > 0) {
    res.status(400).json({ message: "User already exists" });
    return;
  }
  const resultId = await db.createUser(username, hashPassword).catch((err) => {
    res.status(400);
  });
  console.log(resultId);
  db.assignRoleToUser(resultId, 1000);
  res.status(200).json({ username: username });
});

//logga in
//innehåller om längd är mindre än eller = noll return,
//jämför lösenord, fixa token
const addMinutes = (minutes, date = new Date()) => {
  return new Date(date.setMinutes(date.getMinutes() + minutes));
};
app.post("/loginUser", pingLimiter, async (req, res) => {
  let account = req.body;
  let result = await db.getUserByUsername(account.username).catch((err) => {
    res.send("error");
  });

  if (result.length <= 0) {
    res.status(500).json({ message: "Error User not found" });
    return;
  } else {
    const match = await comparePassword(account.password, result[0].password);
    if (match) {
      console.log("Du är inloggad");
      let token = jwt.sign(
        {
          username: account.username,
          role: result[0].rolename,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "15m", // expires in 15 min
        }
      );
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        expires: addMinutes(15),
      });
      res.status(200).json({ username: account.username, accesstoken: token });
    } else {
      console.log("Fel användare/lösenord");
    }
  }
});

app.get("/isLoggedIn", pingLimiter, checkTokenAll, async (req, res) => {
  let token = req.cookies.token;
  console.log("loggar toke", token);
  const wholeuser = await db.getUserByToken(token).catch((err) => {
    console.log("Could not get token", err);
    return res.status(400).json({
      message: "ojdå",
      success: false,
    });
  });
  let user = wholeuser[0];
  user.password = "";
  user.role = req.role;
  console.log("walla", user);
  res.status(200).json(user);
  /* logger.error(err); */
});

app.post("/loggOut", pingLimiter, async (req, res) => {
  return res.clearCookie("token").status(200).json({ message: "Logged out" });
});

app.get("/players", pingLimiter, async (req, res) => {
  const playerInfo = await db.getAllPlayers().catch((err) => {
    res.status(400).send("error");
    logger.error(err);
    res.end();
  });
  res.status(200).json(playerInfo);
});

app.get("/getusers", checkTokenBoss, async (req, res) => {
  const userInfo = await db.getAllUsers().catch((err) => {
    res.status(400).send("error");
    logger.error(err);
    res.end();
  });
  res.status(200).json(userInfo);
});

app.post("/removeuser", pingLimiter, checkTokenBoss, async (req, res) => {
  let user = req.body.userId;
  console.log("removeuser id = ", user);
  const deluser = await db.deleteUser(user).catch((err) => {
    res.send("error");
  });
});


