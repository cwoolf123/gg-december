
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import fetch from 'isomorphic-fetch';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// We would import these from actions in real case testing.
const success = data => ({
  type: 'SEARCH',
  data,
});

// Async action creator to fetch to-dos from an API
const fetchTodos = () => dispatch => fetch('https://localhost:8000/api/books')
  .then(response =>
    // console.log('This is the response body', response.json());
    // dispatch(success(response.json()));
    response.json(),
  )
  .then((json) => {
    dispatch(success(json));
  });

describe('async actions', () => {


  let store;
  const fetchSearchData = {
          books: [
              { id: 2086,
                book_author: [
                  "Author"
              ],
                book_title: 'Example',
                book_publication_year: 1529,
                book_publication_country: "Country",
                book_publication_city: "City",
                book_pages: 104
              },
            ],
        count: 1,
        };

  beforeEach(() => {
    store = mockStore({});
  });
  afterEach(() => {
    // clear all HTTP mocks after each test
    nock.cleanAll();
  });

  it('creates SEARCH response when mock search has been completed', () => {
    // Simulate a successful response
    nock('https://localhost:8000')
      .get('/api/books') // Route to catch and mock
      .reply(200, fetchSearchData); // Mock reponse code and data

    // Dispatch action to fetch to-dos
    return store.dispatch(fetchTodos())
      .then(() => { // return of async actions
        expect(store.getActions()).toMatchSnapshot();
      });
  });
});