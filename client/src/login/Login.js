import React, { useEffect,useState } from 'react';
import './Login.css';
import {authenticationAction} from '../actions/AuthenticationAction';
import {connect} from 'react-redux';

//Task Five
function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState("");

    useEffect(() => {
        //checking if the user logged in successfully or not
        if (props.currentUser && props.currentUser.message && props.currentUser.message === "User Not Found") {
            setErrors("User not found");
        } else {
            setErrors("");
            //TODO: Redirect to the slots page (task 6)
        }
    },[props.currentUser]);

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
    currentUser: state.currentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
