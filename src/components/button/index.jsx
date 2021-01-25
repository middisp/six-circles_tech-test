import React from 'react';

const Button = ({onClick, children}) => <button onClick={(e) => onClick(e)}>{children}</button>

export default Button;