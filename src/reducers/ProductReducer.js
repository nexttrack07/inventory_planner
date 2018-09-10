import {
    ADD_PRODUCT, 
    PRODUCT_ADDED,
    PRODUCT_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    product: '',
    quantity: 0,
    sales: 0,
    leadTime: 0,
    cost: 0,
    products: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_PRODUCT: 
            return { ...state, [action.payload.prop]: action.payload.value };
        case PRODUCT_ADDED: 
            return { INITIAL_STATE };
        case PRODUCT_FETCH_SUCCESS:
            console.log(action.payload);
            return { ...state, products: action.payload };
        default: 
            return state;
    }
}