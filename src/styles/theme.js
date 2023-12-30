import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";
import React from "react";

export const CustomGridContainer = ({ children, ...rest }) => (
  <Grid
    container
    spacing={4}
    direction="column"
    alignItems="center"
    justifyContent="space-evenly"
    {...rest}
  >
    {children}
  </Grid>
);

export const CustomGridItem = ({ xs, children, ...rest }) => (
  <Grid
    item
    xs={xs}
    justifyContent="space-evenly"
    alignItems="center"
    {...rest}
  >
    {children}
  </Grid>
);

export const CustomGridWrapper = ({ xs, children, ...rest }) => (
  <Grid container {...rest}>
    <Grid item xs></Grid>

    <Grid xs={xs}>{children}</Grid>

    <Grid item xs></Grid>
  </Grid>
);

export function Theme() {
  const theme = useTheme();
  return theme;
}
