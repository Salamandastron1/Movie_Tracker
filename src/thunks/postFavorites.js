import { toggleFavorite } from '../Action-creators/toggleFavorite';
import { errorReceived } from '../Action-creators/errorReceived';

export const postFavorites = (userId, movie) => {
  return dispatch => {
    dispatch(toggleFavorite(movie.id));
  }
}