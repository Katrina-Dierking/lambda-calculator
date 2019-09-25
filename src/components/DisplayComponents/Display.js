import React from "react";

const Display = ({ displayValue }) => {

  return (
    <input
      className = "calculatorScreen"
      value = {displayValue}
      type = "text"
      disabled
    />
  );
};

export default Display; 
