import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import numeral from 'numeral';
const total = 23994;
const options = {
  plugins: {
    legend: {
      position: 'bottom',
      align: 'center',
      labels: {
        boxWidth: 10,
        padding: 10,
      },
    },
  },
  cutout: 90,
};
const plugins = [
  {
    beforeDraw: function (chart) {
      var width = chart.width,
        height = chart.height,
        ctx = chart.ctx;
      ctx.restore();
      var fontSize = (height / 160).toFixed(2);
      ctx.font = fontSize + 'em sans-serif';
      ctx.textBaseline = 'top';
      var text = numeral(total).format('0,0'),
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = Math.round((width - ctx.measureText(text).width) / 2);
      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  },
];
const data = {
  labels: ['Mac', 'Windows', 'iOS', 'Android'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5],
      backgroundColor: ['#007B55', '#00AB55', '#5BE584', '#C8FACD'],

      borderWidth: 0,
    },
  ],
};

const DoughnutChart = () => (
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
      Current Download
    </Typography>

    <CardContent style={{ width: '100%' }}>
      <Doughnut data={data} options={options} plugins={plugins} />
    </CardContent>
  </Card>
);

export default DoughnutChart;
