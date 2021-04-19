const usersService = require('../services/users.service');

const register = function(req, res){

    //On registration add 20c to the user wallet (as free spins)
    req.body.wallet = 20;

    usersService.registerUser(req.body)
    .then(data => {
        res.send(data)
    })
}

module.exports = {
    register
};