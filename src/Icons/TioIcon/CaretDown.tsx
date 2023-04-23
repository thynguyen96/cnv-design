import React from 'react';
import IconBase from './IconBase';

const IconCaretDown: IconBase = props => {
  let { className, ...others } = props;
  return <i className={`tio-caret-down ${className}`} {...others}></i>
}

export default IconCaretDown;