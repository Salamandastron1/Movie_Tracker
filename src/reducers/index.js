import { combineReducers } from 'redux';
import { MoviesReducer } from './moviesReducer'


export const rootReducer = combineReducers({
  movies: MoviesReducer,
})