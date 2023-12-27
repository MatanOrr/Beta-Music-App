import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

function TimerComp(start) {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds === 1) {
        setSeconds(0);
      } else if (start && seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    // Clean-up function
    return () => {
      clearInterval(intervalId);
    };
  }, [start, seconds]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {seconds > 0 ? <p>Timer: {seconds} seconds</p> : <p>Time is up!</p>}
      <br />
      <BorderLinearProgress variant="determinate" value={100 - seconds * 10} />
    </Box>
  );
}

export default function Timer() {
  const [startTimer, setStatTimer] = useState(false);

  return (
    <div>
      <TimerComp start={startTimer} />
      <br />
      <button onClick={() => setStatTimer}>Start Timer</button>
    </div>
  );
}
