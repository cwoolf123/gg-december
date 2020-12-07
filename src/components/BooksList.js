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

const BooksList = ({ list }) => {

  const classes = useStyles();
  return (
    <>
    <List className={classes.root}>
      {(list || []).map((item) => 
      <ListItem className={classes.list_item} key={item.id}>
        <ListItemAvatar>
          <Avatar>
            <BookIcon />
          </Avatar>
        </ListItemAvatar>
          <ListItemText primary={item.book_title} secondary={
          <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              Author(s): {item.book_author}
              </Typography>
              <Divider></Divider>
              <Typography  variant="body2">Location: {item.book_publication_city}, {item.book_publication_country} </Typography>
              <Typography  variant="body2">Year: {item.book_publication_year}</Typography>
              <Typography  variant="body2">Pages: {item.book_pages}</Typography>
            </React.Fragment>} />
      </ListItem>
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
    padding: 5
  },
  list_item: {
    width: '100%',
    maxWidth: '50%',
    backgroundColor: theme.palette.background.paper,
    marginTop: 10,
    left: '50%',
    transform: 'translate(-50% , 0%)',
    border: '1px solid #eaeaea',
    padding: 5
  },
}));

export default BooksList;
