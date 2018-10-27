import * as API from './helper.js';
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

  describe('cleanMovieData', () => {

    it('Should return data in the correct format', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mock.mockResults)
      }))

      const expected = [{
        title: 'Venom',
        poster_path: '2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
        overview: 'This movie is RAD!',
        release_date: '2018-9-11',
        favorited: false,
      }]
      const result = await API.getMovieData();

      expect(expected).toEqual(result);

    })
  });
});