const window.fetch = jest.fn(() => {
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(resultsArray)
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

const url = '';