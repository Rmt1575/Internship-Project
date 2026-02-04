import React from "react";
import { useParams } from "react-router-dom";

export const TeamDetails = () => {
  const teamName = useParams().name;

  return (
    <div style={{ color: "whitesmoke" }}>
      <h1 style={{ textAlign: "center" }}>Team Details : {teamName}</h1>
    </div>
  );
};
