import React, { useEffect,useState } from 'react';
import { getCountries } from './FilterCountriesAPI';

//Task Three
function FilterCountries() {
    const [countryNames, setCountryNames] = useState([]);
    const [countryNameInput, setCountryNameInput] = useState("");

    useEffect(() => {
        let mounted = true;

        // Returns list of all countries
        getCountries()
            .then(countries => {
                if(mounted) {
                    setCountryNames(countries.names);
                }
        })
        return () => mounted = false;
    }, []);  

    return (
        <div>
            <h2>Task 3</h2>
            <p>Filter Countries</p>
            <input type="text" onChange={event => setCountryNameInput(event.target.value)} value = {countryNameInput}/>

            <p>Matched Countries:</p>
            {countryNames.length
                ? (
                    <ul>
                        {countryNames.filter(countryName => !countryName || countryName.toLowerCase().includes(countryNameInput.toLowerCase()))
                                      .map((countryName,i) => (
                                        <li key={i} data-testid="p">{countryName}</li>
                                      ))}
                    </ul>)
               : <p>No Matched Countries</p>
            }
        </div>
    );
}

export default FilterCountries;
