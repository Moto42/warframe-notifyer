//The goal is for this React Component to accept a
//'deadline' prop, and display the time remaining 
//until the deadline is reached.
//Also, accept the 'className' prop and pass it to
//the className of the main div.


import React, { Component } from 'react';

class CountDownTimer extends Component  {
	constructor(props){
		super(props);
		this.state = {
			deadLine: this.props.deadLine,
			now: new Date().getTime(),
			className:(this.props.className ? this.props.className : ''),
		}

	}

	getTimeRemaining = () =>{
		let timeRemaining = this.state.deadLine-this.state.now;
		const days = Math.floor(timeRemaining / (1000*60*60*24));
			timeRemaining -= (days*(1000*60*60*24));
		const hours = Math.floor(timeRemaining/(1000*60*60))
			timeRemaining -= (hours*(1000*60*60));
		const minutes = Math.floor(timeRemaining/(1000*60));
			timeRemaining -= (minutes * (1000*60));
		const seconds = Math.floor(timeRemaining/1000);
			timeRemaining -= (seconds*1000);

		return (`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds, ${timeRemaining} Milliseconds`);
	}

	render()  {
	
		if(!this.state.deadLine) { return (<div className={this.state.className}>No Deadline</div>) };
	
		return (<div className={this.state.className} >
			{this.getTimeRemaining()}
		</div>)
	}
}

export default CountDownTimer;