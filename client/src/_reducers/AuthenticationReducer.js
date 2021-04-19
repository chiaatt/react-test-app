const initialState = {
    currentUser: {}
  }
//Authentication reducer  
export default function reducer(state = initialState, action) {
    switch (action.type) {
    case 'LOGIN_USER':
        return {...state, loggingIn: true, currentUser: action.payload}
    case 'LOGIN_FAILED':
        return {...state, loggingIn: false, message: action.payload.message}    
    default:
        return state;
    }
}