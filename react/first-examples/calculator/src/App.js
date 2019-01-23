import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      number1: '',
      number2: '',
      sign: '',
      result: ''
    }

    // this.handleFirstInputOnchange = this.handleFirstInputOnchange.bind(this)
    // this.handleSecondInputOnchange = this.handleSecondInputOnchange.bind(this)
    // this.setSign = this.setSign.bind(this)
    // this.calculate = this.calculate.bind(this)
  }

  handleFirstInputOnchange(e) {
    this.setState({
      number1: Number(e.target.value)
    })
  }

  handleSecondInputOnchange(e) {
    this.setState({
      number2: Number(e.target.value)
    })
  }

  setSign(sign) {
    this.setState({
      sign: sign
    })
  }

  calculate() {
    const number1 = this.state.number1
    const number2 = this.state.number2
    const sign = this.state.sign
    let result

    if (sign === '+') result = number1 + number2
    else if (sign === '-') result = number1 - number2
    else if (sign === '*') result = number1 * number2
    else if (sign === '/') result = number1 / number2

    this.setState({
      result: eval(`this.state.number1 ${sign} this.state.number2`)
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={(e) => this.handleFirstInputOnchange(e)}/>

        <button onClick={() => this.setSign('+')}>+</button>
        <button onClick={() => this.setSign('-')}>-</button>
        <button onClick={() => this.setSign('*')}>*</button>
        <button onClick={() => this.setSign('/')}>/</button>

        <input type="text" onChange={(e) =>this.handleSecondInputOnchange(e)}/>

        <button onClick={() => this.calculate()}>=</button>

        <span>{this.state.result}</span>
      </div>
    )
  }
}

export default App;