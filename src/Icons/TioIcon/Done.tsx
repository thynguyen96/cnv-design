import React from 'react';
import IconBase from './IconBase';

const IconDone: IconBase = props => {
  let { className, ...others } = props;
  return <i className={`tio-done ${className}`} {...others}></i>
}

export default IconDone;