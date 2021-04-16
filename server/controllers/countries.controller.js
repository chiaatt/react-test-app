const countriesService = require('../services/countries.service');

const getCountry = function(req, res){
    countriesService.getCountry(req.params.countryName)
        //Return the first country in the list if there are no errors
        .then(data => {
            res.send({"name": data && !data.message ? data.find(() => true).name : "Country Not Found"});
        });
}

const getCountries = function(req, res){
    //If the API request is a query parameter with countryNames
    if (req.query.countryNames) {

        //Parse the request parameters to store as an array
        var countryNames = req.query.countryNames.split(',');

        let countries = []

        countriesService.getCountries(countryNames)
            //Return the first country in the list
            .then(response => {
               response.forEach(data => {
                   //if the response is not an error
                   if (!data.message) {
                        data.forEach(countryDetails => {
                            if(!countryDetails.message){ 
                                countries.push(countryDetails.name);
                            }  
                        })
                    }
                })
                res.send(countries)
            });
    } else { 
        //if the user didn't pass any countries as query parameters, then retrieve all the countries.
        countriesService.getAll()
            .then(countries => {
                res.send({"names": countries && !countries.message ? countries.map(country => country.name) : "Country Not Found"});
            });
    }
}
    
module.exports = {
    getCountry,
    getCountries
};