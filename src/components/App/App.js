import React, { Component } from 'react';
import './App.css';

import MainDisplay from '../MainDisplay';
import SideBox from '../SideBox';
import BackGround from '../BackGround';

class App extends Component {
	constructor() {
		super()
		this.state = {
			activeFilter: [],
		}
	}

	filterChange = (newFilter) => {
		this.setState({activeFilter:newFilter});
	}

  render() {
    return (
      <div className="App">
      	<MainDisplay filter={this.state.activeFilter} />
      	<SideBox filterChange={this.filterChange}/>

        <BackGround />
      </div>
    );
  }
}

export default App;
