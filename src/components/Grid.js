import './Grid.css';
import React from "react";
import { Typography } from '@mui/material';

// Example of a data array that
// you might receive from an API
const data = [
{ name: "Anom", age: 19, gender: "Male" },
{ name: "Megha", age: 19, gender: "Female" },
{ name: "Subham", age: 25, gender: "Male"},
]

function Grid() {
return (
	<div className="Grid">
	<table>
		<tr>
		<th><Typography style={{fontWeight: 'bold'}} variant="h5">Name</Typography></th>
		<th><Typography style={{fontWeight: 'bold'}} variant="h5">Age</Typography></th>
		<th><Typography style={{fontWeight: 'bold'}} variant="h5">Gender</Typography></th>
		</tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
			<td><Typography variant="h6">{val.name}</Typography></td>
			<td><Typography variant="h6">{val.age}</Typography></td>
			<td><Typography variant="h6">{val.gender}</Typography></td>
			</tr>
		)
		})}
	</table>
	</div>
);
}

export default Grid;
