import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import toursReducer from './toursRedux';
import CartReducer from './cartRedux';
import cartMiddleware from './cartMiddlewares';
import toursMiddleware from './tourMiddleware';
import { initialStateCart } from './cartRedux';
import { initialStateTours } from './toursRedux';

const subreducers = {
  tours: toursReducer,
  cart: CartReducer,
}
const reducer = combineReducers(subreducers)

const persistedCartState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : null;
const persistedToursState = localStorage.getItem('tours') ? JSON.parse(localStorage.getItem('tours')) : null;

const initialState = {
  cart: persistedCartState || initialStateCart,
  tours: persistedToursState ? { ...initialStateTours, data: persistedToursState, loading: false } : initialStateTours
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers (
  applyMiddleware(toursMiddleware),
  applyMiddleware(cartMiddleware),
)

const store = createStore(
    reducer,
    initialState,
    enhancer
  );
  

export default store;