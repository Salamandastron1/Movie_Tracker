import { key } from './key.js'

export const fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mock.mockResults)
      }))

export const mockResults = { 
  results: [
    { 
      poster_path: '2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
      title: 'Venom',
      vote_average: 5 ,
      overview: 'This movie is RAD!',
      release_date: '2018-9-11',
    }
  ] 
}

export const mockMovie = { 
      poster_path: '2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
      title: 'Venom',
      vote_average: 5 ,
      overview: 'This movie is RAD!',
      release_date: '2018-9-11',
    }

export const mockState = { 
    movies: [
      { 
        poster_path: '2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
        title: 'Venom',
        vote_average: 5 ,
        overview: 'This movie is RAD!',
        release_date: '2018-9-11',
      }
    ],
    filter: 'favorites' 
  };

export const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`;

export const userResponse = {
  data: {
    id: 2,
    name: 'Jessica',
    password: 'passw0rd',
    email: 'jerick999@gmail.com',
  },
  message: 'Retrieved ONE User',
  status: 'success',
}

export const user = {
  password: 'passw0rd',
  email: 'jerick999@gmail.com',
}

export const options = {
  method: 'POST',
  body: JSON.stringify({
  password: 'passw0rd',
  email: 'jerick999@gmail.com',
    }),
  headers: {
    'Content-Type': 'application/json'
  },
}

export const newUserResponse = {
  id: 4,
  message: "New user created",
  status: "success",
}

export const newUser = {
  name: 'Tim', 
  password: 'm30w',
  email: 'tag.garrity@gmail.com', 
}

export const newOptions = {
  method: 'POST',
  body: JSON.stringify({
  name: 'Tim',
  password: 'm30w',
  email: 'tag.garrity@gmail.com',
    }),
  headers: {
    'Content-Type': 'application/json'
  },
}