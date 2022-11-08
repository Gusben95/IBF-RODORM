let jwt = require('jsonwebtoken');
require('dotenv').config();
 // Express headers are auto converted to lowercase

let checkToken = (token, res) => {
  if (token) {
    
      return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET , (err, decoded) => {
      if (err) {
         res.json({
          success: false,
          message: 'Token is not valid'
        });
      } else  { 
      return decoded;
      }
    });
  } else {
      res.json({
      success: false,
      message: 'Auth token is not supplied'
      
    });
  }
}

let checkTokenAll = (req, res, next) => {
  let token = req.cookies.token;
  let match = checkToken(token, res);
  console.log(match);
  if(match.role == "User" || match.role == "Admin" || match.role == "BIGBOSS")
{ 
  console.log("Token role check passed")
  next();
}
else{
  return res.json({
      success: false,
      message: 'Auth token is not supplied'
  })
}
};

let checkTokenAdminBoss = (req, res, next) => {
  let token = req.cookies.token;
  let match = checkToken(token, res);
  
  if( match.role == "Admin" || match.role == "BIGBOSS")
{ 
  console.log("Token role check passed")
  next();
}
else{
  return res.json({
      success: false,
      message: 'Auth token is not supplied'
  })
}
};

let checkTokenBoss = (req, res, next) => {
  let token = req.cookies.token;
  let match = checkToken(token, res);
  
  if(match.role == "BIGBOSS")
{ 
  console.log("Token role check passed")
  next();
}
else{
  return res.json({
      success: false,
      message: 'Auth token is not supplied'
  })
}
};


module.exports = {
  checkTokenAll, checkTokenAdminBoss, checkTokenBoss

}





        