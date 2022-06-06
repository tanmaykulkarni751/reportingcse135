import React from 'react'
import { Pie } from 'react-chartjs-2'
// import { defaults } from 'react-chartjs-2'

// defaults.global.tooltips.enabled = false
// defaults.global.legend.position = 'bottom'

const PieChart = ({data}) => {

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

  return (
    <div>
      <Pie
        data={{
          labels: ['Enabled', 'Disabled'],
          datasets: [
            {
              label: 'Enabled or Disabled',
              data: [enabled, disabled],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  )
}

export default PieChart
