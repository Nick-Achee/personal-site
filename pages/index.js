import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import { Avatar, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginBottom: "35%",
    marginTop: "35%"
    
  },

  body: {
    width: 550,
  },

  great: {
    paddingBottom: "10%"
  }
}));

export default function Index() {
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Avatar className={classes.large} src="/headshotcircle.png" />
        </Grid>
        <div className={classes.body}>
          <Typography variant="h4" className={classes.great}>Hey, I'm Nick, nice to meet you 👋</Typography>
          <Typography variant="h6">
            Digital Marketer of sorts, I can provide solutions for planning content creation, development, and placement
            of content across various web platforms to ensure optimum marketing efficiency. I work well with Adobe
            Creative Cloud, Asana, G Suite, Zapier, Facebook Ads and some experience with landing pages using the React
            JavaScript framework Next.js as a current best practice PWA’s offering unparalleled SEO capabilities.
            Extremely adaptable and a world-class Google researcher. Deeply passionate about Innovation.
          </Typography>
        </div>
      </Grid>
      <Copyright />
    </div>
  );
}
