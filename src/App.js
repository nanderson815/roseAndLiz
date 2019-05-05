import React, { Component } from 'react';

import Home from './pages/Home/Home';
import Shop from './pages/Shop';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';


class App extends Component {
  state = {
    isTop: true,

  }

  componentDidMount(){
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar isTop={this.state.isTop}/>
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
