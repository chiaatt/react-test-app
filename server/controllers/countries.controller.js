const countriesService = require('../services/countries.service');

const getCountry = function(req, res){
    countriesService.getCountry(req.params.countryName)
        //Return the first country in the list if there are no errors
        .then(data => res.send(!data.message ? data[0] : data));
}

module.exports = {
    getCountry
};