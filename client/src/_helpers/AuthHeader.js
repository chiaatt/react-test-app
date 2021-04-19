// This function retrieves the token from the local storage to be used to set the authorisation token for the API calls
export function AuthHeader() {
    // return authorization header with jwt token
    let token = localStorage.getItem("token");

    if (token) {
        //build the authorisation token
        return { 'Authorization': 'Bearer ' + token };
    } else {
        return {};
    }
}
