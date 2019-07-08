import React, { Component } from 'react'

export default class Counter extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }
  incrementCount() {
   this.setState(previous => ({
      counter: previous.counter + 1
    })
   )}
  render() {
    return (
      <div>
        <p>The button has been clicked {this.state.counter} number of times.</p>
        <button onClick={() => this.incrementCount()}>Click me!</button>
      </div>
    )
  }
}
