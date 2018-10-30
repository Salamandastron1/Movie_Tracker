import { toggleFavorite } from '../Action-creators/toggleFavorite';
import { errorReceived } from '../Action-creators/errorReceived';

export const postFavorites = (userId, movie, favorited) => {
  let url;
  let options;
  if(!favorited) {
    url = 'http://localhost:3000/api/users/favorites/new'
    options = {
      method: 'POST',
      body: JSON.stringify({
          movie_id: movie.id,
          user_id: userId,
          title: movie.title,
          poster_path: movie.poster_path, 
          release_date: movie.release_date,
          vote_average: movie.vote_average, 
          overview: movie.overview,
      }),
      headers: {
          'Content-Type': 'application/json'
      },
    }
  } else {
    url = `http://localhost:3000/api/users/${userId}/favorites/${movie.id}`
    options = {
      method: 'DELETE',
    }
  }
  return async (dispatch) => {
    const response = await fetch(url, options)
    if(response.ok) {
      dispatch(toggleFavorite(movie.id));
    } else {
      dispatch(errorReceived('Favorite not added, 500 error'))
    }
  }
}