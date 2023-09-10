import { combineReducers, createStore } from 'redux';
import initialState from './initialState';
import toursReducer from './toursRedux';

const subreducers = {
  tours: toursReducer,
}

const reducer = combineReducers(subreducers)

const store = createStore(
    reducer,
    initialState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  

export default store;