let jwt = require("jsonwebtoken");
require("dotenv").config();
// Express headers are auto converted to lowercase

let checkToken = (token, res) => {
  if (token) {
    return jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET,
      (err, decoded) => {
        if (err) {
          return null; 
        
        } else {
          return decoded;
        }
      }
    );
  } else {
   return null;
  }
};

let checkTokenAll = (req, res, next) => {
  let token = req.cookies.token;
  let match = checkToken(token, res);
  console.log("32",match);
  if (match == null){
    res.status(400).json({
      success: false,
      message: "GET OUT",
    })
    return 
  }
  else if (
    match.role == "User" ||
    match.role == "Admin" ||
    match.role == "BIGBOSS"
  ) {
    req.role = match.role ; 
    console.log("Token role check passed");
    next();
  } else {
    return res.status(400).json({
      success: false,
      message: "Auth token is not supplied",
    });
  }
};

let checkTokenAdminBoss = (req, res, next) => {
  let token = req.cookies.token;
  let match = checkToken(token, res);

  if (match.role == "Admin" || match.role == "BIGBOSS") {
    console.log("Token role check passed");
    next();
  } else {
    return res.status(400).json({
      success: false,
      message: "Auth token is not supplied",
    });
  }
};

let checkTokenBoss = (req, res, next) => {
  let token = req.cookies.token;
  let match = checkToken(token, res);

  if (match.role == "BIGBOSS") {
    console.log("Token role check passed");
    next();
  } else {
    return res.status(400).json({
      success: false,
      message: "Auth token is not supplied",
    });
  }
};

module.exports = {
  checkTokenAll,
  checkTokenAdminBoss,
  checkTokenBoss,
};
