import React from "react";
import Typography from "@material-ui/core/Typography";
import { Avatar, Grid, Paper, Link } from "@material-ui/core";
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
                Hey, I'm Nick, <br /> nice to meet you<Link href="https://www.instagram.com/nicholasachee103">👋</Link>
              </Typography>{" "}
              <Typography variant="h6">
                I'm an all-around digital marketer. My speciality is providing solutions for planning content creation,
                development, and placement of content across various web platforms to ensure optimum marketing
                efficiency. I work well with Adobe Creative Cloud, Asana, G Suite, Zapier and Facebook Ads. I also have
                experience with landing pages using the React JavaScript framework Next.js that offer blazing fast load
                times. Beyond that, I'm extremely adaptable and a world-class Google researcher who's deeply passionate
                about Innovation.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </main>
  );
}
