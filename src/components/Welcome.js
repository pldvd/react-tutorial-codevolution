import React, { Component } from 'react'
import Introduction from './Introduction';


//childnodes of React JSX components can be accessed in the child component  with the props.children method 
export default class Welcome extends Component {

  name = this.props.name

  render() {
    return (
      <div>
        <h1>Welcome {this.name}</h1>
        <Introduction topic={this.props.topic}>
          <p>This is props.children speaking, how do you do?</p>
        </Introduction>
      </div>
    )
  }
}
