import { toggleFavorite } from '../Action-creators/toggleFavorite';
import { errorReceived } from '../Action-creators/errorReceived';
import { postFavorites } from './postFavorites';

jest.mock();

describe('postFavorites', () => {
  let mockUrl;
  let mockDispatch;
  let mockUserId;
  let mockMovie;

  beforeEach(() => {
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

  it('should call dispatch with toggleFavorite', () => {
    const thunk = postFavorites(mockUserId, mockMovie);

    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(toggleFavorite(12345));
  });
});