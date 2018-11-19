import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Lottery from "./Lottery"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Lottery imgs={["http://p1.music.126.net/7r2sT8wBeBj4PT29G6v7cQ==/109951163350244770.jpg","http://p1.music.126.net/s0TcW1LSWIR67tRfrBV-EA==/19001759951686439.jpg"]} prize={6} index={2}/>

       <Lottery imgs={["http://p4.music.126.net/KuGSjf5HuBi1-nGX4xVO8g==/109951163569054776.webp?imageView&amp;thumbnail=200x0&amp;quality=75&amp;tostatic=0&amp;type=webp","http://p4.music.126.net/slbS-Ji9L_d6DU1bSriOnA==/109951163639651678.webp?imageView&thumbnail=200x0&quality=75&tostatic=0&type=webp"]} prize={4}/>
      </div>
    );
  }
}

export default App;
