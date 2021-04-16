/*
    NOTE: Ideally, a common API Error Handler should be implemented to handle errors in case the API call is unsuccessful.
*/
const fetch = require("node-fetch");

const getCountry = async function(countryName){
    const response = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`);
    return await response.json();
}

module.exports = {
    getCountry
};