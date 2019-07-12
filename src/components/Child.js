import React from 'react'

export default function Child(props) {
  return (
    <div>
      <p>Hello from child.</p>
      {props.children}
    </div>
  )
}
