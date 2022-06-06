import React from "react";
import PieChart from "./components/PieChart";
import { Typography } from '@mui/material';


export default function Charts({ data }) {
    console.log(data);
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-evenly',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Typography style={{marginBottom: '50px', marginTop: '50px', fontWeight: 'bold'}} variant="h4">Users With Disabled Elements</Typography>
                <PieChart data={data} />
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Typography style={{marginBottom: '50px', marginTop: '50px', fontWeight: 'bold'}} variant="h4">Users With Disabled Elements</Typography>
                <PieChart data={data} />
            </div>
        </div>
    );
}
