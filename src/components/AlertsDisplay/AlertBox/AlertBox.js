import React, { Component } from 'react';
import './AlertBox.css';

class AlertBox extends Component  {

	render()  {
		let now = new Date().getTime();
		const expiry = Date.UTC(2018,7,23,0,19,4,0);
		let timeRemaining = expiry-now;
		console.log('Now: ',now,);
		console.log('expiry: ',expiry);
		console.log('remaining: ',timeRemaining);


	return (<div className='alertBox panelBorders'>
		<img className='rewardImage' 
			alt={this.props.alertData.mission.reward.itemString}
			src={this.props.alertData.mission.reward.thumbnail} 
		/>

		<h1 className='missionData textWhite'>DEFAULT</h1>
		
		<img className='factionIcon'
			alt={this.props.alertData.mission.faction}
		/>
		
		<h2 className='countDown textGrey'>Time is running out</h2>

	</div>)


	}
}

export default AlertBox;