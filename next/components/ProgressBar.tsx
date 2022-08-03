import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { CircularProgressbarStyles } from "react-circular-progressbar/dist/types";

interface ProgressProps {
  progress: number;
}

export const ProgressBar = (props: ProgressProps) => {
  const style: CircularProgressbarStyles = buildStyles({
    textColor: "#388087",
    pathColor: "#DEAB39",
    trailColor: "#EDDAAB",
    strokeLinecap: "butt",
    textSize: "23px",
    pathTransitionDuration: 1,
  });

  return (
    <>
      <CircularProgressbar
        value={props.progress}
        text={`${props.progress}%`}
        styles={style}
      />
    </>
  );
};
