import React, { Component } from 'react'

import Person from './Person/Person'

class Persons extends Component {

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // Will only execute after updating props/state
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  // Will only execute after updating props/state
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: "Snapshot!" };
  }

  // Will only execute after updating props/state
  componentDidUpdate(preProps, preState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log('[Persons.js] componentDidUpdate =>', snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount")
  }

  // Will execute always(creating and updating component)
  render () {
    console.log('==> rendering: Person.js')
    return this.props.persons.map((person, index) => {
      return <Person
        name={person.name}
        age={person.age}
        deletePerson={() => this.props.clicked(index)}
        key={"person_" + person.id}
        changed={(event) => this.props.changed(event, person.id)}/>
    })
  }
}

export default Persons;
