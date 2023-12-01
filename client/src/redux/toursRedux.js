import { API_URL } from '../config';

export const initialStateTours = {
    data: [],
    loading: true
};

// selectors
export const getAllTours = state => state.tours.data;
export const getTourLoading =  state => state.tours.loading;
export const getTourByURL = ( { tours }, tourURL) => tours.data.find(tour => tour.url === tourURL)
export const getTourById = ( { tours }, tourId) => tours.data.find(tour => tour.id === tourId)
export const getFourTours = state => state.tours.data.slice(0, 4);

// actions
const createActionName = actionName => `app/tours/${actionName}`;
const UPDATE_TOURS = createActionName('UPDATE_TOURS')

// action creator
export const updateTours = payload => ({type: UPDATE_TOURS, payload});

export const fetchTours = (dispatch) => {
    fetch(`${API_URL}/app/tours`)
    .then(res => res.json())
    .then(tours => dispatch(updateTours(tours))) 
  };

const toursReducer = (statePart = initialStateTours, action) => {
    switch (action.type) {
        case UPDATE_TOURS:
            return {loading: false, data: [...action.payload]}
        default:
          return statePart;
      }; 
}

export default toursReducer;