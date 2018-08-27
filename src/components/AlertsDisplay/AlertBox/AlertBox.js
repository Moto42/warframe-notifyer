import React, { Component } from 'react';
import CountDownTimer from '../../CountDownTimer';
import './AlertBox.css';

import iconInfested from './images/icon-infested.png';
import iconGrineer from './images/icon-grineer.png';
import iconCorpus from './images/icon-corpus.png';
import iconNone from './images/icon-none.png';



class AlertBox extends Component  {
	constructor(props){
		super(props);
		this.state ={
			display:(Date.parse(props.alertData.expiry)>Date.now()? true:false)
		}
	}

	killSignal = () =>{
		this.setState({display:false});

	}

	render()  {
		if(!this.state.display){return<div className='expired'></div>}
		else{

		const getFactionIcon = (faction) =>{
			
			let icon = null;
			switch( faction ){
				case 'Infested':
					icon = iconInfested;
					break;
				case 'Grineer':
					icon = iconGrineer;
					break;
				case 'Corpus':
					icon = iconCorpus
					break;
				default:
					icon = iconNone;
			}
			return icon;
		}

		return (<div className='alertBox panelBorders panelCardColor'>
			<img className='rewardImage' 
				alt={this.props.alertData.mission.reward.itemString}
				src={this.props.alertData.mission.reward.thumbnail} 
			/>
			<div className='missionData'>
				
				<h4 className='textWhite'>{`${this.props.alertData.mission.node} Level ${this.props.alertData.mission.minEnemyLevel}-${this.props.alertData.mission.maxEnemyLevel}`}</h4>
			
				<h4 className='textWhite'>{`${this.props.alertData.mission.type}-${this.props.alertData.mission.faction}`}</h4>
				
				<h4 className='textWhite'>{this.props.alertData.mission.reward.asString}</h4>
			</div>
			
			<img className='factionIcon'
				src={(getFactionIcon(this.props.alertData.mission.faction))}
				alt={this.props.alertData.mission.faction}
			/>
			
			<CountDownTimer className="countDown textGrey" deadLine={Date.parse(this.props.alertData.expiry)} killSignal={this.killSignal} />

		</div>)


	}
	}
}

export default AlertBox;