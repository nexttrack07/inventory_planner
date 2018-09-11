import {
  LOGIN_CHANGE,
  LOGIN_START,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  TO_SIGNUP
} from "../actions/types";

INITIAL_STATE = {
  email: "test@test.com",
  password: "password",
  user: null,
  error: "",
  isLogin: true,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_CHANGE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case LOGIN_START:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return { INITIAL_STATE, user: action.payload, loading: false };
    case LOGIN_USER_FAIL:
      return { INITIAL_STATE, error: action.payload, loading: false };
    case TO_SIGNUP:
      return { INITIAL_STATE, isLogin: action.payload };
    default:
      return state;
  }
};
