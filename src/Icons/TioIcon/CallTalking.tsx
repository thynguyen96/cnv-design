import React from 'react';
import IconBase from './IconBase';

const IconCallTalking: IconBase = props => {
  let { className, ...others } = props;
  return <i className={`tio-call-talking ${className}`} {...others}></i>
}

export default IconCallTalking;