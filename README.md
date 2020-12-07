# gg-december #

# installation

Please install the node modules by running:

npm i

in the root directory.


# prod

to run the production build from a stati server please run the following commands (after installing the node modules)

  npm run build
  npm install -g serve
  serve -s build


# dev notes:
# start

to start the development server please run

npm run start


# test

to run a test please run

npm run test.

type 'a' afterwards to run all tests.


# application

this is a single page application based on the API provided for the test.

# SEARCH

To perform a search please use the Search Bar in the top right hand corner of the application by clicking on the text field.
If you are in Desktop then this should extend the search bar to which you can enter a search term.
By clicking 'SEARCH' the API call will be made and a loading state should be set. This loading state will be set to false upon a successfull return of data.
After the loading state has been removed the list of results should be presented in the white space below the nav bar header with additonal controls.

# Items Per Page

Once search results have loaded you may select how many items you wish to display from the drop down list.

# Pagination

Once search results have loaded there should be a pagination control along the bottom of the page.
Cick a number to load a different page of search results.