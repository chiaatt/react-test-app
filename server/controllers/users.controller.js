const usersService = require('../services/users.service');

const register = function(req, res){
    //Save user in database if the user doesn't already exist

    //Add 20c to the user wallet (free spins).
    req.body.wallet = 20;

    usersService.registerUser(req.body)
    .then(data => {
        res.send(data)
    })
}

module.exports = {
    register
};