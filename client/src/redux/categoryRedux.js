import { API_URL } from '../config';

export const initialStateCategories = {
    data: [],
    loading: true
};

// selectors
export const getAllCategories = state => state.categories.data;
export const getCategoryLoading =  state => state.categories.loading;
export const getCategoryByURL = ( { categories }, categoryURL) => categories.data.find(category => category.url === categoryURL)
export const getCategoryById = ( { categories }, categoryId) => categories.data.find(category => category.id === categoryId)
export const getFourCategories = state => state.categories.data.slice(0, 4);

// actions
const createActionName = actionName => `app/categories/${actionName}`;
const UPDATE_CATEGORIES = createActionName('UPDATE_CATEGORIES')

// action creator
export const updateCategories = payload => ({type: UPDATE_CATEGORIES, payload});

export const fetchCategories = (dispatch) => {
    fetch(`${API_URL}/categories`)
    .then(res => res.json())
    .then(categories => dispatch(updateCategories(categories))) 
  };

const categoriesReducer = (statePart = initialStateCategories, action) => {
    switch (action.type) {
        case UPDATE_CATEGORIES:
            return {loading: false, data: [...action.payload]}
        default:
          return statePart;
      }; 
}

export default categoriesReducer;