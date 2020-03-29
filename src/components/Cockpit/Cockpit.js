import React from 'react'

const Cockpit = (props) => {
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
      >
        Toggle Show
      </button>
    </div>
  )
}

export default Cockpit;
