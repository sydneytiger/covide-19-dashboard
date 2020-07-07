import React from 'react';
import { Typography, AppBar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MoodBadTwoToneIcon from '@material-ui/icons/MoodBadTwoTone';
import AirlineSeatFlatTwoToneIcon from '@material-ui/icons/AirlineSeatFlatTwoTone';
import useCovidApi from '../../api/useCovidApi';
import { countries } from '../../constaints';

const useStyles = makeStyles({
  root: {
    minHeight: 70,
    paddingTop: 10,
    paddingBottom: 10
  },
  flag: {
    width: 100,
    height: 50,
    borderRadius: 5,
    boxShadow: '0 2px 20px rgba(0,0,0,0.3)',
    objectFit: 'fill'
  },
});

function TopBar({userCountry}) {
  const classes = useStyles();
  const data = useCovidApi(`${countries}${userCountry}`, { initialData: null });

  return (
    <AppBar position="sticky" color="transparent" className={classes.root}>
      { data ?
          <Grid container justify="center" alignItems="center" spacing={5}>
            <Grid item><img src={data.countryInfo.flag} alt={data.country} className={classes.flag} /></Grid>
            <Grid item>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <AirlineSeatFlatTwoToneIcon fontSize="large" className="red"/>
                </Grid>
                <Grid item>
                  <Typography variant="h6" className="red">
                    {data.cases.toLocaleString()}
                  </Typography>
                </Grid>
                <Grid item>
                  <MoodBadTwoToneIcon fontSize="large" className="gray" />
                </Grid>
                <Grid item>
                  <Typography variant="h6" className="gray">
                    {data.deaths.toLocaleString()}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <AirlineSeatFlatTwoToneIcon fontSize="large" className="red"/>
                </Grid>
                <Grid item>
                  <Typography variant="h6" className="red">
                    {data.todayCases.toLocaleString()}
                  </Typography>
                </Grid>
                <Grid item>
                  <MoodBadTwoToneIcon fontSize="large" className="gray" />
                </Grid>
                <Grid item>
                  <Typography variant="h6" className="gray">
                    {data.todayDeaths.toLocaleString()}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        : <div>Cool</div>
      }
    </AppBar>
  )
}

export default TopBar