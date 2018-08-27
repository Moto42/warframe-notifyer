import React, { Component } from 'react';
import AlertBox from './AlertBox';

class AlertsDisplay extends Component  {
	constructor(){
		super()
		this.state = {
			alerts: [],
			alertBoxes : [],
		}
	}

	getAlerts = () => {
		fetch('https://api.warframestat.us/pc/alerts')
		.then((response) => response.json() )
		.then((alerts) => alerts.filter(()=>true)  )
		.then((rsp)=>this.setState({alerts:rsp}))
	}

	getAlertBoxes = () => {
		const alerts = this.state.alerts.filter( (alert)=>{return this.checkFilter(alert.rewardTypes,this.props.filter); }) ;
		console.log('alerts',alerts);
		return alerts.map( (alert)=>{ 
					return (<AlertBox alertData={alert} />)
				})
	}
//.filter( (alert)=>{return this.checkFilter(alert.rewardTypes,this.props.filter); ) 

	checkFilter = (rewards, filter) => {
		if(filter.length<=0){ return true};
    return filter.some(function (v) {
        return rewards.indexOf(v) >= 0;
    });
	}

	componentDidMount(){
		this.getAlerts();
		setInterval(this.getAlerts,(1000*60*5));
	}

	render()  {
		//this.getAlertBoxes();
		return (<div>
			{(this.getAlertBoxes())}
			</div>)
	}
}

export default AlertsDisplay;