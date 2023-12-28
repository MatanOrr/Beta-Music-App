import React, { useState, useEffect } from "react";
// import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Paper from "@mui/material/Paper";
import ButtonAppBar from "../components/AppBar";
import MusicClefs from "../components/NotesStave/MusicClefs";
import OSPiano from "../components/Piano/OSPiano";
import Alert from "@mui/material/Alert";

function AlertComp(props) {
  let userSuccess = props.userSuccess;
  let targetNote = props.targetNote;
  if (userSuccess == null) {
    return null;
  }

  return (
    <div>
      {userSuccess ? (
        <Alert severity="success">
          You got it! The note is {targetNote} Try another note.
        </Alert>
      ) : (
        <Alert severity="error">Try again!</Alert>
      )}
    </div>
  );
}

export default function HomePage() {
  let generateRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const [targetNote, setTargetNote] = useState(generateRandomNumber(60, 72));

  const [lastNotePlayed, setLastNotePlayed] = useState(null);

  const [userSuccess, setUserSuccess] = useState(null);

  const [userScore, setUserScore] = useState(0);

  useEffect(() => {
    // Define checkNote inside useEffect or outside of the component as a utility
    const checkNote = () => {
      if (lastNotePlayed === targetNote) {
        console.log("You got it!");
        setLastNotePlayed(null);
        setUserSuccess(true);
        updateTargetNote();
        setUserScore(userScore + 1);
      } else if (lastNotePlayed != null) {
        setUserSuccess(false);
        console.log("Try again!");
      }
    };

    if (lastNotePlayed != null) {
      // Assuming null means no note has been played yet
      checkNote();
    }
  }, [lastNotePlayed, targetNote, userScore]); // Run the effect only if lastNotePlayed or targetNote changes

  const updateTargetNote = () => {
    setTargetNote(generateRandomNumber(60, 72));
    console.log("Target note is now: ", targetNote);
  };

  const updateLastNote = (midiNumber) => {
    setLastNotePlayed(midiNumber);
    console.log("Last note played is now: ", lastNotePlayed);
  };

  const DebugInfo = () => {
    return (
      <Paper>
        <p>Target note: {targetNote}</p>
        <p>Last note played: {lastNotePlayed}</p>
        <p>User success: {userSuccess ? "true" : "false"}</p>
        <p>User score: {userScore}</p>
      </Paper>
    );
  };

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
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid xs={12}>
          <ButtonAppBar />
          <DebugInfo />
        </Grid>

        <Grid item xs>
          <Paper></Paper>
        </Grid>

        <Grid
          id="MusicClefs"
          item
          xs={6}
          spacing={1}
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <MusicClefs
            targetMidiNum={targetNote}
            updateTargetNote={updateTargetNote}
            userSuccess={userSuccess}
          />
          <AlertComp userSuccess={userSuccess} targetNote={targetNote} />
        </Grid>

        <Grid item xs>
          <Paper></Paper>
        </Grid>

        <Grid item xs>
          <Paper></Paper>
        </Grid>

        <Grid item xs={6}>
          <OSPiano updateLastNote={updateLastNote} />
        </Grid>

        <Grid item xs>
          <Paper></Paper>
        </Grid>
      </Grid>
    </>
  );
}
