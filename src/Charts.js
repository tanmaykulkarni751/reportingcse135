import React from "react";
import PieChart from "./components/PieChart";
import { Typography } from '@mui/material';
import BarChart from "./components/BarChart";

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Grid from "./components/MainGrid";


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

    let datesJoined = [];
    // iterate through data and get a list of all userJoined values
    data.forEach(item => {
        // split userJoined at third occurence of '-'
        let year = item.userJoined.split('-')[0];
        let month = item.userJoined.split('-')[1];
        let day = item.userJoined.split('-')[2];
        let date = `${year}-${month}-${day}`;
        if (datesJoined.indexOf(date) === -1 && date !== 'null-undefined-undefined') {
            datesJoined.push(date);
        }
    });

    // iterate through data and get counts of users who joined on each date
    let dateCounts = [];
    datesJoined.forEach(date => {
        let count = 0;
        data.forEach(item => {
          // if item.userJoined contains date, increment count
          if (item.userJoined.includes(date)) {
            count++;
          }
        });
        dateCounts.push({date, count});
    });

    let uniqueDateCounts = [];
    datesJoined.forEach(date => {
      let uniqueUsers = [];
      data.forEach(item => {
        // if item.userJoined contains date, increment count
        if (item.userJoined.includes(date)) {
          if (!uniqueUsers.includes(item.userId)) {
            uniqueUsers.push(item.userId);
          }
        }
      });
      let numberOfUniqueUsersOnThatDay = uniqueUsers.length;
      // get length of uniqueUsers array
      uniqueDateCounts.push({date, numberOfUniqueUsersOnThatDay});
    });

    // iterate through data and add up latency values for each date
    let dateLatencyTotal = [];
    datesJoined.forEach(date => {
        let latencyTotal = 0;
        data.forEach(item => {
          // if item.userJoined contains date, increment count
          if (item.userJoined.includes(date)) {
            // convert item.latency to int
            let latency = parseInt(item.latency);
            latencyTotal += latency;
          }
        });
        dateLatencyTotal.push(latencyTotal);
    });

    return (

      <div>
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
                <Typography style={{marginBottom: '50px', marginTop: '50px', fontWeight: 'bold'}} variant="h4">User Dims</Typography>
                <BarChart data={userDimMap}/>

            </div>

        </div>
        <Grid datesJoined={datesJoined} dateCounts={dateCounts} uniqueDateCounts={uniqueDateCounts} dateLatencyTotal={dateLatencyTotal} />

        </div>
    );
}
