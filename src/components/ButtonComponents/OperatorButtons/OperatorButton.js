import React from "react";

export const OperatorButton = (props) => {
  console.log(props);
  return (
    <button className = "oprBtn"
    >
    {props.operator1}
    
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};
