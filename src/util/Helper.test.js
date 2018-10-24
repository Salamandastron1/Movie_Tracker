import * as API from './Helper.js';
import * as mock from './mocks.js';

describe('API', () => {
  describe('getMovieData', () => {

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mock.mockResults)
      }))
    })

    it('should call fetch with the correct params', async () => {

      await API.getMovieData()
      expect(window.fetch).toHaveBeenCalledWith(mock.url)
    });

    it('should return data in the correct format', async () => {
      const expected = await API.getMovieData()
      expect(await API.getMovieData()).toEqual(expected)
    });

    it('should throw an error if the status is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject({
          ok: false
        }))
      const expected = { ok: false}


      expect(await API.getMovieData()).toEqual(expected)
    });
  });
});