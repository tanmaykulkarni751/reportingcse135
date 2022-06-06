import React from "react";
import PieChart from "./components/PieChart";
import { Typography } from '@mui/material';
import BarChart from "./components/BarChart";


export default function Charts({ data }) {
    console.log(data);

    let userDims = [];

    let enabled = 0;
    let disabled = 0;
    data.forEach(item => {
      if (item.cssEnabled === 'true') {
        enabled++;
      } else {
        disabled++;
      }
  
      if (item.javascriptEnabled === 'true') {
        enabled++;
      } else {
        disabled++;
      }
  
      if (item.imagesEnabled === 'true') {
        enabled++;
      } else {
        disabled++;
      }
  
      if (item.cookiesEnabled === 'true') {
        enabled++;
      } else {
        disabled++;
      }
    });


    data.forEach(item => {
        userDims.push(item.userDim);
    });

    let barLabels = [];

    let userDimMap = {};
    userDims.forEach(item => {
        // if(userDimMap[item] != null) {
            if (userDimMap[item]) {
                userDimMap[item]++;
            } else {
                userDimMap[item] = 1;
                barLabels.push(item);
            }
        // }
    });

    const pieChartData = [enabled, disabled];
    
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
                <PieChart data={pieChartData} labels={['Enabled', 'Disabled']}/>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Typography style={{marginBottom: '50px', marginTop: '50px', fontWeight: 'bold'}} variant="h4">Bar</Typography>
                <BarChart data={userDimMap}/>
            </div>
        </div>
    );
}
