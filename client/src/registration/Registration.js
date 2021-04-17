import React, { useState } from 'react';
import validator from './Validator';
import {register} from './RegistrationAPI';
import './Registration.css';

//Task Four
function Registration() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState({});
    const [result, setResult] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        const request = {
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: password
        };
        
        const errorsList = validator(request);
        setErrors(errorsList);
    };

    const handleClickSubmit = e => {
        e.preventDefault();

        const request = {
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: password
        };
        
        const errorsList = validator(request);
        setErrors(errorsList);

        //If no errors call API
        if (!Object.values(errorsList).some(error => error.length !== 0)) {
            register(request)
                .then(response => setResult(response.result));
        }  
    };

    return (
        <div>
            <form onSubmit={handleClickSubmit}>
                <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    className={errors.firstname ? "error" : "success"}
                    onBlur={handleSubmit}
                />
                {errors.firstname && <small className = "error">{errors.firstname}</small>}

                <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    className={errors.lastname ? "error" : "success"}
                    onBlur={handleSubmit}
                />
                {errors.lastname && <small className = "error">{errors.lastname}</small>}

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className={errors.email ? "error" : "success"}
                    onBlur={handleSubmit}
                />
                {errors.email && <small className = "error">{errors.email}</small>}

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className={errors.password ? "error" : "success"}
                    onBlur={handleSubmit}
                />
                {errors.password && <small className = "error">{errors.password}</small>}
                <button>Submit</button>
                {result && <small>{result}</small>}
            </form>
        </div>
    );
}

export default Registration;
