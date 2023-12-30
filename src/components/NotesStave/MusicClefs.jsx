import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Notation } from "react-abc";
import NoteGenerator from "./NoteGenerator";
import { Theme } from "../../styles/theme";

export default function MusicClefs(props) {
  let targetMidiNum = props.targetMidiNum;
  let userSuccess = props.userSuccess;
  const theme = Theme();

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
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs></Grid>

      <Grid
        sx={{ background: theme.palette.background.default }}
        item
        xs={6}
        alignItems="center"
        justifyContent="center"
        paddingTop={"10px"}
      >
        <Notation
          notation={notation}
          engraverParams={{
            scale: 3,
          }}
        />
      </Grid>

      <Grid item xs></Grid>
    </Grid>
  );
}
