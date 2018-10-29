import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer'
import { idReducer } from './idReducer'
import { errorReducer } from './errorReducer'
import { nameReducer } from './nameReducer'


const rootReducer = combineReducers({
  movies: moviesReducer,
  id: idReducer,
  name: nameReducer,
  error: errorReducer,
})

export default rootReducer;