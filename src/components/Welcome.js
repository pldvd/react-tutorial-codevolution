import React, { Component } from 'react'

export default class Welcome extends Component {

  name = 'David'

  render() {
    return (
      <div>
        <h1>Welcome {this.name}</h1>
      </div>
    )
  }
}
