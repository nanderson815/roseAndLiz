import React, { Component } from 'react';
import Home from './pages/Home';
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
        </div>
      </Router>
    );
  }
}

export default App;
