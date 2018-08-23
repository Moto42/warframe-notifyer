//The goal is for this React Component to accept a
//'deadline' prop, and display the time remaining 
//until the deadline is reached.
//Also, accept the 'className' prop and pass it to
//the className of the main div.


import React, { Component } from 'react';

class CountDownTimer extends Component  {
	render()  {

	let className = null;
	this.props.className ? className=this.props.className : className ='';

	let now = new Date().getTime();
	
	let deadLine = null;
	if(this.props.deadLine) { deadLine = this.props.deadLine }
	else { return (<div className={className}>No Deadline</div>) };
	
	
		let timeRemaining = deadLine-now;
		console.log('Now: ',now,);
		console.log('deadLine: ',deadLine);
		console.log('remaining: ',timeRemaining);//debugging
	

	return (<div className={className} >
		Nothing to see here but us chickens.
	</div>)
	}
}

export default CountDownTimer;