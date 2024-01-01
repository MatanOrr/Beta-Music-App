export default function NoteGenerator(midiNum) {
  const notes = [
    "C",
    "^C",
    "D",
    "^D",
    "E",
    "F",
    "^F",
    "G",
    "^G",
    "A",
    "^A",
    "B",
    "c",
  ];

  const midiToNoteName = (midiNum) => notes[midiNum - 60];
  let noteName = midiToNoteName(midiNum);
  return noteName;
}

// eslint-disable-next-line import/no-anonymous-default-export
