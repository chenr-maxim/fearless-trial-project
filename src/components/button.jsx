import React from 'react';

import '../css/counter.css'

const Button = (props) => {
  const { onClick, children} = props;
  return (
    <button
      className='counter-button'
      onClick={props.onClick}
    >
      {children}
    </button>
  );
};

export default Button;