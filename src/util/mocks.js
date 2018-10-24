import key from './API.js'


const window.fetch = jest.fn(() => {
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockResults)
    });
  }
)

const mockResults = { 
  results: [
    { 
      poster_path: '2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
      title: 'Venom',
      vote_average: 5 ,
    }
  ] 
}

const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`;