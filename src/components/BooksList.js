import React from 'react';

//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import BookIcon from '@material-ui/icons/BookOutlined';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Block } from '@material-ui/icons';

const BooksList = ({ list }) => {

  const classes = useStyles();
  return (
    <>
      <List className={classes.root}>
        {(list || []).map((item) => 
        <div className={classes.list_item_wrapper} key={item.id}>
          <ListItem className={classes.list_item}>
            <ListItemAvatar>
              <Avatar>
                <BookIcon />
              </Avatar>
            </ListItemAvatar>
              {/* TITLE & AUTHOR */}
              <ListItemText primary={item.book_title} secondary={

                <Typography
                component="span"
                variant="body2"
                color="textPrimary"
                >
                  <strong>Author(s):</strong> {item.book_author}
                </Typography>

              } />
          </ListItem>
          <Divider></Divider>
          {/* LOCATION, YEAR, PAGES */}
          <Typography className={classes.subText} variant="body2"><strong>Location:</strong> {item.book_publication_city}, {item.book_publication_country}&nbsp;</Typography>
          <Typography className={classes.subText} variant="body2"><strong>Year:</strong> {item.book_publication_year}&nbsp;</Typography>
          <Typography className={classes.subText} variant="body2"><strong>Pages:</strong> {item.book_pages}</Typography>
        </div>
      )}
      </List>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
    marginTop: 10,
    left: '50%',
    transform: 'translate(-50% , 0%)',
    padding: 15,
    textAlign: 'center',
  },
  list_item_wrapper: {
    width: '100%',
    maxWidth: '50%',
    backgroundColor: theme.palette.background.paper,
    marginTop: 10,
    marginLeft: '50%',
    transform: 'translate(-50% , 0%)', 
    border: '1px solid #eaeaea',
    padding: 15,
    textAlign: 'center',
  },
  list_item: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
    marginTop: 10,
    padding: 15,
    textAlign: 'center',
  },
  subText: {
    display: 'inline-block',
    width: '100%',
    maxWidth: '70%',
    backgroundColor: theme.palette.background.paper,
    marginTop: 10,
    color: '#464646',
    textAlign: 'center',
  }
}));

export default BooksList;
