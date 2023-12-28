import "./App.css";
import React from "react";
import HomePage from "./pages/Main.jsx";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./styles/theme.js";

function App() {
  const theme = Theme;
  return (
    <div id="App">
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
