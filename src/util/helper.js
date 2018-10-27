import { key } from './key.js';

export const getMovieData = async () => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`)
    const data = await response.json()
  
    return cleanMovieData(data)
  } catch (e) {
    return e
  }
}

const cleanMovieData = (data) => {
  return data.results.map( movie => ({ 
    title: movie.title,
    poster_path: movie.poster_path,
    overview: movie.overview,
    release_date: movie.release_date,
    favorited: false,
  }))
}

export const getUser = async (user) => {
  const { email, password } = user;
  const optionsObject = {
    method: 'POST',
    body: JSON.stringify({
        email, 
        password
      }),
    headers: {
      'Content-Type': 'application/json'
    },
  }
  
}
