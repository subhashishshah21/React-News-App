import './App.css';

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';

import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state = {
    progress: 10
  }
  setprogress = (progress)=>{
      this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/">
              <News setprogress={this.setprogress} key="home" pageSize={20} country="in" category="general" />
            </Route>
            <Route exact path="/general">
              <News setprogress={this.setprogress} key="general" pageSize={20} country="in" category="general" />
            </Route>
            <Route exact path="/business">
              <News setprogress={this.setprogress} key="business" pageSize={20} country="in" category="business" />
            </Route>
            <Route exact path="/entertainment">
              <News setprogress={this.setprogress} key="entertainment" pageSize={20} country="in" category="entertainment" />
            </Route>
            <Route exact path="/health">
              <News setprogress={this.setprogress} key="health" pageSize={20} country="in" category="health" />
            </Route>
            <Route exact path="/sports">
              <News setprogress={this.setprogress} key="sports" pageSize={20} country="in" category="sports" />
            </Route>
            <Route exact path="/science">
              <News setprogress={this.setprogress} key="science" pageSize={20} country="in" category="science" />
            </Route>
            <Route exact path="/technology">
              <News setprogress={this.setprogress} key="technology" pageSize={20} country="in" category="technology" />
            </Route>

          </Switch>

        </Router>
      </div>
    )
  }
}
