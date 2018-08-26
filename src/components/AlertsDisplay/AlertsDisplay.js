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
			return alerts.map( (alert)=>{ 
				return (<AlertBox alertData={alert} />)
			}) 
		})
		.then((rsp)=>this.setState({alertBoxes:rsp}))
	}

	componentDidMount(){
		this.getAlertBoxes()
	}

	render()  {
		
	return (<div>
		{(this.state.alertBoxes)}
		</div>)
	}
}

export default AlertsDisplay;