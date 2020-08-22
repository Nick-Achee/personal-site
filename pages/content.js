import React from 'react';
import Container from '@material-ui/core/Container';

import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Stories from '../components/Stories'
import Feeds from '../components/Feeds'
import { Grid, Paper, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'

const useStyles =  makeStyles(() => ({

 pap: {
  padding: 5,
  margin: 20,
 },

 story_info: {
   marginTop: '2%',
  }
}));

export default function About() {
  const classes = useStyles();
  return (
    <div><Container><Typography variant="h5" align='center'>BRANDED <br /> ADVERTISEMENT</Typography></Container><Container>
      <Paper elevation={3} className={classes.pap}><Typography align='center' className={classes.story_info}>16:9 Vertical Format <br /> Instagram or Facebook Stories/Reels <br /> TikTok | Snapchat </Typography>
        <Stories /></Paper>
        <Paper elevation={3} className={classes.pap}><Typography align='center' className={classes.story_info}>4:5 Vertical Format <br /> Instagram or Facebook Feeds </Typography>
        <Feeds /></Paper></Container>
        </div>
  );
}
