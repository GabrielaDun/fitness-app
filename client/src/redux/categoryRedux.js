import { API_URL } from '../config';

export const initialStateCategories = {
    data: [],
    filter: '',
    loading: true
};

// selectors
export const getAllCategories = state => state.categories.data;
export const getCategoryById = ( { categories }, categoryId) => categories.data.find(category => category.id === categoryId)
export const getCurrectFilter = state => state.categories.filter;

// actions
const createActionName = actionName => `app/categories/${actionName}`;
const UPDATE_CATEGORIES = createActionName('UPDATE_CATEGORIES')
const UPDATE_FILTER = createActionName('UPDATE_FILTER')

// action creator
export const updateCategories = payload => ({type: UPDATE_CATEGORIES, payload});
export const updateFilter = payload => ({type: UPDATE_FILTER, payload});

export const fetchCategories = (dispatch) => {
    fetch(`${API_URL}/categories`)
    .then(res => res.json())
    .then(categories => dispatch(updateCategories(categories))) 
  };

const categoriesReducer = (statePart = initialStateCategories, action) => {
    switch (action.type) {
        case UPDATE_CATEGORIES:
            return {
                ...statePart,
                loading: false, 
                data: [...action.payload]
            };
        case UPDATE_FILTER: 
            return {
                ...statePart,
                loading: false, 
                filter: action.payload  }
        default:
          return statePart;
      }; 
}

export default categoriesReducer;