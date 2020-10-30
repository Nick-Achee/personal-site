import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";

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


export default function Switchr(props) {
const classes = useStyles();
const { Component, pageProps } = props;

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
    <DarkModeToggle checked={!darkMode} onChange={() => setDarkMode(!darkMode)}
      
      size={60}
    />
  );
};