export const moviesReducer = (state = [], action) => {
  debugger;
  switch(action.type) {
      case 'SET_MOST_RECENT':
        return [...state, ...action.movies]
      default:
        return state
  }
}
