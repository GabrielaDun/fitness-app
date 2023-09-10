// selectors

export const getTourByURL = ( { tours }, tourURL) => tours.find(tour => tour.url === tourURL)

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const UPDATE_TOURS = createActionName('UPDATE_POST')

// action creator
export const updateTours = payload => ({type: UPDATE_TOURS, payload});

export const fetchTours = (dispatch) => {
    fetch('http://localhost:3131/api/tours')
    .then(res => res.json())
    .then(tours => dispatch(updateTours(tours)))
  };

const toursReducer = (statePart = [], action) => {
    switch (action.type) {
        case UPDATE_TOURS:
            return [...action.payload]
        default:
          return statePart;
      }; 
}

export default toursReducer;