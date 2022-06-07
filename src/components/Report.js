import React from "react";
import PieChart from "./PieChart";
import { Typography } from '@mui/material';
import ReportGrid from "./ReportGrid";

export default function Report({ data }) {

    let cookiesEnabled = 0;
    let cookiesDisabled = 0;
    let usersEncounteredForCookie = [];

    // iterate through data and get count of cookiesEnabled and cookiesDisabled for each unique user
    data.forEach(item => {
        // if item.userId is not in usersEncounteredForCookie, add it to the list
        if (!usersEncounteredForCookie.includes(item.userId)) {
            usersEncounteredForCookie.push(item.userId);
            if (item.cookiesEn === 'true') {
                cookiesEnabled++;
            } else {
                cookiesDisabled++;
            }
        }
    });

    const cookiesPieChartData = [cookiesEnabled, cookiesDisabled];


    let jsEnabled = 0;
    let jsDisabled = 0;
    let usersEncounteredForJs = [];

    // iterate through data and get count of cookiesEnabled and cookiesDisabled for each unique user
    data.forEach(item => {
        // if item.userId is not in usersEncounteredForCookie, add it to the list
        if (!usersEncounteredForJs.includes(item.userId)) {
            usersEncounteredForJs.push(item.userId);
            if (item.javascriptEnabled === 'true') {
                jsEnabled++;
            } else {
                jsDisabled++;
            }
        }
    });

    const jsPieChartData = [jsEnabled, jsDisabled];

    let cssEnabled = 0;
    let cssDisabled = 0;
    let usersEncounteredForCss = [];

    // iterate through data and get count of cookiesEnabled and cookiesDisabled for each unique user
    data.forEach(item => {
        // if item.userId is not in usersEncounteredForCookie, add it to the list
        if (!usersEncounteredForCss.includes(item.userId)) {
            usersEncounteredForCss.push(item.userId);
            if (item.cssEnabled === 'true') {
                cssEnabled++;
            } else {
                cssDisabled++;
            }
        }
    });

    const cssPieChartData = [cssEnabled, cssDisabled];

    let imagesEnabled = 0;
    let imagesDisabled = 0;
    let usersEncounteredForImages = [];

    // iterate through data and get count of cookiesEnabled and cookiesDisabled for each unique user
    data.forEach(item => {
        // if item.userId is not in usersEncounteredForCookie, add it to the list
        if (!usersEncounteredForImages.includes(item.userId)) {
            usersEncounteredForImages.push(item.userId);
            if (item.imagesEnabled === 'true') {
                imagesEnabled++;
            } else {
                imagesDisabled++;
            }
        }
    });

    const imagesPieChartData = [imagesEnabled, imagesDisabled];

    return (
        <div>
            <div>
                <ReportGrid cookiesEnabled={cookiesEnabled} cookiesDisabled={cookiesDisabled} jsEnabled={jsEnabled} jsDisabled={jsDisabled} cssEnabled={cssEnabled} cssDisabled={cssDisabled} imagesEnabled={imagesEnabled} imagesDisabled={imagesDisabled} />
            </div>
            <Typography variant="h6" style={{
                width: '80%',
                margin: 'auto',
            }}>
                This report displays the number of unique users that had disabled some element from the website. From the pie charts, you'll observe the number of users with an element enabled as well is disabled. Each of these charts display critical aspects of the website that affect the websites accessability if one of them is disabled. Our report was designed to give a better insight into the number of users with some critical element disabled and gives us an idea of what our users are experiencing on their end. From the grid, you will observe a grid displaying the number of visitors we had on a specific date as well as the  average latency. We included the number of unique users as a way to ensure we could prevent one user from skewing the  average if they were experiencing network issues from their end. A higher unique user count would result in a more reliable accurate latency. We use this result as a manner of observing if our website is suffering from some bottle neck whether it be from a large number of users attempting to access the website or if there is an element in our website causing the load to take abnormally long. We added this as part of the detailed report to identify if a user disabling an element from the website causes the latency of the website to take longer, a user with a disabled element would most likely reload the page causing the number of total viewers to increase. Using this metric we can observe if we should include an alternative to provide for users that block a specific script or element from loading on our website.
            </Typography>
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
                    <Typography style={{ marginBottom: '50px', marginTop: '50px', fontWeight: 'bold' }} variant="h4">Cookies Enabled/Disabled</Typography>
                    <PieChart data={cookiesPieChartData} labels={['Enabled', 'Disabled']} />
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Typography style={{ marginBottom: '50px', marginTop: '50px', fontWeight: 'bold' }} variant="h4">Javascript Enabled/Disabled</Typography>
                    <PieChart data={jsPieChartData} labels={['Enabled', 'Disabled']} />
                </div>

            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                marginBottom: '50px',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Typography style={{ marginBottom: '50px', marginTop: '50px', fontWeight: 'bold' }} variant="h4">CSS Enabled/Disabled</Typography>
                    <PieChart data={cssPieChartData} labels={['Enabled', 'Disabled']} />
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Typography style={{ marginBottom: '50px', marginTop: '50px', fontWeight: 'bold' }} variant="h4">Images Enabled/Disabled</Typography>
                    <PieChart data={imagesPieChartData} labels={['Enabled', 'Disabled']} />
                </div>

            </div>
        </div>
    );
}