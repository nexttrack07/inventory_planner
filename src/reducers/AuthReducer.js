import {
    LOGIN_CHANGE,
    LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS,
    TO_SIGNUP
} from '../actions/types';

INITIAL_STATE = {
    email: '',
    password: '',
    user: null, 
    error: '',
    isLogin: true
}

export default (state=INITIAL_STATE, action) => {
    console.log(action);
    switch(action.type) {
        case LOGIN_CHANGE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case LOGIN_USER_SUCCESS:
            return { INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            return { INITIAL_STATE, error: action.payload };
        case TO_SIGNUP: 
            return { INITIAL_STATE, isLogin: action.payload };
        default:
            return state;
    }
}