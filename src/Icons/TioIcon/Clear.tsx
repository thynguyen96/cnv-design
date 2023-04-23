import React from 'react';
import IconBase from './IconBase';

const IconClear: IconBase = props => {
  let { className, ...others } = props;
  return <i className={`tio-clear ${className}`} {...others}></i>
}

export default IconClear;