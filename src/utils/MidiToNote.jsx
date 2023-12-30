/// Takes a midi number and returns the name of the note
/// Example: 60 -> C4
/// Example: 61 -> C4#

export function MidiToNoteName(midiNum) {
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
  const midiToNoteName = (midiNum) => notes[midiNum - 60];
  let noteName = midiToNoteName(midiNum);
  return noteName;
}
