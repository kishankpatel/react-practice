import React, { Component } from 'react';
import './App.css';
import ValidationComponent from "./components/ValidationComponent"
import CharComponent from "./components/CharComponent"

class App extends Component {
  state = {
    inputLength: 0,
    inputText: ''
  }
  inputHandler = (event) => {
    const val = event.target.value
    this.setState({
      inputLength: val.length,
      inputText: val
    })
  }

  deleteCharHandler = (index) => {
    const text = this.state.inputText.split('')
    text.splice(index, 1)
    this.setState({
      inputText: text.join('')
    })
  }

  render() {
    const chars = this.state.inputText.split('')
    const charList = chars.map( (c, index) => {
      return (
        <CharComponent
          inputText={c}
          key={'char_' + index}
          clicked={() => this.deleteCharHandler(index)}/>
      )
    })
    return (
      <div className="input_sec">
        <input type="text"
          onChange={this.inputHandler}
          value={this.state.inputText}/>
        Input Length: {this.state.inputLength}
        <br />
        <ValidationComponent inputLength={this.state.inputLength} />
        {charList}
      </div>
    )
  }
}

export default App;
