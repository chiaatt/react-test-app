const initialState = {
    currentUser: {}
  }
  
export default function reducer(state = initialState, action) {
    switch (action.type) {
    case 'LOGIN_USER':
        return {...state, currentUser: action.payload}
    case 'FAILED_LOGIN':
        return {...state, currentUser: action.payload}    
    default:
        return state;
    }
}