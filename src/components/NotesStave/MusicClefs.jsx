import { Box, Button, Container, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Notation } from "react-abc";
import NoteGenerator from "./NoteGenerator";
import palette from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

export default function MusicClefs(props) {
  let targetMidiNum = props.targetMidiNum;
  let userSuccess = props.userSuccess;

  const [note, setNote] = useState(NoteGenerator(targetMidiNum));

  // use effect for when the target note changes
  useEffect(() => {
    setNote(NoteGenerator(targetMidiNum));
  }, [targetMidiNum, userSuccess]);

  let notation = `
      X: 1
      M: 1/4
      L: 1/4
      %%staves {V1}
      [V: V1] ${note}|]`;

  return (
    <Paper sx={{ color: "#a58ef9", background: "#fdf7e4" }}>
      <Notation
        notation={notation}
        engraverParams={{
          scale: 3,
        }}
      />
    </Paper>
  );
}
