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
    id: movie.id,
    vote_average: movie.vote_average,
  }))
}

const makeOptions = (user) => {
  let options;

  if (user.name) {
    const { email , password , name } = user;
    options = {
      method: 'POST',
      body: JSON.stringify({
        name,
        password,
        email,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    }
  } else {
    const { email, password } = user;
    options = {
      method: 'POST',
      body: JSON.stringify({
        password,
        email
        }),
      headers: {
        'Content-Type': 'application/json'
      },
    }
  }

  return options;
}

export const getUser = async (user) => {
  const url = 'http://localhost:3000/api/users';
  const options = makeOptions(user);
  const response = await fetch(url, options);
  if(response.ok) {
    const existingUser = await response.json();
    const { name, id } = existingUser.data;
    return { name, id};  
  } else {
    throw new Error('Email and Password do not match.')  
  }
}


export const addUser = async (user) => {
  const url = 'http://localhost:3000/api/users/new';
  const options = makeOptions(user);
  const response = await fetch(url, options);

  if (response.ok) {
    const newUser = await response.json();

    return {
      name: user.name,
      id: newUser.id
    };
  } else {
    throw new Error('Email has already been used.');
  } 
}

export const loginUser = async (user) => {
  let currentUser;
  if (user.name) {
   currentUser = await addUser(user);
  } else {
   currentUser = await getUser(user);
  }
  return currentUser;
}

export const getFavorites = async (id) => {
  const url = `http://localhost:3000/api/users/${id}/favorites`
  const response = await fetch(url);
  if(response.ok) {
    const favoriteMovies = await response.json();
    return favoriteMovies.data;
  }
}
