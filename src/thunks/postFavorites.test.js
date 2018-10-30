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
  let mockOptions;

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
    mockOptions = {
      method: 'POST',
      body: JSON.stringify({
        movie_id: 12345,
        user_id: 12,
        title: 'Blastoise',
        poster_path: 'movieposter.jpg', 
        release_date: '12-12-1212',
        vote_average: 5, 
        overview: 'In a world where turtles must take their protection into their own shells, one turtle resorts to cannons first.'
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    }
    mockDispatch = jest.fn();
    mockUserId = 12;
    mockMovie = {
      id: 12345,
      title: 'Blastoise',
      poster_path: 'movieposter.jpg', 
      release_date: '12-12-1212',
      vote_average: 5, 
      overview: 'In a world where turtles must take their protection into their own shells, one turtle resorts to cannons first.'
    }
  });

  it('should not call fetch or dispatch or toggleFavorite if the user is not signed in', () => {
    window.alert = jest.fn();
    const thunk = postFavorites(0, mockMovie, false);

    thunk(mockDispatch);

    expect(window.fetch).not.toHaveBeenCalled();
    expect(mockDispatch).not.toHaveBeenCalled();
    expect(toggleFavorite).not.toHaveBeenCalled();
    expect(errorReceived).not.toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Please log in to favorite a movie.');
  });

  it('should call dispatch with toggleFavorite', async () => {
    const thunk = postFavorites(mockUserId, mockMovie);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(toggleFavorite(12345));
  });

  it('should call fetch with the correct params if favorited is true', () => {
    const thunk = postFavorites(mockUserId ,mockMovie, true);

    mockUrl = `http://localhost:3000/api/users/${mockUserId}/favorites/${mockMovie.id}`
    thunk(mockDispatch);

    expect(window.fetch).toHaveBeenCalledWith(mockUrl, {method: 'DELETE'})
  });
  it('should call fetch with the correct params if favorited false', () => {
    const thunk = postFavorites(mockUserId ,mockMovie, false);

    thunk(mockDispatch);

    expect(window.fetch).toHaveBeenCalledWith(mockUrl, mockOptions)
  })
  it('should toggleFavorite if response is okay', () => {
    const thunk = postFavorites(mockUserId ,mockMovie, true); 

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