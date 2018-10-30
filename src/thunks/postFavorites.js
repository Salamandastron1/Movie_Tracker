import { toggleFavorite } from '../Action-creators/toggleFavorite';
import { errorReceived } from '../Action-creators/errorReceived';

export const postFavorites = (userId, movie) => {
  const url = 'http://localhost:3000/api/users/favorites/new';
  return async (dispatch) => {
    const response = await fetch(url)
    if(response.ok) {
      dispatch(toggleFavorite(movie.id));
    } else {
      dispatch(errorReceived('Favorite not added, 500 error'))
    }
  }
}