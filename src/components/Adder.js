import React, { Component } from 'react'

export default class Adder extends Component {
  constructor(props) {
    super(props)

    this.state = {
      baseNumber: 0,
      multiplier: 0,
      result: 0,
    }
  }

  setBase = (e) => {
    this.setState({
      baseNumber: e.target.value
    })
  }

  setMultiplier = (e) => {
    this.setState({
      multiplier: e.target.value
    })
  }

  multiply = () => {
    this.setState({
      result: this.state.baseNumber * this.state.multiplier
    })
  }

  render() {
    return (
      <div>
        <input type="number" onChange={this.setBase}></input>
        <input type="number" onChange={this.setMultiplier}></input>
        <p>Click on the button to multiply {this.state.baseNumber} with {this.state.multiplier}</p>
        <button onClick={this.multiply}>Click</button>
        <p>The result is {this.state.result}</p>
      </div>
    )
  }
}
