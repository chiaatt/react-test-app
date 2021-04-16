/*
* Returns all countries
*/
export async function getCountries() {
    const response = await fetch(`/countries`);
    return await response.json();

}
