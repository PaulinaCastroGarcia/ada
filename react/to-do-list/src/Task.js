import React, { Component } from 'react';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      editInput: this.props.task.text
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.saveEditOnCLick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.saveEditOnCLick);
  }

  render() {
    return (
      <li key={this.props.task.id}>
        <input type="checkbox" onClick={() => this.props.toggleDoneTask(this.props.task.id)}/>

        {this.state.editing === false && 
        <span className={this.props.task.done ? 'done' : ''}>{this.props.task.text}</span>}

        {this.state.editing === true && 
        <input 
          type="text" 
          ref = {this.setInputRef}
          value={this.state.editInput}
          onChange={this.handleInputEditChange}
          onKeyDown={this.saveEdit}
        />}

        <button className="edit" onClick={this.handleEditIconClick}><i className="far fa-edit"></i></button>
        <button className="delete" onClick={() => this.props.deleteTask(this.props.task.id)}><i className="fas fa-trash"></i></button>
      </li>
    );
  }

  handleEditIconClick = (e) => {
    this.setState({
      editing : true,
    })  
  }

  handleInputEditChange = (e) => {
    this.setState({
      editInput: e.target.value
    })
  }

  saveEdit = (e) => {
    if (e === null|| e.keyCode === 13 ) {
      this.setState({
        editing: false
      })

    this.props.handleSaveEdit(this.state.editInput,this.props.task.id)  
    }
  }

  setInputRef = (node) => {
    this.wrapperRef = node;
  }

  saveEditOnCLick = (e) => {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      this.saveEdit(null)
    }
  }
}
 
export default Task;
