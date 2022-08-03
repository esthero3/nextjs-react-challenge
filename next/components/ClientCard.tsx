import React from "react";
import { ProgressBar } from "./ProgressBar";

export const ClientCard = () => {
  return (
    <div className="card-container">
      <ProgressBar progress={50} />
      <h2>Temi Adeola</h2>
      <h2>Due date: Aug 20th, 2022</h2>
      <h2>T1 Checklist</h2>
    </div>
  );
};
