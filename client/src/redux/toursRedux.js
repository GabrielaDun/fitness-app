import { API_URL } from '../config';

// selectors
export const getAllTours = state => state.tours.data;
export const getTourByURL = ( { tours }, tourURL) => tours.data.find(tour => tour.url === tourURL)

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const UPDATE_TOURS = createActionName('UPDATE_POST')

// action creator
export const updateTours = payload => ({type: UPDATE_TOURS, payload});

export const fetchTours = (dispatch) => {
    fetch(`${API_URL}/app/tours`)
    .then(res => res.json())
    .then(tours => dispatch(updateTours(tours))) 
  };

const toursReducer = (statePart = [], action) => {
    switch (action.type) {
        case UPDATE_TOURS:
            return {loading: false, data: [...action.payload]}
        default:
          return statePart;
      }; 
}

export default toursReducer;