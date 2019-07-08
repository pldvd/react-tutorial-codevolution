import React from 'react';

//React elements either via normal function return or Element.render method can only render one html root component, so if there are more html elements to render, they need to be wrapped in a common div (any type of root element)
const introContent = (props) => {
  return (
    <div>
      <p>Thank you for visiting my practice site this was only created, so that I can mess around with {props.topic} a little bit.</p>
      <h3>{props.children}</h3>
    </div>
)
}

export default introContent;