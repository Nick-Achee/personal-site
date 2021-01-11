import React from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Switch, Typography, Button } from "@material-ui/core";
import theme from "../src/theme";

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
          <Typography variant="h5" href="/index.js" className={classes.title}><Link href="/index.js"><a><Button href="/index.js">
            NICK ACHEE</Button></a></Link>
          </Typography>
          <Button href="/">Home</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
