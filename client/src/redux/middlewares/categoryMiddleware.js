// cartMiddleware.js
const categoryMiddleware = store => next => action => {
    const result = next(action);
    const state = store.getState();
    localStorage.setItem('category', JSON.stringify(state.cart));
    return result;
}

export default categoryMiddleware;
