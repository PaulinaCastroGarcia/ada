import React, { Component } from 'react';
import './App.css';
import Task from './Task';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      placeholder: '',
      tasks: [],
      totalTasks: 0,
      doneTasks: 0
    }
  }

  render() {
    const tasks = this.state.tasks.map((t) => 
      <Task 
        key={t.id}
        task={t}
        toggleDoneTask={this.toggleDoneTask}
        deleteTask={this.deleteTask}
        handleSaveEdit = {this.handleSaveEdit}
      />
    )

    return (
      <div className="App">
        <h1>To do list</h1>

        <p>{this.state.doneTasks} out of {this.state.totalTasks} done tasks</p>

        <form onSubmit={this.addToDo}>
          <input 
            type="text"
            placeholder={this.state.placeholder}
            value={this.state.input}
            onChange={this.handleInputChange}
            onKeyDown={this.handleInputKeyDown}
          />
          <button ><i className="fas fa-plus-circle"></i></button>
        </form>

        <ul>{tasks}</ul>
      </div>
    );
  }

  handleInputChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleInputKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault()
      this.addToDo(e)
    }
  }

  addToDo = (e) => {
    e.preventDefault()
    if (this.state.input !== '') {
      let tasks = this.state.tasks
      let newTask = {
          id: tasks.length === 0  ? 1 : (tasks[tasks.length-1].id + 1),
          text: this.state.input,
          done: false,
        }

      this.setState({
        input: '',
        placeholder: '',
        tasks: [...tasks, newTask],
        totalTasks: this.state.totalTasks + 1
      })
    } else if (this.state.input === '') {
      this.setState({
        placeholder: 'Psst! Please write something'
      })
    }
  }

  toggleDoneTask = (taskId) => {
    let tasks = this.state.tasks
    let taskIndex = tasks.findIndex(task => task.id === taskId)

    tasks[taskIndex].done = tasks[taskIndex].done ? false : true
    let doneTasks = tasks[taskIndex].done ? this.state.doneTasks + 1 : this.state.doneTasks - 1

    this.setState({
      tasks: tasks,
      doneTasks: doneTasks
    })
  }

  deleteTask = (taskId) => {
    this.setState({
      tasks: this.state.tasks.filter(t => t.id !== taskId),
      totalTasks: this.state.totalTasks - 1
    })
  }

  handleSaveEdit = (text,taskId) => {
    let tasks = this.state.tasks
    let taskIndex = tasks.findIndex(task => task.id === taskId)

    tasks[taskIndex].text = text

    this.setState({
      tasks: tasks
    })
  }
}

export default App;
