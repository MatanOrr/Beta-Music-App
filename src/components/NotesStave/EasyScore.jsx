import React, { useRef, useEffect } from "react";
import Vex from "vexflow";

const MusicScore = () => {
  const outputDivRef = useRef(null);
  console.log("Debugging Div Ref:", outputDivRef.current); // Check what the ref contains

  useEffect(() => {
    console.log("Div Ref:", outputDivRef.current); // Check what the ref contains

    if (outputDivRef.current) {
      const { Factory, EasyScore, System } = Vex.Flow;

      const vf = new Factory({
        renderer: { element: outputDivRef.current, width: 500, height: 200 },
      });

      const score = vf.EasyScore();
      const system = vf.System();

      system
        .addStave({
          voices: [
            score.voice(score.notes("C#5/q, B4, A4, G#4", { stem: "up" })),
            score.voice(score.notes("C#4/h, C#4", { stem: "down" })),
          ],
        })
        .addClef("treble")
        .addTimeSignature("4/4");

      vf.draw();
    } else {
      console.error(
        "The div ref is not attached when trying to initialize VexFlow."
      );
    }
  }, []);

  return <div ref={outputDivRef} id="output"></div>;
};

export default MusicScore;
