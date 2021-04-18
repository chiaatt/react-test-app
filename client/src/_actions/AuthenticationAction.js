import {login} from '../login/LoginAPI';

export const authenticationAction = (user) => dispatch => {
    login(user)
    .then(data => {
        if (data.message) {
            //Login authentication failed
            dispatch({
                type: 'LOGIN_FAILED',
                payload: data
            });
        } else {
            //Save token in local storage
            localStorage.setItem("token", data.token);
            dispatch({
                type: 'LOGIN_USER',
                payload: data.user
            });
        }
    })
}