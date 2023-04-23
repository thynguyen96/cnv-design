import React from 'react';
import IconBase from './IconBase';

const IconChevronDown: IconBase = props => {
  let { className, ...others } = props;
  return <i className={`tio-chevron-down ${className}`} {...others}></i>
}

export default IconChevronDown;