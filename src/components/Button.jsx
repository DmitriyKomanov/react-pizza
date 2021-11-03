import React from 'react';
import classNames from 'classnames';

const Button = (props) => {
  return (
    <button
      data-class={`button ${props.classMod && `button--${props.classMod}`}`}
      className={classNames(
        'button',
        props.classMod && `button--${props.classMod}`
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
