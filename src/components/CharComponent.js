import React from "react";

const charComponent = (props) => {
  const textStyle = {
    border: "1px solid #999",
    padding: '0 3px',
    cursor: 'pointer',
    outline: 'none',
    color: "#333",
    fontSize: '20px',
    display: 'inline-block',
    margin: '3px',
    minHeight: '10px'
  }
  return (
    <p
      style={textStyle}
      onClick={props.clicked}
    >
      {props.inputText}
    </p>
  )
}

export default charComponent;
