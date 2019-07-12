import React, { Component } from 'react'

class UserGreet extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false
    }
  }
  
  render() {
    const name = this.state.isLoggedIn ? 'Vishwas' : 'Guest'

    return (
      <div>
        Welcome {name}
      </div>
    )
  }
}

export default UserGreet
