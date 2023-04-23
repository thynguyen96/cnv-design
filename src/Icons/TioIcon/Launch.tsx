import React from 'react';
import IconBase from './IconBase';

const IconLaunch: IconBase = props => {
  let { className, ...others } = props;
  return <i className={`tio-launch ${className}`} {...others}></i>
}

export default IconLaunch;