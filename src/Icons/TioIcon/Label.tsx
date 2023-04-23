import React from 'react';
import IconBase from './IconBase';

const IconLabel: IconBase = props => {
  let { className, ...others } = props;
  return <i className={`tio-label ${className}`} {...others}></i>
}

export default IconLabel;