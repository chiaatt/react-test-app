var jwt = require('jsonwebtoken');
require('dotenv').config();

//Verifies if the API call is authorised by checking the JWT token
function verifyToken(req, res, next) {
  //Retrieve the auhtorisation header from the request
  var token = req.headers['authorization'];

  //If the token is not passed in the header
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });

  //Validate the token  
  jwt.verify(token.substr(token.indexOf(' ')+1), process.env.TOKEN_SECRET, function(err, decoded) {
    if (err) {
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }
      
    //Add the user email address to the request for use in other routes
    req.userId = decoded.email;
    next();
  });
}

module.exports = verifyToken;