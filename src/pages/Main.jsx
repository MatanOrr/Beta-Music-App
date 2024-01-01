import { Alert, AlertTitle } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import ButtonAppBar from "../components/AppBar";
import HowToPlay from "../components/Instructions.jsx";
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
      checkNote();
    }
  });

  const updateTargetNote = () => {
    setTargetNote(generateRandomNumber(60, 72));
    console.log("Target note is now: ", targetNote);
  };

  const updateLastNote = (midiNumber) => {
    setLastNotePlayed(midiNumber);
    console.log("Last note played is now: ", lastNotePlayed);
  };

  return (
    <CustomGridContainer>
      <CustomGridItem xs={12}>
        <ButtonAppBar />
      </CustomGridItem>

      <CustomGridItem xs={6}>
        <HowToPlay />
      </CustomGridItem>

      <CustomGridItem xs={6}>
        <MusicClefs
          targetMidiNum={targetNote}
          updateTargetNote={updateTargetNote}
          userSuccess={userSuccess}
        />
      </CustomGridItem>

      <CustomGridItem xs={2} alignItems="start" justifyContent="start">
        <Typography variant="h6" color="#008100">
          Your current score is: {userScore}
        </Typography>
      </CustomGridItem>

      <CustomGridItem xs={6} alignItems="start" justifyContent="start">
        <AlertComp userSuccess={userSuccess} targetNote={previousTargetNote} />
      </CustomGridItem>

      <CustomGridItem xs={6} sx={{ textAlign: "center" }}>
        <OSPiano updateLastNote={updateLastNote} />
      </CustomGridItem>
    </CustomGridContainer>
  );
}
