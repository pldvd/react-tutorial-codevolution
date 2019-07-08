import React from 'react';


// so it turns out, that while we use JSX, React invokes the React.createElement method(which takes, at least 3 arguments: the element to be created, it's attribute list wrapped in an object or null if no attributes, and the text content of the element)
export const Hello = () => {
  return React.createElement('div',{className: 'myClass'}, React.createElement('h1', null, 'hello This was created by React.createElement'));
}
