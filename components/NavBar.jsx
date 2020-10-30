import React from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Switch, Typography, Button } from "@material-ui/core";
import theme from "../src/theme";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            NICK ACHEE
          </Typography>
          <Button href="/">Home</Button>
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)}></Switch>
        </Toolbar>
      </AppBar>
    </div>
  );
}
