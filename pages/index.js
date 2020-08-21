import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import { Avatar, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NextSeo } from "next-seo";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginBottom: "35%",
    marginTop: "35%",
  },

  paper: {
    maxWidth: 550,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },

  greet: {
    paddingBottom: "10%",
  },

  root: {},
}));

export default function Index() {
  const classes = useStyles();

  const SEO = {
    title: "Stories by Nick",

    description: "Digital marketing laguna beach",

    openGraph: {
      title: "Stories by Nick",
      description: "Digital marketing laguna beach",
    },
  };

  return (
    <main style={{ padding: 20 }}>
      <NextSeo {...SEO} />
      <Grid container direction="column" justify="center" alignItems="center" className={classes.root}>
        <Grid item>
          <Avatar className={classes.large} alt="Nick Achee" src="/headshotcircle.png" />
        </Grid>

        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item xs>
              <Typography variant="h4" className={classes.greet}>
                Hey, I'm Nick, <br /> nice to meet you 👋
              </Typography>
              <Typography variant="h6">
                Digital Marketer of sorts, I can provide solutions for planning content creation, development, and
                placement of content across various web platforms to ensure optimum marketing efficiency. I work well
                with Adobe Creative Cloud, Asana, G Suite, Zapier, Facebook Ads and some experience with landing pages
                using the React JavaScript framework Next.js as a current best practice offering blazing fast load
                times. Extremely adaptable and a world-class Google researcher. Deeply passionate about Innovation.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </main>
  );
}
