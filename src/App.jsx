import "./App.css";
import React from "react";
import HomePage from "./pages/Home.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Notation } from "react-abc";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#fff",
    },
    background: {
      default: "#f7c9c9",
      paper: "#ef7b7b",
    },
  },
});

function App() {
  return (
    <div id="App">
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
