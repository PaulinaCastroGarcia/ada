import React, { Component } from 'react'

class ButtonsContador extends Component {
  sum() {
    const number= this.props.number + 1
    this.props.updateCount(number)
  }

  sub() {
    const number= this.props.number - 1
    this.props.updateCount(number)
  }

  render() {
    return(
      <div>
        <button onClick={() => this.sum()}>+</button>
        <button onClick={() => this.sub()}>-</button>
      </div>
    )
  }
}

export default ButtonsContador