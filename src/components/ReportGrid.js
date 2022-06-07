import './Grid.css';
import React from "react";
import { Typography } from '@mui/material';

function ReportGrid({ cookiesEnabled, cookiesDisabled, jsEnabled, jsDisabled, cssEnabled, cssDisabled, imagesEnabled, imagesDisabled }) {

return (
	<div className="Grid">
	<table>
		<tr>
		<th><Typography style={{fontWeight: 'bold'}} variant="h5">Script</Typography></th>
		<th><Typography style={{fontWeight: 'bold'}} variant="h5">Enabled</Typography></th>
		<th><Typography style={{fontWeight: 'bold'}} variant="h5">Disabled</Typography></th>
		</tr>
			<tr>
			<td><Typography variant="h6">Cookies</Typography></td>
			<td><Typography variant="h6">{cookiesEnabled}</Typography></td>
			<td><Typography variant="h6">{cookiesDisabled}</Typography></td>
			</tr>

            <tr>
			<td><Typography variant="h6">Javascript</Typography></td>
			<td><Typography variant="h6">{jsEnabled}</Typography></td>
			<td><Typography variant="h6">{jsDisabled}</Typography></td>
			</tr>

            <tr>
			<td><Typography variant="h6">CSS</Typography></td>
			<td><Typography variant="h6">{cssEnabled}</Typography></td>
			<td><Typography variant="h6">{cssDisabled}</Typography></td>
			</tr>

            <tr>
			<td><Typography variant="h6">Images</Typography></td>
			<td><Typography variant="h6">{imagesEnabled}</Typography></td>
			<td><Typography variant="h6">{imagesDisabled}</Typography></td>
			</tr>
	</table>
	</div>
);
}

export default ReportGrid;
