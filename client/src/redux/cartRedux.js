// initialState
import { v4 as uuidv4 } from 'uuid';

const initialStateCart = {
    order: {
        id: '',
        orderItems: [],
        firstName: '',
        surname: '',
        address: '',
        city: '',
        country: '',
    },
};

// selectors
//export const getAllCart = state => state.cart.data;
//export const getTourByURL = ( { cart }, tourURL) => cart.data.find(tour => tour.url === tourURL)

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const ADD_TO_CART = createActionName('ADD_TO_CART')

// action creator
export const addToCart = payload => ({type: ADD_TO_CART, payload});


const CartReducer = (state = initialStateCart, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const existingItemIndex = state.order.orderItems.findIndex(item => item.tourId === action.payload.tourId);
            if (existingItemIndex >= 0 ) {
                const updatedOrder = state.order.orderItems.map((item, index) => 
                    index === existingItemIndex
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ) 
                return {
                    ...state,
                    order: { ...state.order, orderItems: updatedOrder}
                }
            } else {
                const newOrderItem = {id: uuidv4(), ...action.payload, quantity: 1};
                return {
                    ...state,
                    order: { ...state.order, orderItems: [...state.order.orderItems, newOrderItem]}
                }
            }
        default:
          return state;
      }; 
}

export default CartReducer;