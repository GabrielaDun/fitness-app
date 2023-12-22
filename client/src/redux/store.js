import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import toursReducer from './toursRedux';
import CartReducer from './cartRedux';
import { initialStateCart } from './cartRedux';
import { initialStateTours } from './toursRedux';
import { initialStateCategories } from './categoryRedux'
import categoryMiddleware from './middlewares/categoryMiddleware';
import categoriesReducer from './categoryRedux';
import toursMiddleware from './middlewares/tourMiddleware';
import cartMiddleware from './middlewares/cartMiddlewares';

const subreducers = {
  tours: toursReducer,
  cart: CartReducer,
  categories: categoriesReducer,
}
const reducer = combineReducers(subreducers)

const persistedCartState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : null;
const persistedToursState = localStorage.getItem('tours') ? JSON.parse(localStorage.getItem('tours')) : null;
const persistedCategoriesState = localStorage.getItem('tours') ? JSON.parse(localStorage.getItem('tours')) : null;

const initialState = {
  cart: persistedCartState || initialStateCart,
  tours: persistedToursState ? { ...initialStateTours, data: persistedToursState, loading: false } : initialStateTours,
  categories: persistedCategoriesState ? { ...initialStateCategories, data: persistedCategoriesState, loading: false }: initialStateCategories,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers (
  applyMiddleware(toursMiddleware),
  applyMiddleware(cartMiddleware),
  applyMiddleware(categoryMiddleware),
)

const store = createStore(
    reducer,
    initialState,
    enhancer
  );
  

export default store;