import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@material-ui/core';
import axios from 'axios';
import moment from 'moment';

const options = {
  plugins: {
    legend: {
      position: 'top',
      align: 'end',
      labels: {
        boxWidth: 10,
        padding: 10,
      },
    },
  },

  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
};
const LineChart = ({ url, install }) => {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    const buildChartData = async () => {
      let newData = {
        labels: [],
        datasets: [
          {
            label: 'Units',
            data: [],
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            tension: 0.5,
          },
        ],
      };
      const tempData = await axios
        .get(url, {
          crossdomain: true,
        })
        .then((res) => res.data)
        .catch(function (error) {
          console.log(error);
        });

      for (let i = 0; i < tempData.length; i++) {
        newData.labels.push(moment(tempData[i].date).format('MMM Do'));
        newData.datasets[0].data.push(tempData[i].units);
      }

      setChartData(newData);
    };
    buildChartData();
  }, []);
  return (
    <Card
      style={{
        boxShadow:
          '0px 0px 2px rgba(145, 158, 171, 0.24), 0px 16px 32px -4px rgba(145, 158, 171, 0.24)',
        padding: 24,
        borderRadius: 16,
        height: '100%',
      }}
    >
      <Typography variant="h6" gutterBottom style={{ fontWeight: 600 }}>
        Total Installed
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        gutterBottom
        style={{ fontWeight: 500 }}
      >
        (+{install}%) than last year
      </Typography>
      <CardContent>
        <Line data={chartData} options={options} />
      </CardContent>
    </Card>
  );
};

export default LineChart;
