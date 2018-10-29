export const errorReducer = (state = '', action) => {
  debugger;
  switch(action.type) {
    case 'ERROR_RECEIVED': 
      return action.error
    default:
      return state
  }
}