import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <input onChange={(e) => this.props.handleWeightChange(e.target.value)}/>

        <select onChange={(e) => this.props.handlePlanetChange(e.target.value)}>
          <option value="Mercurio">Mercurio</option>
          <option value="Venus">Venus</option>
          <option value="Marte">Marte</option>
          <option value="Jupiter">Jupiter</option>
          <option value="Saturno">Saturno</option>
          <option value="Urano">Urano</option>
          <option value="Neptuno">Neptuno</option>
          <option value="Pluton">Pluton</option>
        </select>
        <button onClick={this.props.handleClick}>Calcular peso</button>
      </div>
    );
  }
}

export default Form;
