import NextApp from "next/app";
import React from "react";
import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import AppWrapper from "../context/loginContext";
import { createMuiTheme } from "@material-ui/core";
import { green, purple } from "@material-ui/core/colors";
import UserWrapper from "../context/userContext";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#37D09C",
      main: "#37D09C",
      dark: "#37D09C",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#23c0e9",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

export default class App extends NextApp {
  // remove it here
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <UserWrapper>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </UserWrapper>
    );
  }
}
