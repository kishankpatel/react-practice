import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

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
    const btnStyle = {
      border: "1px solid #999",
      padding: '10px',
      cursor: 'pointer',
      outline: 'none',
      color: "#333",
      fontSize: '20px'
    }
    var persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePerson(index)}
              key={"person_" + person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi</h1>
        <button
          style={btnStyle}
          onClick={this.toggleShow}
        >
          Toggle Show
        </button>
        {persons}
      </div>
    );
  }
  // return React.createElement("div", {className: 'App'}, 'hi');
}

export default App;
