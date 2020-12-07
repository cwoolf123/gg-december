export const UPDATE_SEARCH = "UPDATE_SEARCH";
export const SEARCH = "SEARCH";
export const ERROR = "ERROR";

export const updateSearch = (text) => ({
    type: UPDATE_SEARCH,
    text: text, 
});

export const searchBooks = (text, page, itemsPerPage) => {

    return (dispatch) => {
        return fetch('http://nyx.vima.ekt.gr:3000/api/books', {
            method: 'POST',
            body: JSON.stringify({
              page: page,
              itemsPerPage: itemsPerPage,
              filters: [{ type: "all", values: [text] }],
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
        .then(response => response.json())
        .then(json => dispatch({ type: "SEARCH", data: json, text: text, page: page, itemsPerPage: itemsPerPage }))
        .catch(err => dispatch({ type: "ERROR", msg: "Unable to fetch data", err: err }))
    }

}