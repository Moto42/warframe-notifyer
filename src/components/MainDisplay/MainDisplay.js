import React, { Component } from 'react';

import AlertsDisplay from '../AlertsDisplay';

import './MainDisplay.css';



// import MissionBox from '../MissionBox';

class MainDisplay extends Component  {

	render()  {
	return (<div className='mainDisplay panelBGColor'>
		<AlertsDisplay filter={this.props.filter }/>

	</div>)
	}
}

export default MainDisplay;