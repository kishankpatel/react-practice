import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Kishan", age: 23 },
      { id: 2, name: "Jerry", age: 27 },
      { id: 3, name: "Stephanie", age: 28 }
    ],
    showPersons: true
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => { return p.id === id })
    // const person = Object.assign({}, this.state.persons[personIndex]) // alternative

    const person = { ...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  toggleShow = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  deletePerson = (personIndex) => {
    // const persons = this.state.persons.slice()  // alternative
    const persons = [...this.state.persons] // morden approach
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  render() {
    var persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePerson}
            changed={this.nameChangeHandler}
          />
        </div>
      )
    }
    return (
      <div className="App">
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.toggleShow}/>
        {persons}
      </div>
    );
  }
  // return React.createElement("div", {className: 'App'}, 'hi');
}

export default App;
