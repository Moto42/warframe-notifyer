import React, { Component } from 'react';
import FilterSelection from './FilterSelection';

class SideBox extends Component  {

	filterChange=(filter)=>{
		let sendFilter = [];
		switch (filter){
			case 'all':
				sendFilter = [];
				break;
			case 'filterRewards':
				sendFilter = ['endo','tellurium','neurodes'];//replace with the correct filter from options
				break;
			default:
				sendFilter = [];
		}
		this.props.filterChange(sendFilter);
	}

	render()  {
	return (<div className='sideBox '>
		<FilterSelection callback={this.filterChange} />
	</div>)
	}
}

export default SideBox;