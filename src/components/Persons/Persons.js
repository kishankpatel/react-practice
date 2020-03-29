import React from 'react'

import Person from './Person/Person'

const Persons = (props) => props.persons.map((person, index) => {
    return <Person
      name={person.name}
      age={person.age}
      deletePerson={() => props.clicked(index)}
      key={"person_" + person.id}
      changed={(event) => props.changed(event, person.id)}/>
  })

export default Persons;
