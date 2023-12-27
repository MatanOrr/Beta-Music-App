import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import React from "react";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Note Identifier Web App
          </Typography>
          <LoginButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function LoginButton() {
  return <Button color="inherit" size="lg"></Button>;
}
