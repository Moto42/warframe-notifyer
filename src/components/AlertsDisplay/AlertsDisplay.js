import React, { Component } from 'react';
import AlertBox from './AlertBox';

class AlertsDisplay extends Component  {
	constructor(){
		super()
		this.state = {
			alertBoxes : [],
		}
	}


	getAlertBoxes = () => {

		fetch('https://api.warframestat.us/pc/alerts')
		.then((response) => response.json() )
		.then( (alerts) => {
			return (
				alerts
				.filter((alert)=>{
					return Date.parse(alert.expiry)>Date.now();
				})
				.map( (alert)=>{ 
					return (<AlertBox alertData={alert} />)
				})
			)
		})
		.then((rsp)=>this.setState({alertBoxes:rsp}))
	}

	componentDidMount(){
		this.getAlertBoxes()
		setInterval(this.getAlertBoxes,(1000*60*5));
	}

	render()  {
		
	return (<div>
		{(this.state.alertBoxes)}
		</div>)
	}
}

export default AlertsDisplay;