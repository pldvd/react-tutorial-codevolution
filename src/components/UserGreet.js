import React, { Component } from 'react'

class UserGreet extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    //we can simply define a variable name in the render method and set its value conditionally to this.state.isLoggedIn

    // const name = this.state.isLoggedIn ? 'Vishwas' : 'Guest'

    //we can also conditionally render with an if/else statement within the render method
    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       Welcome Vishwas
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div>Welcome Guest</div>
    //   )
    // }
    //it is also possible to pass a ternary operator into the jsx
    return (
      this.state.isLoggedIn ? 
      <div>Hello Vishwas</div> : 
      <div>Hello Guest</div>
    )
  }
}

export default UserGreet
