const toursMiddleware = store => next => action => {
    const result = next(action);
    if (action.type === 'app/posts/UPDATE_TOURS') {
        const state = store.getState();
        localStorage.setItem('tours', JSON.stringify(state.tours.data));
    }
    return result;
}
export default toursMiddleware;