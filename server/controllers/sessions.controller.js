const sessionsService = require('../services/sessions.service');

const login = function(req, res){
    //Create a sessions for the user
    sessionsService.login(req.body)
    .then(data => {
        res.send(data)
    })
}

module.exports = {
    login
};