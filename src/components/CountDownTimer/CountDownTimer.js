//The goal is for this React Component to accept a
//'deadline' prop, and display the time remaining 
//until the deadline is reached.
//Also, accept the 'className' prop and pass it to
//the className of the main div.

//TODO FIRST: Pass className as above, This will be 
//a quick, easy, win.

import React, { Component } from 'react';

class CountDownTimer extends Component  {
	render()  {

	let now = new Date().getTime();
	const expiry = Date.UTC(2018,7,23,0,19,0,40);
	let timeRemaining = expiry-now;
	console.log('Now: ',now,);
	console.log('expiry: ',expiry);
	console.log('remaining: ',timeRemaining);

	return (<div className='countDown textGrey' >
		Nothing to see here but us chickens.
	</div>)
	}
}

export default CountDownTimer;