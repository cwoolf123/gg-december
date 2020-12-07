import React, { useState } from 'react';
import { useSelector, connect } from "react-redux";
import { updateSearch, searchBooks } from "../_actions/";

//Components
import BooksList from './BooksList';

//Material-UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Pagination from '@material-ui/lab/Pagination';

function SearchBar({ onSearchUpdate, onSearchBooks }) {

    const [term, setTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const itemsPerPageArray = [ 5, 10, 20, 40, 50, 100 ];
    const classes = useStyles();

    var text = useSelector(state => state.text);

    var list = useSelector(state => state.search.data.books);
    var count = useSelector(state => state.search.data.count);
    var page = useSelector(state => state.search.page);
    var itemsPerPage = useSelector(state => state.search.itemsPerPage);

    const updateSearch = (e) => {
      setTerm({term: e.target.value})
      onSearchUpdate(e.target.value);
    };
    
    const searchText = async (e) => {
      setIsLoading(true)
      const res = await onSearchBooks(term.term, 1, Number(itemsPerPage));
      if (!res) {
      } else {
        setIsLoading(false)
      }
    };

    const handlePageChange = async (event, value) => {
      setIsLoading(true)
      const res = await onSearchBooks(term.term, Number(value), Number(itemsPerPage));
      if (!res) {
      } else {
        setIsLoading(false)
      }
    };

    const handlePageItemsChange = async (event) => {
      setIsLoading(true)
      const res = await onSearchBooks(term.term, 1, Number(event.target.value));
      if (!res) {
      } else {
        setIsLoading(false)
      }
    };

  return (
    <div className={classes.root}>

      {/* MENU SEARCH BAR HEADER */}
      <AppBar position="static">
        <Toolbar>

          {/* MENU BUTTON ICON */}
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer" >
            <MenuIcon />
          </IconButton>
          
            {/* SEARCH BANNER TITLE */}
            <Typography className={classes.title} variant="h6" noWrap>
             Books API Search
            </Typography>

              {/* SEARCH BAR */}
              <div className={classes.search}>

                  {/* SEARCH ICON */}
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>

                    {/* SEARCH INPUT */}
                    <InputBase
                      placeholder="Search…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ 'aria-label': 'search' }}
                      onChange={e => updateSearch(e)}
                    />
                  </div>

                <div>

            {/* SEARCH BUTTON */}
            <Button id="search-button" variant="contained" color="default" onClick={searchText}>Search</Button>

          </div>
        </Toolbar>
      </AppBar>
      
      {/* SEARCH RESULTS BODY */}
      <div>

      {/* LOADING... */}
      {isLoading && count !== 0 &&
        <div className="loader-container">
          <div className="loader">
          </div>
            <p>Loading data...</p>
        </div>
      }
      
      {/* SELECT NUMBER OF SEARCH ITEMS */}
      {!isLoading && count !== 0 &&
      <div className={classes.selector}> 
        <p>Items per Page: &nbsp; </p>
          <select className={!isLoading?  "active" : "inactive"} onChange={handlePageItemsChange} value={itemsPerPage}>
            {itemsPerPageArray.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>}

      {/* SEARCH RESULTS */}
      {!isLoading &&
        <BooksList list={list} />}

      
      {/* PAGINATION */}
      {!isLoading && count !== 0 &&
        <Pagination
        className={classes.pagination}
        count={ Math.ceil(Number(count / itemsPerPage)) }
        page={page}
        siblingCount={1}
        boundaryCount={1}
        variant="outlined"
        shape="rounded"
        color="primary"
        onChange={handlePageChange}
      />}

      </div>
    </div>
  );
}

// CSS - * styles are derrived from Matrial-UI Theme *
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 0,
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: 10,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  selector: {
      position: 'relative',
      display: 'inline-flex',
      height: '1rem',
      width: 'auto',
      padding: 1,
      alignItems: 'baseline',
      marginLeft: '50%',
      [theme.breakpoints.down('sm')]: {
      width: '50vw',
      padding: 10,
      alignItems: 'baseline',
      marginLeft: '25vw',
      marginTop: 20,
    },
  },
  pagination: {
      width: '50%',
      maxWidth: '50%',
      backgroundColor: theme.palette.background.paper,
      marginTop: 10,
      marginLeft: '50%',
      transform: 'translate(-50% , 0%)',
      padding: 5
  },
}));

const mapStatetoProps = (state) => {
  return { num: state.num, data: state.data, error: state.error, page: state.page, text: state.text, itemsPerPage: state.itemsPerPage, }
}

const mapDispatchprops = (dispatch) => {
  return { 
    onSearchBooks: ( text, page, itemsPerPage ) => dispatch(searchBooks(text, page, itemsPerPage)),
    onSearchUpdate: ( text ) => dispatch(updateSearch(text)), }
}

export default connect(mapStatetoProps, mapDispatchprops)(SearchBar);