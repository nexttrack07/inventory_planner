import { ADD_PRODUCT } from './types';
import firebase from 'firebase';

export const addProduct = ({ prop, value }) => {
    return {
        type: ADD_PRODUCT,
        payload: { prop, value }
    }
}

export const productsFetch = () => {
    return (dispatch) => {
        console.log(dispatch);
    }
}