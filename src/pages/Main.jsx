import React, { useEffect, useState } from "react";
// import Button from "@mui/material/Button";
import { Alert, AlertTitle, Paper } from "@mui/material";
import ButtonAppBar from "../components/AppBar";
import MusicClefs from "../components/NotesStave/MusicClefs";
import OSPiano from "../components/Piano/OSPiano";
import { CustomGridContainer, CustomGridItem } from "../styles/theme.js";
import { MidiToNoteName } from "../utils/MidiToNote.jsx";

function AlertComp({ userSuccess, targetNote }) {
  // Message dictionary
  let targetNoteName = MidiToNoteName(targetNote);
  const messages = {
    start: "Start the game by playing the first note!",
    success: `You got it! The note is ${targetNoteName}. Try another note.`,
    error: "Try again!",
  };

  const titles = {
    start: "Start!",
    success: "You got it!",
    error: "Wrong Note!",
  };

  // Determine the alert type and message based on userSuccess
  let alertProps;
  if (userSuccess === null) {
    alertProps = {
      severity: "info",
      message: messages.start,
      title: titles.start,
    };
  } else if (userSuccess) {
    alertProps = {
      severity: "success",
      message: messages.success,
      title: titles.success,
    };
  } else {
    alertProps = {
      severity: "error",
      message: messages.error,
      title: titles.error,
    };
  }

  return (
    <Alert variant="outlined" severity={alertProps.severity}>
      <AlertTitle>{alertProps.title}</AlertTitle>
      {alertProps.message}
    </Alert>
  );
}

function Item(props) {
  const { ...other } = props;
  return <Paper {...other} />;
}

export default function HomePage() {
  let generateRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const [targetNote, setTargetNote] = useState(generateRandomNumber(60, 72));

  const [previousNotes, setPreviousNotes] = useState([]);

  const [lastNotePlayed, setLastNotePlayed] = useState(null);

  const [userSuccess, setUserSuccess] = useState(null);

  const [userScore, setUserScore] = useState(0);

  let previousTargetNote = previousNotes[previousNotes.length - 1];
  if (previousTargetNote === undefined) {
    previousTargetNote = targetNote;
  }

  const pushTargetNoteToPreviousNotes = () => {
    setPreviousNotes([...previousNotes, targetNote]);
  };

  useEffect(() => {
    // Define checkNote inside useEffect or outside of the component as a utility
    const checkNote = () => {
      if (lastNotePlayed === targetNote) {
        console.log("You got it!");
        setLastNotePlayed(null);
        setUserSuccess(true);
        pushTargetNoteToPreviousNotes();
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

  // const DebugInfo = () => {
  //   return (
  //     <Paper>
  //       <p>Target note: {targetNote}</p>
  //       <p>Last note played: {lastNotePlayed}</p>
  //       <p>User success: {userSuccess ? "true" : "false"}</p>
  //       <p>User score: {userScore}</p>
  //       <p>Previous: {MidiToNoteName(previousTargetNote)}</p>
  //       <p>Current: {MidiToNoteName(targetNote)}</p>
  //     </Paper>
  //   );
  // };

  return (
    <CustomGridContainer>
      <CustomGridItem xs={12}>
        <ButtonAppBar />
      </CustomGridItem>

      <CustomGridItem xs={6}>
        <MusicClefs
          targetMidiNum={targetNote}
          updateTargetNote={updateTargetNote}
          userSuccess={userSuccess}
        />
      </CustomGridItem>

      <CustomGridItem xs={6} alignItems="start" justifyContent="start">
        <AlertComp userSuccess={userSuccess} targetNote={previousTargetNote} />
      </CustomGridItem>

      <CustomGridItem xs={6} sx={{ textAlign: "center" }}>
        <OSPiano updateLastNote={updateLastNote} />
      </CustomGridItem>
    </CustomGridContainer> // Grid container
  );
}
