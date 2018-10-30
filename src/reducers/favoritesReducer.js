export const favoritesReducer = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
    case 'SHOW_ALL':
      return 'SHOW_ALL'
    case 'SHOW_FAVORITES':
      return 'SHOW_FAVORITES'
    default:
      return state
  }
}