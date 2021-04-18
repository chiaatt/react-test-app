const spinsService = require('../services/spins.service');

//Get spin results
const spin = function(req, res){
    spinsService.spin(req)
    .then(data => {
        res.send(data);
    })
}

module.exports = {
    spin
};