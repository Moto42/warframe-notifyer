import React, { Component } from 'react';
import CountDownTimer from '../../CountDownTimer';
import './AlertBox.css';


class AlertBox extends Component  {

	render()  {

	return (<div className='alertBox panelBorders'>
		<img className='rewardImage' 
			alt={this.props.alertData.mission.reward.itemString}
			src={this.props.alertData.mission.reward.thumbnail} 
		/>

		<h1 className='missionData textWhite'>DEFAULT</h1>
		
		<img className='factionIcon'
			alt={this.props.alertData.mission.faction}
		/>
		
		<CountDownTimer />

	</div>)


	}
}

export default AlertBox;