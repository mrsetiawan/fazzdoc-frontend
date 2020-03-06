import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Wrapper(props) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container spacing={3}>
        <Grid container spacing={3}>
          {props.children}
        </Grid>
      </Container>
    </div>
  )
}

export default Wrapper;
