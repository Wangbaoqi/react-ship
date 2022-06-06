import React, { useMemo } from 'react';
import cn from 'classnames';

import { ButtonProps } from './propsType';

import './style/index.less';

const Button: React.FC<ButtonProps> = (props) => {

  const {
    type = 'default',
    className,
    block,
    shape,
    size,
    href,
    loading,
    outline,
    icon,
    children,
    ...rest
  } = props;

  const is_outline = useMemo(() => outline ?? false, [outline]);
  const is_block = useMemo(() => block ?? false, [block]);
  const is_shape = useMemo(() => shape ?? false, [shape]);
  const disabled = useMemo(() => props.disabled ?? false, [props.disabled]);

  // console.log(outline, 'outline');
  
  const cls = cn(className, 'sp-btn', {
    [`sp-btn-${type}`]: type,
    [`sp-btn-${size}`]: size,
    'sp-btn-disabled': disabled,
    'sp-btn-outline': is_outline,
    'sp-btn-block': is_block,
    'sp-btn-shape': is_shape,
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
      className={cls}
      {...rest}
    >
      {content()}
    </button>
  )
}

export default Button
