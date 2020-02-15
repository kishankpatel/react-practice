import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Kishan", age: 23 },
      { name: "Jerry", age: 27 },
      { name: "Stephanie", age: 28 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: "Jerry", age: 27 },
        { name: "Stephanie", age: 28 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    let newPersons = this.state.persons
    newPersons[1].name = event.target.value
    this.setState({
      persons: newPersons
    })
    // this.setState({
    //   persons: [
    //     { name: "kishan", age: 23 },
    //     { name: event.target.value, age: 27 },
    //     { name: "Stephanie", age: 28 }
    //   ]
    // })
  }

  render() {
    const btnStyle = {
      backgroundColor: "blue",
      border: "1px solid #999",
      padding: '3px',
      cursor: 'pointer',
      outline: 'none',
      color: "#fff"
    }
    return (
      <div className="App">
        <h1>Hi</h1>
        <button
          style={btnStyle}
          onClick={() => this.switchNameHandler("Kishan Kumar")}
        >
          Change Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Kishan Kumar Patel")}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          change={this.nameChangeHandler}
          />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
  // return React.createElement("div", {className: 'App'}, 'hi');
}

export default App;
