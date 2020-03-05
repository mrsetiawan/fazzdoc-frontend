import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Navbar from '../src/components/pages/ui/Navbar'
import Sidebar from '../src/components/pages/ui/Sidebar'
import Doctor from '../src/components/pages/doctor/List'
import Hospital from '../src/components/pages/hospital/List'
import Patient from '../src/components/pages/patient/List'
import NotFound from '../src/components/pages/NotFound'

export default class App extends Component {

  state = {
    open : false
  }

  handlerToggle = () => this.setState({open: !this.state.open})

  render() {
    return (
      <Router>
        <Navbar 
          handlerToggle={this.handlerToggle} 
        />
        <Sidebar
          open={this.state.open}
          handlerToggle={this.handlerToggle}
        />
        <main>
          <Switch>
            <Route path='/' exact component={Hospital} />
            <Route path='/doctor' component={Doctor} />
            <Route path='/patient' component={Patient} />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
      </Router>
    )
  }
}

