import React from 'react';
import IconBase from './IconBase';

const IconLabels: IconBase = props => {
  let { className, ...others } = props;
  return <i className={`tio-labels ${className}`} {...others}></i>
}

export default IconLabels;