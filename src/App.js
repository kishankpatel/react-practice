import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Kishan", age: 23 },
      { name: "Jerry", age: 27 },
      { name: "Stephanie", age: 28 }
    ],
    showPersons: false
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

  toggleShow = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  nameChangeHandler = (event) => {
    let persons = this.state.persons
    persons[1].name = event.target.value
    this.setState({
      persons: persons
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
