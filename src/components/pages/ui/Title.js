import React from 'react';
import { Typography } from '@material-ui/core';

function Title(props) {

  return (
    <Typography variant={props.variant}>
      {props.children}
    </Typography>
  )
}

export default Title;
