import * as API from './Helper.js';
import * as mock from './mocks.js';

describe('API', () => {
  describe('getMovieData', () => {

    beforeEach(() => {
      window.fetch = jest.fn(() => {
        mock.fetch()
      })
    })

    it('should call fetch with the correct params', async () => {
      await API.getMovieData()
      expect(window.fetch).toHaveBeenCalledWith(mock.url)
    });

    it('should return data in the correct format', async () => {

    });

    it('should throw an error if the status is not ok', async () => {

    });
  });
});