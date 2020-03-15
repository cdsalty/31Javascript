import React from 'react';

const Button = (props) => (
  <button onClick={props.handleClick}>{props.buttonDisplayName}</button>
);

export default Button;
