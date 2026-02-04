import React from "react";
import { useParams } from "react-router-dom";

export const Watch = () => {
  const movieName = useParams().name;

  return (
    <div style={{ color: "whitesmoke" }}>
      <h1 style={{ textAlign: "center" }}>Watching...{movieName}</h1>
    </div>
  );
};
