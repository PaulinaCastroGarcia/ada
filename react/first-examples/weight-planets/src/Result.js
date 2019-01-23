import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
      <div>
        <p>Tu peso en {this.props.planet} es {this.props.result}</p>
      </div>
    );
  }
}

export default Result;
