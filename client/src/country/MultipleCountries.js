import React, { useState } from 'react';
import { getCountries } from './MultipleCountriesAPI';
import './CommonCountryStyles.css';

//Task Two
function MultipleCountries() {
    const [countryNames, setCountryNames] = useState([]);
    const [countryNamesInput, setCountryNamesInput] = useState(['']);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Returns list of countries that partly match user input
        getCountries(countryNamesInput)
            .then(matchedCountriesList => {
                setCountryNames(matchedCountriesList);
        });
    }; 
    
    const handleAdd = (e) => {
        e.preventDefault();
        setCountryNamesInput([...countryNamesInput, ""]);
    }

    const setCountryName = (value, index) => {
        setCountryNamesInput(countryNamesInput.map((countryName,i) => i === index ? value : countryName));
    }

    return (
        <div>
            <h2>Task 2</h2>
            <form data-testid="form" onSubmit={handleSubmit}> 
                <label>
                    <p>Please enter countries</p>
                    {countryNamesInput.map((countryName, i) => (
                        <div className="fullWidth">
                            <input data-testid="input" key={i} type="text" onChange={event => setCountryName(event.target.value, i)} value = {countryNamesInput[i]}/>
                        </div>    
                    ))}
                </label>
                <button data-testid="add" onClick={handleAdd}>Add</button>
                <button data-testid="submit" type="submit">Submit</button>
            </form>
            {countryNames.map((countryName,i) => (
                <p key={i} data-testid="p">{countryName}</p>
            ))}
        </div>
    );
}

export default MultipleCountries;
