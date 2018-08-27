import React, { Component } from 'react';

class FilterSelection extends Component  {

	handleChange=(event)=>{
		this.props.callback(event.target.value);
	}

	render()  {
		return (<select onChange={this.handleChange}>
			<option value='all'>All Missions</option>
			<option value='filterRewards'>Filter: Rewards</option>
		</select>)
	}
}

export default FilterSelection;