import * as React from "react";
// import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import ButtonAppBar from "../components/AppBar";
import MusicClefs from "../components/NotesStave/MusicClefs";
import OSPiano from "../components/Piano/OSPiano";

export default function HomePage() {
  return (
    <>
      <Grid
        style={{
          border: "1px solid black",
          padding: "10px",
          textAlign: "center",
        }}
        container
        spacing={2}
      >
        <Grid xs={12} id="AppBar">
          <ButtonAppBar />
        </Grid>

        <Grid xs={8} style={{ border: "1px solid black" }}>
          <MusicClefs />
        </Grid>

        <Grid xs={4} style={{ border: "1px solid black" }}></Grid>

        <Grid
          xs={12}
          style={{
            border: "1px solid black",
          }}
        >
          <OSPiano />
        </Grid>
      </Grid>
    </>
  );
}
