import React, { Component } from 'react';
import './App.css';
import Task from './Task';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      tasks: [
        {
          id: 1,
          text: 'update readme',
          done: false,
        },
        {
          id: 2,
          text: 'finish website',
          done: false,
        }
      ]
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

        <form onSubmit={this.addToDo}>
          <input type="text" value={this.state.input} onChange={this.handleInputChange} onKeyDown={this.handleInputKeyDown}/>
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
    if (this.state.input) {
      let tasks = this.state.tasks
      let newTask = {
          id: tasks.length === 0  ? 1 : (tasks[tasks.length-1].id + 1),
          text: this.state.input,
          done: false,
        }

      this.setState({
        input: '',
        tasks: [...tasks, newTask]
      })
    }
  }

  toggleDoneTask = (taskId) => {
    let tasks = this.state.tasks
    let taskIndex = tasks.findIndex(task => task.id === taskId)

    tasks[taskIndex].done = tasks[taskIndex].done ? false : true

    this.setState({
      tasks: tasks
    })
  }

  deleteTask = (taskId) => {
    this.setState({
      tasks: this.state.tasks.filter(t => t.id !== taskId)
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
