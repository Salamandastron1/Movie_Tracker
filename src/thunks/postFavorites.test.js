import { toggleFavorite } from '../Action-creators/toggleFavorite';
import { errorReceived } from '../Action-creators/errorReceived';
import { postFavorites } from './postFavorites';

jest.mock('../Action-creators/toggleFavorite');
jest.mock('../Action-creators/errorReceived');


describe('postFavorites', () => {
  let mockUrl;
  let mockDispatch;
  let mockUserId;
  let mockMovie;
  let mockResponse;

  beforeEach(() => {
    mockResponse = {
      id: 4, 
      message: 'Movie was added to favorites', 
      status: 'success'
    }
    window.fetch = jest.fn(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
        }
      )
    )
    mockUrl = 'http://localhost:3000/api/users/favorites/new';
    mockDispatch = jest.fn();
    mockUserId = 22;
    mockMovie = {
      id: 12345,
      title: 'Blastoise',
      poster_path: 'movieposter.jpg', 
      release_date: '12-12-1212',
      vote_average: 5, 
      overview: 'In a world where turtles must take their protection into their own shells, one turtle resorts to cannons first.'
    }
  });

  it('should call dispatch with toggleFavorite', async () => {
    const thunk = postFavorites(mockUserId, mockMovie);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(toggleFavorite(12345));
  });
  it('should call fetch with the correct params', () => {

    const thunk = postFavorites(mockUserId ,mockMovie);

    thunk(mockDispatch);

    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })
  it('should toggleFavorite if response is okay', () => {
    const thunk = postFavorites(mockUserId ,mockMovie); 

    thunk(mockDispatch)

    expect(toggleFavorite).toHaveBeenCalledWith(12345)
  })
  it('should throw error if response is not okay', async () => {
    window.fetch = jest.fn(() => Promise.resolve({
      ok: false,
      message: 'ya suck'
    }))

    const errorMessage = 'Favorite not added, 500 error'
    const thunk = postFavorites(mockUserId ,mockMovie); 

    await thunk(mockDispatch)

    expect(errorReceived).toHaveBeenCalledWith(errorMessage)
  })
});