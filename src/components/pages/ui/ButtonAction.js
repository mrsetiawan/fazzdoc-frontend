import React from 'react';
import Button from '@material-ui/core/Button';

function ButtonAction(props) {
  return (
    <Button variant={props.variant} color={props.color} startIcon={props.startIcon}>
      {props.children}
    </Button>
  )
}

export default ButtonAction;
