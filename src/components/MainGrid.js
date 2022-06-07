import './Grid.css';
import React from "react";
import { Typography } from '@mui/material';

// Example of a data array that
// you might receive from an API


function Grid({datesJoined, dateCounts, uniqueDateCounts, dateLatencyTotal}) {

	let data = [];

	for (let i = 0; i < datesJoined.length; i++) {
		let obj = { date: datesJoined[i], connectionsMade: dateCounts[i].count, uniqueConnections: uniqueDateCounts[i].numberOfUniqueUsersOnThatDay, dateLatency: dateLatencyTotal[i]/dateCounts[i].count };	
		data.push(obj);
	}

	console.log(data);

return (
	<div className="Grid">
	<table>
		<tr>
		<th><Typography style={{fontWeight: 'bold'}} variant="h5">Date</Typography></th>
		<th><Typography style={{fontWeight: 'bold'}} variant="h5">Number of Connections</Typography></th>
		<th><Typography style={{fontWeight: 'bold'}} variant="h5">Number of Unique Users</Typography></th>
		<th><Typography style={{fontWeight: 'bold'}} variant="h5">Average Latency Faced (ms)</Typography></th>
		</tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
			<td><Typography variant="h6">{val.date}</Typography></td>
			<td><Typography variant="h6">{val.connectionsMade}</Typography></td>
			<td><Typography variant="h6">{val.uniqueConnections}</Typography></td>
			<td><Typography variant="h6">{val.dateLatency}</Typography></td>
			</tr>
		)
		})}
	</table>
	</div>
);
}

export default Grid;
