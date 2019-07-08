import React, { Component } from 'react'

export default class Counter extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }

  //Apparently, setState is an async method. This means that if we need to run something when it ends, we need to pass a second argument, which is a callback function
  incrementCount() {
    this.setState((previous) => ({
      counter: previous.counter + 1
    }), () => console.log(this.state.counter)
    )
  }
  addTwo() {
    this.setState((prevState, props) => ({
      counter: props.addTwo(prevState.counter)
    })
    )
  }
  render() {
    return (
      <div>
        <p>The button has been clicked {this.state.counter} number of times.</p>
        <button onClick={() => this.incrementCount()}>Click me!</button>
        <button onClick={() => this.addTwo()}>AddTwo!</button>
      </div>
    )
  }
}
