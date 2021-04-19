import {login} from '../login/LoginAPI';

//This action is used to dispatch authentication actions to the Redux store
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
            if (data.token) {
                //Login was successful
                //Save token in local storage
                localStorage.setItem("token", data.token);
                dispatch({
                    type: 'LOGIN_USER',
                    payload: data.user
                });
            }
        }
    })
}