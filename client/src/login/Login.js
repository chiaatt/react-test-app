import React, { useEffect,useState } from 'react';
import './Login.css';
import {authenticationAction} from '../_actions/AuthenticationAction';
import {connect} from 'react-redux';

//Task Five
function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState("");

    useEffect(() => {
        //checking if the user logged in successfully or not
        if (props.loggingIn){
            setErrors("");
            //Redirect to the slots page (task 6)
            props.history.push('/slots');
        } else if (!props.loggedIn && props.message){
            setErrors("User not found");
        }
    },[props.loggingIn, props.message]);

    const handleSubmit = e => {
        e.preventDefault();

        const request = {
            email: email,
            password: password
        };

        props.authenticationAction(request);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button>Login</button>
                {errors && <small>{errors}</small>}
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
    loggingIn: state.loggingIn,
    message: state.message
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
