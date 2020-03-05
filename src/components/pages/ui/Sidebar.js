import React, { Component } from 'react'
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import {
  Face,
  DirectionsWalk,
  Apartment
} from "@material-ui/icons/";
import { 
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core/";
import { Link } from "react-router-dom";
import "./ui.css"

export default class Sidebar extends Component {
  render() {
    return (
      <SwipeableDrawer
        style={this.props.open ? { display: "block" } : { display: "none" }}
        onClose={this.props.handlerToggle}
        onOpen={this.props.handlerToggle}
        open={this.props.open}
      >
        <List className="list-menu">
          <ListItem button key="Hospital">
            <ListItemIcon>
              <Apartment />
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary="Hospital" />
            </Link>
          </ListItem>
          <ListItem button key="Doctor">
            <ListItemIcon>
              <Face />
            </ListItemIcon>
            <Link to="/doctor">
              <ListItemText primary="Doctor" />
            </Link>
          </ListItem>
          <ListItem button key="Patient">
            <ListItemIcon>
              <DirectionsWalk />
            </ListItemIcon>
            <Link to="/patient">
              <ListItemText primary="Patient" />
            </Link>
          </ListItem>
        </List>
      </SwipeableDrawer>
    )
  }
}
