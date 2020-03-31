import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./Person.css";
class Person extends Component {

  constructor (props) {
    super(props);
    this.inputElementRef = React.createRef()
  }

  componentDidMount () {
    this.inputElementRef.current.focus()
  }

  render () {
    return (
      <React.Fragment>
        <div className="person">
          <p>
            My name is {this.props.name} and my age is {this.props.age}.
            <button className="red" onClick={this.props.deletePerson}>Delete</button>
          </p>
          {this.props.children}
          <input type="text" ref={this.inputElementRef} onChange={this.props.changed} value={this.props.name} />
        </div>
        <p>Hello...</p>
      </React.Fragment>
    )
  }

}

Person.propTypes = {
  name: PropTypes.string,
  deletePerson: PropTypes.func,
  changed: PropTypes.func,
  age: PropTypes.number

}

export default Person;
