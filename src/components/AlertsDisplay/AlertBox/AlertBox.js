import React, { Component } from 'react';
import CountDownTimer from '../../CountDownTimer';
import './AlertBox.css';

import iconInfested from './images/icon-infested.png';
import iconGrineer from './images/icon-grineer.png';
import iconCorpus from './images/icon-corpus.png';
import iconNone from './images/icon-none.png';



class AlertBox extends Component  {



	render()  {

		const getFactionIcon = (faction) =>{
			console.log(faction)
			switch( faction ){
				case 'Infested':
					return iconInfested;
					break;
				case 'Grineer':
					return iconGrineer;
					break;
				case 'Corpus':
					return iconCorpus
					break;
				default:
					return iconNone;
			}
		}

		return (<div className='alertBox panelBorders panelCardColor'>
			<img className='rewardImage' 
				alt={this.props.alertData.mission.reward.itemString}
				src={this.props.alertData.mission.reward.thumbnail} 
			/>
			<div className='missionData'>
				<h3 className='textWhite'>{this.props.alertData.mission.node}</h3>
				<h4 className='textGrey'>{`Level ${this.props.alertData.mission.minEnemyLevel}-${this.props.alertData.mission.maxEnemyLevel}`}</h4>
				<h4 className='textWhite'>{`${this.props.alertData.mission.type}-${this.props.alertData.mission.faction}`}</h4>
				<h4 className='textWhite'>{this.props.alertData.mission.reward.asString}</h4>
			</div>
			
			<img className='factionIcon'
				src={(getFactionIcon(this.props.alertData.mission.faction))}
				alt={this.props.alertData.mission.faction}
			/>
			
			<CountDownTimer className="countDown textGrey" deadLine={Date.parse(this.props.alertData.expiry) } />

		</div>)


	}
}

export default AlertBox;