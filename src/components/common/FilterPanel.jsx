import React from "react";

export const FilterPanel = ({ children }) => {
  return (
    <>
      <button className="default-button panel">{children}</button>
    </>
  );
};
