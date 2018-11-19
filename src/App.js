import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Lottery from "./Lottery"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Lottery/>
      </div>
    );
  }
}

export default App;
