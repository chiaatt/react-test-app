/*
* This function is used to retrieve the first country that matches the user input.
*/
export async function getCountry(countryName) {
    const response = await fetch(`/countries/${countryName}`);
    return await response.json();
}