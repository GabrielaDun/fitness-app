// initialState
import { v4 as uuidv4 } from 'uuid';
import { getAllTours } from './toursRedux';

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
export const getAllCart = state => state.cart.order.orderItems;

export const getAllCartWithTour = state => {
    const cartItem = state.cart.order.orderItems;
    const tours = getAllTours(state);

    if (!cartItem || !tours) {
        return []; 
    }

    return cartItem.map(item => {
        const tourDetails = tours.find(tour => tour.id === item.tourId);
        return { ...item, tourDetails};
    });
}

//export const getTourByURL = ( { cart }, tourURL) => cart.data.find(tour => tour.url === tourURL)

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const ADD_TO_CART = createActionName('ADD_TO_CART')

// action creator
export const addToCart = payload => ({type: ADD_TO_CART, payload});


const CartReducer = (state = initialStateCart, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const existingItem = state.order.orderItems.find(item => item.tourId === action.payload.tourId);
            if (existingItem ) {
                const {quantity} = action.payload;
                const updatedOrder = state.order.orderItems.map(item => 
                    item === existingItem
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                ) 
                return {
                    ...state,
                    order: { ...state.order, orderItems: updatedOrder}
                }
            } else {
                const orderId = uuidv4()
                const orderItemId = uuidv4();
                const { tourId, description, quantity} = action.payload;
                const newOrderItem = {
                    id: orderItemId, 
                    tourId: tourId, 
                    description: description, 
                    quantity: quantity, 
                    orderId: orderId
                };
                return {
                    ...state,
                    order: { 
                        ...state.order, 
                        id: orderId,
                        orderItems: [...state.order.orderItems, newOrderItem]}
                }
            }
        default:
          return state;
      }; 
}

export default CartReducer;