import React, { useState, useEffect } from "react";

export const RandomColor = ({ children }) => {
  const colors = [
    "#3e6990",
    "#adbc91",
    "#eedeab",
    "#dabfcd",
    "#f1c7af",
    "#bacade",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const [color, setColor] = useState(colors);

  useEffect(() => {
    setColor(randomColor);
  }, []);

  return (
    <span className="random-color" style={{ color: color }}>
      {children}
    </span>
  );
};
