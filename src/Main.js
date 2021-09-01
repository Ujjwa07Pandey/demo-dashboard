import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import banner from './assets/banner.png';
import CounterCard from './components/CounterCard';
import data from './data/data.json';
import LineChart from './components/LineChart';
import DoughnutChart from './components/DoughnutChart';
import CarouselArea from './components/CarouselArea';

const useStyles = makeStyles((theme) => ({
  banner_area: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  welcome_card: {
    backgroundColor: '#BAF9F2',
    height: 'auto',
    borderRadius: 16,
    boxShadow: 'none',
    padding: '1rem 1.5rem',
  },
  welcome_card_img: {
    [theme.breakpoints.down('xs')]: {
      left: -20,
    },
  },
}));

const Main = () => {
  const classes = useStyles();
  const [active, setActive] = useState(0);

  // console.log(url, 'data');
  return (
    <Container>
      <Box my="2rem">
        <Grid container spacing={3}>
          <Grid item lg={8} md={6} xs={12}>
            <Card className={classes.welcome_card}>
              <CardContent className={classes.banner_area}>
                <Box flexGrow={1}>
                  <Typography
                    variant="h4"
                    gutterBottom
                    style={{ fontWeight: 600 }}
                  >
                    Welcome back
                  </Typography>
                  <Typography
                    variant="h4"
                    gutterBottom
                    style={{ fontWeight: 600 }}
                  >
                    Bombay Designs !
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything
                  </Typography>

                  <Button
                    variant="contained"
                    color="primary"
                    disableRipple={true}
                    style={{
                      backgroundColor: '#00AB55',
                      textTransform: 'unset',
                      boxShadow: 'none',
                      borderRadius: 8,
                      margin: '1rem 0rem',
                    }}
                  >
                    Go Now
                  </Button>
                </Box>
                <Box>
                  <img
                    src={banner}
                    className={classes.welcome_card_img}
                    alt="banner"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <CarouselArea />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={3}>
          {data.map((value, i) => (
            <Grid item lg={3} xs={12} key={i} onClick={() => setActive(i)}>
              <CounterCard
                title={value.title}
                stat={value.stat}
                isActive={i === active ? true : false}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box my="2rem">
        <Grid container spacing={3}>
          <Grid item lg={4} xs={12}>
            <DoughnutChart />
          </Grid>
          <Grid item lg={8} xs={12}>
            <LineChart url={data[active].url} install={data[active].installs} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Main;
