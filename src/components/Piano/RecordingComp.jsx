import React, { useState, useCallback } from "react";
import { Piano } from "react-piano";

function RecordingPiano({ playNote, ...pianoProps }) {
  const [lastNotePlayed, setLastNotePlayed] = useState(null);

  const midiToNoteName = (midiNum) => {
    const notes = [
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
    ];
    const octave = Math.floor(midiNum / 12) - 1;
    const note = midiNum % 12;
    return notes[note] + octave;
  };

  // Convert onPlayNoteInput to useCallback
  const onPlayNoteInput = useCallback(
    (midiNumber) => {
      setLastNotePlayed(midiNumber);
      pianoProps.updateNote(midiNumber);
    },
    [pianoProps]
  );

  // Render the component
  return (
    <div>
      <Piano
        playNote={playNote}
        onPlayNoteInput={onPlayNoteInput}
        {...pianoProps}
      />
      <p>
        Last Note Played: {midiToNoteName(lastNotePlayed)}, Midi:{" "}
        {lastNotePlayed}
      </p>
    </div>
  );
}

export default RecordingPiano;
