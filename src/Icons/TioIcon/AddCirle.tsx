import React from 'react';
import IconBase from './IconBase';

const IconAddCirle: IconBase = props => {
  let { className, ...others } = props;
  return <i className={`tio-add-cirle ${className}`} {...others}></i>
}

export default IconAddCirle;