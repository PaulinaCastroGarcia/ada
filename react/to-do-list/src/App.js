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
          done: false
        },
        {
          id: 2,
          text: 'finish website',
          done: false
        },
        {
          id: 3,
          text: 'research for vegan101',
          done: false
        }
      ]
    }
  }

  render() {
    const li = this.state.tasks.map((t) => 
      <Task 
        key={t.id}
        task={t}
        toggleDoneTask={(taskId) => this.toggleDoneTask(taskId)}
        deleteTask={(taskId) => this.deleteTask(taskId)}
      />
    )

    return (
      <div className="App">
        <h1>To do list</h1>

        <form>
          <input type="text" value={this.state.input} onChange={(e) => this.handleInputChange(e)} onKeyDown={(e) => this.handleInputKeyDown(e)} />
          <button type="button" onClick={() => this.addToDo()}><i class="fas fa-plus-circle"></i></button>
        </form>

        <ul>
          {li}
        </ul>
      </div>
    );
  }

  handleInputChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  handleInputKeyDown(e) {
    if (e.keyCode === 13) {
      e.preventDefault()
      this.addToDo()
    }
   }

  addToDo() {
    if (this.state.input) {
      let tasks = this.state.tasks
      let newTask = {
          id: tasks[tasks.length-1].id + 1,
          text: this.state.input,
          done: false
        }

      this.setState({
        input: '',
        tasks: [...this.state.tasks, newTask]
      })
    }
  }

  toggleDoneTask(taskId) {
    let tasks = this.state.tasks
    let taskIndex = tasks.findIndex(task => task.id === taskId)

    tasks[taskIndex].done = tasks[taskIndex].done ? false : true

    this.setState({
      tasks: tasks
    })
  }

  deleteTask(taskId) {
    let tasks = this.state.tasks
    let taskIndex = tasks.findIndex(task => task.id === taskId)
    tasks.splice(taskIndex,1)

    this.setState({
      tasks: tasks
    })

    //tasks: this.state.tasks.filter(t => t.id !== taskId)
  }
}

export default App;
