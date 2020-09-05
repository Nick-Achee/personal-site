import React from "react";
import { Link, Typography, Avatar, Grid } from "@material-ui/core";
import MuiLink from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  small: {
    marginBottom: "35%",
    marginLeft: "35%",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="row" justify="center">
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "}
          <MuiLink color="inherit" href="https://nickachee.com/">
            Made by Nick
          </MuiLink>{" "}
          {new Date().getFullYear()}.<br />{" "}
          <Link href="mailto:nicholas.achee103@gmail.com">nicholas.achee103@gmail.com</Link>
        </Typography>
        <Link href="github.com/nick-achee">
          <Avatar className={classes.small} alt="Nick Achee" src="/GitHub-Mark.png" />
        </Link>
        <Link href="twitter.com/twitnickl">
          <Avatar className={classes.small} alt="Nick Achee" src="/Twitter.png" />
        </Link>
      </Grid>{" "}
    </div>
  );
}

export default Footer;
