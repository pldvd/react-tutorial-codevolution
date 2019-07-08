import React, { Component } from 'react'
import Introduction from './Introduction';

export default class Welcome extends Component {

  name = 'David'

  render() {
    return (
      <div>
        <h1>Welcome {this.name}</h1>
        <Introduction />
      </div>
    )
  }
}
