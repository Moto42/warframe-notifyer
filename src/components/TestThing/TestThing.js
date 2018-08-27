import React, { Component } from 'react';

class TestThing extends Component  {
	render()  {
	return (<div className='textWhite'>
		{this.props.filter}
	</div>)
	}
}

export default TestThing;