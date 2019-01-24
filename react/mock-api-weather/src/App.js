import React, { Component } from 'react';
import './App.css';
import Day from './Day.js';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weather: [],
    }
  }

  componentDidMount() {
    fetch('https://clima-api-ada-bqochvlqbd.now.sh/api/weather?q=Buenos%20Aires')
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        weather: data,
        loading: false
      })
    })
  }

  render() {
    const weather = this.state.weather.map((d,i) => <Day key={i} d={d}/>
     )

    return (
      <div className="App">
        { weather }
      </div>
    );
  }
}

export default App;
