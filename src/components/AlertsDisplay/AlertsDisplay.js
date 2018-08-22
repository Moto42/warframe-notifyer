import React, { Component } from 'react';
import AlertBox from './AlertBox';

//Dummy Data
const alertData = {
	id: "5b7c9fc551bb35b19c83e3cd",
	activation: "2018-08-21T23:31:45.615Z",
	expiry: "2018-08-22T00:19:44.040Z",
	mission: {
	node: "Brugia (Eris)",
	type: "Defense",
	faction: "Infested",
	reward: {
		items: [ ],
		countedItems: [
			{
				count: 1500,
				type: "Circuits"
			}
		],
		credits: 12500,
		asString: "1500 Circuits + 12500cr",
		itemString: "1500 Circuits",
		thumbnail: "https://i.imgur.com/OxJvWIx.png",
		color: 13170943
	},
	minEnemyLevel: 35,
	maxEnemyLevel: 39,
	maxWaveNum: 10,
	nightmare: false,
	archwingRequired: false
	},
	expired: false,
	eta: "8m 42s",
	rewardTypes: [
		"circuits"
	]
}



class AlertsDisplay extends Component  {

	render()  {
	return (<div>
		<AlertBox alertData={alertData} />
		</div>)
	}
}

export default AlertsDisplay;