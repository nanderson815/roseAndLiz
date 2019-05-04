import React, { Component } from 'react';

import Home from './pages/Home';
import Shop from './pages/Shop';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';


class App extends Component {
  state = {

  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route
            path='/shop'
            render={(props) => <Shop {...props} client={this.props.client} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
