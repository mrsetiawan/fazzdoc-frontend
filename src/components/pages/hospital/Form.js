import React, { Component } from 'react'
import Wrapper from '../ui/Wrapper'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import ButtonAction from '../ui/ButtonAction'
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'

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

  state = {
    rs: '',
    tlp: '',
    alamat: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : [e.target.value]
    })
  }

  render() {
    const { classes } = this.props;
    
    const submitText = this.props.match.params.id ? 'Update' : 'Create'

    return (
      <Wrapper className={classes.root}>
        <Grid container justify='center' spacing={3}>
          <Grid item xs={12}>
            <Typography variant='h3' align='center'>
              {this.props.match.params.id ? 'Edit Hospital' : 'Entry Hospital'}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <form>
              <Paper elevation={3} style={{ padding: 15 }}>
                <TextField
                  id="standard-full-width"
                  label="Nama Rumah Sakit"
                  style={{ margin: 8 }}
                  placeholder="Nama Rumah Sakit"
                  fullWidth
                  margin="normal"
                  name='rs'
                  onChange={this.handleChange}
                />
                <TextField
                  id="standard-full-width"
                  label="No Telepon"
                  style={{ margin: 8 }}
                  placeholder="No Telepon"
                  fullWidth
                  margin="normal"
                  type='number'
                  name='tlp'
                  onChange={this.handleChange}
                />
                <TextField
                  id="standard-full-width"
                  label="Alamat"
                  style={{ margin: 8 }}
                  placeholder="Placeholder"
                  fullWidth
                  margin="normal"
                  name='alamat'
                  onChange={this.handleChange}
                />

                <ButtonAction variant='contained' color='primary'>
                  {submitText}
                </ButtonAction> &nbsp;&nbsp;
                <Link to='/'>
                  <ButtonAction variant='contained' color='secondary'>
                    Cancel
                  </ButtonAction>
                </Link>
              </Paper>
            </form>
          </Grid>
        </Grid>
      </Wrapper>
    )
  }
}

export default withStyles(styles)(Form)