import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function HowToPlay() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5">
            <b>How To Play The Game</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To play the Note Identifier Game, select the correct note on the
            piano; According the note on the staff.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
