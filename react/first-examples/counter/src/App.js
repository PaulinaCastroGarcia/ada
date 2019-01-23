import React, { Component } from 'react';
import ButtonsContador from './ButtonsContador';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      number: 0
    }

    this.handleUpdateCount = this.handleUpdateCount.bind(this)

  }

  handleUpdateCount(num) {
    this.setState({
      number: num
    })
  }

  render() {
    return(
      <div>
        <span> {this.state.number} </span>
        <ButtonsContador number={this.state.number} updateCount={this.handleUpdateCount}></ButtonsContador>
      </div>
    )
  }
}

export default App;