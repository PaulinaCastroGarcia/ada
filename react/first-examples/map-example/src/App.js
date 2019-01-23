import React, { Component } from 'react';
import Task from './Task';
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: [
        {text:'update readme', done: true, id: 1},
        {text:'add animation', done: false, id: 2}
      ],
      showList: false
    }

    this.toggleList = this.toggleList.bind(this)
  }

  toggleList() {
    this.setState({
      showList: !this.state.showList
    })
  }

  render() {
    const tasks = this.state.tasks.map(function(t) {
      return <Task task = {t}/>
    })

    let listClass = this.state.showList ? 'hide' : 'show'

    return (
      <div className="App">
        <button onClick={this.toggleList}>button</button>

        <ul className={listClass}>
          {tasks}
        </ul>
      </div>
    );
  }
}

export default App;
