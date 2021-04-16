const countriesService = require('../services/countries.service');

const getCountry = function(req, res){
    countriesService.getCountry(req.params.countryName)
        //Return the first country in the list if there are no errors
        .then(data => {
            res.send({"name": data && !data.message ? data.find(() => true).name : "Country Not Found"});
        });
}
    
module.exports = {
    getCountry
};