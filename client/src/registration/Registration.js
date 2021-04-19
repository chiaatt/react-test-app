import React, { useEffect,useState } from 'react';
import validator from './Validator';
import {register} from './RegistrationAPI';
import './Registration.css';
import {authenticationAction} from '../_actions/AuthenticationAction';
import {connect} from 'react-redux'

//Task Four
function Registration(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState({});
    const [result, setResult] = useState("");

    useEffect(() => {
        //checking if the user logged in successfully or not
        if (props.loggingIn && props.loggingIn === true){
            //Redirect to the slots page (task 6)
            props.history.push('/slots');
        }
    },[props.loggingIn]);

    const handleSubmit = e => {
        e.preventDefault();

        const request = {
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: password
        };
        //validate the fields
        const errorsList = validator(request);
        //set the error mesages
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

        //If no validation errors call the registration API
        if (!Object.values(errorsList).some(error => error.length !== 0)) {
            register(request)
                .then(response => {
                    if (response.message) {
                        //set the response
                        setResult(response.message)
                    } else {
                        //login user to set a session 
                        props.authenticationAction(request);
                    }
                });
        }  
    };

    return (
        <div>
            <h1>Registration</h1>
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

const mapDispatchToProps = (dispatch) => {
    return {
        authenticationAction: (user) => dispatch(authenticationAction(user))
    }
};

const mapStateToProps = state => ({
    loggingIn: state.loggingIn
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
