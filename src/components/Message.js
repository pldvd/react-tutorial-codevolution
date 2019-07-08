import React, { Component } from 'react'

class Message extends Component {

constructor() {
  super();
  this.state = {
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
  // toggleSub() {
  //   return this.setState({
  //        subscribed: !subscribed,
  //     })
  // }

  changeMessage() {
    this.setState({
      messageText: "Thank you for subscription."
    })
  }
  // changeMessage() {
  //   this.toggleSub();
  //   if (this.state.subscribed) {
  //     this.setState({
  //       messageText: "Thank you for subscribing!",
  //     })
  //   } else {
  //     this.setState({
  //       messageText: 'Welcome Visitor',
  //     })
  //   }
  // }
}

export default Message;