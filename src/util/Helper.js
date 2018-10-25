import { key } from './key.js';

export const getMovieData = async () => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`)
    const data = await response.json()
  
    return data
  } catch (e) {
    return e
  }
}