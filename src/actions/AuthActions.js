import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import {
  LOGIN_CHANGE,
  LOGIN_START,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  TO_SIGNUP
} from "./types";

export const loginChange = ({ prop, value }) => {
  return {
    type: LOGIN_CHANGE,
    payload: { prop, value }
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_START });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginSuccess(dispatch, user))
      .catch(error => {
        dispatch({ type: LOGIN_USER_FAIL, payload: error.message });
      });
  };
};

export const createUser = ({ email, password }) => {
  return dispatch => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => loginSuccess(dispatch, user))
      .catch(error => {
        dispatch({ type: LOGIN_USER_FAIL, payload: error.message });
      });
  };
};

export const toSignUp = isLogin => {
  return {
    type: TO_SIGNUP,
    payload: !isLogin
  };
};

const loginSuccess = (dispatch, user) => {
  Actions.productList();
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};
