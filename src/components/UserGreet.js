import React, { Component } from 'react'

class UserGreet extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    // const name = this.state.isLoggedIn ? 'Vishwas' : 'Guest'
    if (this.state.isLoggedIn) {
      return (
        <div>
          Welcome Vishwas
        </div>
      )
    } else {
      return (
        <div>Welcome Guest</div>
      )
    }
  }
}

export default UserGreet
