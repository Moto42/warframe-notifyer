//The goal is for this React Component to accept a
//'deadLine' prop, and display the time remaining 
//until the deadLine is reached.
//Also, accept the 'className' prop and pass it to
//the className of the main div.


import React, { Component } from 'react';

class CountDownTimer extends Component  {
	constructor(props){
		super(props);
		this.state = {
			deadLine: this.props.deadLine,
			now: Date.now(),
			className:(this.props.className ? this.props.className : ''),
			intervalID: null,
		}
	}

	updateTime = () => {
		
		if(this.state.now > this.state.deadLine){
			this.props.killSignal();
			console.log('killed');
		}
		this.setState({now: Date.now()})
	}

	componentDidMount(){
		this.setState({intervalID: setInterval( this.updateTime , 100 )});
	}

	componentWillUnmount(){
		clearInterval(this.state.intervalID);
	}

	getTimeRemaining = () => {

		if (this.state.deadLine > this.state.now){
			let timeRemaining = this.state.deadLine-this.state.now; 
			const days = Math.floor(timeRemaining / (1000*60*60*24));
				timeRemaining -= (days*(1000*60*60*24)); 
			const hours = Math.floor(timeRemaining/(1000*60*60))
				timeRemaining -= (hours*(1000*60*60)); 
			const minutes = Math.floor(timeRemaining/(1000*60));
				timeRemaining -= (minutes * (1000*60)); 
			const seconds = Math.floor(timeRemaining/1000);
			const decimalSeconds = Math.floor(timeRemaining/10)/100;

			if     (days > 0){return ( `${days} days ${hours} hours`  )}
			else if(hours > 0){return ( `${hours} hours ${minutes} minutes`  )}
			else if(minutes > 0){return ( `${minutes} minutes ${seconds} seconds`  )}
			else if(decimalSeconds > 0){return `${decimalSeconds} seconds`}
			else { return ('Expired');}

		}
		else { return ('Expired');}
	}

	render()  {
	
		if(!this.state.deadLine) { return (<div className={this.state.className}>No Deadline</div>) };
	
		return (<div className={this.state.className} >
			{this.getTimeRemaining()}
		</div>)
	}
}

export default CountDownTimer;