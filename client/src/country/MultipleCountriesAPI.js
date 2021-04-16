/*
* Returns all countries that match the array of the countries inputted
*/
export async function getCountries(countryNames) {
    const response = await fetch(`/countries/?countryNames=${countryNames}`);
    return await response.json();

}
