import React, { Component } from 'react';
import './AlertBox.css';

class AlertBox extends Component  {
	render()  {
		console.log(this.props.alertData);
	return (<div className='alertBox'>
		<img className='rewardImage' 
			alt={this.props.alertData.mission.reward.itemString}
			src={this.props.alertData.mission.reward.thumbnail} 
		/>

		<h1 className='missionData textWhite'>DEFAULT</h1>
		
		<img  className='factionIcon' />
		
		<h2 className='countDown'>Time is running out</h2>

	</div>)


	}
}

export default AlertBox;