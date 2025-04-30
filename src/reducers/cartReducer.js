import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const updatedItems = [...state.items, action.payload];
      const updatedTotalAmount = state.totalAmount + action.payload.price;
      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case REMOVE_FROM_CART:
      const filteredItems = state.items.filter(item => item.id !== action.payload.id);
      const reducedTotalAmount = state.totalAmount - action.payload.price;
      return {
        ...state,
        items: filteredItems,
        totalAmount: reducedTotalAmount,
      };
    default:
      return state;
  }
};

export default cartReducer;
