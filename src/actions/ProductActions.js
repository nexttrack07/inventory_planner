import {
  ADD_PRODUCT,
  PRODUCT_ADDED,
  PRODUCT_FETCH_SUCCESS,
  LOGIN_USER_SUCCESS
} from "./types";
import firebase from "firebase";
import { Actions } from "react-native-router-flux";

export const addProduct = ({ prop, value }) => {
  return {
    type: ADD_PRODUCT,
    payload: { prop, value }
  };
};

export const productsFetch = () => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/products`)
      .on("value", snapshot => {
        dispatch({ type: PRODUCT_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const uploadProduct = ({ product, cost, quantity, leadTime, sales }) => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`users/${currentUser.uid}/products`)
      .push({
        product,
        cost,
        quantity,
        sales,
        leadTime
      })
      .then(() => {
        dispatch({ type: PRODUCT_ADDED });
        Actions.productList();
      });
  };
};

export const productDelete = uid => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase
      .database()
      .ref(`users/${currentUser.uid}/products/${uid}`)
      .remove();
  };
};
