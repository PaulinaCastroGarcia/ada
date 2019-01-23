import React, { Component } from 'react';

class Task extends Component {
  render() {
    let fontColor = this.props.task.done ? 'green' : 'red'
    return (
      <li className={fontColor}>
        {this.props.task.text}
        {this.props.task.done === true && <span> (done)</span>}
        {this.props.task.done === false && <span> (pending)</span>}
      </li>
    )
  }
}

export default Task;
