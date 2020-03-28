import React from "react";

const validationComponent = (props) => {
  let warningMessage = null;
  if (props.inputLength < 5) {
    warningMessage = "Please input atleast 5 characters."
  } else if (props.inputLength > 20) {
    warningMessage = "Please input max 20 characters."
  }
  return (
    <div>
      <p>{warningMessage}</p>
    </div>
  )
}

export default validationComponent;
