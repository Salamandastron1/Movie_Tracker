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

export const mockState = { 
    movies: [
      { 
        poster_path: '2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
        title: 'Venom',
        vote_average: 5 ,
      }
    ],
    filter: 'favorites' 
  };

export const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`;

