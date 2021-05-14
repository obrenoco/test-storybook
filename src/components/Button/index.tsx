import React, { useState } from 'react';
import './index.css';

export const Button: React.FC<any> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const [status, setStatus] = useState<any>();
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const Btn1 = (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      onClick={() => {
        console.log("BLUE")
        return setStatus(!status)
      }}
      style={{ backgroundColor }}
      {...props}
      >
    {label}
    </button>
  )
  const Btn2 = (
    <button
      type="button"
      onClick={() => {
        console.log("RED")
        return setStatus(!status)
      }}
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor: "#ff0000" }}
      {...props}
    >
    {label}
    </button>
  )

  const verified = status ? Btn1  : Btn2
  return(verified);
};
