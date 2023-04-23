import React from 'react';
import IconBase from './IconBase';

const IconTune: IconBase = props => {
  let { className, ...others } = props;
  return <i className={`tio-tune ${className}`} {...others}></i>
}

export default IconTune;