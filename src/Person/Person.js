import React from 'react';
import "./Person.css";
const person = (props) => {
  return (
    <div className="person">
      <p>
        My name is {props.name} and my age is {props.age}.
        <a herf='javascript:;' className="red" onClick={props.deletePerson}>Delete</a>
      </p>
      {props.children}
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
}

export default person;
