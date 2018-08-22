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