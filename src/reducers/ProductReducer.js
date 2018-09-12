import {
  ADD_PRODUCT,
  PRODUCT_ADDED,
  PRODUCT_FETCH_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
  product: "",
  quantity: "",
  sales: "",
  leadTime: "",
  cost: "",
  products: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, [action.payload.prop]: action.payload.value };
    case PRODUCT_ADDED:
      return {
        ...state,
        product: "",
        quantity: "",
        sales: "",
        leadTime: "",
        cost: ""
      };
    case PRODUCT_FETCH_SUCCESS:
      console.log(action.payload);
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
