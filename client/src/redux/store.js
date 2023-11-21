import { combineReducers, createStore } from 'redux';
import toursReducer from './toursRedux';
import CartReducer from './cartRedux';

const subreducers = {
  tours: toursReducer,
  cart: CartReducer,
}

const reducer = combineReducers(subreducers)

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  

export default store;