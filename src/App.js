import React, { Component } from 'react'
import {Hello} from './components/Hello'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import Adder from './components/Adder'
import EventBind from './components/EventBind'
import './App.css';
import UserGreet from './components/UserGreet';


//we can add properties(props) to React elements defined in the JSX as element attributes, these props will we passed on to the child element for use as either a function parameter in a functional component or this.props.propName in a class component


class App extends Component {
  addTwo(number) {
    return number + 2
  }
  render() {
    return (
      <div className="App">
      <Hello />
      <Welcome name="Buddy" topic="React"/>
      <Message />
      <Counter addTwo = {this.addTwo}/>
      <Adder />
      <EventBind />
      <UserGreet />
    </div>
    )
  }
}

export default App;
