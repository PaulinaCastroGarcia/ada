import React, { Component } from 'react';
import Form from './Form'
import Result from './Result'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      weight:'',
      planet: 'Mercurio',
      result: ''
    }

    this.calculateWeight = this.calculateWeight.bind(this)
    this.setWeight = this.setWeight.bind(this)
    this.setPlanet = this.setPlanet.bind(this)
  }

  render() {
    return (
      <div>
        <Form  
          handleWeightChange={this.setWeight} 
          handlePlanetChange={this.setPlanet}
          handleClick={this.calculateWeight}
        />
        {this.state.result != '' && <Result planet={this.state.planet} result={this.state.result} />}
      </div>
    );
  }

  setWeight(weight) {
    this.setState({
      weight: weight
    })
  }

  setPlanet(planet) {
    this.setState({
      planet: planet,
      result: ''
    })
  }

  calculateWeight() {
    const weight = this.state.weight
    const planet = this.state.planet

    let result
    if (planet == 'Mercurio') result = weight*0.0387
    if (planet == 'Venus') result = weight*0.9051
    if (planet == 'Marte') result = weight*0.3775
    if (planet == 'Jupiter') result = weight*2.5306
    if (planet == 'Saturno') result = weight*1.0653
    if (planet == 'Urano') result = weight*0.8877
    if (planet == 'Neptuno') result = weight*1.1377
    if (planet == 'Pluton') result = weight*0.0632

    this.setState({
      result: result
    })
  }
}

export default App;
