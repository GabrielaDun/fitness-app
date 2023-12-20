// initialState
import { v4 as uuidv4 } from 'uuid';
import { getAllTours } from './toursRedux';

export const initialStateCart = {
    order: {
        id: '',
        orderItems: [],
        firstName: '',
        surname: '',
        address: '',
        city: '',
        country: '',
    },
    loading: true,
    
};

// selectors
export const getAllCart = state => state.cart.order.orderItems;
export const getAllOrder = state => state.cart.order;

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
export const getOrderByTourId = ( state, tourId) => {
    const orders = state.cart.order.orderItems;
    if(!orders) return undefined
    return orders.find(o => o.tourId === tourId)
}

export const getTotalCartItems = state => 
    state.cart.order.orderItems.reduce((total, orderItem) => total + orderItem.quantity, 0)

export const getOrderItemDescription = (state, orderItemsId) => {
    const orderItems = state.cart.order.orderItems.find(item => item.id === orderItemsId)
    return orderItems ? orderItems.description : '';
}


// actions
const createActionName = actionName => `app/posts/${actionName}`;

const ADD_TO_CART = createActionName('ADD_TO_CART')
const CHANGE_CART_AMOUNT = createActionName('CHANGE_CART_AMOUNT')
const ADD_DESCRIPTION = createActionName('ADD_DESCRIPTION')
const DELETE_ORDER_ITEM = createActionName('DELETE_ORDER_ITEM')
const RESET_CART = createActionName('RESET_CART')

// action creator
export const addToCart = payload => ({type: ADD_TO_CART, payload});
export const changeCartAmount = payload => ({type: CHANGE_CART_AMOUNT, payload})
export const addDesciption = payload => ({type: ADD_DESCRIPTION, payload})
export const deleteOrderItem = payload => ({type: DELETE_ORDER_ITEM, payload })
export const resetCart = payload => ({ type: RESET_CART, payload})


const CartReducer = (state = initialStateCart, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const existingItem = state.order.orderItems.find(item => item.tourId === action.payload.tourId);
            if (existingItem ) {
                const { quantity } = action.payload;
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
                const { tourId, description, quantity} = action.payload;
                const newOrderItem = {
                    id: uuidv4(),
                    tourId: tourId, 
                    description: description, 
                    quantity: quantity, 
                    orderId: state.order.id || uuidv4()
                };
                return {
                    ...state,
                    order: { 
                        ...state.order, 
                        id: state.order.id || newOrderItem.orderId,
                        orderItems: [...state.order.orderItems, newOrderItem]}
                }
            }
        case CHANGE_CART_AMOUNT: {
            const {tourId, plusMinus } = action.payload;
            const updatedOrderItems = state.order.orderItems.map(item => {
                if(item.tourId === tourId) {
                    let newQuantity = item.quantity;
                    if(plusMinus === 'increase') {
                        newQuantity++;
                    } else if (plusMinus === 'decrease' && item.quantity > 1 ) {
                        newQuantity--;
                    }
                    return {...item, quantity: newQuantity}
                }
                 return item;
            });
            return {
                ...state,
                order: {
                    ...state.order,
                    orderItems: updatedOrderItems
                }
            };
        }
        case ADD_DESCRIPTION: {
            const {tourId, description} = action.payload;
            const updatedOrder = state.order.orderItems.map(item => {
                if(item.tourId === tourId) {
                    return {...item, description: description}
                }
                return item;
            })
            return {
                ...state,
                order: {
                    ...state.order,
                    orderItems: updatedOrder
                }
            }
        }
        case DELETE_ORDER_ITEM: {
            const { tourId } = action.payload;
            const updatedOrderItems = state.order.orderItems.filter(item => item.tourId !== tourId);
        
            if (state.order.orderItems.length === 1 && state.order.orderItems[0].tourId === tourId) {
                return {
                    ...state,
                    order: {
                        ...state.order,
                        id: '', 
                        orderItems: updatedOrderItems
                    }
                };
            } else {
                return {
                    ...state,
                    order: {
                        ...state.order,
                        orderItems: updatedOrderItems
                    }
                };
            }
        }
        case RESET_CART: 
        return initialStateCart;
            
        default:
          return state;
      }; 
}

export default CartReducer;