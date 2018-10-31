export const moviesReducer = (state = [], action) => {
  switch(action.type) {
      case 'SET_MOST_RECENT':
        return [...state, ...action.movies]
      case 'TOGGLE_FAVORITE':
        return state.map(movie => {
          if(movie.id !== action.id) {
            return movie
          } else {
            return Object.assign({}, movie, {favorited: !movie.favorited})
          }
        })
      case 'LOG_OUT':
        return state.map(movie => {
          return Object.assign({}, movie, {favorited: false})
        });
      default:
        return state
  }
}
