import React, { Component } from 'react';
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import Main from './components/Main';
import Error from './components/404';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand navbar-light bg-faded" id="nav" />
        <div id="reserve_title" />
        <div className="row head1">
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="row" id="top_row">
              <br />
              <br />
            </div>
            <div className="row" />
          </div>
          <div className="col-md-6">
            <div id="main_form">
              <Main />
            </div>
          </div>
          <div className="col-md-3">
            <div className="row" id="top_row">
              <br />
              <br />
            </div>
            <div className="row" />
          </div>
        </div>
      </>
    );
  }
}

const FinalApp = props => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
};
export default App;
