const usersService = require('../services/users.service');

const register = function(req, res){
    //Save user in database if the user doesn't already exist
    usersService.registerUser(req.body)
    .then(data => {
        res.send(data)
    })
}

module.exports = {
    register
};