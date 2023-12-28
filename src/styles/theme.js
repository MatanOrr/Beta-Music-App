import { createTheme, useTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

export default function Theme() {
  const theme = useTheme();
  theme.palette.background.paper = purple[50];
  theme.palette.background.default = green[50];
  return theme;
}
