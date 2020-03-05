import React from 'react';
import Container from '@material-ui/core/Container';

function Wrapper(props) {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default Wrapper;
