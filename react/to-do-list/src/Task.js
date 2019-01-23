import React, { Component } from 'react';

class Task extends Component {
  render() {

    return (
      <li key={this.props.task.id}>
        <input type="checkbox" onClick={() => this.props.toggleDoneTask(this.props.task.id)}/>
        <span className={this.props.task.done ? 'done' : ''}>{this.props.task.text}</span> 
        <button className="delete" onClick={() => this.props.deleteTask(this.props.task.id)}><i class="fas fa-trash"></i></button>
      </li>
    );
  }
}
 
export default Task;
