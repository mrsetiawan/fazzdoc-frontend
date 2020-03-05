import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import "./wrapper.css";

export default class NotFound extends Component {
  render() {
    return (
      <Container maxWidth="lg" className="wrapper">
        <h1>Fazzdoc Site Error - Page Not Found</h1>
        We were unable to find that page. Please go to the home page by clicking
        the link below.
        <h3>
          <Link to="/">Home Page</Link>
        </h3>
      </Container>
    );
  }
}
