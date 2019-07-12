import React, {Component} from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'hello'
    }
  }
  changeMessage() {

    let newMessage = this.state.message === 'hello' ? 'goodbye' : 'hello'

    this.setState({
      message: newMessage
    })
  }
  render() {
    return <div>
    <p>{this.state.message}</p>
    <button onClick={() => this.changeMessage()}>Click</button>
    </div>
  }
}

export default EventBind