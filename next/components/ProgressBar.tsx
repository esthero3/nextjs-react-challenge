import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { CircularProgressbarStyles } from "react-circular-progressbar/dist/types";

interface ProgressProps {
  progress: number;
}

export const ProgressBar = (props: ProgressProps) => {
  const style: CircularProgressbarStyles = buildStyles({
    textColor: "#00424A",
    pathColor: "#016370",
    trailColor: "#66A5AD",
    strokeLinecap: "butt",
    textSize: "23px",
    pathTransitionDuration: 1,
  });

  return (
    <>
      <CircularProgressbar
        className="w-6/12 my-5 flex justify-center"
        value={props.progress}
        text={`${props.progress}%`}
        strokeWidth={8}
        styles={style}
      />
    </>
  );
};
