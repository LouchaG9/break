import React from "react";

export const RandomTagline = () => {
  const taglines = [
    "Busy day? Sounds like you need a",
    "Need some time out? Take a",
    "Why not have a small",
    "Looks like you need a",
    "Got 5 minutes? That's enough for a",
    "Finally! It's time for your",
  ];
  const randomTagline = taglines[Math.floor(Math.random() * taglines.length)];

  return <h2>{randomTagline}</h2>;
};
