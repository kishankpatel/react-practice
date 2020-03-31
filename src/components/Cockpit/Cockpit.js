import React, { useEffect, useRef } from 'react';

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  //lifecycle hook for functional component -- runs after render cycle
  useEffect(() => {
    toggleBtnRef.current.click();
    console.log("[Cockpit.js] useEffect")
    setTimeout(() => {
      console.log("Fetched data from cloud.")
    }, 1000)
  }, [])

  let classes = ''
  if (props.persons.length <= 1) {
    classes = 'red bold'
  }

  const btnStyle = {
    border: "1px solid #999",
    padding: '10px',
    cursor: 'pointer',
    outline: 'none',
    color: "#333",
    fontSize: '20px'
  }
  if (props.showPersons) {
    btnStyle.backgroundColor = 'green'
    btnStyle.color = 'white'
  }

  return (
    <div>
      <h1 className={classes}>Total persons: {props.persons.length}</h1>
      <button
        style={btnStyle}
        onClick={props.clicked}
        ref={toggleBtnRef}
      >
        Toggle Show
      </button>
    </div>
  )
}

export default Cockpit;
