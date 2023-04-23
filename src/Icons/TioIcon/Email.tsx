import React from 'react';
import IconBase from './IconBase';

const IconEmail: IconBase = props => {
  let { className, ...others } = props;
  return <i className={`tio-email ${className}`} {...others}></i>
}

export default IconEmail;