import key from './API.js'

export const getMovieData = async (key) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`)
}