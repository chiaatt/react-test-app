/*
    NOTE: Ideally, a common API Error Handler should be implemented to handle errors in case the API call is unsuccessful.
*/
const fetch = require("node-fetch");

const getCountry = async function(countryName){ 
    const response = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`);
    return await response.json();
}

const getCountries = async function(countryNames){

    let countries = [];
    for( const countryName of countryNames) {
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`);     
        countries.push(await response.json())
    }

    return countries;
}

module.exports = {
    getCountry,
    getCountries
};