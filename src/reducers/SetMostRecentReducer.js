export const SetMostRecentReducer = (state = [], action) => {
  switch(action.type) {
      case 'SET_MOST_RECENT':
        return [...state, action.movies  ]
      default:
        return state
  }
}