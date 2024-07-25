import React, { Component } from 'react'

export default class Clock extends Component {
  render() {
    return (
      <div>
        <h3> { this.props.count } </h3>
      </div>
    )
  }
}
