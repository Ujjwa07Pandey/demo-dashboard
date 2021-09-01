import React from 'react';
import { Box, Card, CardContent, Typography } from '@material-ui/core';
import Type from '../assets/Type.svg';
import caret from '../assets/caret.svg';
import numeral from 'numeral';
const CounterCard = ({ title, stat, isActive = false }) => {
  return (
    <Box>
      <Card
        style={{
          backgroundColor: isActive ? '#0A2540' : '#fff',
          height: 145,
          borderRadius: 16,
          boxShadow: '0px 4px 16px rgba(145, 158, 171, 0.24)',
          padding: 24,
        }}
      >
        <CardContent>
          <Box display="flex" flexDirection="row">
            <Box flexGrow={1}>
              <Typography
                variant="subtitle2"
                gutterBottom
                style={{
                  color: isActive ? '#BAF9F2' : '#000',
                  fontWeight: 600,
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="h3"
                gutterBottom
                style={{
                  color: isActive ? '#BAF9F2' : '#000',
                  fontWeight: 600,
                }}
              >
                {numeral(stat).format('0,0')}
              </Typography>
            </Box>
            <Box>
              <img
                src={Type}
                style={{
                  height: '100%',
                  width: '100%',
                }}
                alt="chart_image"
              />
            </Box>
          </Box>
        </CardContent>
      </Card>
      {isActive && (
        <Box style={{ width: 'max-content', marginTop: -6 }} mx="auto">
          <img src={caret} alt="caret_svg" />
        </Box>
      )}
    </Box>
  );
};

export default CounterCard;
