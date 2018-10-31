import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer'
import { idReducer } from './idReducer'
import { errorReducer } from './errorReducer'
import { nameReducer } from './nameReducer'
import { favoritesReducer } from './favoritesReducer'



const rootReducer = combineReducers({
  movies: moviesReducer,
  id: idReducer,
  name: nameReducer,
  error: errorReducer,
  favorites: favoritesReducer 
})

export default rootReducer;