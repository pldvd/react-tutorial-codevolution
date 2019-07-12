import React, {Component} from 'react'
import Child from './Child'

class EventBind extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'hello'
    }
    // bind event handlers to this in the constructor, so page does not re-render with every setState
    this.changeMessage = this.changeMessage.bind(this)
    this.greet = this.greet.bind(this)
  }
  changeMessage() {

    let newMessage = this.state.message === 'hello' ? 'goodbye' : 'hello'

    this.setState({
      message: newMessage
    })
  }
  greet(name) {
    alert(`Hello ${name}`)
  }
  render() {
    return <div>
    <p>{this.state.message}</p>
    {/* <button onClick={() => this.changeMessage()}>Click</button> */}
    {/* <button onClick={this.changeMessage.bind(this)}>Click</button> */}
    <button onClick={this.changeMessage}>Click</button>
    <Child greet={this.greet}><p>Hello from CHILD props</p></Child>
    </div>
  }
}

export default EventBind