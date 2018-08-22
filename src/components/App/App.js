import React, { Component } from 'react';
import './App.css';

import MainDisplay from '../MainDisplay';
import SideBox from '../SideBox';
import BackGround from '../BackGround';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<MainDisplay />
      	<SideBox />

        <BackGround />
      </div>
    );
  }
}

export default App;
