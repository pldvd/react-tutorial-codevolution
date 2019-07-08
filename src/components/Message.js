import React, { Component } from 'react'

class Message extends Component {

  constructor() {
    super();
    this.state = {
      subscr: false,
      messageText: 'Welcome Visitor'
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.messageText}</p>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
  //toggleing a boolean state depends on the calue of the previous state, hence it is done by passing the prevState object to the setState method 
  toggleSub() {
    this.setState(prevState => ({
      subscr: !prevState.subscr,
    })
    )
  }

  changeMessage() {
    this.toggleSub();
    if (this.state.subscr) {
      this.setState({
        messageText: "Thank you for subscribing!",
      })
    } else {
      this.setState({
        messageText: 'Welcome Visitor',
      })
    }
  }
}

export default Message;