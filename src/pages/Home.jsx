import * as React from "react";
// import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import ButtonAppBar from "../components/AppBar";
import MusicClefs from "../components/NotesStave/MusicClefs";
import OSPiano from "../components/Piano/OSPiano";
import Timer from "../components/Timer";

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

        <Grid id="MusicClefs" xs={6} style={{ border: "1px solid black" }}>
          <MusicClefs />
        </Grid>

        <Grid id="Timer" xs={6} style={{ border: "1px solid black" }}>
          <Timer />
        </Grid>

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
