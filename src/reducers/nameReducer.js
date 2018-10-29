export const nameReducer = (state = '', action) => {
  debugger;
  switch(action.type) {
    case 'GET_NAME':
      return action.name
    case 'LOG_OUT':
      return ''
    default:
      return state
  }
}