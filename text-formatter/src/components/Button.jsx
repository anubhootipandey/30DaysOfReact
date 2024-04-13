import React from 'react';

const Button = (props) => {
  return (
    <div className='btn' onClick={props.function}>{props.text}</div>
  );
};

export default Button;