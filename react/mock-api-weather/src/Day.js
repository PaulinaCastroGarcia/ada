import React, { Component } from 'react';

class Day extends Component {
  render() {
    let date = this.props.d.date
    let dt = new Date(date)
    let day = dt.getDay()

    if (day === 0) day = 'dom'
    if (day === 1) day = 'lun'
    if (day === 2) day = 'mar'
    if (day === 3) day = 'mie'
    if (day === 4) day = 'jue'
    if (day === 5) day = 'vie'
    if (day === 6) day = 'sab'

    return (
      <div className="day">
        <p>{day}</p>
        <p>{this.props.d.avg}°</p>
        <img src={this.props.d.icon} alt=""/>
        <div>
          <span className="max">{this.props.d.max}° </span> 
          <span> {this.props.d.min}° </span>
        </div>
      </div>
    );
  }
}

export default Day;
