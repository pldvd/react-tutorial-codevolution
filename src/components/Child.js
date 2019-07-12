import React from 'react'

export default function Child(props) {
  return (
    <div>
      <p>Hello from child.</p>
      {props.children}
      <button onClick={() => props.greet('David')}>GreetMe</button>
    </div>
  )
}
