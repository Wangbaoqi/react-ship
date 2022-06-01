import React from 'react';
import cn from 'classnames';

import { ButtonProps } from './propsType';

import './style/index.less';

const Button: React.FC<ButtonProps> = ({
  type,
  disabled,
  size,
  href,
  loading,
  icon,
  children,
  ...rest
}) => {

  const className = cn('sp-btn', {
    [`sp-btn-${type}`]: type,
    [`sp-btn-${size}`]: size,
    'disabled': (type === 'link') && disabled
  })

  
  const iconBox = () => {
    if (icon) {

      return React.cloneElement(icon, {
        className: 'sp-btn-icon',
        size: 16
      })
    }
    return null;
  }

  const textBox = () => {
    return (
      <span className=''>{children}</span>
    )
  }

  const content = () => {
    if (type === 'link' && href) {
      return <a href={href} {...rest}>{ children }</a>
    }
    return (
      <div className='sp-btn-content'>
        {iconBox()}
        {textBox()}
      </div>
    )
  }




  return (
    <button
      className={className}
      disabled={disabled}
      {...rest}
    >
      {content()}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  type: 'default'
}

export default Button
