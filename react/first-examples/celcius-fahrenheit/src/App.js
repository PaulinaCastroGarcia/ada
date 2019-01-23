import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      celcius: '',
      fahrenheit: ''
    }
  }

  handleCelciusOnChange(e) {
    this.setState({
      celcius: Number(e.target.value)
    })

    this.setState({
      fahrenheit: (1.8*Number(e.target.value)) + 32
    })
  }

  handleFahrenheitOnChange(e) {
    this.setState({
      fahrenheit: Number(e.target.value),
      celcius: (5/9)*(Number(e.target.value) - 32)
    })
  }

  render() {
    return (
      <div>
        <label>Celcius</label>
        <input type="text" value={this.state.celcius} onChange={(e) => this.handleCelciusOnChange(e)}/>
        <label>Fahrenheit</label>
        <input type="text" value={this.state.fahrenheit} onChange={(e) => this.handleFahrenheitOnChange(e)}/>
      </div>
    );
  }
}

export default App;
