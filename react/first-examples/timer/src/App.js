import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      number: 5
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={() => this.startTimer()}>Start</button>
        <button onClick={() => this.resetTimer()}>Reiniciar</button>
      </div>
    )
  }

  startTimer() {
    this.timer = setInterval(() => {
      if (this.state.number > 0) {
        this.setNumber()
      } else {
        clearInterval(this.timer)  
      }
    }, 1000)

  }

  setNumber() {
    this.setState({
      number: this.state.number - 1 
    })
  }

  resetTimer() {
    clearInterval(this.timer)
    this.setState({
      number: 5
    })
  }
}

export default App;
