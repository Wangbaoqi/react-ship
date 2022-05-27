import React from 'react';
import cn from 'classnames';

import { ButtonProps } from './propsType';

import './style/index.less';

const Button: React.FC<ButtonProps> = ({
  type,
  disabled,
  size,
  href,
  children,
  ...rest
}) => {

  const className = cn('btn', {
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    'disabled': (type === 'link') && disabled
  })

  if (type === 'link' && href) {
    return <a href={href} className={className} {...rest}>{ children }</a>
  }

  return (
    <button
      className={className}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  type: 'default'
}

export default Button
