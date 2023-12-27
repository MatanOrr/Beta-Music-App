import { Box } from "@mui/material";
import React from "react";
import { Notation } from "react-abc";
import notation from "./ABCData.js";

export default function MusicClefs() {
  return (
    <Box>
      <h2>Guess the note!</h2>
      <Box style={{ border: "1px solid black" }}>
        <Notation
          notation={notation}
          engraverParams={{
            scale: 2,
          }}
        />
      </Box>
    </Box>
  );
}
