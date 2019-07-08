import React from 'react';
import {Hello} from './components/Hello'
import Welcome from './components/Welcome'
import './App.css';


//we can add properties(props) to React elements defined in the JSX as element attributes, these props will we passed on to the child element for use as either a function parameter in a functional component or this.props.propName in a class component
function App() {
  return (
    <div className="App">
      <Hello />
      <Welcome name="Buddy" topic="React"/>
    </div>
  )
}

export default App;
