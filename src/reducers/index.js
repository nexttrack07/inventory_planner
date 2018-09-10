import { combineReducers } from 'redux';
import ProductReducer from './ProductReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
    product: ProductReducer,
    auth: AuthReducer
})