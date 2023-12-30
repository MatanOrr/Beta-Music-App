import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import "./App.css";
import HomePage from "./pages/Main.jsx";
import { Theme } from "./styles/theme.js";

function App() {
  return (
    <div id="App">
      <ThemeProvider theme={Theme()}>
        <HomePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
