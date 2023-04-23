import React from 'react';
import IconBase from './IconBase';

const IconClearCircle: IconBase = props => {
  let { className, ...others } = props;
  return <i className={`tio-clear-circle ${className}`} {...others}></i>
}

export default IconClearCircle;