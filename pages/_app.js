import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import NavBar from "../components/NavBar";
import { Paper } from "@material-ui/core";
import { useState } from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Switch, Typography, Button } from "@material-ui/core";
import Footer from "../components/Footer";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

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

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const classes = useStyles();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  const [darkMode, setDarkMode] = useState("false");

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });
  return (
    <React.Fragment>
      <Head>
        <title>Stories by Nick</title>

        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <div className={classes.root}>
          <AppBar elevation={0} color="transparent" position="static">
            <Toolbar>
              <Typography variant="h5" className={classes.title}>
                NICK ACHEE
              </Typography>
              <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)}>
                {" "}
              </Switch>
              <Button href="/">Home</Button>
              <Button href="/content">content</Button>
            </Toolbar>
          </AppBar>
        </div>
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
