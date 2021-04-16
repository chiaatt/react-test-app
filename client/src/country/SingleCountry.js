import React, { useState } from 'react';
import { getCountry } from './SingleCountryAPI';

function SingleCountry() {
    const [countryName, setCountryName] = useState('');
    const [countryNameInput, setCountryNameInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!countryNameInput || countryNameInput==='') {
            return;
        }

        // Returns the first country matched based on the user input
        getCountry(countryNameInput)
            .then(country => {
                //if message is defined, then the API call returned an error
                setCountryName(country.name);
        })
    };  

    return (
        <div>
            <h2>Task 1</h2>
            <form data-testid= "form" onSubmit={handleSubmit}>
                <label>
                    <p>Please enter a country name</p>
                    <input data-testid= "input" type="text" onChange={event => setCountryNameInput(event.target.value)} value = {countryNameInput}/>
                </label>
                <button data-testid="submit" type="submit">Submit</button>
            </form>
            <p data-testid="p">{countryName}</p>
        </div>
    );
}

export default SingleCountry;