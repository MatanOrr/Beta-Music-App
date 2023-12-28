import { Box } from "@mui/material";
import _ from "lodash";
import React, { useState } from "react";
import { KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";
import DimensionsProvider from "./DimensionsProvider.js";
import RecordingPiano from "./RecordingComp.jsx";
import SoundfontProvider from "./SoundfontProvider.js";
import "./customPianoStyles.css"; // import a set of overrides

// webkitAudioContext fallback needed to support Safari
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = "https://d1pzp51pvbm36p.cloudfront.net";

const noteRange = {
  first: MidiNumbers.fromNote("c4"),
  last: MidiNumbers.fromNote("c5"),
};

const keyboardShortcuts = KeyboardShortcuts.create({
  firstNote: noteRange.first,
  lastNote: noteRange.last,
  keyboardConfig: KeyboardShortcuts.HOME_ROW,
});

export default function OSPiano(props) {
  const updateLastNote = props.updateLastNote;

  const updateNote = (midiNumber) => {
    updateLastNote(midiNumber);
  };

  return (
    <div>
      <DimensionsProvider>
        {({ containerWidth, containerHeight }) => (
          <SoundfontProvider
            instrumentName="acoustic_grand_piano"
            audioContext={audioContext}
            hostname={soundfontHostname}
            render={({ isLoading, playNote, stopNote }) => (
              <RecordingPiano
                noteRange={noteRange}
                width={containerWidth * 0.5}
                playNote={playNote}
                stopNote={stopNote}
                targetNote={props.targetNote}
                updateNote={(midiNumber) => {
                  updateNote(midiNumber);
                }}
                disabled={isLoading}
                keyboardShortcuts={keyboardShortcuts}
              />
            )}
          />
        )}
      </DimensionsProvider>
    </div>
  );
}
