import {
    ADD_PRODUCT
} from '../actions/types';

const INITIAL_STATE = {
    product: '',
    quantity: 0,
    sales: 0,
    leadTime: 0,
    cost: 0
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_PRODUCT: 
            console.log(action.payload.prop);
            return { ...state, [action.payload.prop]: action.payload.value };
        default: 
            return state;
    }
}