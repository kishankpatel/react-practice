import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import AuthContext from '../context/auth-context';
class App extends Component {
  constructor (props) {
    super(props);
    console.log('[App.js] constructor: app.js')
  }
  state = {
    persons: [
      { id: 1, name: "Kishan", age: 23 },
      { id: 2, name: "Jerry", age: 27 },
      { id: 3, name: "Stephanie", age: 28 }
    ],
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps: app.js')
    console.log('state: ', state)
    console.log('props: ', props)
    return state;
  }

  componentDidMount () {
    // You can do some HTTP request
    console.log('[App.js] componentDidMount: app.js')
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate: app.js')
    return true;
  }

  componentDidUpdate () {
    console.log('[App.js] componentDidUpdate: app.js')
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
    // for Synchronously update
    // this.setState((prevState, props) => {
    //   return {
    //     showPersons: !prevState.showPersons
    //   }
    // })
  }

  deletePerson = (personIndex) => {
    // const persons = this.state.persons.slice()  // alternative
    const persons = [...this.state.persons] // morden approach
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  render() {
    console.log('[App.js] render: app.js')
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
