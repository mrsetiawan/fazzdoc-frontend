import React, { Component } from 'react'
import Wrapper from '../ui/Wrapper'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import ButtonAction from '../ui/ButtonAction'
import { Typography } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
  control: {
    padding: 15
  },
  inputCenter: {
    textAlign: "center",
  },
  buttonWrap: {
    padding: 30,
    float: 'right'
  }
};

class Form extends Component {

  render() {
    const { classes } = this.props;

    return (
      <Wrapper className={classes.root}>
        <Grid container justify='center' spacing={3}>
          <Grid item xs={12}>
            <Typography variant='h3' align='center'>
              Entry Doctor
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <form>
              <Paper elevation={3} style={{ padding: 15 }}>
                <TextField
                  id="standard-full-width"
                  label="Nama Dokter"
                  style={{ margin: 8 }}
                  placeholder="Placeholder"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="standard-full-width"
                  label="No Telepon"
                  style={{ margin: 8 }}
                  placeholder="No Telepon"
                  fullWidth
                  margin="normal"
                  type='number'
                />
                <TextField
                  id="standard-full-width"
                  label="Spesialis"
                  style={{ margin: 8 }}
                  placeholder="Placeholder"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="standard-full-width"
                  label="Alamat"
                  style={{ margin: 8 }}
                  placeholder="Placeholder"
                  fullWidth
                  margin="normal"
                />

                <ButtonAction variant='contained' color='primary'>
                  Submit
                </ButtonAction> &nbsp;&nbsp;
                <ButtonAction variant='contained' color='secondary'>
                  Cancel
                </ButtonAction>
              </Paper>
            </form>
          </Grid>
        </Grid>
      </Wrapper>
    )
  }
}

export default withStyles(styles)(Form)